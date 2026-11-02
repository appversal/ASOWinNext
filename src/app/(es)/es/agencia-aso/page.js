import Link from "next/link";
import Navbar from "../../../components/Navbar";
import ServiceFaq from "../../../components/ServiceFaq";
import Footer from "../../../components/Footer";
import GoogleAnalytics from "../../../components/GoogleAnalytics";

const url = "https://www.asowin.com/es/agencia-aso/";
const title = "Agencia ASO para España y Latinoamérica | ASOWin";
const description =
  "Agencia ASO en español: palabras clave por país, fichas localizadas para App Store y Google Play, valoraciones y Apple Search Ads para España y Latinoamérica.";

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "ASOWin",
    locale: "es_ES",
    title,
    description,
    images: [{ url: "/bybit-case-study-og.jpg", width: 1200, height: 630, alt: "Caso de estudio de Bybit: Top 3 en España y Latinoamérica" }],
  },
  twitter: { card: "summary_large_image", title, description, site: "@asowin" },
};

const services = [
  {
    title: "Palabras clave por país",
    text: "Investigamos cómo busca la gente en España, México, Colombia, Argentina y el resto de mercados, porque la misma app se busca con palabras distintas en cada país.",
  },
  {
    title: "Fichas localizadas en ambas tiendas",
    text: "Nombre, subtítulo y campo de palabras clave en el App Store; título, descripción breve y descripción completa en Google Play, escritos por hablantes nativos.",
  },
  {
    title: "Capturas y vídeo en español",
    text: "Textos, monedas y ejemplos locales en las capturas, probados con experimentos de ficha en Google Play y optimización de la página de producto en el App Store.",
  },
  {
    title: "Valoraciones y reseñas",
    text: "Respondemos reseñas en español, planificamos las solicitudes de valoración dentro de la app y trasladamos las quejas recurrentes al equipo de producto.",
  },
  {
    title: "Apple Search Ads",
    text: "Campañas de Apple Search Ads coordinadas con el ASO: los términos de búsqueda que convierten nos indican qué palabras clave trabajar de forma orgánica.",
  },
  {
    title: "Apps fintech y cripto",
    text: "Las apps financieras pasan una revisión más estricta. Mantenemos las fichas precisas, sin promesas de rentabilidad, y las revisamos frente a las políticas vigentes de cada tienda.",
  },
];

const markets = [
  {
    title: "España",
    text: "App Store Connect y Google Play tienen una localización propia para España (es-ES). Vocabulario, ejemplos y moneda deben ser los de España, no una versión neutra.",
  },
  {
    title: "México y Latinoamérica",
    text: "El App Store ofrece español de México y Google Play ofrece español de Latinoamérica (es-419). Priorizamos los países con más demanda para tu categoría y adaptamos las palabras clave a cada uno.",
  },
  {
    title: "Hispanohablantes en EE. UU.",
    text: "El App Store de Estados Unidos también indexa la localización en español de México, y Google Play tiene español de Estados Unidos. Es una forma de llegar a usuarios hispanohablantes y sumar palabras clave sin repetir las de inglés.",
  },
];

export default function AgenciaAsoPage() {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      <div className="w-full bg-gradient-to-b from-[#FFEDE3] to-white">
        <Navbar />
        <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-16 text-center">
          <nav aria-label="Ruta de navegación" className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#fdb124]">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#fdb124] font-semibold">Agencia ASO en español</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
            Agencia ASO para España y Latinoamérica
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            ASOWin es una agencia global de App Store Optimization que posiciona apps en el App Store y Google Play
            para usuarios hispanohablantes, con palabras clave investigadas en cada país y fichas escritas en español.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8">
            Resultado reciente:{" "}
            <Link href="/success-stories/bybit/" className="text-[#014458] font-semibold underline">
              Bybit alcanzó el Top 3 en España y Latinoamérica
            </Link>{" "}
            con una estrategia ASO en español.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#fdb124] px-8 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-semibold"
          >
            Solicita una auditoría ASO gratuita
          </Link>
        </header>
      </div>

      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="es-caso">
          <h2 id="es-caso" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Caso de estudio: Bybit en España y Latinoamérica
          </h2>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-4 text-lg text-gray-700">
              <p>
                Bybit es una plataforma de criptomonedas con presencia global. Su siguiente reto era ganar visibilidad
                en las tiendas de apps entre usuarios hispanohablantes, en una categoría muy competitiva.
              </p>
              <p>
                ASOWin empezó por España, con palabras clave de cripto en español y una ficha localizada, y después
                amplió la estrategia a Latinoamérica. El caso de estudio publicado recoge posiciones Top 3 en España y
                Latinoamérica.
              </p>
              <Link href="/success-stories/bybit/" className="inline-block text-[#014458] font-semibold underline">
                Leer el caso de estudio completo de Bybit (en inglés)
              </Link>
            </div>
            <div className="rounded-2xl bg-[#17191c] text-white p-8 text-center">
              <p className="text-5xl font-bold text-[#fdb124]">Top 3</p>
              <p className="mt-2 text-white/80">Posiciones en España y Latinoamérica</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-white/50">Bybit · ASO localizado</p>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8F2] py-16" aria-labelledby="es-servicios">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 id="es-servicios" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Qué incluye nuestro servicio ASO en español
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mb-10">
              Localizar no es traducir. Partimos de lo que busca la gente en cada mercado y construimos la ficha a
              partir de ahí.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item) => (
                <li key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#111111] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="es-mercados">
          <h2 id="es-mercados" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Un mismo idioma, mercados distintos
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mb-10">
            Las tiendas tratan el español como varias localizaciones. Elegir bien dónde publicar cada versión es parte
            de la estrategia de palabras clave.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {markets.map((item) => (
              <li key={item.title} className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-base text-gray-600">
            Más información (en inglés):{" "}
            <Link href="/services/app-store-localization/" className="text-[#014458] underline">servicio de localización</Link>,{" "}
            <Link href="/blog/app-store-cross-localization-keywords/" className="text-[#014458] underline">palabras clave con localización cruzada</Link> y{" "}
            <Link href="/blog/app-store-localization-strategy/" className="text-[#014458] underline">estrategia de localización</Link>.
          </p>
        </section>

        <ServiceFaq slug="agencia-aso-es" />
      </main>

      <Footer />
    </div>
  );
}
