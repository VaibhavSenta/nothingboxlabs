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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppleComparison/AppleComparison.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx [app-client] (ecmascript)");
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
                    const elem = document.getElementById('subdomain-carousel');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
                onExploreFree: ()=>{
                    const elem = document.getElementById('free-ecosystem');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: chatProduct,
                theme: "titanium",
                sectionId: "hero-chat",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: dropProduct,
                theme: "ultramarine",
                sectionId: "hero-drop",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: musicProduct,
                theme: "spaceblack",
                sectionId: "hero-music",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleHero"], {
                product: cinemaProduct,
                theme: "obsidian",
                sectionId: "hero-cinema",
                onOpenSpecs: handleOpenSpecs
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplePromoGrid"], {
                onOpenSubdomains: ()=>{
                    const elem = document.getElementById('subdomain-carousel');
                    if (elem) elem.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
                onOpenSpecs: ()=>handleOpenSpecs(chatProduct)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleComparison"], {
                onOpenSpecs: handleOpenSpecsBySlug
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppleSubdomainCarousel"], {}, void 0, false, {
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
"[project]/src/components/AppleComparison/AppleComparison.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnChevron": "AppleComparison-module__FXsNUa__btnChevron",
  "columnActionBtn": "AppleComparison-module__FXsNUa__columnActionBtn",
  "columnHeader": "AppleComparison-module__FXsNUa__columnHeader",
  "comparisonHeaderLogo": "AppleComparison-module__FXsNUa__comparisonHeaderLogo",
  "comparisonSection": "AppleComparison-module__FXsNUa__comparisonSection",
  "container": "AppleComparison-module__FXsNUa__container",
  "eyebrow": "AppleComparison-module__FXsNUa__eyebrow",
  "headerBlock": "AppleComparison-module__FXsNUa__headerBlock",
  "headerLogoWrap": "AppleComparison-module__FXsNUa__headerLogoWrap",
  "headline": "AppleComparison-module__FXsNUa__headline",
  "iconBlue": "AppleComparison-module__FXsNUa__iconBlue",
  "iconCircle": "AppleComparison-module__FXsNUa__iconCircle",
  "iconGreen": "AppleComparison-module__FXsNUa__iconGreen",
  "iconOrange": "AppleComparison-module__FXsNUa__iconOrange",
  "iconPurple": "AppleComparison-module__FXsNUa__iconPurple",
  "matrixGrid": "AppleComparison-module__FXsNUa__matrixGrid",
  "serviceColumn": "AppleComparison-module__FXsNUa__serviceColumn",
  "serviceTagline": "AppleComparison-module__FXsNUa__serviceTagline",
  "serviceTitle": "AppleComparison-module__FXsNUa__serviceTitle",
  "specDivider": "AppleComparison-module__FXsNUa__specDivider",
  "specLabel": "AppleComparison-module__FXsNUa__specLabel",
  "specRow": "AppleComparison-module__FXsNUa__specRow",
  "specValue": "AppleComparison-module__FXsNUa__specValue",
  "specValueHighlight": "AppleComparison-module__FXsNUa__specValueHighlight",
  "specsList": "AppleComparison-module__FXsNUa__specsList",
  "subhead": "AppleComparison-module__FXsNUa__subhead",
});
}),
"[project]/src/components/AppleComparison/AppleComparison.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppleComparison",
    ()=>AppleComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AppleComparison/AppleComparison.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
;
const AppleComparison = ({ onOpenSpecs })=>{
    const services = [
        {
            id: 'chat-app',
            slug: 'nothing-chat',
            name: 'NothingChat',
            tagline: 'Private messaging. Zero footprint.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            accentColor: '#2997ff',
            specs: {
                architecture: 'Direct WebRTC Mesh',
                encryption: '256-bit AES-GCM',
                serverStorage: '0 KB (Zero Server Storage)',
                throughput: '12ms Direct Peer Latency',
                maxPayload: '4K Photos & Voice Memos',
                specialFeature: 'Live Maps & Translate Sync'
            }
        },
        {
            id: 'p2p-transfer',
            slug: 'nothing-drop',
            name: 'NothingDrop',
            tagline: '50GB AirDrop for the open web.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            accentColor: '#30d158',
            specs: {
                architecture: '64KB Chunk Slicing',
                encryption: 'DTLS / SCTP + SHA-256',
                serverStorage: '0 KB (Direct RAM to RAM)',
                throughput: 'Up to 168 MB/s (Local Wi-Fi)',
                maxPayload: '50 GB Single Archive',
                specialFeature: 'Ephemeral Room Link'
            }
        },
        {
            id: 'music-player',
            slug: 'nothing-music',
            name: 'NothingMusic',
            tagline: 'Lossless sound. Local speed.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconPurple
            }, void 0, false, {
                fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            accentColor: '#bf5af2',
            specs: {
                architecture: 'OPFS Native Audio Engine',
                encryption: 'Client-Sandboxed Storage',
                serverStorage: '0 KB (Stored on Device Disk)',
                throughput: '0 ms Seeking Latency',
                maxPayload: '24-bit / 96kHz Lossless',
                specialFeature: 'Zero Bandwidth Re-Stream'
            }
        },
        {
            id: 'video-player',
            slug: 'nothing-cinema',
            name: 'NothingCinema 4K',
            tagline: '4K Master streaming. Zero buffer.',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconOrange
            }, void 0, false, {
                fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            accentColor: '#ff9f0a',
            specs: {
                architecture: 'SyncAccessHandle Virtual RAM',
                encryption: 'Sandboxed Native Buffer',
                serverStorage: '0 KB (Direct FileSystem API)',
                throughput: '60 FPS Unlocked Playback',
                maxPayload: '20 GB+ Master ProRes Video',
                specialFeature: '118 MB Heap Zero-Leak Cap'
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "service-comparison",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comparisonSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBlock,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLogoWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                size: 48,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comparisonHeaderLogo
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: "Compare Services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                            children: "Which NothingBox Labs service is right for you?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subhead,
                            children: "Every service is built without centralized cloud databases, ensuring maximum privacy, zero server retention, and native browser performance."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matrixGrid,
                    children: services.map((srv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceColumn,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].columnHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconCircle,
                                            children: srv.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceTitle,
                                            children: srv.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serviceTagline,
                                            children: srv.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learnMoreLink,
                                            onClick: ()=>onOpenSpecs(srv.slug),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Tech specs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specsList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                                    children: "Core Architecture"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                                    children: srv.specs.architecture
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                                    children: "Cryptography & Security"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValueHighlight,
                                                    children: srv.specs.encryption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                                    children: "Server Footprint"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValueBadge,
                                                    children: srv.specs.serverStorage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                                    children: "Throughput & Latency"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                                    children: srv.specs.throughput
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                                    children: "Maximum Capacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                                    children: srv.specs.maxPayload
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specLabel,
                                                    children: "Signature Capability"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specValue,
                                                    children: srv.specs.specialFeature
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].columnFooter,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleComparison$2f$AppleComparison$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appleActionBtn,
                                        onClick: ()=>{
                                            const elem = document.getElementById(srv.id === 'chat-app' ? 'hero-chat' : srv.id === 'p2p-transfer' ? 'hero-drop' : srv.id === 'music-player' ? 'hero-music' : 'hero-cinema');
                                            if (elem) elem.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Explore ",
                                                srv.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, srv.id, true, {
                            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AppleComparison/AppleComparison.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppleComparison;
var _c;
__turbopack_context__.k.register(_c, "AppleComparison");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
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
            title: 'Full 20-Subdomain Suite',
            stat: '20 Tools',
            statLabel: 'Complete open ecosystem',
            description: 'You get unmetered access to all 20 isolated subdomain services across the NothingBox Labs network mesh without paying for individual add-ons.',
            bulletPoints: [
                'NothingChat, NothingDrop, NothingMusic, & NothingCinema',
                'Specialized developer tools, vaults, and monitors',
                'Isolated sandboxed micro-frontends',
                'Community-driven open development'
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
                                size: 52,
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
                            children: "100% Free & Open Ecosystem"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                            children: "No subscriptions. No paywalls. Everything is free."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subhead,
                            children: "NothingBox Labs is engineered on the principle that modern browsers have supercomputer capabilities. Because your device performs the computation and peers connect directly, there are zero server costs to pass on to you."
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
                                    children: "Experience NothingBox Labs instantly"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calloutSub,
                                    children: "Jump straight into any flagship tool or explore the full subdomain mesh. No installation, no login."
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
                                            children: "Try NothingChat"
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
                                            children: "Try NothingDrop"
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
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleFreeEcosystem$2f$AppleFreeEcosystem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryLaunchBtn,
                                    onClick: ()=>scrollTo('subdomain-carousel'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Explore 20 Subdomains"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleFreeEcosystem/AppleFreeEcosystem.tsx",
                                    lineNumber: 158,
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
  "deviceMockupFrame": "AppleHero-module__RcAd-a__deviceMockupFrame",
  "deviceScreen": "AppleHero-module__RcAd-a__deviceScreen",
  "deviceStage": "AppleHero-module__RcAd-a__deviceStage",
  "eyebrowTag": "AppleHero-module__RcAd-a__eyebrowTag",
  "featureChip": "AppleHero-module__RcAd-a__featureChip",
  "featureChipsList": "AppleHero-module__RcAd-a__featureChipsList",
  "headerBlock": "AppleHero-module__RcAd-a__headerBlock",
  "heroContent": "AppleHero-module__RcAd-a__heroContent",
  "heroLogoMark": "AppleHero-module__RcAd-a__heroLogoMark",
  "heroSection": "AppleHero-module__RcAd-a__heroSection",
  "productHeadline": "AppleHero-module__RcAd-a__productHeadline",
  "productSubhead": "AppleHero-module__RcAd-a__productSubhead",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AppleHero/AppleHero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
;
;
;
;
;
;
const AppleHero = ({ product, theme = 'titanium', onOpenSpecs, onLaunchApp, sectionId })=>{
    const renderDeviceContent = ()=>{
        switch(product.id){
            case 'chat-app':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveChatDemo"], {}, void 0, false, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 31,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'p2p-transfer':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveTransferDemo"], {}, void 0, false, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 33,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'music-player':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveMusicDemo"], {}, void 0, false, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'video-player':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveVideoDemo"], {}, void 0, false, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandHeroBadge,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                    size: 36,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroLogoMark
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowTag,
                                    children: product.category
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productHeadline,
                            children: product.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productSubhead,
                            children: product.tagline
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `learn-more-${product.slug}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].applePrimaryBtn,
                                    onClick: ()=>onOpenSpecs(product),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Learn more"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: `compare-${product.slug}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appleTextLink,
                                    onClick: ()=>{
                                        const elem = document.getElementById('service-comparison');
                                        if (elem) elem.scrollIntoView({
                                            behavior: 'smooth'
                                        });
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Compare ",
                                                product.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 14,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chevronIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureChipsList,
                            children: product.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureChip,
                                    children: feat.title
                                }, feat.id, false, {
                                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceStage,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceMockupFrame,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleHero$2f$AppleHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceScreen,
                            children: renderDeviceContent()
                        }, void 0, false, {
                            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AppleHero/AppleHero.tsx",
        lineNumber: 58,
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
            eyebrow: 'Federated Suite',
            title: '20 Subdomain Network',
            description: 'Dedicated isolated micro-frontends running across subdomains with zero cross-service degradation.',
            linkText: 'Explore the 20 Subdomains',
            action: onOpenSubdomains,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                size: 28,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplePromoGrid$2f$ApplePromoGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/ApplePromoGrid/ApplePromoGrid.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            badge: 'Isolated Port Mesh',
            metric: '20 Endpoints'
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
"[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardActions": "AppleSubdomainCarousel-module__BNIJlq__cardActions",
  "carouselSection": "AppleSubdomainCarousel-module__BNIJlq__carouselSection",
  "categoryPills": "AppleSubdomainCarousel-module__BNIJlq__categoryPills",
  "controlsRow": "AppleSubdomainCarousel-module__BNIJlq__controlsRow",
  "coverBottom": "AppleSubdomainCarousel-module__BNIJlq__coverBottom",
  "coverCenter": "AppleSubdomainCarousel-module__BNIJlq__coverCenter",
  "coverTopRow": "AppleSubdomainCarousel-module__BNIJlq__coverTopRow",
  "endpointPill": "AppleSubdomainCarousel-module__BNIJlq__endpointPill",
  "eyebrow": "AppleSubdomainCarousel-module__BNIJlq__eyebrow",
  "filterToolbar": "AppleSubdomainCarousel-module__BNIJlq__filterToolbar",
  "globeIcon": "AppleSubdomainCarousel-module__BNIJlq__globeIcon",
  "globeWrap": "AppleSubdomainCarousel-module__BNIJlq__globeWrap",
  "headerInfo": "AppleSubdomainCarousel-module__BNIJlq__headerInfo",
  "itemCategory": "AppleSubdomainCarousel-module__BNIJlq__itemCategory",
  "itemDesc": "AppleSubdomainCarousel-module__BNIJlq__itemDesc",
  "itemName": "AppleSubdomainCarousel-module__BNIJlq__itemName",
  "launchBtn": "AppleSubdomainCarousel-module__BNIJlq__launchBtn",
  "navArrowBtn": "AppleSubdomainCarousel-module__BNIJlq__navArrowBtn",
  "pillBtn": "AppleSubdomainCarousel-module__BNIJlq__pillBtn",
  "pillBtnActive": "AppleSubdomainCarousel-module__BNIJlq__pillBtnActive",
  "portLabel": "AppleSubdomainCarousel-module__BNIJlq__portLabel",
  "searchBox": "AppleSubdomainCarousel-module__BNIJlq__searchBox",
  "searchIcon": "AppleSubdomainCarousel-module__BNIJlq__searchIcon",
  "searchInput": "AppleSubdomainCarousel-module__BNIJlq__searchInput",
  "sectionHeader": "AppleSubdomainCarousel-module__BNIJlq__sectionHeader",
  "sliderTrack": "AppleSubdomainCarousel-module__BNIJlq__sliderTrack",
  "statusTag": "AppleSubdomainCarousel-module__BNIJlq__statusTag",
  "streamCard": "AppleSubdomainCarousel-module__BNIJlq__streamCard",
  "subhead": "AppleSubdomainCarousel-module__BNIJlq__subhead",
  "title": "AppleSubdomainCarousel-module__BNIJlq__title",
});
}),
"[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppleSubdomainCarousel",
    ()=>AppleSubdomainCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/productsData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AppleSubdomainCarousel = ()=>{
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categories = [
        'All',
        'Core Flagship',
        'Media & Streaming',
        'Utilities',
        'Infrastructure',
        'Future Expansion'
    ];
    const filteredItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$productsData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBDOMAIN_REGISTRY"].filter((item)=>{
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.subdomain.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    const scrollSlider = (direction)=>{
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -380 : 380;
            sliderRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "subdomain-carousel",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: "The 20 Subdomain Suite"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Explore the Federated Mesh."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subhead,
                                children: "Each utility runs independently on dedicated subdomains, eliminating shared runtime bottlenecks and allowing isolated deployments."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navArrowBtn,
                                onClick: ()=>scrollSlider('left'),
                                "aria-label": "Scroll left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navArrowBtn,
                                onClick: ()=>scrollSlider('right'),
                                "aria-label": "Scroll right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterToolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryPills,
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillBtn} ${selectedCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillBtnActive : ''}`,
                                onClick: ()=>setSelectedCategory(cat),
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 14,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "carousel-search",
                                type: "text",
                                placeholder: "Search subdomains...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sliderRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderTrack,
                children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].streamCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardCover,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverTopRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].portLabel,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.portOrRoute
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusTag,
                                                children: item.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverCenter,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].globeWrap,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    size: 24,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].globeIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemName,
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemCategory,
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverBottom,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemDesc,
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].endpointPill,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.subdomain
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardActions,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://${item.subdomain}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppleSubdomainCarousel$2f$AppleSubdomainCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].launchBtn,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AppleSubdomainCarousel/AppleSubdomainCarousel.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppleSubdomainCarousel, "y9pxxB+Kud7AqkknUyGdevph3oY=");
_c = AppleSubdomainCarousel;
var _c;
__turbopack_context__.k.register(_c, "AppleSubdomainCarousel");
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
                                children: "3. The 20 Subdomain Network represents a decoupled micro-frontend topology where individual tools run isolated on their respective subdomains (ports 3001 through 3020) without shared runtime execution bottlenecks."
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
                            size: 22,
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
                                                href: "#subdomain-carousel",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "20 Subdomain Mesh"
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
                                                href: "#promo-grid",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colLink,
                                                children: "Architecture Whitepaper"
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
                                                href: "https://auth.nothingboxlabs.com",
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
                                                href: "https://vault.nothingboxlabs.com",
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
                                                href: "#subdomain-carousel",
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
                                                href: "#subdomain-carousel",
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
"[project]/src/components/Header/Header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "announcementRibbon": "Header-module__ldgnoG__announcementRibbon",
  "appleBrandText": "Header-module__ldgnoG__appleBrandText",
  "appleLogoBtn": "Header-module__ldgnoG__appleLogoBtn",
  "appleSlideDown": "Header-module__ldgnoG__appleSlideDown",
  "bagBadge": "Header-module__ldgnoG__bagBadge",
  "brandLogoSvg": "Header-module__ldgnoG__brandLogoSvg",
  "freePillBtn": "Header-module__ldgnoG__freePillBtn",
  "globalNav": "Header-module__ldgnoG__globalNav",
  "mobileDrawer": "Header-module__ldgnoG__mobileDrawer",
  "mobileHamburger": "Header-module__ldgnoG__mobileHamburger",
  "mobileLaunchBtn": "Header-module__ldgnoG__mobileLaunchBtn",
  "mobileLinksContainer": "Header-module__ldgnoG__mobileLinksContainer",
  "mobileMenuLink": "Header-module__ldgnoG__mobileMenuLink",
  "mobileSubdomainCTA": "Header-module__ldgnoG__mobileSubdomainCTA",
  "navContainer": "Header-module__ldgnoG__navContainer",
  "navItem": "Header-module__ldgnoG__navItem",
  "navItemActive": "Header-module__ldgnoG__navItemActive",
  "navItemHighlight": "Header-module__ldgnoG__navItemHighlight",
  "navLinksList": "Header-module__ldgnoG__navLinksList",
  "navScrolled": "Header-module__ldgnoG__navScrolled",
  "navUtilities": "Header-module__ldgnoG__navUtilities",
  "quickLinkArrow": "Header-module__ldgnoG__quickLinkArrow",
  "quickLinkItem": "Header-module__ldgnoG__quickLinkItem",
  "quickLinksGroup": "Header-module__ldgnoG__quickLinksGroup",
  "quickLinksList": "Header-module__ldgnoG__quickLinksList",
  "quickLinksTitle": "Header-module__ldgnoG__quickLinksTitle",
  "ribbonContainer": "Header-module__ldgnoG__ribbonContainer",
  "ribbonLink": "Header-module__ldgnoG__ribbonLink",
  "ribbonText": "Header-module__ldgnoG__ribbonText",
  "searchBar": "Header-module__ldgnoG__searchBar",
  "searchBarIcon": "Header-module__ldgnoG__searchBarIcon",
  "searchBarInput": "Header-module__ldgnoG__searchBarInput",
  "searchCloseBtn": "Header-module__ldgnoG__searchCloseBtn",
  "searchFlyout": "Header-module__ldgnoG__searchFlyout",
  "searchInner": "Header-module__ldgnoG__searchInner",
  "utilityBtn": "Header-module__ldgnoG__utilityBtn",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Header = ({ activeView = 'home', onNavigate, onSelectProduct, onOpenRegistry })=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const scrollTo = (elementId)=>{
        setMobileMenuOpen(false);
        setSearchOpen(false);
        setActiveDropdown(null);
        const elem = document.getElementById(elementId);
        if (elem) elem.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const quickLinks = [
        {
            label: 'Overview (NothingBox Labs)',
            target: 'landing-hero'
        },
        {
            label: 'NothingChat (P2P Messaging)',
            target: 'hero-chat'
        },
        {
            label: 'NothingDrop (WebRTC 50GB)',
            target: 'hero-drop'
        },
        {
            label: 'NothingMusic (OPFS Audio)',
            target: 'hero-music'
        },
        {
            label: 'NothingCinema (4K Chunk Stream)',
            target: 'hero-cinema'
        },
        {
            label: '20 Subdomain Network Mesh',
            target: 'subdomain-carousel'
        },
        {
            label: 'Compare All Services',
            target: 'service-comparison'
        },
        {
            label: '100% Free Ecosystem',
            target: 'free-ecosystem'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
                                    size: 28,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLogoSvg
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].appleBrandText,
                                    children: "NothingBox Labs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinksList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-overview",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('landing-hero'),
                                    children: "Overview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-chat",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('hero-chat'),
                                    children: "NothingChat"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-drop",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('hero-drop'),
                                    children: "NothingDrop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-music",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('hero-music'),
                                    children: "NothingMusic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-cinema",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('hero-cinema'),
                                    children: "NothingCinema"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-subdomains",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('subdomain-carousel'),
                                    children: "20 Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-compare",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                    onClick: ()=>scrollTo('service-comparison'),
                                    children: "Compare"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-link-free",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemHighlight,
                                    onClick: ()=>scrollTo('free-ecosystem'),
                                    children: "100% Free"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navUtilities,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-search-toggle",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].utilityBtn,
                                    onClick: ()=>setSearchOpen(!searchOpen),
                                    "aria-label": "Search NothingBox Labs",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "nav-free-pill",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].freePillBtn,
                                    onClick: ()=>scrollTo('free-ecosystem'),
                                    "aria-label": "100% Free & Open",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Free"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "mobile-nav-toggle",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileHamburger,
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    "aria-label": "Toggle Menu",
                                    children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 171,
                                        columnNumber: 51
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/Header.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header/Header.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header/Header.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchFlyout,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInner,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 18,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBarIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "apple-search-input",
                                        type: "text",
                                        placeholder: "Search NothingChat, OPFS RAM, 20 Subdomains, WebRTC...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBarInput,
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchCloseBtn,
                                        onClick: ()=>setSearchOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header/Header.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLinksGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLinksTitle,
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLinksList,
                                        children: quickLinks.filter((l)=>l.label.toLowerCase().includes(searchQuery.toLowerCase())).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLinkItem,
                                                onClick: ()=>scrollTo(item.target),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 14,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickLinkArrow
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header/Header.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header/Header.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, item.target, true, {
                                                fileName: "[project]/src/components/Header/Header.tsx",
                                                lineNumber: 207,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/Header.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header/Header.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileDrawer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileLinksContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('landing-hero'),
                                children: "Overview (NothingBox Labs)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('hero-chat'),
                                children: "NothingChat (P2P Messaging)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('hero-drop'),
                                children: "NothingDrop (50GB Transfer)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('hero-music'),
                                children: "NothingMusic (OPFS Audio)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('hero-cinema'),
                                children: "NothingCinema (4K Chunk Stream)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('subdomain-carousel'),
                                children: "20 Subdomain Network"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('service-comparison'),
                                children: "Compare All Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLink,
                                onClick: ()=>scrollTo('free-ecosystem'),
                                children: "100% Free Ecosystem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/Header.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header/Header.tsx",
                        lineNumber: 225,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header/Header.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header/Header.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Header/Header.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "n4NWBCKz2+nN+doD1aC2suAveUM=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionPill": "InteractiveChatDemo-module__HZ3NKa__actionPill",
  "actionPillActive": "InteractiveChatDemo-module__HZ3NKa__actionPillActive",
  "audioDuration": "InteractiveChatDemo-module__HZ3NKa__audioDuration",
  "avatar": "InteractiveChatDemo-module__HZ3NKa__avatar",
  "avatarGroup": "InteractiveChatDemo-module__HZ3NKa__avatarGroup",
  "avatarInitial": "InteractiveChatDemo-module__HZ3NKa__avatarInitial",
  "barWaveAnim": "InteractiveChatDemo-module__HZ3NKa__barWaveAnim",
  "bubbleContent": "InteractiveChatDemo-module__HZ3NKa__bubbleContent",
  "bubbleIncoming": "InteractiveChatDemo-module__HZ3NKa__bubbleIncoming",
  "bubbleOutgoing": "InteractiveChatDemo-module__HZ3NKa__bubbleOutgoing",
  "checkIcon": "InteractiveChatDemo-module__HZ3NKa__checkIcon",
  "container": "InteractiveChatDemo-module__HZ3NKa__container",
  "fakeInput": "InteractiveChatDemo-module__HZ3NKa__fakeInput",
  "headerBadges": "InteractiveChatDemo-module__HZ3NKa__headerBadges",
  "iconButton": "InteractiveChatDemo-module__HZ3NKa__iconButton",
  "inputActions": "InteractiveChatDemo-module__HZ3NKa__inputActions",
  "inputBar": "InteractiveChatDemo-module__HZ3NKa__inputBar",
  "mapBadge": "InteractiveChatDemo-module__HZ3NKa__mapBadge",
  "mapCanvas": "InteractiveChatDemo-module__HZ3NKa__mapCanvas",
  "mapCardBubble": "InteractiveChatDemo-module__HZ3NKa__mapCardBubble",
  "mapCoordinates": "InteractiveChatDemo-module__HZ3NKa__mapCoordinates",
  "mapFooter": "InteractiveChatDemo-module__HZ3NKa__mapFooter",
  "mapGridLayer": "InteractiveChatDemo-module__HZ3NKa__mapGridLayer",
  "mapMeta": "InteractiveChatDemo-module__HZ3NKa__mapMeta",
  "mapPinBeacon": "InteractiveChatDemo-module__HZ3NKa__mapPinBeacon",
  "mapPinIcon": "InteractiveChatDemo-module__HZ3NKa__mapPinIcon",
  "mapPinIconWrap": "InteractiveChatDemo-module__HZ3NKa__mapPinIconWrap",
  "mapPreviewHeader": "InteractiveChatDemo-module__HZ3NKa__mapPreviewHeader",
  "mapRadarPulse": "InteractiveChatDemo-module__HZ3NKa__mapRadarPulse",
  "mapTitle": "InteractiveChatDemo-module__HZ3NKa__mapTitle",
  "messageFooter": "InteractiveChatDemo-module__HZ3NKa__messageFooter",
  "messageFooterOutgoing": "InteractiveChatDemo-module__HZ3NKa__messageFooterOutgoing",
  "messageRowIncoming": "InteractiveChatDemo-module__HZ3NKa__messageRowIncoming",
  "messageRowOutgoing": "InteractiveChatDemo-module__HZ3NKa__messageRowOutgoing",
  "messageText": "InteractiveChatDemo-module__HZ3NKa__messageText",
  "onlineDot": "InteractiveChatDemo-module__HZ3NKa__onlineDot",
  "phoneHeader": "InteractiveChatDemo-module__HZ3NKa__phoneHeader",
  "pillIcon": "InteractiveChatDemo-module__HZ3NKa__pillIcon",
  "pinDot": "InteractiveChatDemo-module__HZ3NKa__pinDot",
  "pinLabel": "InteractiveChatDemo-module__HZ3NKa__pinLabel",
  "placeholderText": "InteractiveChatDemo-module__HZ3NKa__placeholderText",
  "radar": "InteractiveChatDemo-module__HZ3NKa__radar",
  "realInput": "InteractiveChatDemo-module__HZ3NKa__realInput",
  "scrub": "InteractiveChatDemo-module__HZ3NKa__scrub",
  "scrubberActive": "InteractiveChatDemo-module__HZ3NKa__scrubberActive",
  "scrubberFill": "InteractiveChatDemo-module__HZ3NKa__scrubberFill",
  "scrubberTime": "InteractiveChatDemo-module__HZ3NKa__scrubberTime",
  "scrubberTrack": "InteractiveChatDemo-module__HZ3NKa__scrubberTrack",
  "sendButton": "InteractiveChatDemo-module__HZ3NKa__sendButton",
  "snippetArtist": "InteractiveChatDemo-module__HZ3NKa__snippetArtist",
  "snippetAudioIcon": "InteractiveChatDemo-module__HZ3NKa__snippetAudioIcon",
  "snippetCover": "InteractiveChatDemo-module__HZ3NKa__snippetCover",
  "snippetDetails": "InteractiveChatDemo-module__HZ3NKa__snippetDetails",
  "snippetNotice": "InteractiveChatDemo-module__HZ3NKa__snippetNotice",
  "snippetPlayBtn": "InteractiveChatDemo-module__HZ3NKa__snippetPlayBtn",
  "snippetScrubber": "InteractiveChatDemo-module__HZ3NKa__snippetScrubber",
  "snippetSongName": "InteractiveChatDemo-module__HZ3NKa__snippetSongName",
  "snippetTop": "InteractiveChatDemo-module__HZ3NKa__snippetTop",
  "snippetTrackBody": "InteractiveChatDemo-module__HZ3NKa__snippetTrackBody",
  "studioTelemetryRibbon": "InteractiveChatDemo-module__HZ3NKa__studioTelemetryRibbon",
  "telemetryDot": "InteractiveChatDemo-module__HZ3NKa__telemetryDot",
  "telemetryIcon": "InteractiveChatDemo-module__HZ3NKa__telemetryIcon",
  "telemetryPill": "InteractiveChatDemo-module__HZ3NKa__telemetryPill",
  "thread": "InteractiveChatDemo-module__HZ3NKa__thread",
  "timestamp": "InteractiveChatDemo-module__HZ3NKa__timestamp",
  "timestampOutgoing": "InteractiveChatDemo-module__HZ3NKa__timestampOutgoing",
  "timestampRange": "InteractiveChatDemo-module__HZ3NKa__timestampRange",
  "typingBounce": "InteractiveChatDemo-module__HZ3NKa__typingBounce",
  "typingIndicator": "InteractiveChatDemo-module__HZ3NKa__typingIndicator",
  "userInfo": "InteractiveChatDemo-module__HZ3NKa__userInfo",
  "userName": "InteractiveChatDemo-module__HZ3NKa__userName",
  "userStatus": "InteractiveChatDemo-module__HZ3NKa__userStatus",
  "voiceNoteWrap": "InteractiveChatDemo-module__HZ3NKa__voiceNoteWrap",
  "voicePlayBtn": "InteractiveChatDemo-module__HZ3NKa__voicePlayBtn",
  "wave": "InteractiveChatDemo-module__HZ3NKa__wave",
  "waveBar": "InteractiveChatDemo-module__HZ3NKa__waveBar",
  "waveformGraphic": "InteractiveChatDemo-module__HZ3NKa__waveformGraphic",
  "youtubeSnippetBubble": "InteractiveChatDemo-module__HZ3NKa__youtubeSnippetBubble",
});
}),
"[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveChatDemo",
    ()=>InteractiveChatDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audioSynth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const InteractiveChatDemo = ()=>{
    _s();
    const [isPlayingAudio, setIsPlayingAudio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingYoutubeSnippet, setIsPlayingYoutubeSnippet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTranslated, setIsTranslated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTypingReply, setIsTypingReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 'msg-1',
            sender: 'aria',
            type: 'text',
            text: 'Hey! I just dropped the new location pin for our lab sync. You can inspect it directly here.',
            translatedText: 'नमस्ते! मीटिंग का नया पिन यहाँ ड्रॉप कर दिया है। इसे सीधे चैट में चेक करें।',
            timestamp: '10:42 AM'
        },
        {
            id: 'msg-2',
            sender: 'aria',
            type: 'map',
            timestamp: '10:43 AM'
        },
        {
            id: 'msg-3',
            sender: 'user',
            type: 'voice',
            timestamp: '10:44 AM'
        },
        {
            id: 'msg-4',
            sender: 'aria',
            type: 'youtube',
            timestamp: '10:45 AM'
        }
    ]);
    const threadEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveChatDemo.useEffect": ()=>{
            threadEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["InteractiveChatDemo.useEffect"], [
        messages,
        isTypingReply
    ]);
    const toggleTranslate = ()=>{
        setIsTranslated((prev)=>!prev);
    };
    const handleToggleAudio = ()=>{
        if (isPlayingAudio) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ambientSynth"].pause();
            setIsPlayingAudio(false);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ambientSynth"].play();
            setIsPlayingAudio(true);
        }
    };
    const handleToggleYoutube = ()=>{
        if (isPlayingYoutubeSnippet) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ambientSynth"].pause();
            setIsPlayingYoutubeSnippet(false);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ambientSynth"].play();
            setIsPlayingYoutubeSnippet(true);
        }
    };
    const handleSendMessage = (e)=>{
        if (e) e.preventDefault();
        if (!inputText.trim()) return;
        const userMsgText = inputText.trim();
        setInputText('');
        const newMsg = {
            id: `user-${Date.now()}`,
            sender: 'user',
            type: 'text',
            text: userMsgText,
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages((prev)=>[
                ...prev,
                newMsg
            ]);
        setIsTypingReply(true);
        setTimeout(()=>{
            setIsTypingReply(false);
            let replyText = 'Received in real-time over P2P WebRTC data tunnel! Zero server storage used.';
            if (userMsgText.toLowerCase().includes('hello') || userMsgText.toLowerCase().includes('hi')) {
                replyText = 'Hello! Welcome to NothingChat. The peer-to-peer connection is active and fully encrypted.';
            } else if (userMsgText.toLowerCase().includes('map') || userMsgText.toLowerCase().includes('location')) {
                replyText = 'Pinned the Cupertino R&D coordinate directly to our thread. Native Google Places API loaded.';
            } else if (userMsgText.toLowerCase().includes('ram') || userMsgText.toLowerCase().includes('opfs')) {
                replyText = 'OPFS Virtual RAM is buffering 4GB chunk cache in browser without consuming device memory.';
            }
            const ariaReply = {
                id: `aria-${Date.now()}`,
                sender: 'aria',
                type: 'text',
                text: replyText,
                translatedText: 'रियल-टाइम में P2P WebRTC के ज़रिए प्राप्त हुआ! सर्वर पर कोई डेटा स्टोर नहीं हुआ।',
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            setMessages((prev)=>[
                    ...prev,
                    ariaReply
                ]);
        }, 900);
    };
    const handleSendVoiceNote = ()=>{
        const voiceMsg = {
            id: `user-voice-${Date.now()}`,
            sender: 'user',
            type: 'voice',
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages((prev)=>[
                ...prev,
                voiceMsg
            ]);
    };
    const handleSendLocation = ()=>{
        const mapMsg = {
            id: `user-map-${Date.now()}`,
            sender: 'user',
            type: 'map',
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages((prev)=>[
                ...prev,
                mapMsg
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "interactive-chat-simulator",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarInitial,
                                        children: "NB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].onlineDot
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                        children: "Aria (NothingChat P2P)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userStatus,
                                        children: "End-to-End Encrypted • WebSocket Active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBadges,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "blue",
                                children: "Maps API Active"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "purple",
                                children: "Translate Sync"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thread,
                children: [
                    messages.map((msg)=>{
                        if (msg.type === 'text') {
                            const isUser = msg.sender === 'user';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageRowOutgoing : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageRowIncoming,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: isUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleOutgoing : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleIncoming,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleContent,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageText,
                                                children: isTranslated && msg.translatedText ? msg.translatedText : msg.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                lineNumber: 187,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: isUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageFooterOutgoing : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageFooter,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: isUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timestampOutgoing : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timestamp,
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !isUser && msg.translatedText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionPill} ${isTranslated ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionPillActive : ''}`,
                                                    onClick: toggleTranslate,
                                                    title: "Toggle Google Translate API",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                                            size: 12,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: isTranslated ? 'Original (EN)' : 'Translate (HI)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                                    size: 14,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, msg.id, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        if (msg.type === 'map') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageRowIncoming,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapCardBubble,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapPreviewHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapPinIconWrap,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 16,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapPinIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapMeta,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapTitle,
                                                            children: "NothingBox R&D Lab - Cupertino"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapCoordinates,
                                                            children: "37.3349° N, 122.0090° W • Live GPS Pin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapCanvas,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapGridLayer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapRadarPulse
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapPinBeacon,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pinDot
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pinLabel,
                                                            children: "Lab Core"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapFooter,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapBadge,
                                                    children: "Google Maps Platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapDistance,
                                                    children: "0.4 mi away"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, msg.id, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        if (msg.type === 'voice') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageRowOutgoing,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleOutgoing,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].voiceNoteWrap,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    id: "chat-play-voice-note",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].voicePlayBtn,
                                                    onClick: handleToggleAudio,
                                                    title: "Play Audio Voice Note",
                                                    children: isPlayingAudio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 63
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveformGraphic,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].waveBar} ${isPlayingAudio ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barWaveAnim : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].audioDuration,
                                                    children: isPlayingAudio ? 'Playing' : '0:18'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageFooterOutgoing,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timestampOutgoing,
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                                                    size: 14,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                    lineNumber: 247,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, msg.id, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        if (msg.type === 'youtube') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageRowIncoming,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].youtubeSnippetBubble,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetTop,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "orange",
                                                    children: "YouTube Audio Snippet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timestampRange,
                                                    children: "Trimmed [01:14 — 01:42]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetTrackBody,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetCover,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        size: 20,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetAudioIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetDetails,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetSongName,
                                                            children: "Solaris (Ambient Theme)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetArtist,
                                                            children: "NothingBox Synth Lab • 28s Hook"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetScrubber,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    id: "chat-youtube-snippet-play",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetPlayBtn,
                                                    onClick: handleToggleYoutube,
                                                    children: isPlayingYoutubeSnippet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 50
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 72
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberFill} ${isPlayingYoutubeSnippet ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberActive : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberTime,
                                                    children: isPlayingYoutubeSnippet ? '01:28' : '01:14'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].snippetNotice,
                                            children: "Trimmed interval streamed without leaving the chat thread."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                            lineNumber: 314,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, msg.id, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        return null;
                    }),
                    isTypingReply && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageRowIncoming,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleIncoming,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typingIndicator,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 328,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: threadEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studioTelemetryRibbon,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryPill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 13,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "WebRTC P2P Mesh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryPill,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "AES-GCM 256-Bit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryPill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryDot
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "0 Bytes on Server"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveChatDemo$2f$InteractiveChatDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryPill,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "11ms Direct Latency"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InteractiveChatDemo/InteractiveChatDemo.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InteractiveChatDemo, "JSL+jGJZ/74nzEL0HHa6M/Z2z3A=");
_c = InteractiveChatDemo;
var _c;
__turbopack_context__.k.register(_c, "InteractiveChatDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "artworkFrame": "InteractiveMusicDemo-module__zPkgqq__artworkFrame",
  "artworkSection": "InteractiveMusicDemo-module__zPkgqq__artworkSection",
  "cachePlaylist": "InteractiveMusicDemo-module__zPkgqq__cachePlaylist",
  "container": "InteractiveMusicDemo-module__zPkgqq__container",
  "dynamicIslandPill": "InteractiveMusicDemo-module__zPkgqq__dynamicIslandPill",
  "eq": "InteractiveMusicDemo-module__zPkgqq__eq",
  "eqBar": "InteractiveMusicDemo-module__zPkgqq__eqBar",
  "eqBarPlay": "InteractiveMusicDemo-module__zPkgqq__eqBarPlay",
  "eqVisualizer": "InteractiveMusicDemo-module__zPkgqq__eqVisualizer",
  "greenCheck": "InteractiveMusicDemo-module__zPkgqq__greenCheck",
  "headerBadges": "InteractiveMusicDemo-module__zPkgqq__headerBadges",
  "headerBar": "InteractiveMusicDemo-module__zPkgqq__headerBar",
  "itemNumber": "InteractiveMusicDemo-module__zPkgqq__itemNumber",
  "itemSizeBadge": "InteractiveMusicDemo-module__zPkgqq__itemSizeBadge",
  "itemSongName": "InteractiveMusicDemo-module__zPkgqq__itemSongName",
  "itemTitleGroup": "InteractiveMusicDemo-module__zPkgqq__itemTitleGroup",
  "opfsActiveTag": "InteractiveMusicDemo-module__zPkgqq__opfsActiveTag",
  "opfsHeader": "InteractiveMusicDemo-module__zPkgqq__opfsHeader",
  "opfsIcon": "InteractiveMusicDemo-module__zPkgqq__opfsIcon",
  "opfsIconWrap": "InteractiveMusicDemo-module__zPkgqq__opfsIconWrap",
  "opfsInspector": "InteractiveMusicDemo-module__zPkgqq__opfsInspector",
  "opfsLabel": "InteractiveMusicDemo-module__zPkgqq__opfsLabel",
  "opfsMetricCard": "InteractiveMusicDemo-module__zPkgqq__opfsMetricCard",
  "opfsRow": "InteractiveMusicDemo-module__zPkgqq__opfsRow",
  "opfsSubtitle": "InteractiveMusicDemo-module__zPkgqq__opfsSubtitle",
  "opfsTitle": "InteractiveMusicDemo-module__zPkgqq__opfsTitle",
  "opfsValueCyan": "InteractiveMusicDemo-module__zPkgqq__opfsValueCyan",
  "opfsValueGreen": "InteractiveMusicDemo-module__zPkgqq__opfsValueGreen",
  "opfsValueMono": "InteractiveMusicDemo-module__zPkgqq__opfsValueMono",
  "opfsValuePurple": "InteractiveMusicDemo-module__zPkgqq__opfsValuePurple",
  "pillText": "InteractiveMusicDemo-module__zPkgqq__pillText",
  "playMasterBtn": "InteractiveMusicDemo-module__zPkgqq__playMasterBtn",
  "playerBody": "InteractiveMusicDemo-module__zPkgqq__playerBody",
  "playlistItem": "InteractiveMusicDemo-module__zPkgqq__playlistItem",
  "playlistItemActive": "InteractiveMusicDemo-module__zPkgqq__playlistItemActive",
  "playlistItems": "InteractiveMusicDemo-module__zPkgqq__playlistItems",
  "playlistLabel": "InteractiveMusicDemo-module__zPkgqq__playlistLabel",
  "pulse": "InteractiveMusicDemo-module__zPkgqq__pulse",
  "pulseDot": "InteractiveMusicDemo-module__zPkgqq__pulseDot",
  "scrubMusic": "InteractiveMusicDemo-module__zPkgqq__scrubMusic",
  "scrubberContainer": "InteractiveMusicDemo-module__zPkgqq__scrubberContainer",
  "spinVinyl": "InteractiveMusicDemo-module__zPkgqq__spinVinyl",
  "spinningVinyl": "InteractiveMusicDemo-module__zPkgqq__spinningVinyl",
  "timeLabels": "InteractiveMusicDemo-module__zPkgqq__timeLabels",
  "timelineAnimating": "InteractiveMusicDemo-module__zPkgqq__timelineAnimating",
  "timelineFill": "InteractiveMusicDemo-module__zPkgqq__timelineFill",
  "timelineTrack": "InteractiveMusicDemo-module__zPkgqq__timelineTrack",
  "trackArtist": "InteractiveMusicDemo-module__zPkgqq__trackArtist",
  "trackDetails": "InteractiveMusicDemo-module__zPkgqq__trackDetails",
  "trackTitle": "InteractiveMusicDemo-module__zPkgqq__trackTitle",
  "transportBtn": "InteractiveMusicDemo-module__zPkgqq__transportBtn",
  "transportRow": "InteractiveMusicDemo-module__zPkgqq__transportRow",
  "vinylCenter": "InteractiveMusicDemo-module__zPkgqq__vinylCenter",
  "vinylIcon": "InteractiveMusicDemo-module__zPkgqq__vinylIcon",
  "volumeIcon": "InteractiveMusicDemo-module__zPkgqq__volumeIcon",
  "volumeRow": "InteractiveMusicDemo-module__zPkgqq__volumeRow",
  "volumeSlider": "InteractiveMusicDemo-module__zPkgqq__volumeSlider",
});
}),
"[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveMusicDemo",
    ()=>InteractiveMusicDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const InteractiveMusicDemo = ()=>{
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTrackIndex, setActiveTrackIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.7);
    const playlist = [
        {
            title: 'Aura of Silence',
            artist: 'NothingBox Sound Collective',
            duration: '3:42',
            opfsCached: true,
            size: '4.8 MB'
        },
        {
            title: 'Cupertino Midnight',
            artist: 'Neural Audio Engine',
            duration: '4:15',
            opfsCached: true,
            size: '5.2 MB'
        },
        {
            title: 'P2P Resonance Loop',
            artist: 'Aria Synthetics',
            duration: '2:58',
            opfsCached: true,
            size: '3.9 MB'
        }
    ];
    const currentTrack = playlist[activeTrackIndex];
    const handleTogglePlay = ()=>{
        setIsPlaying((prev)=>!prev);
    };
    const handleNextTrack = ()=>{
        setActiveTrackIndex((prev)=>prev < playlist.length - 1 ? prev + 1 : 0);
    };
    const handlePrevTrack = ()=>{
        setActiveTrackIndex((prev)=>prev > 0 ? prev - 1 : playlist.length - 1);
    };
    const handleVolumeChange = (e)=>{
        setVolume(parseFloat(e.target.value));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "interactive-music-simulator",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dynamicIslandPill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pulseDot
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillText,
                                children: isPlaying ? `Streaming: ${currentTrack.title} (Live Web Audio)` : 'NothingMusic Engine: Ready'
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsActiveTag,
                                children: "OPFS Fast-Mount"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBadges,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "purple",
                                children: "Ad-Free Stream"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "green",
                                children: "OPFS Cached"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artworkSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].artworkFrame,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vinylCenter} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinningVinyl : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                            size: 36,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vinylIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqVisualizer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBar} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBarPlay : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBar} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBarPlay : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBar} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBarPlay : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBar} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBarPlay : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBar} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eqBarPlay : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trackDetails,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trackTitle,
                                        children: currentTrack.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trackArtist,
                                        children: currentTrack.artist
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timelineTrack,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timelineFill} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timelineAnimating : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeLabels,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isPlaying ? '1:24' : '0:00'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: currentTrack.duration
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transportRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transportBtn,
                                        onClick: handlePrevTrack,
                                        "aria-label": "Previous Track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "music-play-pause-btn",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playMasterBtn,
                                        onClick: handleTogglePlay,
                                        "aria-label": isPlaying ? 'Pause' : 'Play',
                                        title: isPlaying ? 'Pause Audio' : 'Play Real Web Audio',
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 135,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 135,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transportBtn,
                                        onClick: handleNextTrack,
                                        "aria-label": "Next Track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volumeRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        size: 16,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volumeIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "1",
                                        step: "0.05",
                                        value: volume,
                                        onChange: handleVolumeChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volumeSlider,
                                        title: `Volume: ${Math.round(volume * 100)}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsInspector,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsIconWrap,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                            size: 18,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsTitle,
                                                children: "Origin Private File System"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsSubtitle,
                                                children: "Zero Buffering & Expiry Bypass"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsMetricCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsLabel,
                                                children: "Cache Partition Status:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsValueGreen,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 13,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenCheck
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Mounted in OPFS Root"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsLabel,
                                                children: "Current Audio Chunk:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsValueMono,
                                                children: [
                                                    currentTrack.size,
                                                    " Cached (100%)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsLabel,
                                                children: "Audio Engine:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsValueCyan,
                                                children: "Web Audio Synthesizer (Active)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsLabel,
                                                children: "Offline Readiness:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsValuePurple,
                                                children: "Instant Replay Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cachePlaylist,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playlistLabel,
                                        children: "Cached Track Handles (OPFS):"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playlistItems,
                                        children: playlist.map((track, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playlistItem} ${idx === activeTrackIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playlistItemActive : ''}`,
                                                onClick: ()=>{
                                                    setActiveTrackIndex(idx);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemTitleGroup,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemNumber,
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemSongName,
                                                                children: track.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveMusicDemo$2f$InteractiveMusicDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemSizeBadge,
                                                        children: track.size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, track.title, true, {
                                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InteractiveMusicDemo/InteractiveMusicDemo.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InteractiveMusicDemo, "HRADYnXzM0CbaP9+X2jvHNtCYj8=");
_c = InteractiveMusicDemo;
var _c;
__turbopack_context__.k.register(_c, "InteractiveMusicDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arena": "InteractiveTransferDemo-module__TzyVSq__arena",
  "badgesGroup": "InteractiveTransferDemo-module__TzyVSq__badgesGroup",
  "cardActions": "InteractiveTransferDemo-module__TzyVSq__cardActions",
  "container": "InteractiveTransferDemo-module__TzyVSq__container",
  "copyButton": "InteractiveTransferDemo-module__TzyVSq__copyButton",
  "deviceIcon": "InteractiveTransferDemo-module__TzyVSq__deviceIcon",
  "deviceIp": "InteractiveTransferDemo-module__TzyVSq__deviceIp",
  "deviceName": "InteractiveTransferDemo-module__TzyVSq__deviceName",
  "deviceNode": "InteractiveTransferDemo-module__TzyVSq__deviceNode",
  "directPillBadge": "InteractiveTransferDemo-module__TzyVSq__directPillBadge",
  "fileArchiveIcon": "InteractiveTransferDemo-module__TzyVSq__fileArchiveIcon",
  "fileDetails": "InteractiveTransferDemo-module__TzyVSq__fileDetails",
  "fileIconWrap": "InteractiveTransferDemo-module__TzyVSq__fileIconWrap",
  "fileMetaText": "InteractiveTransferDemo-module__TzyVSq__fileMetaText",
  "fileMetadataRow": "InteractiveTransferDemo-module__TzyVSq__fileMetadataRow",
  "fileName": "InteractiveTransferDemo-module__TzyVSq__fileName",
  "greenCheck": "InteractiveTransferDemo-module__TzyVSq__greenCheck",
  "header": "InteractiveTransferDemo-module__TzyVSq__header",
  "headerSubtitle": "InteractiveTransferDemo-module__TzyVSq__headerSubtitle",
  "headerTitle": "InteractiveTransferDemo-module__TzyVSq__headerTitle",
  "linkBox": "InteractiveTransferDemo-module__TzyVSq__linkBox",
  "metricItem": "InteractiveTransferDemo-module__TzyVSq__metricItem",
  "nodeRoleReceiver": "InteractiveTransferDemo-module__TzyVSq__nodeRoleReceiver",
  "nodeRoleSender": "InteractiveTransferDemo-module__TzyVSq__nodeRoleSender",
  "nodesDiagram": "InteractiveTransferDemo-module__TzyVSq__nodesDiagram",
  "p2pIcon": "InteractiveTransferDemo-module__TzyVSq__p2pIcon",
  "p2pIconWrap": "InteractiveTransferDemo-module__TzyVSq__p2pIconWrap",
  "pairingInfo": "InteractiveTransferDemo-module__TzyVSq__pairingInfo",
  "pairingLabel": "InteractiveTransferDemo-module__TzyVSq__pairingLabel",
  "pairingSection": "InteractiveTransferDemo-module__TzyVSq__pairingSection",
  "pipeFlow": "InteractiveTransferDemo-module__TzyVSq__pipeFlow",
  "pipeFlowActive": "InteractiveTransferDemo-module__TzyVSq__pipeFlowActive",
  "pipePill": "InteractiveTransferDemo-module__TzyVSq__pipePill",
  "pipeTrack": "InteractiveTransferDemo-module__TzyVSq__pipeTrack",
  "pipeWifi": "InteractiveTransferDemo-module__TzyVSq__pipeWifi",
  "progressBarFill": "InteractiveTransferDemo-module__TzyVSq__progressBarFill",
  "progressBarFillStudio": "InteractiveTransferDemo-module__TzyVSq__progressBarFillStudio",
  "progressBarTrack": "InteractiveTransferDemo-module__TzyVSq__progressBarTrack",
  "progressMetrics": "InteractiveTransferDemo-module__TzyVSq__progressMetrics",
  "progress_0": "InteractiveTransferDemo-module__TzyVSq__progress_0",
  "progress_10": "InteractiveTransferDemo-module__TzyVSq__progress_10",
  "progress_100": "InteractiveTransferDemo-module__TzyVSq__progress_100",
  "progress_20": "InteractiveTransferDemo-module__TzyVSq__progress_20",
  "progress_30": "InteractiveTransferDemo-module__TzyVSq__progress_30",
  "progress_40": "InteractiveTransferDemo-module__TzyVSq__progress_40",
  "progress_50": "InteractiveTransferDemo-module__TzyVSq__progress_50",
  "progress_60": "InteractiveTransferDemo-module__TzyVSq__progress_60",
  "progress_70": "InteractiveTransferDemo-module__TzyVSq__progress_70",
  "progress_80": "InteractiveTransferDemo-module__TzyVSq__progress_80",
  "progress_90": "InteractiveTransferDemo-module__TzyVSq__progress_90",
  "roomUrl": "InteractiveTransferDemo-module__TzyVSq__roomUrl",
  "shieldIcon": "InteractiveTransferDemo-module__TzyVSq__shieldIcon",
  "specChip": "InteractiveTransferDemo-module__TzyVSq__specChip",
  "speedLabel": "InteractiveTransferDemo-module__TzyVSq__speedLabel",
  "speedNumber": "InteractiveTransferDemo-module__TzyVSq__speedNumber",
  "spin": "InteractiveTransferDemo-module__TzyVSq__spin",
  "spinIcon": "InteractiveTransferDemo-module__TzyVSq__spinIcon",
  "streamPulse": "InteractiveTransferDemo-module__TzyVSq__streamPulse",
  "studioSpecsRow": "InteractiveTransferDemo-module__TzyVSq__studioSpecsRow",
  "titleGroup": "InteractiveTransferDemo-module__TzyVSq__titleGroup",
  "transferCard": "InteractiveTransferDemo-module__TzyVSq__transferCard",
  "transferSpeedBadge": "InteractiveTransferDemo-module__TzyVSq__transferSpeedBadge",
});
}),
"[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveTransferDemo",
    ()=>InteractiveTransferDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-archive.js [app-client] (ecmascript) <export default as FileArchive>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const InteractiveTransferDemo = ()=>{
    _s();
    const [isTransferring, setIsTransferring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: 'ProRes_Master_Export_4K.zip',
        size: '48.6 GB'
    });
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveTransferDemo.useEffect": ()=>{
            let timer;
            if (isTransferring) {
                timer = setInterval({
                    "InteractiveTransferDemo.useEffect": ()=>{
                        setProgress({
                            "InteractiveTransferDemo.useEffect": (prev)=>{
                                if (prev >= 100) {
                                    setIsTransferring(false);
                                    return 100;
                                }
                                return prev + 10;
                            }
                        }["InteractiveTransferDemo.useEffect"]);
                    }
                }["InteractiveTransferDemo.useEffect"], 100);
            }
            return ({
                "InteractiveTransferDemo.useEffect": ()=>clearInterval(timer)
            })["InteractiveTransferDemo.useEffect"];
        }
    }["InteractiveTransferDemo.useEffect"], [
        isTransferring
    ]);
    const startDemoTransfer = ()=>{
        setProgress(0);
        setIsTransferring(true);
    };
    const handleCopyLink = ()=>{
        setCopied(true);
        navigator.clipboard?.writeText('https://transfer.nothingboxlabs.com/#session=rtc-9042b-direct');
        setTimeout(()=>setCopied(false), 2000);
    };
    const handleCustomFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const formattedSize = file.size > 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : `${(file.size / 1024).toFixed(1)} KB`;
            const url = URL.createObjectURL(file);
            setActiveFile({
                name: file.name,
                size: formattedSize,
                blobUrl: url
            });
            setProgress(0);
            setIsTransferring(true);
        }
    };
    const handleDownload = ()=>{
        if (activeFile.blobUrl) {
            const a = document.createElement('a');
            a.href = activeFile.blobUrl;
            a.download = `P2P_Received_${activeFile.name}`;
            a.click();
        } else {
            const blob = new Blob([
                'NothingBox Labs WebRTC P2P Transfer Payload Verified'
            ], {
                type: 'text/plain'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `P2P_Received_${activeFile.name}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "interactive-transfer-simulator",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].p2pIconWrap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightLeft$3e$__["ArrowRightLeft"], {
                                    size: 18,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].p2pIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerTitle,
                                        children: "WebRTC Mesh Session"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerSubtitle,
                                        children: "Direct Browser-to-Browser Pipe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgesGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "cyan",
                                children: "RTCDataChannel: Open"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "green",
                                children: "0% Server Storage"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arena,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodesDiagram,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceNode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceIcon,
                                        children: "💻"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceName,
                                        children: "MacBook Pro M3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceIp,
                                        children: "192.168.1.42 (Local NAT)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeRoleSender,
                                        children: "Sender (Host)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pipeTrack,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pipeFlow} ${isTransferring ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pipeFlowActive : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pipePill,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                size: 12,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pipeWifi
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "STUN / Direct ICE Candidate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceNode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceIcon,
                                        children: "📱"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceName,
                                        children: "iPhone 16 Pro Max"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deviceIp,
                                        children: "192.168.1.88 (Mobile Safari)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeRoleReceiver,
                                        children: "Receiver"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transferCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileMetadataRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileIconWrap,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__["FileArchive"], {
                                            size: 24,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileArchiveIcon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileName,
                                                children: activeFile.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileMetaText,
                                                children: [
                                                    activeFile.size,
                                                    " • 64KB Sliced Binary Chunks • Zero Server Cap"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transferSpeedBadge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].speedNumber,
                                                children: "168.4 MB/s"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].speedLabel,
                                                children: "Direct Wi-Fi 6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarTrack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBarFillStudio
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressMetrics,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricItem,
                                        children: "Status: Active 64KB Chunk Stream (Direct Socket Buffer)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricItem,
                                        children: "78% Transferred • 37.9 GB / 48.6 GB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].studioSpecsRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specChip,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 13,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenCheck
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "SHA-256 On-the-Fly Verification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specChip,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "0% Cloud Intermediary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specChip,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Latency: 2.4ms (LAN)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pairingSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pairingInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 16,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shieldIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pairingLabel,
                                        children: "Ephemeral WebRTC DataChannel Session (End-to-End Encrypted)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkBox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roomUrl,
                                        children: "https://transfer.nothingboxlabs.com/#session=rtc-9042b-direct"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveTransferDemo$2f$InteractiveTransferDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directPillBadge,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Direct Link Active"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InteractiveTransferDemo/InteractiveTransferDemo.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InteractiveTransferDemo, "GDfnYQwGroWFb7HBug6/ZID8hb0=");
_c = InteractiveTransferDemo;
var _c;
__turbopack_context__.k.register(_c, "InteractiveTransferDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardHeader": "InteractiveVideoDemo-module__QjZibG__cardHeader",
  "cardTitle": "InteractiveVideoDemo-module__QjZibG__cardTitle",
  "centerVideoIcon": "InteractiveVideoDemo-module__QjZibG__centerVideoIcon",
  "cinemaFileMeta": "InteractiveVideoDemo-module__QjZibG__cinemaFileMeta",
  "cinemaMovieTitle": "InteractiveVideoDemo-module__QjZibG__cinemaMovieTitle",
  "cinemaPlayBtn": "InteractiveVideoDemo-module__QjZibG__cinemaPlayBtn",
  "container": "InteractiveVideoDemo-module__QjZibG__container",
  "controlBar": "InteractiveVideoDemo-module__QjZibG__controlBar",
  "cpuIcon": "InteractiveVideoDemo-module__QjZibG__cpuIcon",
  "filmNoiseLayer": "InteractiveVideoDemo-module__QjZibG__filmNoiseLayer",
  "fullscreenBtn": "InteractiveVideoDemo-module__QjZibG__fullscreenBtn",
  "gaugeBarTrack": "InteractiveVideoDemo-module__QjZibG__gaugeBarTrack",
  "gaugeHelper": "InteractiveVideoDemo-module__QjZibG__gaugeHelper",
  "gaugeItem": "InteractiveVideoDemo-module__QjZibG__gaugeItem",
  "gaugeLabelRow": "InteractiveVideoDemo-module__QjZibG__gaugeLabelRow",
  "greenCheck": "InteractiveVideoDemo-module__QjZibG__greenCheck",
  "header": "InteractiveVideoDemo-module__QjZibG__header",
  "headerBadges": "InteractiveVideoDemo-module__QjZibG__headerBadges",
  "headerSubtitle": "InteractiveVideoDemo-module__QjZibG__headerSubtitle",
  "headerTitle": "InteractiveVideoDemo-module__QjZibG__headerTitle",
  "heapFill": "InteractiveVideoDemo-module__QjZibG__heapFill",
  "heapValue": "InteractiveVideoDemo-module__QjZibG__heapValue",
  "memoryGauges": "InteractiveVideoDemo-module__QjZibG__memoryGauges",
  "opfsBufferValue": "InteractiveVideoDemo-module__QjZibG__opfsBufferValue",
  "opfsFill": "InteractiveVideoDemo-module__QjZibG__opfsFill",
  "platformBtn": "InteractiveVideoDemo-module__QjZibG__platformBtn",
  "platformBtnActive": "InteractiveVideoDemo-module__QjZibG__platformBtnActive",
  "platformIcon": "InteractiveVideoDemo-module__QjZibG__platformIcon",
  "platformSelectorRow": "InteractiveVideoDemo-module__QjZibG__platformSelectorRow",
  "quotaDetails": "InteractiveVideoDemo-module__QjZibG__quotaDetails",
  "quotaLabel": "InteractiveVideoDemo-module__QjZibG__quotaLabel",
  "quotaRow": "InteractiveVideoDemo-module__QjZibG__quotaRow",
  "quotaValueCyan": "InteractiveVideoDemo-module__QjZibG__quotaValueCyan",
  "quotaValueGreen": "InteractiveVideoDemo-module__QjZibG__quotaValueGreen",
  "quotaValuePurple": "InteractiveVideoDemo-module__QjZibG__quotaValuePurple",
  "screenBackdrop": "InteractiveVideoDemo-module__QjZibG__screenBackdrop",
  "screenCenterInfo": "InteractiveVideoDemo-module__QjZibG__screenCenterInfo",
  "screenFrame": "InteractiveVideoDemo-module__QjZibG__screenFrame",
  "scrubberBufferedRange": "InteractiveVideoDemo-module__QjZibG__scrubberBufferedRange",
  "scrubberCurrentProgress": "InteractiveVideoDemo-module__QjZibG__scrubberCurrentProgress",
  "scrubberPlaying": "InteractiveVideoDemo-module__QjZibG__scrubberPlaying",
  "seekPill": "InteractiveVideoDemo-module__QjZibG__seekPill",
  "telemetryCard": "InteractiveVideoDemo-module__QjZibG__telemetryCard",
  "telemetryGrid": "InteractiveVideoDemo-module__QjZibG__telemetryGrid",
  "timeCounter": "InteractiveVideoDemo-module__QjZibG__timeCounter",
  "timelineScrubber": "InteractiveVideoDemo-module__QjZibG__timelineScrubber",
  "titleGroup": "InteractiveVideoDemo-module__QjZibG__titleGroup",
  "videoIcon": "InteractiveVideoDemo-module__QjZibG__videoIcon",
  "videoIconWrap": "InteractiveVideoDemo-module__QjZibG__videoIconWrap",
  "videoScrub": "InteractiveVideoDemo-module__QjZibG__videoScrub",
  "videoStage": "InteractiveVideoDemo-module__QjZibG__videoStage",
});
}),
"[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveVideoDemo",
    ()=>InteractiveVideoDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-video.js [app-client] (ecmascript) <export default as FileVideo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-smartphone.js [app-client] (ecmascript) <export default as MonitorSmartphone>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const InteractiveVideoDemo = ()=>{
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlatform, setSelectedPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desktop');
    const [seekTime, setSeekTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(42);
    const [isPickerSimulated, setIsPickerSimulated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const platformQuota = selectedPlatform === 'desktop' ? '5.0 GB Buffer' : '1.0 GB Safe Buffer';
    const platformMax = selectedPlatform === 'desktop' ? '5120 MB' : '1024 MB';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "interactive-video-simulator",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoIconWrap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                    size: 18,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerTitle,
                                        children: "Local Chunk-Streaming Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerSubtitle,
                                        children: "File System Access API + OPFS Virtual RAM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBadges,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "orange",
                                children: "Zero OOM Crash"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "blue",
                                children: "4K 60FPS Pro"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoStage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].screenFrame,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].screenBackdrop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmNoiseLayer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].screenCenterInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__["FileVideo"], {
                                                size: 40,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerVideoIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cinemaMovieTitle,
                                                children: "Oppenheimer_4K_HDR_Master.mkv"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cinemaFileMeta,
                                                children: "18.4 GB Local File • Direct Disk Read • Zero Server Upload"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seekPill,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 12,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greenCheck
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Instant Seek Latency: 3.8 ms (From OPFS Cache)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: "cinema-play-pause-btn",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cinemaPlayBtn,
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        "aria-label": isPlaying ? 'Pause' : 'Play',
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                            lineNumber: 79,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                            lineNumber: 79,
                                            columnNumber: 50
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timelineScrubber,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberBufferedRange
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberCurrentProgress} ${isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrubberPlaying : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeCounter,
                                        children: "01:14:28 / 03:00:09"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullscreenBtn,
                                        "aria-label": "Fullscreen",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cpuIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Memory Architecture (No OOM)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].memoryGauges,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeLabelRow,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Browser JS Heap (RAM)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heapValue,
                                                                children: "118 MB (Optimal)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeBarTrack,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heapFill
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeHelper,
                                                        children: "Safe from browser memory limits (Prevents Out-Of-Memory)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeLabelRow,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "OPFS Virtual RAM Buffer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsBufferValue,
                                                                children: "4.2 GB / 5.0 GB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeBarTrack,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].opfsFill
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gaugeHelper,
                                                        children: "Streaming chunks via SyncAccessHandle directly to disk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telemetryCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__["MonitorSmartphone"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Smart Storage Quota Detection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformSelectorRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: "platform-switch-desktop",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformBtn} ${selectedPlatform === 'desktop' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformBtnActive : ''}`,
                                                onClick: ()=>setSelectedPlatform('desktop'),
                                                children: "Desktop Chrome / Edge"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: "platform-switch-ios",
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformBtn} ${selectedPlatform === 'ios' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformBtnActive : ''}`,
                                                onClick: ()=>setSelectedPlatform('ios'),
                                                children: "iOS Safari Fallback"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaLabel,
                                                        children: "Allocated Buffer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaValueGreen,
                                                        children: platformQuota
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaLabel,
                                                        children: "Storage Estimate API:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaValueCyan,
                                                        children: "Active Detection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaLabel,
                                                        children: "Frame Dropping:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractiveVideoDemo$2f$InteractiveVideoDemo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quotaValuePurple,
                                                        children: "0 Dropped Frames (60fps)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InteractiveVideoDemo/InteractiveVideoDemo.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InteractiveVideoDemo, "ieCgbkYSxYy84Ifspc/6KUfjOp8=");
_c = InteractiveVideoDemo;
var _c;
__turbopack_context__.k.register(_c, "InteractiveVideoDemo");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/LandingHero/LandingHero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
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
const LandingHero = ({ onExploreChat, onExploreSubdomains, onExploreFree })=>{
    const scrollTo = (elementId)=>{
        const elem = document.getElementById(elementId);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const flagshipPills = [
        {
            id: 'hero-chat',
            title: 'NothingChat',
            badge: 'P2P Encrypted',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                size: 16,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillIconBlue
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 'hero-drop',
            title: 'NothingDrop',
            badge: '50GB AirDrop',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                size: 16,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillIconGreen
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 'hero-music',
            title: 'NothingMusic',
            badge: 'OPFS Hi-Res',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                size: 16,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillIconPink
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 'hero-cinema',
            title: 'NothingCinema',
            badge: '4K Peer Stream',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                size: 16,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillIconOrange
            }, void 0, false, {
                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                lineNumber: 61,
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
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrowWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgePill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pulseIndicator
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeText,
                                children: "The Browser-Native Computing Suite"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeDivider,
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeHighlight,
                                children: "100% Free Forever"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandHeroEmblem,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoFrame,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            size: 84,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainHeroLogo,
                            id: "landing-hero-logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 79,
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
                                    lineNumber: 88,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeadline,
                            children: "Engineered for raw browser power. Zero cloud servers. Free forever."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bodyDescription,
                            children: "A breakthrough ecosystem of 20 decentralized web applications running purely inside your hardware. From encrypted peer-to-peer communications and 50GB file transfers to high-fidelity audio and 4K cinema streaming. No accounts, no telemetry, no subscription fees."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flagshipStrip,
                    children: flagshipPills.map((pill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flagshipPillBtn,
                            onClick: ()=>scrollTo(pill.id),
                            "aria-label": `Jump to ${pill.title}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillIconWrap,
                                    children: pill.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillTextWrap,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillTitle,
                                            children: pill.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillBadge,
                                            children: pill.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 14,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillChevron
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, pill.id, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 101,
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
                                    children: "Explore Flagship Apps"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "hero-cta-subdomains",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                            onClick: ()=>scrollTo('subdomain-carousel'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "View 20 Subdomains"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "hero-cta-free",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tertiaryBtn,
                            onClick: ()=>scrollTo('free-ecosystem'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Why It's 100% Free"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 14,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sparkleIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 120,
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
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 150,
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
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "100% local browser execution"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricDivider
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 159,
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
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                            children: "20 Subdomains"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "Dedicated micro-frontends"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricDivider
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 171,
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
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 174,
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
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "P2P WebRTC & WebCrypto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricDivider
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 183,
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
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricValue,
                                            children: "$0.00 Forever"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricLabel,
                                            children: "No billing, accounts, or trials"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 148,
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
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 18,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LandingHero$2f$LandingHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollChevron
                        }, void 0, false, {
                            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/LandingHero/LandingHero.tsx",
        lineNumber: 66,
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
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "blue",
                                            children: product.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "subtle",
                                            children: product.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                            size: 30,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLogo
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                            children: product.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 34,
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
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 27,
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
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                    lineNumber: 26,
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
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].purposeText,
                                    children: product.corePurpose
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 50,
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
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Storage Strategy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archValue,
                                            children: product.architecture.storageStrategy
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 56,
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
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Network & Transport"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archValue,
                                            children: product.architecture.networkLayer
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 66,
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
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Memory Management"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].archValue,
                                            children: product.architecture.memoryManagement
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 76,
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
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Technology Stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillList,
                                            children: product.architecture.technology.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductModal$2f$ProductModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].techPill,
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 55,
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
                                    lineNumber: 102,
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
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: benefit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                    lineNumber: 49,
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
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "md",
                            onClick: onClose,
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductModal/ProductModal.tsx",
        lineNumber: 20,
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
"[project]/src/lib/audioSynth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ambientSynth",
    ()=>ambientSynth
]);
// Web Audio API ambient synthesizer for browser-native audio playback
class AmbientSynthesizer {
    ctx = null;
    isPlaying = false;
    timer = null;
    masterGain = null;
    currentVolume = 0.7;
    initContext() {
        if (!this.ctx && ("TURBOPACK compile-time value", "object") !== 'undefined') {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }
    setVolume(vol) {
        this.currentVolume = Math.max(0, Math.min(1, vol));
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
        }
    }
    play() {
        this.initContext();
        if (this.isPlaying || !this.ctx || !this.masterGain) return;
        this.isPlaying = true;
        // Chord sequence: Cmaj7, Am7, Fmaj7, G7
        const chords = [
            [
                261.63,
                329.63,
                392.00,
                493.88
            ],
            [
                220.00,
                261.63,
                329.63,
                392.00
            ],
            [
                174.61,
                220.00,
                261.63,
                329.63
            ],
            [
                196.00,
                246.94,
                293.66,
                349.23
            ]
        ];
        let chordIdx = 0;
        const playChord = ()=>{
            if (!this.isPlaying || !this.ctx || !this.masterGain) return;
            const currentChord = chords[chordIdx % chords.length];
            chordIdx++;
            currentChord.forEach((freq, i)=>{
                if (!this.ctx || !this.masterGain) return;
                const osc = this.ctx.createOscillator();
                const noteGain = this.ctx.createGain();
                osc.type = i === 0 ? 'triangle' : 'sine';
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                // Gentle attack and release envelope
                const now = this.ctx.currentTime;
                noteGain.gain.setValueAtTime(0, now);
                noteGain.gain.linearRampToValueAtTime(0.06 / (i + 1), now + 0.4);
                noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);
                osc.connect(noteGain);
                noteGain.connect(this.masterGain);
                osc.start(now);
                osc.stop(now + 3.0);
            });
        };
        playChord();
        this.timer = setInterval(playChord, 3000);
    }
    pause() {
        this.isPlaying = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    stop() {
        this.pause();
    }
    isAudioPlaying() {
        return this.isPlaying;
    }
}
const ambientSynth = new AmbientSynthesizer();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_06yn-9r._.js.map