import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CmacYH5S.mjs';
import { manifest } from './manifest_BDwqmBXz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/booking.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/disclaimer.astro.mjs');
const _page5 = () => import('./pages/en/contact.astro.mjs');
const _page6 = () => import('./pages/en/disclaimer.astro.mjs');
const _page7 = () => import('./pages/en/over-actionmaker.astro.mjs');
const _page8 = () => import('./pages/en/teambuildings/_activity_.astro.mjs');
const _page9 = () => import('./pages/en/teambuildings.astro.mjs');
const _page10 = () => import('./pages/en/terms-of-service.astro.mjs');
const _page11 = () => import('./pages/en.astro.mjs');
const _page12 = () => import('./pages/extreme-test.astro.mjs');
const _page13 = () => import('./pages/fr/contact.astro.mjs');
const _page14 = () => import('./pages/fr/disclaimer.astro.mjs');
const _page15 = () => import('./pages/fr/over-actionmaker.astro.mjs');
const _page16 = () => import('./pages/fr/teambuildings/_activity_.astro.mjs');
const _page17 = () => import('./pages/fr/teambuildings.astro.mjs');
const _page18 = () => import('./pages/fr/terms-of-service.astro.mjs');
const _page19 = () => import('./pages/fr.astro.mjs');
const _page20 = () => import('./pages/jsonld-direct-test.astro.mjs');
const _page21 = () => import('./pages/jsonld-test.astro.mjs');
const _page22 = () => import('./pages/over-actionmaker.astro.mjs');
const _page23 = () => import('./pages/redirect-test.astro.mjs');
const _page24 = () => import('./pages/simple-test.astro.mjs');
const _page25 = () => import('./pages/sitemap-0.xml.astro.mjs');
const _page26 = () => import('./pages/sitemap-index.xml.astro.mjs');
const _page27 = () => import('./pages/teambuildings/_activity_.astro.mjs');
const _page28 = () => import('./pages/teambuildings.astro.mjs');
const _page29 = () => import('./pages/terms-of-service.astro.mjs');
const _page30 = () => import('./pages/test-jsonld.astro.mjs');
const _page31 = () => import('./pages/_lang_/teambuildings/_activity_.astro.mjs');
const _page32 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/booking.ts", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/disclaimer.astro", _page4],
    ["src/pages/en/contact.astro", _page5],
    ["src/pages/en/disclaimer.astro", _page6],
    ["src/pages/en/over-actionmaker.astro", _page7],
    ["src/pages/en/teambuildings/[activity].astro", _page8],
    ["src/pages/en/teambuildings.astro", _page9],
    ["src/pages/en/terms-of-service.astro", _page10],
    ["src/pages/en/index.astro", _page11],
    ["src/pages/extreme-test.astro", _page12],
    ["src/pages/fr/contact.astro", _page13],
    ["src/pages/fr/disclaimer.astro", _page14],
    ["src/pages/fr/over-actionmaker.astro", _page15],
    ["src/pages/fr/teambuildings/[activity].astro", _page16],
    ["src/pages/fr/teambuildings.astro", _page17],
    ["src/pages/fr/terms-of-service.astro", _page18],
    ["src/pages/fr/index.astro", _page19],
    ["src/pages/jsonld-direct-test.astro", _page20],
    ["src/pages/jsonld-test.astro", _page21],
    ["src/pages/over-actionmaker.astro", _page22],
    ["src/pages/redirect-test.astro", _page23],
    ["src/pages/simple-test.html", _page24],
    ["src/pages/sitemap-0.xml.js", _page25],
    ["src/pages/sitemap-index.xml.js", _page26],
    ["src/pages/teambuildings/[activity].astro", _page27],
    ["src/pages/teambuildings.astro", _page28],
    ["src/pages/terms-of-service.astro", _page29],
    ["src/pages/test-jsonld.astro", _page30],
    ["src/pages/[lang]/teambuildings/[activity].astro", _page31],
    ["src/pages/index.astro", _page32]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "70ae12ba-0c7a-420c-aa10-7d79e11a0264",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
