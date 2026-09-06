(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "main": "page-module___8aEwW__main",
  "productShowcasesWrapper": "page-module___8aEwW__productShowcasesWrapper",
});
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/productsData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LandingHero/LandingHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppleHero/AppleHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppleFAQ/AppleFAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductModal/ProductModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [selectedProductForModal, setSelectedProductForModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOpenSpecs = (product)=>{
        setSelectedProductForModal(product);
    };
    const handleOpenSpecsBySlug = (slug)=>{
        const found = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"].find((p)=>p.slug === slug || p.id === slug);
        if (found) {
            setSelectedProductForModal(found);
        } else {
            setSelectedProductForModal(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"][0]);
        }
    };
    const chatProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"].find((p)=>p.id === 'chat-app') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"][0];
    const dropProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"].find((p)=>p.id === 'p2p-transfer') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"][1];
    const musicProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"].find((p)=>p.id === 'music-player') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"][2];
    const cinemaProduct = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"].find((p)=>p.id === 'video-player') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_PRODUCTS"][3];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingHero"], {
                onExploreChat: ()=>{
                    const elem = document.getElementById('hero-chat');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
                onExploreSubdomains: ()=>{
                    const elem = document.getElementById('promo-grid');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
                onExploreFree: ()=>{
                    const elem = document.getElementById('faq-section');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustAndCompatibility"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: chatProduct,
                theme: "titanium",
                sectionId: "hero-chat",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: dropProduct,
                theme: "ultramarine",
                sectionId: "hero-drop",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: musicProduct,
                theme: "spaceblack",
                sectionId: "hero-music",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: cinemaProduct,
                theme: "obsidian",
                sectionId: "hero-cinema",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplePromoGrid"], {
                onOpenSubdomains: ()=>{
                    const elem = document.getElementById('promo-grid');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
                onOpenSpecs: ()=>handleOpenSpecs(chatProduct)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleFAQ"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleFreeEcosystem"], {
                onOpenSpecsBySlug: handleOpenSpecsBySlug
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModal"], {
                product: selectedProductForModal,
                onClose: ()=>setSelectedProductForModal(null)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Home, "5lGeMf8t+TLU8YI+CZbYx+XHG04=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppleFAQ/AppleFAQ.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accordionList": "AppleFAQ-module__goIM3W__accordionList",
  "answerContent": "AppleFAQ-module__goIM3W__answerContent",
  "answerText": "AppleFAQ-module__goIM3W__answerText",
  "answerWrapper": "AppleFAQ-module__goIM3W__answerWrapper",
  "answerWrapperOpen": "AppleFAQ-module__goIM3W__answerWrapperOpen",
  "categoryTag": "AppleFAQ-module__goIM3W__categoryTag",
  "chevronIcon": "AppleFAQ-module__goIM3W__chevronIcon",
  "container": "AppleFAQ-module__goIM3W__container",
  "eyebrowIcon": "AppleFAQ-module__goIM3W__eyebrowIcon",
  "eyebrowPill": "AppleFAQ-module__goIM3W__eyebrowPill",
  "faqButton": "AppleFAQ-module__goIM3W__faqButton",
  "faqCard": "AppleFAQ-module__goIM3W__faqCard",
  "faqCardOpen": "AppleFAQ-module__goIM3W__faqCardOpen",
  "header": "AppleFAQ-module__goIM3W__header",
  "headline": "AppleFAQ-module__goIM3W__headline",
  "iconWrap": "AppleFAQ-module__goIM3W__iconWrap",
  "iconWrapRotated": "AppleFAQ-module__goIM3W__iconWrapRotated",
  "questionText": "AppleFAQ-module__goIM3W__questionText",
  "section": "AppleFAQ-module__goIM3W__section",
  "subhead": "AppleFAQ-module__goIM3W__subhead",
});
}),
"[project]/src/components/AppleFAQ/AppleFAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppleFAQ",
    ()=>AppleFAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AppleFAQ/AppleFAQ.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AppleFAQ = ()=>{
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('faq-1');
    const faqs = [
        {
            id: 'faq-1',
            category: 'Installation & Access',
            question: 'Do I need to install any application, driver, or browser extension?',
            answer: 'No. Every tool in NothingBox Labs runs purely inside standard, modern web browsers using native WebRTC, WebAudio, OPFS, and WebCodecs APIs. You never need to download installers, install device drivers, or grant intrusive operating system privileges. Simply open the URL and you are ready.'
        },
        {
            id: 'faq-2',
            category: 'P2P File Transfers',
            question: 'How does NothingDrop transfer 50GB files without an intermediate cloud server?',
            answer: 'NothingDrop establishes a direct peer-to-peer WebRTC SCTP data channel between both devices. The file is sliced into binary chunks directly from local storage and streamed over your local Wi-Fi or internet connection straight into the recipient browser. Because no third-party cloud server is involved, there are zero storage limits, no bandwidth throttling, and wire-speed throughput.'
        },
        {
            id: 'faq-3',
            category: 'Privacy & Cryptography',
            question: 'Are my chats, calls, and shared files genuinely private?',
            answer: 'Yes. All peer communication uses end-to-end encryption combining Curve25519 key agreements and AES-GCM-256 authenticated encryption. Keys are generated exclusively on your local device and are never transmitted to any central authority. Because we operate zero centralized message databases, neither NothingBox Labs nor any third party can intercept or inspect your data.'
        },
        {
            id: 'faq-4',
            category: 'Cross-Platform Compatibility',
            question: 'Which devices, operating systems, and browsers are supported?',
            answer: 'NothingBox Labs is built for universal compatibility. It is fully supported across macOS, Windows, Linux, iOS (Safari), iPadOS, and Android (Chrome, Firefox, Brave, Edge). Any browser supporting standard WebRTC and HTML5 APIs achieves full hardware acceleration.'
        },
        {
            id: 'faq-5',
            category: 'Pricing & Business Model',
            question: 'Is there any subscription fee, credit card requirement, or usage limit?',
            answer: 'No. Unlike conventional SaaS platforms that charge subscriptions to pay for expensive cloud compute servers and database clusters, NothingBox Labs leverages the compute power already inside your personal hardware. Because peers communicate directly, there is no costly server infrastructure to fund.'
        },
        {
            id: 'faq-6',
            category: 'Offline Capability',
            question: 'Can I use these tools offline or without an active internet connection?',
            answer: 'Yes. NothingMusic and NothingCinema work completely offline once loaded, streaming media directly from your device storage through OPFS without querying any remote server. Additionally, NothingDrop can perform transfers across your local Wi-Fi or LAN network even if the building loses its external internet connection.'
        }
    ];
    const toggleFaq = (id)=>{
        setOpenId((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq-section",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowPill,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    size: 14,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                            children: "Questions & Answers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subhead,
                            children: "Everything you need to know about browser-native architecture, zero-knowledge privacy, and direct peer networking."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accordionList,
                    children: faqs.map((faq)=>{
                        const isOpen = openId === faq.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqCard} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqCardOpen : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `faq-btn-${faq.id}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faqButton,
                                    onClick: ()=>toggleFaq(faq.id),
                                    "aria-expanded": isOpen,
                                    "aria-controls": `faq-ans-${faq.id}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionText,
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconWrap} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconWrapRotated : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 18,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chevronIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: `faq-ans-${faq.id}`,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerWrapper} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerWrapperOpen : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answerText,
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFAQ$2f$AppleFAQ$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryTag,
                                                children: faq.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, faq.id, true, {
                            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                            lineNumber: 86,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AppleFAQ/AppleFAQ.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppleFAQ, "SGbPmwrzJsU1NgQKREhtP4e5MfA=");
_c = AppleFAQ;
var _c;
__turbopack_context__.k.register(_c, "AppleFAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bulletItem": "AppleFreeEcosystem-module__Tts7ma__bulletItem",
  "bulletsList": "AppleFreeEcosystem-module__Tts7ma__bulletsList",
  "calloutBadge": "AppleFreeEcosystem-module__Tts7ma__calloutBadge",
  "calloutLeft": "AppleFreeEcosystem-module__Tts7ma__calloutLeft",
  "calloutSub": "AppleFreeEcosystem-module__Tts7ma__calloutSub",
  "calloutTitle": "AppleFreeEcosystem-module__Tts7ma__calloutTitle",
  "checkIcon": "AppleFreeEcosystem-module__Tts7ma__checkIcon",
  "container": "AppleFreeEcosystem-module__Tts7ma__container",
  "ecosystemLogo": "AppleFreeEcosystem-module__Tts7ma__ecosystemLogo",
  "eyebrow": "AppleFreeEcosystem-module__Tts7ma__eyebrow",
  "freeSection": "AppleFreeEcosystem-module__Tts7ma__freeSection",
  "headerBlock": "AppleFreeEcosystem-module__Tts7ma__headerBlock",
  "headerLogoWrap": "AppleFreeEcosystem-module__Tts7ma__headerLogoWrap",
  "headline": "AppleFreeEcosystem-module__Tts7ma__headline",
  "iconBlue": "AppleFreeEcosystem-module__Tts7ma__iconBlue",
  "iconBubble": "AppleFreeEcosystem-module__Tts7ma__iconBubble",
  "iconGreen": "AppleFreeEcosystem-module__Tts7ma__iconGreen",
  "iconOrange": "AppleFreeEcosystem-module__Tts7ma__iconOrange",
  "iconPurple": "AppleFreeEcosystem-module__Tts7ma__iconPurple",
  "launchButtons": "AppleFreeEcosystem-module__Tts7ma__launchButtons",
  "launchCallout": "AppleFreeEcosystem-module__Tts7ma__launchCallout",
  "pillarCard": "AppleFreeEcosystem-module__Tts7ma__pillarCard",
  "pillarDesc": "AppleFreeEcosystem-module__Tts7ma__pillarDesc",
  "pillarTitle": "AppleFreeEcosystem-module__Tts7ma__pillarTitle",
  "pillarTop": "AppleFreeEcosystem-module__Tts7ma__pillarTop",
  "pillarsGrid": "AppleFreeEcosystem-module__Tts7ma__pillarsGrid",
  "primaryLaunchBtn": "AppleFreeEcosystem-module__Tts7ma__primaryLaunchBtn",
  "pulseDot": "AppleFreeEcosystem-module__Tts7ma__pulseDot",
  "secondaryLaunchBtn": "AppleFreeEcosystem-module__Tts7ma__secondaryLaunchBtn",
  "statBox": "AppleFreeEcosystem-module__Tts7ma__statBox",
  "statCaption": "AppleFreeEcosystem-module__Tts7ma__statCaption",
  "statNumber": "AppleFreeEcosystem-module__Tts7ma__statNumber",
  "subhead": "AppleFreeEcosystem-module__Tts7ma__subhead",
});
}),
"[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppleFreeEcosystem",
    ()=>AppleFreeEcosystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
;
const AppleFreeEcosystem = ({ onOpenSpecsBySlug })=>{
    const scrollTo = (elementId)=>{
        const elem = document.getElementById(elementId);
        if (elem) elem.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const freeHighlights = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                size: 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Zero Fees. Free Forever.',
            stat: '$0.00',
            statLabel: 'No subscriptions. No trials.',
            description: 'Every flagship application and utility is completely free. We do not charge monthly fees, hide features behind paywalls, or meter your bandwidth usage.',
            bulletPoints: [
                'Unlimited end-to-end encrypted messaging',
                'Direct 50GB file transfers via WebRTC',
                'Native OPFS virtual RAM caching',
                'No credit card or billing details required'
            ]
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                size: 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'No Accounts. No Tracking.',
            stat: '0 Logins',
            statLabel: 'Instant browser execution',
            description: 'NothingBox Labs does not harvest emails, require account creation, or track your activity. Your sessions are ephemeral and cryptographically self-contained in your browser.',
            bulletPoints: [
                'Zero registration or email verification',
                'No advertising trackers or telemetry beacons',
                'Passkey WebAuthn biometric security',
                'Your identity never touches a centralized server'
            ]
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                size: 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconOrange
            }, void 0, false, {
                fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Decentralized Architecture',
            stat: '100% P2P',
            statLabel: 'Powered by your hardware',
            description: 'Traditional SaaS companies charge high subscription fees to cover massive server clusters. NothingBox Labs runs peer-to-peer directly on your device, eliminating cloud hosting overhead.',
            bulletPoints: [
                'Direct browser-to-browser WebRTC data channels',
                'Local file caching via Origin Private File System',
                'Hardware-accelerated 60 FPS video decoding',
                'Zero intermediate cloud storage bills'
            ]
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                size: 24,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconPurple
            }, void 0, false, {
                fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Modular Micro-Architecture',
            stat: 'Autonomous',
            statLabel: 'Decentralized ecosystem',
            description: 'Independent, sandboxed application modules operate autonomously. If one node or peer disconnects, the rest of your computing environment runs uninterrupted.',
            bulletPoints: [
                'NothingChat, NothingDrop, NothingMusic, & NothingCinema',
                'Direct peer discovery via WebRTC signaling',
                'Isolated sandboxed browser execution',
                'Open architecture for community auditability'
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "free-ecosystem",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].freeSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBlock,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLogoWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                size: 64,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ecosystemLogo
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: "Decentralized Computing Suite"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                            children: "Engineered for raw browser power. Zero cloud overhead."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subhead,
                            children: "NothingBox Labs is engineered on the principle that modern browsers have supercomputer capabilities. Because your device performs the computation and peers connect directly, applications operate with zero server dependencies."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarsGrid,
                    children: freeHighlights.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarTop,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBubble,
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                    children: item.stat
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCaption,
                                                    children: item.statLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarTitle,
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarDesc,
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletsList,
                                    children: item.bulletPoints.map((bp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: bp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].launchCallout,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calloutLeft,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calloutBadge,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pulseDot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Live & Ready to Use"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calloutTitle,
                                    children: "Experience NothingBox Labs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calloutSub,
                                    children: "Explore the flagship suite directly inside your browser. No installation, no account creation."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].launchButtons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryLaunchBtn,
                                    onClick: ()=>scrollTo('hero-chat'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Explore NothingChat"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryLaunchBtn,
                                    onClick: ()=>scrollTo('hero-drop'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Explore NothingDrop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppleFreeEcosystem;
var _c;
__turbopack_context__.k.register(_c, "AppleFreeEcosystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppleHero/AppleHero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "applePrimaryBtn": "AppleHero-module__RcAd-a__applePrimaryBtn",
  "appleTextLink": "AppleHero-module__RcAd-a__appleTextLink",
  "brandHeroBadge": "AppleHero-module__RcAd-a__brandHeroBadge",
  "chevronIcon": "AppleHero-module__RcAd-a__chevronIcon",
  "ctaGroup": "AppleHero-module__RcAd-a__ctaGroup",
  "eyebrowTag": "AppleHero-module__RcAd-a__eyebrowTag",
  "featureChip": "AppleHero-module__RcAd-a__featureChip",
  "featureChipsList": "AppleHero-module__RcAd-a__featureChipsList",
  "headerBlock": "AppleHero-module__RcAd-a__headerBlock",
  "heroContent": "AppleHero-module__RcAd-a__heroContent",
  "heroLogoMark": "AppleHero-module__RcAd-a__heroLogoMark",
  "heroSection": "AppleHero-module__RcAd-a__heroSection",
  "lockupBannerImg": "AppleHero-module__RcAd-a__lockupBannerImg",
  "lockupBannerWrap": "AppleHero-module__RcAd-a__lockupBannerWrap",
  "productHeadline": "AppleHero-module__RcAd-a__productHeadline",
  "productSubhead": "AppleHero-module__RcAd-a__productSubhead",
  "showcaseStage": "AppleHero-module__RcAd-a__showcaseStage",
  "themeObsidian": "AppleHero-module__RcAd-a__themeObsidian",
  "themeSpaceblack": "AppleHero-module__RcAd-a__themeSpaceblack",
  "themeTitanium": "AppleHero-module__RcAd-a__themeTitanium",
  "themeUltramarine": "AppleHero-module__RcAd-a__themeUltramarine",
});
}),
"[project]/src/components/AppleHero/AppleHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppleHero",
    ()=>AppleHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AppleHero/AppleHero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const AppleHero = ({ product, theme = 'titanium', onOpenSpecs, onLaunchApp, sectionId })=>{
    const getThemeClass = ()=>{
        switch(theme){
            case 'ultramarine':
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeUltramarine;
            case 'spaceblack':
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeSpaceblack;
            case 'obsidian':
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeObsidian;
            case 'titanium':
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeTitanium;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: sectionId,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection} ${getThemeClass()}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBlock,
                    children: [
                        product.id === 'chat-app' || product.id === 'music-player' ? /* Official Brand Lockup Banners already include the brand emblem and typographic title */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockupBannerWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.id === 'chat-app' ? '/nothingchat/lockup-clean.svg' : '/nothingmusic/lockup-clean.svg',
                                alt: product.title,
                                width: product.id === 'chat-app' ? 340 : 380,
                                height: product.id === 'chat-app' ? 78 : 70,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockupBannerImg,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandHeroBadge,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                        size: 38,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroLogoMark
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productHeadline,
                                    children: product.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productSubhead,
                            children: product.tagline
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaGroup,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: `learn-more-${product.slug}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].applePrimaryBtn,
                                onClick: ()=>onOpenSpecs(product),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Explore Architecture & Specs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureChipsList,
                            children: product.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureChip,
                                    children: feat.title
                                }, feat.id, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].showcaseStage,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFeatureCards"], {
                        product: product,
                        onOpenSpecs: onOpenSpecs
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppleHero;
var _c;
__turbopack_context__.k.register(_c, "AppleHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ApplePromoGrid/ApplePromoGrid.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardDesc": "ApplePromoGrid-module__2puyjq__cardDesc",
  "cardEyebrow": "ApplePromoGrid-module__2puyjq__cardEyebrow",
  "cardHeader": "ApplePromoGrid-module__2puyjq__cardHeader",
  "cardLink": "ApplePromoGrid-module__2puyjq__cardLink",
  "cardTitle": "ApplePromoGrid-module__2puyjq__cardTitle",
  "cardVisual": "ApplePromoGrid-module__2puyjq__cardVisual",
  "chevron": "ApplePromoGrid-module__2puyjq__chevron",
  "container": "ApplePromoGrid-module__2puyjq__container",
  "gridContainer": "ApplePromoGrid-module__2puyjq__gridContainer",
  "gridHeader": "ApplePromoGrid-module__2puyjq__gridHeader",
  "iconBlue": "ApplePromoGrid-module__2puyjq__iconBlue",
  "iconContainer": "ApplePromoGrid-module__2puyjq__iconContainer",
  "iconCyan": "ApplePromoGrid-module__2puyjq__iconCyan",
  "iconGreen": "ApplePromoGrid-module__2puyjq__iconGreen",
  "iconOrange": "ApplePromoGrid-module__2puyjq__iconOrange",
  "iconPurple": "ApplePromoGrid-module__2puyjq__iconPurple",
  "iconRed": "ApplePromoGrid-module__2puyjq__iconRed",
  "metricHighlight": "ApplePromoGrid-module__2puyjq__metricHighlight",
  "promoCard": "ApplePromoGrid-module__2puyjq__promoCard",
  "promoGridSection": "ApplePromoGrid-module__2puyjq__promoGridSection",
  "sectionEyebrow": "ApplePromoGrid-module__2puyjq__sectionEyebrow",
  "sectionTitle": "ApplePromoGrid-module__2puyjq__sectionTitle",
  "techBadge": "ApplePromoGrid-module__2puyjq__techBadge",
  "visualBadgeRow": "ApplePromoGrid-module__2puyjq__visualBadgeRow",
});
}),
"[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplePromoGrid",
    ()=>ApplePromoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ApplePromoGrid/ApplePromoGrid.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
'use client';
;
;
;
const ApplePromoGrid = ({ onOpenSubdomains, onOpenSpecs })=>{
    const promos = [
        {
            id: 'promo-subdomains',
            eyebrow: 'Federated Architecture',
            title: 'Decentralized P2P Mesh',
            description: 'Dedicated client-side modules communicating directly between browser nodes with zero cloud relay bottlenecks.',
            linkText: 'Explore System Architecture',
            action: onOpenSpecs,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'Client Node Mesh',
            metric: 'Direct P2P'
        },
        {
            id: 'promo-opfs',
            eyebrow: 'Virtual RAM Engine',
            title: 'Origin Private File System',
            description: 'Raw chunk streaming into OPFS for 4GB–5GB local buffers at native SSD speed with ~118MB JS heap.',
            linkText: 'View Architecture Specs',
            action: onOpenSpecs,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconCyan
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'FileSystemSyncAccessHandle',
            metric: '5 GB Buffer'
        },
        {
            id: 'promo-webrtc',
            eyebrow: 'Zero Cloud Storage',
            title: 'WebRTC Data Channels',
            description: 'Peer-to-peer encrypted binary tunnels for 50GB file transfers without intermediary cloud relay servers.',
            linkText: 'Test NothingDrop',
            action: ()=>{
                const elem = document.getElementById('hero-drop');
                if (elem) elem.scrollIntoView({
                    behavior: 'smooth'
                });
            },
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'DTLS / SCTP Tunnel',
            metric: '$0.00 Cost'
        },
        {
            id: 'promo-apis',
            eyebrow: 'Native Synergy',
            title: 'Google Cloud Platform',
            description: 'Google Maps Places API and Cloud Translation engine directly integrated in chat without context switching.',
            linkText: 'Test in NothingChat',
            action: ()=>{
                const elem = document.getElementById('hero-chat');
                if (elem) elem.scrollIntoView({
                    behavior: 'smooth'
                });
            },
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconOrange
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'Places & Translation API',
            metric: 'In-Bubble'
        },
        {
            id: 'promo-topology',
            eyebrow: 'Decoupled Topology',
            title: 'Independent Host Ready',
            description: 'Next.js client interface paired with dedicated Node.js + Express backend service running on its own server.',
            linkText: 'Explore Microservices',
            action: onOpenSpecs,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconPurple
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'Port 4000 Express Relay',
            metric: 'Decoupled'
        },
        {
            id: 'promo-labx',
            eyebrow: 'Next Frontier',
            title: 'NothingLabX & Passkey SSO',
            description: 'Client-side encrypted vault, WebGPU 3D shaders, and WebAuthn biometric passkey authentication.',
            linkText: 'View Planned Specs',
            action: onOpenSubdomains,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconRed
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'WebAuthn + WebGPU',
            metric: 'Zero-Password'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "promo-grid",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].promoGridSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionEyebrow,
                            children: "Ecosystem Highlights"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                            children: "Engineered Without Compromise."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridContainer,
                    children: promos.map((promo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].promoCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardEyebrow,
                                            children: promo.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                            children: promo.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                                            children: promo.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
                                            onClick: promo.action,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: promo.linkText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 13,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chevron
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisual,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualBadgeRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconContainer,
                                                    children: promo.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricHighlight,
                                                    children: promo.metric
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techBadge,
                                            children: promo.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, promo.id, true, {
                            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ApplePromoGrid;
var _c;
__turbopack_context__.k.register(_c, "ApplePromoGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Badge/Badge.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "Badge-module__HwyJrW__badge",
  "variant_blue": "Badge-module__HwyJrW__variant_blue",
  "variant_cyan": "Badge-module__HwyJrW__variant_cyan",
  "variant_green": "Badge-module__HwyJrW__variant_green",
  "variant_orange": "Badge-module__HwyJrW__variant_orange",
  "variant_purple": "Badge-module__HwyJrW__variant_purple",
  "variant_subtle": "Badge-module__HwyJrW__variant_subtle",
});
}),
"[project]/src/components/Badge/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Badge/Badge.module.css [app-client] (css module)");
;
;
const Badge = ({ children, variant = 'subtle', id })=>{
    const variantClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`variant_${variant}`] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variant_subtle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        id: id,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${variantClass}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Badge/Badge.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Button/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Button-module__e7WGRa__button",
  "iconWrapper": "Button-module__e7WGRa__iconWrapper",
  "label": "Button-module__e7WGRa__label",
  "size_lg": "Button-module__e7WGRa__size_lg",
  "size_md": "Button-module__e7WGRa__size_md",
  "size_sm": "Button-module__e7WGRa__size_sm",
  "variant_ghost": "Button-module__e7WGRa__variant_ghost",
  "variant_glass": "Button-module__e7WGRa__variant_glass",
  "variant_primary": "Button-module__e7WGRa__variant_primary",
  "variant_secondary": "Button-module__e7WGRa__variant_secondary",
});
}),
"[project]/src/components/Button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.module.css [app-client] (css module)");
;
;
const Button = ({ variant = 'primary', size = 'md', icon, children, className = '', id, ...rest })=>{
    const variantClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`variant_${variant}`] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variant_primary;
    const sizeClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`size_${size}`] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].size_md;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        id: id,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${variantClass} ${sizeClass} ${className}`,
        ...rest,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconWrapper,
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/Button/Button.tsx",
                lineNumber: 30,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Button/Button.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Button/Button.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardFlinging": "FlagshipCardDeck-module__MnO-rW__cardFlinging",
  "container": "FlagshipCardDeck-module__MnO-rW__container",
  "desktopGrid": "FlagshipCardDeck-module__MnO-rW__desktopGrid",
  "dot": "FlagshipCardDeck-module__MnO-rW__dot",
  "dotActive": "FlagshipCardDeck-module__MnO-rW__dotActive",
  "dotsList": "FlagshipCardDeck-module__MnO-rW__dotsList",
  "dragging": "FlagshipCardDeck-module__MnO-rW__dragging",
  "flingToBack": "FlagshipCardDeck-module__MnO-rW__flingToBack",
  "gentleWiggle": "FlagshipCardDeck-module__MnO-rW__gentleWiggle",
  "hintSwipeIcon": "FlagshipCardDeck-module__MnO-rW__hintSwipeIcon",
  "mobileStackSection": "FlagshipCardDeck-module__MnO-rW__mobileStackSection",
  "stackControls": "FlagshipCardDeck-module__MnO-rW__stackControls",
  "stackStage": "FlagshipCardDeck-module__MnO-rW__stackStage",
  "stackedCard": "FlagshipCardDeck-module__MnO-rW__stackedCard",
  "swipeHintPill": "FlagshipCardDeck-module__MnO-rW__swipeHintPill",
});
}),
"[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlagshipCardDeck",
    ()=>FlagshipCardDeck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/GlassBlobCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GlassBlobCard/GlassBlobCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const FlagshipCardDeck = ({ cards, onCardClick })=>{
    _s();
    const N = cards.length;
    // Current top card index (0 to N-1)
    const [k, setK] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [flingingIndex, setFlingingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragX, setDragX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const touchStartPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        time: 0
    });
    const isDraggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastActionTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTouchTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Cycle to next card:
    // 1. Current top card flings out to the right with card tilt
    // 2. k increments by 1: behind card becomes top, old top card smoothly slides into bottom of deck
    const cycleToNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlagshipCardDeck.useCallback[cycleToNext]": ()=>{
            const now = Date.now();
            if (now - lastActionTime.current < 320) return; // Debounce active animation
            lastActionTime.current = now;
            const currentTop = k;
            setFlingingIndex(currentTop);
            setTimeout({
                "FlagshipCardDeck.useCallback[cycleToNext]": ()=>{
                    setK({
                        "FlagshipCardDeck.useCallback[cycleToNext]": (prevK)=>(prevK + 1) % N
                    }["FlagshipCardDeck.useCallback[cycleToNext]"]);
                    setFlingingIndex(null);
                }
            }["FlagshipCardDeck.useCallback[cycleToNext]"], 180);
        }
    }["FlagshipCardDeck.useCallback[cycleToNext]"], [
        k,
        N
    ]);
    // Touch handlers for mobile devices
    const handleTouchStart = (e)=>{
        const t = e.touches[0];
        touchStartPos.current = {
            x: t.clientX,
            y: t.clientY,
            time: Date.now()
        };
        isDraggingRef.current = false;
    };
    const handleTouchMove = (e)=>{
        if (!e.touches[0]) return;
        const t = e.touches[0];
        const dx = t.clientX - touchStartPos.current.x;
        isDraggingRef.current = true;
        setDragX(Math.max(-80, Math.min(80, dx)));
    };
    const handleTouchEnd = (e)=>{
        const t = e.changedTouches?.[0];
        setDragX(0);
        if (!t) {
            cycleToNext();
            return;
        }
        const dt = Date.now() - touchStartPos.current.time;
        const dx = t.clientX - touchStartPos.current.x;
        const dy = t.clientY - touchStartPos.current.y;
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);
        lastTouchTime.current = Date.now();
        // 1. Swipe gesture (any horizontal motion > 20px)
        if (absX > 20) {
            cycleToNext();
            return;
        }
        // 2. Tap gesture (within 35px radius allowance for human thumb, duration < 600ms)
        if (dt < 600 && absX < 35 && absY < 35) {
            cycleToNext();
            return;
        }
    };
    // Safe click handler for mouse / desktop DevTools
    const handleStageClick = ()=>{
        // If touch was already handled in the last 500ms, ignore duplicate synthetic click
        if (Date.now() - lastTouchTime.current < 500) return;
        cycleToNext();
    };
    // Stack calculation for mobile cards
    const getStackStyle = (index)=>{
        // If this card is currently flinging out to the side
        if (index === flingingIndex) {
            return {
                zIndex: 22,
                opacity: 0.96,
                transform: 'translateX(calc(-50% + 140px)) translateY(-22px) rotate(16deg) scale(1.02)',
                pointerEvents: 'none'
            };
        }
        // Relative position from current top item: 0 is top, 1 is 1st behind, etc.
        const offset = (index - k + N) % N;
        if (offset === 0) {
            // Current top active card
            const rotationDeg = dragX * 0.08;
            return {
                zIndex: 10,
                opacity: 1,
                transform: `translateX(calc(-50% + ${dragX}px)) translateY(0px) rotate(${rotationDeg}deg) scale(1)`,
                pointerEvents: 'auto',
                filter: 'none'
            };
        } else if (offset === 1) {
            // 1st card behind
            return {
                zIndex: 8,
                opacity: 0.88,
                transform: 'translateX(-50%) translateY(14px) rotate(3deg) scale(0.93)',
                pointerEvents: 'none',
                filter: 'brightness(0.98)'
            };
        } else if (offset === 2) {
            // 2nd card behind
            return {
                zIndex: 6,
                opacity: 0.65,
                transform: 'translateX(-50%) translateY(26px) rotate(-3deg) scale(0.86)',
                pointerEvents: 'none',
                filter: 'brightness(0.96)'
            };
        } else {
            // 3rd card behind (bottom of deck)
            return {
                zIndex: 4,
                opacity: 0.42,
                transform: 'translateX(-50%) translateY(38px) rotate(2deg) scale(0.80)',
                pointerEvents: 'none',
                filter: 'brightness(0.93)'
            };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "flagship-card-deck-section",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        style: {
            '--n': N,
            '--k': k
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopGrid,
                children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassBlobCard"], {
                        id: card.id,
                        title: card.title,
                        badge: card.badge,
                        subdomain: card.subdomain,
                        icon: card.icon,
                        rotation: card.rotation,
                        variant: card.variant,
                        onClick: ()=>onCardClick(card.id),
                        onActionClick: ()=>onCardClick(card.id),
                        ariaLabel: `Jump to ${card.title} demo`
                    }, card.id, false, {
                        fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileStackSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swipeHintPill,
                        onClick: cycleToNext,
                        "aria-label": "Tap to flip card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 13,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hintSwipeIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Tap card to flip"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "mobile-card-stack-stage",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stackStage,
                        onTouchStart: handleTouchStart,
                        onTouchMove: handleTouchMove,
                        onTouchEnd: handleTouchEnd,
                        onTouchCancel: handleTouchEnd,
                        onClick: handleStageClick,
                        children: cards.map((card, index)=>{
                            const isTop = (index - k + N) % N === 0;
                            const isFlinging = index === flingingIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassBlobCard"], {
                                id: `stacked-${card.id}`,
                                title: card.title,
                                badge: card.badge,
                                subdomain: card.subdomain,
                                icon: card.icon,
                                rotation: card.rotation,
                                variant: card.variant,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stackedCard} ${isFlinging ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFlinging : ''}`,
                                style: getStackStyle(index),
                                onClick: handleStageClick,
                                onActionClick: ()=>{
                                    // Direct jump to demo when "Explore" pill is tapped
                                    onCardClick(card.id);
                                },
                                tabIndex: isTop ? 0 : -1,
                                ariaLabel: isTop ? `Active card: ${card.title}. Tap to cycle deck, or tap Explore to view demo.` : `${card.title} (stacked)`
                            }, `stacked-${card.id}`, false, {
                                fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stackControls,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotsList,
                            role: "tablist",
                            "aria-label": "Card pagination",
                            children: cards.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${idx === k ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotActive : ''}`,
                                    onClick: ()=>setK(idx),
                                    "aria-label": `Card ${idx + 1}: ${card.title}`,
                                    role: "tab",
                                    "aria-selected": idx === k
                                }, `dot-${card.id}`, false, {
                                    fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FlagshipCardDeck, "hRX/TLqcogwPukGAKU/jw0XECd8=");
_c = FlagshipCardDeck;
var _c;
__turbopack_context__.k.register(_c, "FlagshipCardDeck");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FlagshipCardDeck/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer/Footer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomBar": "Footer-module__Grjkva__bottomBar",
  "breadcrumbBar": "Footer-module__Grjkva__breadcrumbBar",
  "breadcrumbChevron": "Footer-module__Grjkva__breadcrumbChevron",
  "breadcrumbCurrent": "Footer-module__Grjkva__breadcrumbCurrent",
  "breadcrumbItem": "Footer-module__Grjkva__breadcrumbItem",
  "colHeader": "Footer-module__Grjkva__colHeader",
  "colLink": "Footer-module__Grjkva__colLink",
  "colLinks": "Footer-module__Grjkva__colLinks",
  "container": "Footer-module__Grjkva__container",
  "copyrightText": "Footer-module__Grjkva__copyrightText",
  "directoryCol": "Footer-module__Grjkva__directoryCol",
  "directoryGrid": "Footer-module__Grjkva__directoryGrid",
  "footer": "Footer-module__Grjkva__footer",
  "footerLogoGlyph": "Footer-module__Grjkva__footerLogoGlyph",
  "footnoteItem": "Footer-module__Grjkva__footnoteItem",
  "footnotesList": "Footer-module__Grjkva__footnotesList",
  "footnotesSection": "Footer-module__Grjkva__footnotesSection",
  "legalDivider": "Footer-module__Grjkva__legalDivider",
  "legalLink": "Footer-module__Grjkva__legalLink",
  "legalLinks": "Footer-module__Grjkva__legalLinks",
  "localeSelector": "Footer-module__Grjkva__localeSelector",
});
}),
"[project]/src/components/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Footer/Footer.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "apple-footer",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footnotesSection,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footnotesList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footnoteItem,
                                children: "1. Origin Private File System (OPFS) Virtual RAM caching requires a modern Chromium or WebKit browser supporting the File System Access API and FileSystemSyncAccessHandle. Peak memory allocation adjusts dynamically based on local device storage headroom (allocating up to 5GB on Desktop/Android and falling back safely to 1GB on iOS Safari)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footnoteItem,
                                children: "2. WebRTC Data Channels establish direct peer-to-peer transport tunnels using DTLS and SCTP protocol encryption. 50GB file transfers bypass central cloud storage completely without intermediate disk writes or monthly bandwidth overhead."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footnoteItem,
                                children: "3. The NothingBox Labs Architecture represents a decoupled micro-frontend topology where individual tools run isolated without shared runtime execution bottlenecks."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footnoteItem,
                                children: "4. Real-time Google Maps Places search and Cloud Translation features operate directly within contextual message bubbles in NothingChat via secure client-side API proxies."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer/Footer.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbBar,
                    "aria-label": "Breadcrumbs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            size: 26,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerLogoGlyph
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 12,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbChevron
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbItem,
                            children: "NothingBox Labs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 12,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbChevron
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbItem,
                            children: "Ecosystem Suite"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 12,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbChevron
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbCurrent,
                            children: "Flagship Lineup"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/Footer.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directoryGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directoryCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colHeader,
                                    children: "Explore and Learn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-chat",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingChat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-drop",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingDrop P2P"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-music",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingMusic"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-cinema",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingCinema 4K"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#trust-compatibility",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Security & Audit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#faq-section",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Frequently Asked Questions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directoryCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colHeader,
                                    children: "Account & Identity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#trust-compatibility",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingAuth Passkey"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#trust-compatibility",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingVault Encrypted"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#trust-compatibility",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Biometric WebAuthn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#trust-compatibility",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Session Management"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directoryCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colHeader,
                                    children: "Entertainment & Media"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-music",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingMusic Player"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-cinema",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "NothingCinema 4K Stream"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://sound.nothingboxlabs.com",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Spatial 3D Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://studio.nothingboxlabs.com",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Vector Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directoryCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colHeader,
                                    children: "Architecture & APIs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#promo-grid",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "OPFS Virtual RAM Engine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#promo-grid",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "WebRTC Data Channels"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-chat",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Google Maps Places API"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#hero-chat",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Cloud Translation Engine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#promo-grid",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Node.js Express Relay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directoryCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colHeader,
                                    children: "About NothingBox Labs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#main-header",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Newsroom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://status.nothingboxlabs.com",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "System Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/VaibhavSenta/nothingboxlabs",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "GitHub Repository"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#promo-grid",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Performance Benchmarks"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#apple-ribbon",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Contact Engineering"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/Footer.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/Footer.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomBar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyrightText,
                            children: "Copyright © 2026 NothingBox Labs Inc. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalLinks,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#main-header",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalLink,
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalDivider,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#main-header",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalLink,
                                    children: "Terms of Use"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalDivider,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#main-header",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalLink,
                                    children: "Sales Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalDivider,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#main-header",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalLink,
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalDivider,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#subdomain-carousel",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legalLink,
                                    children: "Site Map"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].localeSelector,
                            children: "United States (English)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/Footer.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer/Footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Footer/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlassBlobCard/GlassBlobCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionChevron": "GlassBlobCard-module__KKnX5q__actionChevron",
  "actionPill": "GlassBlobCard-module__KKnX5q__actionPill",
  "badgeDot": "GlassBlobCard-module__KKnX5q__badgeDot",
  "badgePill": "GlassBlobCard-module__KKnX5q__badgePill",
  "blob": "GlassBlobCard-module__KKnX5q__blob",
  "blob1": "GlassBlobCard-module__KKnX5q__blob1",
  "blob2": "GlassBlobCard-module__KKnX5q__blob2",
  "blob3": "GlassBlobCard-module__KKnX5q__blob3",
  "blob4": "GlassBlobCard-module__KKnX5q__blob4",
  "card": "GlassBlobCard-module__KKnX5q__card",
  "cardContent": "GlassBlobCard-module__KKnX5q__cardContent",
  "floatBlob1": "GlassBlobCard-module__KKnX5q__floatBlob1",
  "floatBlob2": "GlassBlobCard-module__KKnX5q__floatBlob2",
  "floatBlob3": "GlassBlobCard-module__KKnX5q__floatBlob3",
  "floatBlob4": "GlassBlobCard-module__KKnX5q__floatBlob4",
  "iconFrame": "GlassBlobCard-module__KKnX5q__iconFrame",
  "subdomain": "GlassBlobCard-module__KKnX5q__subdomain",
  "textStack": "GlassBlobCard-module__KKnX5q__textStack",
  "title": "GlassBlobCard-module__KKnX5q__title",
  "topRow": "GlassBlobCard-module__KKnX5q__topRow",
  "variantAmber": "GlassBlobCard-module__KKnX5q__variantAmber",
  "variantBlue": "GlassBlobCard-module__KKnX5q__variantBlue",
  "variantEmerald": "GlassBlobCard-module__KKnX5q__variantEmerald",
  "variantPurple": "GlassBlobCard-module__KKnX5q__variantPurple",
});
}),
"[project]/src/components/GlassBlobCard/GlassBlobCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassBlobCard",
    ()=>GlassBlobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/GlassBlobCard/GlassBlobCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
const GlassBlobCard = ({ id, title, badge, subdomain, icon, onClick, rotation = '-2deg', variant = 'blue', ariaLabel, className = '', style = {}, tabIndex, onActionClick })=>{
    const getVariantClass = ()=>{
        switch(variant){
            case 'emerald':
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variantEmerald;
            case 'purple':
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variantPurple;
            case 'amber':
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variantAmber;
            case 'blue':
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variantBlue;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        id: `blob-card-${id}`,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${getVariantClass()} ${className}`,
        onClick: onClick,
        tabIndex: tabIndex,
        "aria-label": ariaLabel || `Open ${title}`,
        style: {
            '--card-rotation': rotation,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgePill,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeDot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                badge
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconFrame,
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textStack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            subdomain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subdomain,
                                children: subdomain
                            }, void 0, false, {
                                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionPill,
                                role: onActionClick ? 'button' : undefined,
                                onClick: (e)=>{
                                    if (onActionClick) {
                                        e.stopPropagation();
                                        onActionClick(e);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 13,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionChevron
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob1}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob2}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob3}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blob4}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GlassBlobCard/GlassBlobCard.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GlassBlobCard;
var _c;
__turbopack_context__.k.register(_c, "GlassBlobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlassBlobCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GlassBlobCard$2f$GlassBlobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GlassBlobCard/GlassBlobCard.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header/Header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "appleBrandText": "Header-module__ldgnoG__appleBrandText",
  "appleLogoBtn": "Header-module__ldgnoG__appleLogoBtn",
  "brandLogoSvg": "Header-module__ldgnoG__brandLogoSvg",
  "ctaArrowIcon": "Header-module__ldgnoG__ctaArrowIcon",
  "desktopCtaBtn": "Header-module__ldgnoG__desktopCtaBtn",
  "fadeIn": "Header-module__ldgnoG__fadeIn",
  "globalNav": "Header-module__ldgnoG__globalNav",
  "mobileBackdrop": "Header-module__ldgnoG__mobileBackdrop",
  "mobileDropdownMenu": "Header-module__ldgnoG__mobileDropdownMenu",
  "mobileHamburger": "Header-module__ldgnoG__mobileHamburger",
  "mobileIconBlue": "Header-module__ldgnoG__mobileIconBlue",
  "mobileIconGreen": "Header-module__ldgnoG__mobileIconGreen",
  "mobileIconMuted": "Header-module__ldgnoG__mobileIconMuted",
  "mobileIconOrange": "Header-module__ldgnoG__mobileIconOrange",
  "mobileIconPurple": "Header-module__ldgnoG__mobileIconPurple",
  "mobileLaunchBtn": "Header-module__ldgnoG__mobileLaunchBtn",
  "mobileLinkChevron": "Header-module__ldgnoG__mobileLinkChevron",
  "mobileLinkDesc": "Header-module__ldgnoG__mobileLinkDesc",
  "mobileLinkIconWrap": "Header-module__ldgnoG__mobileLinkIconWrap",
  "mobileLinkTextWrap": "Header-module__ldgnoG__mobileLinkTextWrap",
  "mobileLinkTitle": "Header-module__ldgnoG__mobileLinkTitle",
  "mobileLinksContainer": "Header-module__ldgnoG__mobileLinksContainer",
  "mobileMenuFooter": "Header-module__ldgnoG__mobileMenuFooter",
  "mobileMenuHeader": "Header-module__ldgnoG__mobileMenuHeader",
  "mobileMenuLinkCard": "Header-module__ldgnoG__mobileMenuLinkCard",
  "mobileMenuSubtitle": "Header-module__ldgnoG__mobileMenuSubtitle",
  "navContainer": "Header-module__ldgnoG__navContainer",
  "navItem": "Header-module__ldgnoG__navItem",
  "navLinksList": "Header-module__ldgnoG__navLinksList",
  "navScrolled": "Header-module__ldgnoG__navScrolled",
  "navUtilities": "Header-module__ldgnoG__navUtilities",
  "slideDown": "Header-module__ldgnoG__slideDown",
});
}),
"[project]/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Header/Header.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Header = ({ activeView = 'home', onNavigate, onSelectProduct })=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 15);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Lock body scroll when mobile menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileMenuOpen
    ]);
    const scrollTo = (elementId)=>{
        setMobileMenuOpen(false);
        const elem = document.getElementById(elementId);
        if (elem) {
            const headerOffset = 70;
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    const navItems = [
        {
            label: 'Overview',
            target: 'landing-hero'
        },
        {
            label: 'Security',
            target: 'trust-compatibility'
        },
        {
            label: 'NothingChat',
            target: 'hero-chat'
        },
        {
            label: 'NothingDrop',
            target: 'hero-drop'
        },
        {
            label: 'NothingMusic',
            target: 'hero-music'
        },
        {
            label: 'NothingCinema',
            target: 'hero-cinema'
        },
        {
            label: 'FAQ',
            target: 'faq-section'
        }
    ];
    const mobileLinks = [
        {
            label: 'Overview',
            desc: 'Architecture & ecosystem',
            target: 'landing-hero',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'Security & Compatibility',
            desc: 'Zero-Knowledge browser audit',
            target: 'trust-compatibility',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'NothingChat',
            desc: 'Encrypted P2P Messaging',
            target: 'hero-chat',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'NothingDrop',
            desc: '50GB Direct File Transfer',
            target: 'hero-drop',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'NothingMusic',
            desc: 'OPFS Lossless Audio',
            target: 'hero-music',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconPurple
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'NothingCinema',
            desc: '4K Hardware Media Stream',
            target: 'hero-cinema',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconOrange
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            label: 'FAQ',
            desc: 'Common technical questions',
            target: 'faq-section',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                size: 18,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileIconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "main-header",
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].globalNav} ${isScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navScrolled : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "apple-logo-btn",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appleLogoBtn,
                        onClick: ()=>scrollTo('landing-hero'),
                        "aria-label": "NothingBox Labs Home",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                size: 32,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLogoSvg
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appleBrandText,
                                children: "NothingBox Labs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinksList,
                        "aria-label": "Main Navigation",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: `nav-link-${item.target}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                onClick: ()=>scrollTo(item.target),
                                children: item.label
                            }, item.target, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navUtilities,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "nav-cta-btn",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopCtaBtn,
                                onClick: ()=>scrollTo('hero-chat'),
                                "aria-label": "Explore products",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 13,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaArrowIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "mobile-nav-toggle",
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileHamburger,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setMobileMenuOpen((prev)=>!prev);
                                },
                                "aria-label": mobileMenuOpen ? 'Close Menu' : 'Open Menu',
                                "aria-expanded": mobileMenuOpen,
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 179,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 179,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-nav-backdrop",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileBackdrop,
                onClick: ()=>setMobileMenuOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "mobile-nav-drawer",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileDropdownMenu,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuHeader,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuSubtitle,
                                children: "Products & Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinksContainer,
                            children: mobileLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `mobile-link-${link.target}`,
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLinkCard,
                                    onClick: ()=>scrollTo(link.target),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinkIconWrap,
                                            children: link.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header/Header.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinkTextWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinkTitle,
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/Header.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinkDesc,
                                                    children: link.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/Header.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header/Header.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 16,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinkChevron
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header/Header.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, link.target, true, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuFooter,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: "mobile-launch-suite-btn",
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLaunchBtn,
                                onClick: ()=>scrollTo('hero-chat'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Launch NothingBox Suite"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header/Header.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header/Header.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "U+0s4L6/6Bb5GuXRZzH/f/btC+Q=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LandingHero/LandingHero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badgeDivider": "LandingHero-module__aSlTeq__badgeDivider",
  "badgeHighlight": "LandingHero-module__aSlTeq__badgeHighlight",
  "badgePill": "LandingHero-module__aSlTeq__badgePill",
  "badgeText": "LandingHero-module__aSlTeq__badgeText",
  "bodyDescription": "LandingHero-module__aSlTeq__bodyDescription",
  "bounce": "LandingHero-module__aSlTeq__bounce",
  "brandHeroEmblem": "LandingHero-module__aSlTeq__brandHeroEmblem",
  "container": "LandingHero-module__aSlTeq__container",
  "ctaGroup": "LandingHero-module__aSlTeq__ctaGroup",
  "eyebrowWrapper": "LandingHero-module__aSlTeq__eyebrowWrapper",
  "flagshipPillBtn": "LandingHero-module__aSlTeq__flagshipPillBtn",
  "flagshipStrip": "LandingHero-module__aSlTeq__flagshipStrip",
  "heroSection": "LandingHero-module__aSlTeq__heroSection",
  "iconAmber": "LandingHero-module__aSlTeq__iconAmber",
  "iconBlue": "LandingHero-module__aSlTeq__iconBlue",
  "iconGreen": "LandingHero-module__aSlTeq__iconGreen",
  "iconPurple": "LandingHero-module__aSlTeq__iconPurple",
  "logoFrame": "LandingHero-module__aSlTeq__logoFrame",
  "mainHeadline": "LandingHero-module__aSlTeq__mainHeadline",
  "mainHeroLogo": "LandingHero-module__aSlTeq__mainHeroLogo",
  "metricDivider": "LandingHero-module__aSlTeq__metricDivider",
  "metricIconWrap": "LandingHero-module__aSlTeq__metricIconWrap",
  "metricInfo": "LandingHero-module__aSlTeq__metricInfo",
  "metricItem": "LandingHero-module__aSlTeq__metricItem",
  "metricLabel": "LandingHero-module__aSlTeq__metricLabel",
  "metricValue": "LandingHero-module__aSlTeq__metricValue",
  "metricsRibbon": "LandingHero-module__aSlTeq__metricsRibbon",
  "periodAccent": "LandingHero-module__aSlTeq__periodAccent",
  "pillBadge": "LandingHero-module__aSlTeq__pillBadge",
  "pillChevron": "LandingHero-module__aSlTeq__pillChevron",
  "pillIconBlue": "LandingHero-module__aSlTeq__pillIconBlue",
  "pillIconGreen": "LandingHero-module__aSlTeq__pillIconGreen",
  "pillIconOrange": "LandingHero-module__aSlTeq__pillIconOrange",
  "pillIconPink": "LandingHero-module__aSlTeq__pillIconPink",
  "pillIconWrap": "LandingHero-module__aSlTeq__pillIconWrap",
  "pillTextWrap": "LandingHero-module__aSlTeq__pillTextWrap",
  "pillTitle": "LandingHero-module__aSlTeq__pillTitle",
  "primaryBtn": "LandingHero-module__aSlTeq__primaryBtn",
  "pulseIndicator": "LandingHero-module__aSlTeq__pulseIndicator",
  "scrollChevron": "LandingHero-module__aSlTeq__scrollChevron",
  "scrollDownIndicator": "LandingHero-module__aSlTeq__scrollDownIndicator",
  "scrollText": "LandingHero-module__aSlTeq__scrollText",
  "secondaryBtn": "LandingHero-module__aSlTeq__secondaryBtn",
  "sparkleIcon": "LandingHero-module__aSlTeq__sparkleIcon",
  "subHeadline": "LandingHero-module__aSlTeq__subHeadline",
  "tertiaryBtn": "LandingHero-module__aSlTeq__tertiaryBtn",
  "textBlock": "LandingHero-module__aSlTeq__textBlock",
});
}),
"[project]/src/components/LandingHero/LandingHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingHero",
    ()=>LandingHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/LandingHero/LandingHero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/FlagshipCardDeck/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlagshipCardDeck/FlagshipCardDeck.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
;
;
;
const LandingHero = ({ onExploreChat, onExploreSubdomains, onExploreFree })=>{
    const scrollTo = (elementId)=>{
        const elem = document.getElementById(elementId);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const flagshipCards = [
        {
            id: 'hero-chat',
            title: 'NothingChat',
            badge: 'P2P Encrypted',
            subdomain: 'chat.nothingbox.io',
            rotation: '-2.5deg',
            variant: 'blue',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/nothingchat/icon-mark.svg",
                alt: "NothingChat",
                width: 36,
                height: 36,
                style: {
                    borderRadius: 8,
                    objectFit: 'contain'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 'hero-drop',
            title: 'NothingDrop',
            badge: '50GB AirDrop',
            subdomain: 'drop.nothingbox.io',
            rotation: '1.5deg',
            variant: 'emerald',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 28,
                color: "#111827",
                strokeWidth: 2.2
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 'hero-music',
            title: 'NothingMusic',
            badge: 'OPFS Hi-Res',
            subdomain: 'music.nothingbox.io',
            rotation: '-1.5deg',
            variant: 'purple',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/nothingmusic/icon-mark.svg",
                alt: "NothingMusic",
                width: 28,
                height: 36,
                style: {
                    borderRadius: 6,
                    objectFit: 'contain'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 'hero-cinema',
            title: 'NothingCinema',
            badge: '4K Peer Stream',
            subdomain: 'cinema.nothingbox.io',
            rotation: '2deg',
            variant: 'amber',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                size: 28,
                color: "#111827",
                strokeWidth: 2.2
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "landing-hero",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandHeroEmblem,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoFrame,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            size: 96,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainHeroLogo,
                            id: "landing-hero-logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textBlock,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainHeadline,
                            children: [
                                "NothingBox Labs",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].periodAccent,
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 106,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeadline,
                            children: "Engineered for raw browser power. Zero cloud servers."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodyDescription,
                            children: "A breakthrough ecosystem of decentralized web applications running purely inside your hardware. From encrypted peer-to-peer communications and 50GB file transfers to high-fidelity audio and 4K cinema streaming. No accounts, no telemetry, zero server dependencies."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flagshipStrip,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlagshipCardDeck$2f$FlagshipCardDeck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlagshipCardDeck"], {
                        cards: flagshipCards,
                        onCardClick: scrollTo
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "hero-cta-explore",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                            onClick: ()=>scrollTo('hero-chat'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Explore Flagship Suite"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "hero-cta-security",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                            onClick: ()=>scrollTo('trust-compatibility'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Security Architecture"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricsRibbon,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricIconWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        size: 18,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconAmber
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                            children: "0 Cloud Servers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "100% local browser execution"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricDivider
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricIconWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                        size: 18,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                            children: "Direct P2P Mesh"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "Browser-to-browser WebRTC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricDivider
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricIconWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 18,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                            children: "End-to-End Encrypted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "P2P WebRTC & WebCrypto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricDivider
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricIconWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 18,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconPurple
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                            children: "Hardware Native"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "OPFS & WebCodecs performance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollDownIndicator,
                    onClick: ()=>scrollTo('hero-chat'),
                    "aria-label": "Scroll to explore NothingBox Labs products",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollText,
                            children: "Scroll to explore"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 18,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollChevron
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LandingHero;
var _c;
__turbopack_context__.k.register(_c, "LandingHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
const Logo = ({ size = 32, className = '', id, style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: "/logo.svg",
        alt: "NothingBox Labs Logo",
        id: id,
        width: size,
        height: size,
        className: className,
        priority: true,
        unoptimized: true,
        style: {
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'contain',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: 0,
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/components/Logo/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductFeatureCards/ProductFeatureCards.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amberGlow": "ProductFeatureCards-module__RW_FOq__amberGlow",
  "audioSpecBox": "ProductFeatureCards-module__RW_FOq__audioSpecBox",
  "badgeRow": "ProductFeatureCards-module__RW_FOq__badgeRow",
  "benchmarkBox": "ProductFeatureCards-module__RW_FOq__benchmarkBox",
  "benchmarkHeader": "ProductFeatureCards-module__RW_FOq__benchmarkHeader",
  "benchmarkLabels": "ProductFeatureCards-module__RW_FOq__benchmarkLabels",
  "benchmarkVal": "ProductFeatureCards-module__RW_FOq__benchmarkVal",
  "blueGlow": "ProductFeatureCards-module__RW_FOq__blueGlow",
  "cardBadge": "ProductFeatureCards-module__RW_FOq__cardBadge",
  "cardDesc": "ProductFeatureCards-module__RW_FOq__cardDesc",
  "cardHeader": "ProductFeatureCards-module__RW_FOq__cardHeader",
  "cardHighlights": "ProductFeatureCards-module__RW_FOq__cardHighlights",
  "cardIconWrap": "ProductFeatureCards-module__RW_FOq__cardIconWrap",
  "cardTitle": "ProductFeatureCards-module__RW_FOq__cardTitle",
  "cardsContainer": "ProductFeatureCards-module__RW_FOq__cardsContainer",
  "checkIcon": "ProductFeatureCards-module__RW_FOq__checkIcon",
  "cyanGlow": "ProductFeatureCards-module__RW_FOq__cyanGlow",
  "featureCard": "ProductFeatureCards-module__RW_FOq__featureCard",
  "flowLine": "ProductFeatureCards-module__RW_FOq__flowLine",
  "flowNode": "ProductFeatureCards-module__RW_FOq__flowNode",
  "flowTag": "ProductFeatureCards-module__RW_FOq__flowTag",
  "greenGlow": "ProductFeatureCards-module__RW_FOq__greenGlow",
  "highlightCard": "ProductFeatureCards-module__RW_FOq__highlightCard",
  "highlightItem": "ProductFeatureCards-module__RW_FOq__highlightItem",
  "highlightText": "ProductFeatureCards-module__RW_FOq__highlightText",
  "iconAmber": "ProductFeatureCards-module__RW_FOq__iconAmber",
  "iconBlue": "ProductFeatureCards-module__RW_FOq__iconBlue",
  "iconCyan": "ProductFeatureCards-module__RW_FOq__iconCyan",
  "iconGreen": "ProductFeatureCards-module__RW_FOq__iconGreen",
  "iconOrange": "ProductFeatureCards-module__RW_FOq__iconOrange",
  "iconPurple": "ProductFeatureCards-module__RW_FOq__iconPurple",
  "miniStatLbl": "ProductFeatureCards-module__RW_FOq__miniStatLbl",
  "miniStatNum": "ProductFeatureCards-module__RW_FOq__miniStatNum",
  "nodeLabel": "ProductFeatureCards-module__RW_FOq__nodeLabel",
  "nodeSub": "ProductFeatureCards-module__RW_FOq__nodeSub",
  "orangeBar": "ProductFeatureCards-module__RW_FOq__orangeBar",
  "orangeGlow": "ProductFeatureCards-module__RW_FOq__orangeGlow",
  "progressBarFill": "ProductFeatureCards-module__RW_FOq__progressBarFill",
  "progressBarWrap": "ProductFeatureCards-module__RW_FOq__progressBarWrap",
  "pulseDot": "ProductFeatureCards-module__RW_FOq__pulseDot",
  "purpleGlow": "ProductFeatureCards-module__RW_FOq__purpleGlow",
  "specLabel": "ProductFeatureCards-module__RW_FOq__specLabel",
  "specMetric": "ProductFeatureCards-module__RW_FOq__specMetric",
  "specMetricDivider": "ProductFeatureCards-module__RW_FOq__specMetricDivider",
  "specValue": "ProductFeatureCards-module__RW_FOq__specValue",
  "statMiniCard": "ProductFeatureCards-module__RW_FOq__statMiniCard",
  "statsPillRow": "ProductFeatureCards-module__RW_FOq__statsPillRow",
  "techPill": "ProductFeatureCards-module__RW_FOq__techPill",
  "visualFlow": "ProductFeatureCards-module__RW_FOq__visualFlow",
});
}),
"[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFeatureCards",
    ()=>ProductFeatureCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductFeatureCards/ProductFeatureCards.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
'use client';
;
;
;
const ProductFeatureCards = ({ product, onOpenSpecs })=>{
    if (product.id === 'chat-app') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blueGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "Curve25519 + AES-256"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "Zero-Knowledge Cryptography"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Messages, attachments, and calls are encrypted on the sender device before transmitting. No private keys or unencrypted payloads ever touch a central database."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualFlow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowNode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeLabel,
                                            children: "Client A"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeSub,
                                            children: "Local KeyGen"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowLine,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowTag,
                                            children: "Direct P2P E2EE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pulseDot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowNode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeLabel,
                                            children: "Client B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeSub,
                                            children: "Decrypted on SSD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHighlights,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Double-ratchet session forward secrecy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Biometric Passkey WebAuthn unlock"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amberGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconAmber
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "Google Cloud Grounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "In-Conversation Intelligence"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Query live Google Maps Places and execute multilingual translation without switching apps. Rich interactive cards render seamlessly inside the conversation."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsPillRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "100+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "Languages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "< 50ms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "POI Latency"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "0 Ads"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "No Trackers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "Pure Client Memory"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "Ephemeral Data Sovereignty"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Your entire message history resides inside IndexedDB and RAM. Closing your browser or clearing storage permanently wipes data with zero server-side ghost backups."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "No Phone Required"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "No Email Needed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "Self-Hostable"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (product.id === 'p2p-transfer') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blueGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "64KB Binary Slicing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "Zero-Cloud 50GB Pipeline"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Bypasses cloud upload limits entirely. Files are read locally into ArrayBuffers and streamed over direct WebRTC SCTP data channels directly into peer storage."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Direct LAN / WiFi Transfer Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkVal,
                                            children: "Up to 850 Mbps"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarWrap,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarFill,
                                        style: {
                                            width: '92%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkLabels,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Standard Cloud: ~45 Mbps"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightText,
                                            children: "NothingDrop: Full Wire-Speed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHighlights,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "SHA-256 automated hash integrity validation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Zero third-party storage fees or bandwith caps"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cyanGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconCyan
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "AirDrop Universal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "Zero-Setup Peer Discovery"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Open NothingDrop on any iOS, Android, Mac, or Windows machine on the same network to auto-discover peers instantly with one-tap QR handshake codes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsPillRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "Driver Installs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "OS Platforms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "100%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "Browser Native"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "Backpressure Throttling"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "Dynamic Buffer Management"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Intelligent browser backpressure flow control ensures smooth transfers of large files without exhausting device RAM or locking up user interface threads."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "Web Streams API"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "SCTP Ordered Packets"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "Zero Heap Bloat"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (product.id === 'music-player') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purpleGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconPurple
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "FileSystemSyncAccessHandle"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "OPFS Virtual RAM Engine"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Streams directly from the browser's Origin Private File System using low-level synchronous access handles. Cache gigabytes of lossless audio while maintaining a lightweight ~118MB memory footprint."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].audioSpecBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specMetric,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                            children: "Sampling Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                            children: "192 kHz Master"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specMetricDivider
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specMetric,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                            children: "Bit Depth"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                            children: "24-Bit Studio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specMetricDivider
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specMetric,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                            children: "Latency"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                            children: "< 5ms Buffer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHighlights,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Native support for FLAC, ALAC, WAV, & DSD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "100% offline playback with zero network queries"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blueGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "DSP Processing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "10-Band Studio DSP Equalizer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Hardware-accelerated Web Audio API nodes provide precision 10-band equalization, spatial stereo widening, and dynamic loudness normalization."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsPillRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "Bands"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "0.01%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "THD Distortion"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                            children: "Gapless"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                            children: "Transitions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenGlow}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 22,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                    children: "Private Listening"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "100% Client-Side Privacy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                            children: "Your listening habits, library playlists, and local files remain strictly confidential. No tracking algorithms or algorithmic profiling."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "Local IndexedDB Metadata"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "Cover Art Extraction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                    children: "No Cloud Sync"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Fallback: video-player / NothingCinema
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orangeGlow}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                    size: 22,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconOrange
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                children: "WebCodecs HW Acceleration"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Hardware-Accelerated 4K Engine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                        children: "Leverages modern GPU decode pipelines via WebCodecs and WebGPU shaders to play demanding 4K 60fps HDR MKV and MP4 files directly in the browser with silky smooth playback."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "4K 60 FPS Decoding Performance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkVal,
                                        children: "0 Frame Drops"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarWrap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orangeBar}`,
                                    style: {
                                        width: '96%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benchmarkLabels,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "CPU Load: ~8%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightText,
                                        children: "GPU VRAM Decoding Active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHighlights,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 14,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SubStation Alpha (.ass) vector subtitle rendering"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 14,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Multi-audio track switching & spatial audio support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purpleGlow}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    size: 22,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconPurple
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                children: "Watch Party P2P"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Sub-15ms Timestamp Sync"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                        children: "Stream video to authorized peers with ultra-low latency WebRTC data channels. Synchronized playback ensures you and your viewers experience frame-accurate cinema."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsPillRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                        children: "< 15ms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                        children: "Sync Drift"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                        children: "E2EE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                        children: "Data Channel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statMiniCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatNum,
                                        children: "0 MB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].miniStatLbl,
                                        children: "Server Storage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIconWrap} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenGlow}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 22,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBadge,
                                children: "No Subscriptions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                        children: "Complete Codec Freedom"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                        children: "No bandwidth throttling, no DRM restrictions, and zero compression artifacts. Run all your local media files with pure native visual fidelity."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                children: "HDR10 / Dolby Vision"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                children: "10-bit Color Depth"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductFeatureCards$2f$ProductFeatureCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                children: "Audio Passthrough"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductFeatureCards/ProductFeatureCards.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductFeatureCards;
var _c;
__turbopack_context__.k.register(_c, "ProductFeatureCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductModal/ProductModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "archCard": "ProductModal-module__ndtGLq__archCard",
  "archGrid": "ProductModal-module__ndtGLq__archGrid",
  "archIconBlue": "ProductModal-module__ndtGLq__archIconBlue",
  "archIconCyan": "ProductModal-module__ndtGLq__archIconCyan",
  "archIconGreen": "ProductModal-module__ndtGLq__archIconGreen",
  "archIconPurple": "ProductModal-module__ndtGLq__archIconPurple",
  "archTitleRow": "ProductModal-module__ndtGLq__archTitleRow",
  "archValue": "ProductModal-module__ndtGLq__archValue",
  "backdrop": "ProductModal-module__ndtGLq__backdrop",
  "checkIcon": "ProductModal-module__ndtGLq__checkIcon",
  "closeBtn": "ProductModal-module__ndtGLq__closeBtn",
  "fadeIn": "ProductModal-module__ndtGLq__fadeIn",
  "featureDesc": "ProductModal-module__ndtGLq__featureDesc",
  "featureInfo": "ProductModal-module__ndtGLq__featureInfo",
  "featureRow": "ProductModal-module__ndtGLq__featureRow",
  "featureTitle": "ProductModal-module__ndtGLq__featureTitle",
  "featuresList": "ProductModal-module__ndtGLq__featuresList",
  "headerInfo": "ProductModal-module__ndtGLq__headerInfo",
  "modalBody": "ProductModal-module__ndtGLq__modalBody",
  "modalCard": "ProductModal-module__ndtGLq__modalCard",
  "modalFooter": "ProductModal-module__ndtGLq__modalFooter",
  "modalHeader": "ProductModal-module__ndtGLq__modalHeader",
  "modalLogo": "ProductModal-module__ndtGLq__modalLogo",
  "purposeText": "ProductModal-module__ndtGLq__purposeText",
  "sectionBlock": "ProductModal-module__ndtGLq__sectionBlock",
  "sectionTitle": "ProductModal-module__ndtGLq__sectionTitle",
  "specKey": "ProductModal-module__ndtGLq__specKey",
  "specTableRow": "ProductModal-module__ndtGLq__specTableRow",
  "specVal": "ProductModal-module__ndtGLq__specVal",
  "specsTable": "ProductModal-module__ndtGLq__specsTable",
  "subdomain": "ProductModal-module__ndtGLq__subdomain",
  "tagGroup": "ProductModal-module__ndtGLq__tagGroup",
  "title": "ProductModal-module__ndtGLq__title",
  "titleRow": "ProductModal-module__ndtGLq__titleRow",
});
}),
"[project]/src/components/ProductModal/ProductModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductModal",
    ()=>ProductModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductModal/ProductModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/memory-stick.js [app-client] (ecmascript) <export default as MemoryStick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
'use client';
;
;
;
;
;
;
;
const ProductModal = ({ product, onClose })=>{
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "product-spec-modal",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCard,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInfo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagGroup,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "subtle",
                                        children: product.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleRow,
                                    children: [
                                        product.id === 'chat-app' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/nothingchat/icon-mark.svg",
                                            alt: "NothingChat",
                                            width: 36,
                                            height: 36,
                                            style: {
                                                borderRadius: 8,
                                                objectFit: 'contain'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : product.id === 'music-player' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/nothingmusic/icon-mark.svg",
                                            alt: "NothingMusic",
                                            width: 28,
                                            height: 36,
                                            style: {
                                                borderRadius: 6,
                                                objectFit: 'contain'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                            size: 36,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLogo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                            children: product.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subdomain,
                                    children: product.subdomain
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "close-spec-modal-btn",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            "aria-label": "Close modal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBody,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionBlock,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                    children: "Core Mission & Purpose"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purposeText,
                                    children: product.corePurpose
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archTitleRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archIconBlue
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Storage Strategy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archValue,
                                            children: product.architecture.storageStrategy
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archTitleRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archIconCyan
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Network & Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archValue,
                                            children: product.architecture.networkLayer
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archTitleRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$memory$2d$stick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MemoryStick$3e$__["MemoryStick"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archIconPurple
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Memory Management"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archValue,
                                            children: product.architecture.memoryManagement
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archTitleRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archIconOrange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Technology Stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillList,
                                            children: product.architecture.technology.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionBlock,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                    children: "Architectural Advantages"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsList,
                                    children: product.architecture.keyBenefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: benefit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalFooter,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: product.subdomainTarget,
                            target: "_blank",
                            rel: "noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subdomainExternalLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Target: ",
                                        product.subdomain
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "md",
                            onClick: onClose,
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductModal;
var _c;
__turbopack_context__.k.register(_c, "ProductModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "capCheckOk": "TrustAndCompatibility-module__K6ng5q__capCheckOk",
  "capCheckWarn": "TrustAndCompatibility-module__K6ng5q__capCheckWarn",
  "capDesc": "TrustAndCompatibility-module__K6ng5q__capDesc",
  "capInfo": "TrustAndCompatibility-module__K6ng5q__capInfo",
  "capLeft": "TrustAndCompatibility-module__K6ng5q__capLeft",
  "capName": "TrustAndCompatibility-module__K6ng5q__capName",
  "capStandard": "TrustAndCompatibility-module__K6ng5q__capStandard",
  "capStatusWrap": "TrustAndCompatibility-module__K6ng5q__capStatusWrap",
  "capTitleLine": "TrustAndCompatibility-module__K6ng5q__capTitleLine",
  "capabilitiesList": "TrustAndCompatibility-module__K6ng5q__capabilitiesList",
  "capabilityRow": "TrustAndCompatibility-module__K6ng5q__capabilityRow",
  "compatibilityPanel": "TrustAndCompatibility-module__K6ng5q__compatibilityPanel",
  "container": "TrustAndCompatibility-module__K6ng5q__container",
  "eyebrowIcon": "TrustAndCompatibility-module__K6ng5q__eyebrowIcon",
  "eyebrowPill": "TrustAndCompatibility-module__K6ng5q__eyebrowPill",
  "footerNote": "TrustAndCompatibility-module__K6ng5q__footerNote",
  "header": "TrustAndCompatibility-module__K6ng5q__header",
  "headline": "TrustAndCompatibility-module__K6ng5q__headline",
  "livePulse": "TrustAndCompatibility-module__K6ng5q__livePulse",
  "panelFooter": "TrustAndCompatibility-module__K6ng5q__panelFooter",
  "panelHeader": "TrustAndCompatibility-module__K6ng5q__panelHeader",
  "panelSubtitle": "TrustAndCompatibility-module__K6ng5q__panelSubtitle",
  "panelTitle": "TrustAndCompatibility-module__K6ng5q__panelTitle",
  "panelTitleGroup": "TrustAndCompatibility-module__K6ng5q__panelTitleGroup",
  "pillarCard": "TrustAndCompatibility-module__K6ng5q__pillarCard",
  "pillarDesc": "TrustAndCompatibility-module__K6ng5q__pillarDesc",
  "pillarIconBlue": "TrustAndCompatibility-module__K6ng5q__pillarIconBlue",
  "pillarIconGreen": "TrustAndCompatibility-module__K6ng5q__pillarIconGreen",
  "pillarIconPurple": "TrustAndCompatibility-module__K6ng5q__pillarIconPurple",
  "pillarIconWrap": "TrustAndCompatibility-module__K6ng5q__pillarIconWrap",
  "pillarTitle": "TrustAndCompatibility-module__K6ng5q__pillarTitle",
  "pillarsGrid": "TrustAndCompatibility-module__K6ng5q__pillarsGrid",
  "pulseAnim": "TrustAndCompatibility-module__K6ng5q__pulseAnim",
  "section": "TrustAndCompatibility-module__K6ng5q__section",
  "statusBadgeActive": "TrustAndCompatibility-module__K6ng5q__statusBadgeActive",
  "statusBadgeFallback": "TrustAndCompatibility-module__K6ng5q__statusBadgeFallback",
  "statusLivePill": "TrustAndCompatibility-module__K6ng5q__statusLivePill",
  "subhead": "TrustAndCompatibility-module__K6ng5q__subhead",
  "verifiedBadge": "TrustAndCompatibility-module__K6ng5q__verifiedBadge",
  "verifiedIcon": "TrustAndCompatibility-module__K6ng5q__verifiedIcon",
  "verifiedSub": "TrustAndCompatibility-module__K6ng5q__verifiedSub",
  "verifiedText": "TrustAndCompatibility-module__K6ng5q__verifiedText",
  "verifiedTitle": "TrustAndCompatibility-module__K6ng5q__verifiedTitle",
  "zapIcon": "TrustAndCompatibility-module__K6ng5q__zapIcon",
});
}),
"[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrustAndCompatibility",
    ()=>TrustAndCompatibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server-off.js [app-client] (ecmascript) <export default as ServerOff>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TrustAndCompatibility = ()=>{
    _s();
    const [browserInfo, setBrowserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Detecting browser...');
    const [capabilities, setCapabilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrustAndCompatibility.useEffect": ()=>{
            // Detect browser environment
            if ("TURBOPACK compile-time truthy", 1) {
                const ua = navigator.userAgent;
                let detectedName = 'Modern Web Browser';
                if (ua.includes('Chrome') && !ua.includes('Edg')) detectedName = 'Google Chrome / Chromium';
                else if (ua.includes('Safari') && !ua.includes('Chrome')) detectedName = 'Apple Safari';
                else if (ua.includes('Firefox')) detectedName = 'Mozilla Firefox';
                else if (ua.includes('Edg')) detectedName = 'Microsoft Edge';
                else if (ua.includes('Brave')) detectedName = 'Brave Browser';
                setBrowserInfo(detectedName);
                // Check capabilities
                const hasWebRTC = typeof window.RTCPeerConnection !== 'undefined';
                const hasOPFS = 'storage' in navigator && typeof navigator.storage?.getDirectory === 'function';
                const hasWebAudio = typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined';
                const hasWebCrypto = typeof window.crypto?.subtle !== 'undefined';
                const hasWebCodecs = 'VideoDecoder' in window;
                setCapabilities([
                    {
                        name: 'WebRTC P2P DataChannels',
                        key: 'webrtc',
                        supported: hasWebRTC,
                        standard: 'IETF RFC 8831',
                        description: 'Direct browser-to-browser SCTP tunnels for low latency messaging and 50GB file transfers.'
                    },
                    {
                        name: 'Origin Private File System (OPFS)',
                        key: 'opfs',
                        supported: hasOPFS,
                        standard: 'W3C File System',
                        description: 'High-speed sandboxed virtual disk access for instantaneous audio & video streaming.'
                    },
                    {
                        name: 'WebCrypto Subsystem',
                        key: 'crypto',
                        supported: hasWebCrypto,
                        standard: 'W3C Web Cryptography',
                        description: 'Hardware-backed Curve25519 key derivation and AES-GCM-256 client-side encryption.'
                    },
                    {
                        name: 'WebAudio DSP Pipeline',
                        key: 'audio',
                        supported: hasWebAudio,
                        standard: 'W3C Web Audio API',
                        description: '192 kHz / 24-bit real-time spatial equalization and studio audio synthesis nodes.'
                    },
                    {
                        name: 'WebCodecs GPU Pipeline',
                        key: 'codecs',
                        supported: hasWebCodecs,
                        standard: 'W3C WebCodecs',
                        description: 'Direct GPU hardware-accelerated video decoding for smooth 4K HDR playback.'
                    }
                ]);
                setIsReady(true);
            }
        }
    }["TrustAndCompatibility.useEffect"], []);
    const trustPillars = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ServerOff$3e$__["ServerOff"], {
                size: 22,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarIconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Zero Cloud Storage',
            desc: 'No centralized database holds your files or messages. All data is processed in local RAM and discarded upon tab closure.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 22,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarIconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'End-to-End Encrypted',
            desc: 'Direct P2P streams are sealed using Curve25519 key exchanges and AES-256-GCM. Intermediate nodes cannot inspect traffic.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                size: 22,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarIconPurple
            }, void 0, false, {
                fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: 'Zero Tracking & Cookies',
            desc: 'No ad networks, behavioral telemetry, or session profiling. Your activity remains completely private to your device.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "trust-compatibility",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowPill,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 14,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Architecture & Security Audit"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                            children: "Privacy by mathematical proof, not policy promises."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subhead,
                            children: "NothingBox Labs is built on a zero-knowledge, zero-server paradigm. Your browser is the application server, computing environment, and private cryptographic vault."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarsGrid,
                    children: trustPillars.map((pillar, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarIconWrap,
                                    children: pillar.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarTitle,
                                    children: pillar.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillarDesc,
                                    children: pillar.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].compatibilityPanel,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelTitleGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusLivePill,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].livePulse
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveLabel,
                                                    children: "Live Device Detection"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelTitle,
                                            children: [
                                                browserInfo,
                                                " Compatibility Status"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelSubtitle,
                                            children: "Verified hardware capabilities required to execute the browser-native computing suite:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedBadge,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 18,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedText,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedTitle,
                                                    children: "Hardware Verified"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedSub,
                                                    children: "100% Native Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capabilitiesList,
                            children: capabilities.map((cap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capabilityRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capLeft,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: cap.supported ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capCheckOk : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capCheckWarn,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capTitleLine,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capName,
                                                                    children: cap.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capStandard,
                                                                    children: cap.standard
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capDesc,
                                                            children: cap.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].capStatusWrap,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: cap.supported ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadgeActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadgeFallback,
                                                children: cap.supported ? 'Supported' : 'Fallback Ready'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, cap.key, true, {
                                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelFooter,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerNote,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        size: 14,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustAndCompatibility$2f$TrustAndCompatibility$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zapIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Zero external plugins or drivers are needed. All processing operates within standard web security sandboxes."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TrustAndCompatibility/TrustAndCompatibility.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TrustAndCompatibility, "8MR6NYJo4mq1Viz5bpKpf0VQxEs=");
_c = TrustAndCompatibility;
var _c;
__turbopack_context__.k.register(_c, "TrustAndCompatibility");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/productsData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORE_PRODUCTS",
    ()=>CORE_PRODUCTS,
    "SUBDOMAIN_REGISTRY",
    ()=>SUBDOMAIN_REGISTRY
]);
const CORE_PRODUCTS = [
    {
        id: 'chat-app',
        slug: 'chat',
        subdomain: 'chat.nothingboxlabs.com',
        title: 'NothingChat',
        tagline: 'Instant messaging engineered with Apple-grade precision and native APIs.',
        category: 'Flagship Communication',
        status: 'In Development',
        corePurpose: 'A high-performance, minimalist messaging platform built for instant, feature-rich communication with zero lag and native media handling.',
        iconName: 'MessageSquare',
        accentColor: '#0071e3',
        gradient: 'linear-gradient(135deg, #0071e3 0%, #4facfe 100%)',
        features: [
            {
                id: 'c-1',
                title: 'Rich Media & Voice Notes',
                description: 'Send high-res photos, ultra-crisp video, fluid stickers, and recorded waveform voice notes directly in thread.',
                badge: 'Zero Compression Loss',
                apiIntegration: 'Web Audio API + Canvas Waveforms'
            },
            {
                id: 'c-2',
                title: 'Interactive Google Maps Pinning',
                description: 'Share live GPS coordinates, search places, or drop interactive pins that render directly inside message bubbles without opening external browsers.',
                badge: 'Google Maps Platform',
                apiIntegration: 'Google Maps Places & Geolocation API'
            },
            {
                id: 'c-3',
                title: 'In-Chat Message Translation',
                description: 'Long-press any message to translate immediately into your preferred language. Pre-configure default target dialects seamlessly in settings.',
                badge: 'Google Translate API',
                apiIntegration: 'Cloud Translation Engine'
            },
            {
                id: 'c-4',
                title: 'Precision YouTube Audio Snippets',
                description: 'Search any track and send either the full song or isolate an exact timestamp snippet (e.g. 01:14 - 01:42). Receivers listen to the trimmed hook instantly on tap.',
                badge: 'Timestamp Trimmer',
                apiIntegration: 'YouTube IFrame & Media Streams'
            }
        ],
        architecture: {
            technology: [
                'Next.js React Frontend',
                'Node.js WebSocket Engine',
                'Web Audio API',
                'Google Cloud APIs'
            ],
            storageStrategy: 'Encrypted device cache with lightweight message logs',
            networkLayer: 'Persistent Bi-directional WebSockets + REST API fallback',
            memoryManagement: 'Lazy DOM unmounting for 100k+ messages with virtualized scrolling',
            keyBenefits: [
                'Instantaneous UI response matching iOS iMessage tactile feel',
                'Direct in-line map and translation interaction without app-switching',
                'Rich multimedia without heavy memory overhead'
            ]
        },
        subdomainTarget: 'https://chat.nothingboxlabs.com'
    },
    {
        id: 'p2p-transfer',
        slug: 'transfer',
        subdomain: 'transfer.nothingboxlabs.com',
        title: 'NothingDrop P2P',
        tagline: 'Direct device-to-device browser transfer with 0% server storage.',
        category: 'Serverless Utility',
        status: 'Prototype Ready',
        corePurpose: 'Direct, serverless, and secure file sharing between two browsers powered by WebRTC Data Channels — zero cloud footprint, zero file limits.',
        iconName: 'Share2',
        accentColor: '#30b0c7',
        gradient: 'linear-gradient(135deg, #30b0c7 0%, #00f2fe 100%)',
        features: [
            {
                id: 'p-1',
                title: 'WebRTC Direct Data Channels',
                description: 'Establishes a peer-to-peer cryptographic tunnel directly between sender and receiver browsers with zero relay middlemen.',
                badge: 'P2P Mesh',
                apiIntegration: 'RTCDataChannel / STUN & TURN Mesh'
            },
            {
                id: 'p-2',
                title: 'Zero Server Storage & No Limits',
                description: 'Transfers bypass cloud storage completely. No 2GB file caps, no data retention, 100% privacy, and zero server bandwidth overhead.',
                badge: 'Unlimited File Size',
                apiIntegration: 'Stream Chunking API'
            },
            {
                id: 'p-3',
                title: 'Instant QR / Link Pairing',
                description: 'Pair two smartphones, tablets, or Macbooks in seconds via a one-time dynamic QR code or encrypted peer link.',
                badge: 'One-Tap Connect',
                apiIntegration: 'Web Crypto API + Signaling Relay'
            },
            {
                id: 'p-4',
                title: 'Browser Backpressure Control',
                description: 'Streams binary chunks synchronously to prevent receiver buffer overflow, maintaining steady multi-gigabit throughput.',
                badge: 'Hardware Adaptive',
                apiIntegration: 'Streams API & ArrayBuffers'
            }
        ],
        architecture: {
            technology: [
                'WebRTC Data Channels',
                'Web Crypto API',
                'WritableStreams',
                'Next.js Client Engine'
            ],
            storageStrategy: 'Zero disk storage on server. Transferred direct to memory/disk',
            networkLayer: 'STUN / ICE Negotiation for Direct NAT traversal',
            memoryManagement: 'Fixed 64KB chunk slicing preventing browser RAM exhaustion',
            keyBenefits: [
                '100% privacy: Files never touch a central server',
                'Transfers 50GB files without server costs',
                'AirDrop simplicity right from any modern browser'
            ]
        },
        subdomainTarget: 'https://transfer.nothingboxlabs.com'
    },
    {
        id: 'music-player',
        slug: 'music',
        subdomain: 'music.nothingboxlabs.com',
        title: 'NothingMusic',
        tagline: 'Distraction-free audio streaming cached locally in browser OPFS.',
        category: 'Audio Streaming',
        status: 'In Development',
        corePurpose: 'A minimalist, high-end audio streaming utility powered by YouTube API with zero video ads and persistent Origin Private File System caching.',
        iconName: 'Music',
        accentColor: '#af52de',
        gradient: 'linear-gradient(135deg, #af52de 0%, #ff2d55 100%)',
        features: [
            {
                id: 'm-1',
                title: 'Ad-Free Minimalist UI',
                description: 'Streams pure high-fidelity audio tracks without video clutter, commercial banners, or interruptions, styled like Apple Music.',
                badge: 'Ad-Free Experience',
                apiIntegration: 'YouTube Data & Audio Streaming Core'
            },
            {
                id: 'm-2',
                title: 'OPFS Audio Caching System',
                description: 'Streamed audio is automatically cached inside the browser’s Origin Private File System for zero-buffering playback on network dips.',
                badge: 'Origin Private File System',
                apiIntegration: 'FileSystemDirectoryHandle (OPFS)'
            },
            {
                id: 'm-3',
                title: 'Bypasses Token Expiration',
                description: 'Cached tracks eliminate YouTube temporary stream token expiration, enabling repeat plays instantly without re-requesting stream URLs.',
                badge: 'Smart Expiry Bypass',
                apiIntegration: 'Cache Persistence Layer'
            },
            {
                id: 'm-4',
                title: 'Offline-Ready Track Library',
                description: 'Previously heard songs load instantaneously even on spotty flight Wi-Fi or offline subway commutes.',
                badge: 'Instant Playback',
                apiIntegration: 'Web Audio Graph + MediaSession API'
            }
        ],
        architecture: {
            technology: [
                'OPFS (Origin Private File System)',
                'Web Audio API',
                'MediaSession API',
                'YouTube Core Proxy'
            ],
            storageStrategy: 'Browser OPFS virtual partition (multi-gigabyte audio cache)',
            networkLayer: 'Byte-range audio requests with streaming fetch pipeline',
            memoryManagement: 'OPFS streaming file handles with minimal heap memory footstep',
            keyBenefits: [
                'Zero buffering once song cached to OPFS',
                'Background lockscreen controls via native MediaSession API',
                'Apple Music fluid aesthetic without video bloat'
            ]
        },
        subdomainTarget: 'https://music.nothingboxlabs.com'
    },
    {
        id: 'video-player',
        slug: 'stream',
        subdomain: 'stream.nothingboxlabs.com',
        title: 'NothingCinema 4K',
        tagline: 'Desktop-grade chunk-streaming video player with OPFS Virtual RAM.',
        category: 'High-Performance Media',
        status: 'Architecture Finalized',
        corePurpose: 'Desktop-grade media player inside the web browser capable of playing massive 15–20 GB 4K movies with zero memory crashes and instant seeking.',
        iconName: 'Film',
        accentColor: '#ff9500',
        gradient: 'linear-gradient(135deg, #ff9500 0%, #ff3b30 100%)',
        features: [
            {
                id: 'v-1',
                title: 'File System Access API Picker',
                description: 'Securely mounts local device files via showOpenFilePicker without requiring time-consuming server uploads or file copies.',
                badge: 'Local Disk Native',
                apiIntegration: 'Window.showOpenFilePicker'
            },
            {
                id: 'v-2',
                title: 'OPFS Virtual RAM Buffering',
                description: 'Streams chunks into a 4–5 GB OPFS Virtual RAM buffer, completely preventing browser Out-Of-Memory (OOM) crashes on 20GB files.',
                badge: 'Virtual RAM Engine',
                apiIntegration: 'OPFS SyncAccessHandle & Circular Ring Buffer'
            },
            {
                id: 'v-3',
                title: 'Zero-Lag Scrubbing & Seeking',
                description: 'Pre-buffered video chunks inside high-speed OPFS storage allow buttery smooth timeline scrubbing forward and backward.',
                badge: 'Instant Frame Seek',
                apiIntegration: 'MediaSource Extensions (MSE)'
            },
            {
                id: 'v-4',
                title: 'Smart Device Quota Detection',
                description: 'Dynamically measures device storage headroom: allocates up to 5GB on Desktop/Android, safely calibrating to 1GB on iOS Safari.',
                badge: 'Platform Adaptive',
                apiIntegration: 'navigator.storage.estimate()'
            }
        ],
        architecture: {
            technology: [
                'File System Access API',
                'OPFS Virtual RAM Buffering',
                'MediaSource Extensions (MSE)',
                'Web Workers'
            ],
            storageStrategy: 'Dynamic 1GB–5GB circular buffer inside high-speed OPFS',
            networkLayer: 'Zero network — 100% local hardware bus acceleration',
            memoryManagement: 'Dedicated Web Worker handles demuxing and chunk streaming off the main UI thread',
            keyBenefits: [
                'Play 20GB 4K MKV/MP4 files in Chrome/Safari without stuttering',
                'Zero RAM ballooning; stable ~120MB heap allocation',
                'HDR tone-mapping and Apple Pro Display XDR color profiling support'
            ]
        },
        subdomainTarget: 'https://stream.nothingboxlabs.com'
    }
];
const SUBDOMAIN_REGISTRY = [
    {
        id: 'sub-1',
        name: 'NothingChat',
        subdomain: 'chat.nothingboxlabs.com',
        category: 'Core Flagship',
        status: 'Active Dev',
        description: 'Instant communication with Google Maps live tracking, real-time message translation & YouTube audio clipping.',
        portOrRoute: 'Port 3001'
    },
    {
        id: 'sub-2',
        name: 'NothingDrop',
        subdomain: 'transfer.nothingboxlabs.com',
        category: 'Core Flagship',
        status: 'Prototype',
        description: 'P2P browser-to-browser serverless file transfer with WebRTC Data Channels and infinite file scale.',
        portOrRoute: 'Port 3002'
    },
    {
        id: 'sub-3',
        name: 'NothingMusic',
        subdomain: 'music.nothingboxlabs.com',
        category: 'Core Flagship',
        status: 'Active Dev',
        description: 'Minimalist audio streamer with OPFS file caching, eliminating ads and buffering completely.',
        portOrRoute: 'Port 3003'
    },
    {
        id: 'sub-4',
        name: 'NothingCinema',
        subdomain: 'stream.nothingboxlabs.com',
        category: 'Core Flagship',
        status: 'Architecture',
        description: '4K local chunk-streaming video player with OPFS 5GB Virtual RAM buffer for 20GB files.',
        portOrRoute: 'Port 3004'
    },
    {
        id: 'sub-5',
        name: 'NothingAuth',
        subdomain: 'auth.nothingboxlabs.com',
        category: 'Infrastructure',
        status: 'Planned Subdomain',
        description: 'Unified Single Sign-On (SSO) passkey authentication bridge for all NothingBox subdomains.',
        portOrRoute: 'Port 3005'
    },
    {
        id: 'sub-6',
        name: 'NothingVault',
        subdomain: 'vault.nothingboxlabs.com',
        category: 'Utilities',
        status: 'Planned Subdomain',
        description: 'Client-side zero-knowledge encrypted credential and document vault using Web Crypto.',
        portOrRoute: 'Port 3006'
    },
    {
        id: 'sub-7',
        name: 'NothingDocs',
        subdomain: 'docs.nothingboxlabs.com',
        category: 'Utilities',
        status: 'Planned Subdomain',
        description: 'Local-first Markdown and rich document composer with CRDT live peer collaboration.',
        portOrRoute: 'Port 3007'
    },
    {
        id: 'sub-8',
        name: 'NothingCode',
        subdomain: 'code.nothingboxlabs.com',
        category: 'Utilities',
        status: 'Planned Subdomain',
        description: 'Browser-based sandboxed code execution runner and TypeScript playground.',
        portOrRoute: 'Port 3008'
    },
    {
        id: 'sub-9',
        name: 'NothingStudio',
        subdomain: 'studio.nothingboxlabs.com',
        category: 'Media & Streaming',
        status: 'Planned Subdomain',
        description: 'In-browser vector graphic and visual asset canvas with SVG export.',
        portOrRoute: 'Port 3009'
    },
    {
        id: 'sub-10',
        name: 'NothingScreen',
        subdomain: 'cast.nothingboxlabs.com',
        category: 'Media & Streaming',
        status: 'Planned Subdomain',
        description: 'Low-latency screen casting and multi-screen wireless display over WebRTC.',
        portOrRoute: 'Port 3010'
    },
    {
        id: 'sub-11',
        name: 'NothingNotes',
        subdomain: 'notes.nothingboxlabs.com',
        category: 'Utilities',
        status: 'Planned Subdomain',
        description: 'Instant scratchpad with bidirectional links, tags, and OPFS local backup.',
        portOrRoute: 'Port 3011'
    },
    {
        id: 'sub-12',
        name: 'NothingStatus',
        subdomain: 'status.nothingboxlabs.com',
        category: 'Infrastructure',
        status: 'Planned Subdomain',
        description: 'Global health monitoring, latency gauges, and uptime telemetry for all subdomains.',
        portOrRoute: 'Port 3012'
    },
    {
        id: 'sub-13',
        name: 'NothingAPI',
        subdomain: 'api.nothingboxlabs.com',
        category: 'Infrastructure',
        status: 'Planned Subdomain',
        description: 'Node.js Express microservices hub, rate limiting, and webhook dispatch.',
        portOrRoute: 'Port 4000'
    },
    {
        id: 'sub-14',
        name: 'NothingRelay',
        subdomain: 'relay.nothingboxlabs.com',
        category: 'Infrastructure',
        status: 'Planned Subdomain',
        description: 'Global STUN / TURN signaling mesh facilitating high-speed P2P traversal.',
        portOrRoute: 'Port 4001'
    },
    {
        id: 'sub-15',
        name: 'NothingCompress',
        subdomain: 'compress.nothingboxlabs.com',
        category: 'Utilities',
        status: 'Planned Subdomain',
        description: 'WebAssembly multi-threaded image and media compression engine.',
        portOrRoute: 'Port 3015'
    },
    {
        id: 'sub-16',
        name: 'NothingDraw',
        subdomain: 'draw.nothingboxlabs.com',
        category: 'Media & Streaming',
        status: 'Planned Subdomain',
        description: 'Infinite collaborative whiteboard with pressure-sensitive Apple Pencil styling.',
        portOrRoute: 'Port 3016'
    },
    {
        id: 'sub-17',
        name: 'NothingSync',
        subdomain: 'sync.nothingboxlabs.com',
        category: 'Infrastructure',
        status: 'Planned Subdomain',
        description: 'Background cross-tab and cross-device sync bus powered by IndexedDB & WebSockets.',
        portOrRoute: 'Port 3017'
    },
    {
        id: 'sub-18',
        name: 'NothingSound',
        subdomain: 'sound.nothingboxlabs.com',
        category: 'Media & Streaming',
        status: 'Planned Subdomain',
        description: 'Spatial 3D audio synthesizer and binaural frequency generator.',
        portOrRoute: 'Port 3018'
    },
    {
        id: 'sub-19',
        name: 'NothingLabX',
        subdomain: 'labx.nothingboxlabs.com',
        category: 'Future Expansion',
        status: 'Planned Subdomain',
        description: 'Experimental WebGPU shaders, neural net inferencing, and cutting-edge browser demos.',
        portOrRoute: 'Port 3019'
    },
    {
        id: 'sub-20',
        name: 'NothingTerminal',
        subdomain: 'sh.nothingboxlabs.com',
        category: 'Future Expansion',
        status: 'Planned Subdomain',
        description: 'WebAssembly Linux shell environment running directly inside browser Web Workers.',
        portOrRoute: 'Port 3020'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1gfckgf._.js.map