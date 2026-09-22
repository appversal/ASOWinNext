"""Run after npm run build: python3 scripts/check-case-study-seo.py."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from urllib.robotparser import RobotFileParser
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'out'
ORIGIN = 'https://www.asowin.com'
SLUGS = ['', 'pepperfry/', 'indiabulls-securities/', 'lsm-apps/', 'bybit/', 'viker-games/']

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.h1 = 0
        self.ids = set()
        self.links = []
        self.assets = []
        self.canonicals = []
        self.alternates = []
        self.meta = {}
        self.schemas = []
        self.title = ''
        self.text = ''
        self.script = None
        self.in_title = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'h1': self.h1 += 1
        if 'id' in a: self.ids.add(a['id'])
        if tag == 'title': self.in_title = True
        if tag == 'script': self.script = a.get('type', '')
        if tag == 'a': self.links.append(a.get('href', ''))
        if tag == 'img':
            assert 'alt' in a, 'Missing image alt attribute'
            self.assets.append(a['src'])
        if tag == 'meta': self.meta[a.get('name', a.get('property'))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a['href'])
        if tag == 'link' and 'hreflang' in a: self.alternates.append(a['href'])

    def handle_endtag(self, tag):
        if tag == 'script': self.script = None
        if tag == 'title': self.in_title = False

    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.script == 'application/ld+json': self.schemas.append(json.loads(data))
        if self.script is None: self.text += data + ' '

robot = RobotFileParser()
robot.parse((OUT / 'robots.txt').read_text().splitlines())
assert ORIGIN + '/sitemap.xml' in (robot.site_maps() or [])
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
sitemaps = []
for name in ['sitemap.xml', 'sitemap-pages.xml']:
    urls = [e.text for e in ET.parse(OUT / name).findall('.//s:loc', ns)]
    assert len(urls) == len(set(urls)), f'Duplicate URL in {name}'
    sitemaps.append(set(urls))

titles, descriptions, pages = set(), set(), {}
for slug in SLUGS:
    route = '/success-stories/' + slug
    url = ORIGIN + route
    page = Page()
    page.feed((OUT / route.lstrip('/') / 'index.html').read_text())
    assert page.h1 == 1, (route, 'H1 count')
    assert page.canonicals == [url], (route, 'Canonical')
    assert not page.alternates, (route, 'Unexpected language alternate')
    for agent in ['Googlebot', 'Bingbot']:
        assert robot.can_fetch(agent, url), (route, 'Robots blocked')
    assert all(url in sitemap for sitemap in sitemaps), (route, 'Missing sitemap entry')
    for key in ['robots', 'googlebot']:
        directives = page.meta.get(key, '').lower()
        assert 'index' in directives and 'noindex' not in directives and 'nofollow' not in directives, (route, key)
    assert page.title and page.title not in titles, (route, 'Duplicate/empty title')
    description = page.meta.get('description', '')
    assert description and description not in descriptions, (route, 'Duplicate/empty description')
    titles.add(page.title)
    descriptions.add(description)
    assert page.meta.get('og:url') == url, (route, 'Social URL')
    for key in ['og:image', 'twitter:image']:
        image = urlsplit(page.meta[key])
        assert image.netloc == 'www.asowin.com' and (OUT / image.path.lstrip('/')).is_file(), (route, key)
    for href in page.links + page.assets:
        u = urlsplit(href)
        if href.startswith('#'): assert u.fragment in page.ids, (route, href)
        if href.startswith('/') and not href.startswith('//'):
            target = OUT / unquote(u.path).lstrip('/')
            assert target.exists(), (route, 'Broken local link/asset', href)
    nodes = [node for schema in page.schemas for node in schema.get('@graph', [schema])]
    if slug:
        article = next(node for node in nodes if node.get('@type') == 'Article')
        assert article['url'] == url and article['mainEntityOfPage'] == url
        assert article['publisher']['@id'] == ORIGIN + '/#organization'
        assert any(node.get('@type') == 'BreadcrumbList' for node in nodes)
    else:
        collection = next(node for node in nodes if node.get('@type') == 'CollectionPage')
        assert len(collection['mainEntity']['itemListElement']) == 5
    assert len(page.text.split()) > 150, (route, 'Insufficient static HTML text')
    pages[slug] = page
    print('PASS', route, '— crawl, metadata, schema, static text, links and images')
assert all('/success-stories/' + slug.rstrip('/') in {link.rstrip('/') for link in pages[''].links} for slug in SLUGS[1:])
assert all(term not in pages['bybit/'].text for term in ['EasyPhone', 'Easy Phone', '100,000', 'United States'])
print('All six case study SEO checks passed. Production headers and indexing require post-deployment verification.')
