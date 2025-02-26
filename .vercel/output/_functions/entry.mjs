import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BcTnm_zI.mjs';
import { manifest } from './manifest_C99SRdUe.mjs';

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
const _page12 = () => import('./pages/fr/contact.astro.mjs');
const _page13 = () => import('./pages/fr/disclaimer.astro.mjs');
const _page14 = () => import('./pages/fr/over-actionmaker.astro.mjs');
const _page15 = () => import('./pages/fr/teambuildings/_activity_.astro.mjs');
const _page16 = () => import('./pages/fr/teambuildings.astro.mjs');
const _page17 = () => import('./pages/fr/terms-of-service.astro.mjs');
const _page18 = () => import('./pages/fr.astro.mjs');
const _page19 = () => import('./pages/over-actionmaker.astro.mjs');
const _page20 = () => import('./pages/teambuildings/_activity_.astro.mjs');
const _page21 = () => import('./pages/teambuildings.astro.mjs');
const _page22 = () => import('./pages/terms-of-service.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
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
    ["src/pages/fr/contact.astro", _page12],
    ["src/pages/fr/disclaimer.astro", _page13],
    ["src/pages/fr/over-actionmaker.astro", _page14],
    ["src/pages/fr/teambuildings/[activity].astro", _page15],
    ["src/pages/fr/teambuildings.astro", _page16],
    ["src/pages/fr/terms-of-service.astro", _page17],
    ["src/pages/fr/index.astro", _page18],
    ["src/pages/over-actionmaker.astro", _page19],
    ["src/pages/teambuildings/[activity].astro", _page20],
    ["src/pages/teambuildings.astro", _page21],
    ["src/pages/terms-of-service.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6c735dc7-a5aa-48fa-8030-8d73df340295",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
