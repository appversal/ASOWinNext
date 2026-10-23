// With two root layouts ((site) for English, (id) for Bahasa Indonesia), Next.js 15.1
// exports a bare default 404.html without the shared <head> (lang, GTM, fonts).
// Replace it with the /page-not-found/ route, which is rendered inside the (site) layout.
import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const source = join(process.cwd(), 'out', 'page-not-found', 'index.html');
const target = join(process.cwd(), 'out', '404.html');

if (existsSync(source)) {
    copyFileSync(source, target);
    console.log('Replaced out/404.html with the site-styled page-not-found page.');
} else {
    console.error('out/page-not-found/index.html not found; the bare default 404.html would ship.');
    process.exitCode = 1;
}
