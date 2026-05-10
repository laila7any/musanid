(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "00440912e5279d5fc94116fd7ed1c6bcadf0b02248dca97e08754b2aa00f8b4c") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00440912e5279d5fc94116fd7ed1c6bcadf0b02248dca97e08754b2aa00f8b4c";
    }
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                image: "/images/banner3.avif",
                title: "Empowering Every Student",
                subtitle: "DISABILITY SUPPORT",
                highlight: "THAT ACTUALLY WORKS",
                description: "NDIS-registered academic accommodations \u2022 Exam support \u2022 Campus accessibility \u2022 Real-time assistance",
                buttonText: "START YOUR JOURNEY"
            },
            {
                image: "/images/banner3.avif",
                title: "Your Success is Our Mission",
                subtitle: "UNIVERSITY LIFE",
                highlight: "MADE ACCESSIBLE",
                description: "Fast approvals \u2022 Note-taking \u2022 Interpreters \u2022 Mental health & mobility support",
                buttonText: "GET STARTED FREE"
            },
            {
                image: "/images/banner3.avif",
                title: "Inclusion Starts Here",
                subtitle: "FULL CAMPUS",
                highlight: "BELONGING",
                description: "24/7 student support \u2022 Transportation \u2022 Assistive technology \u2022 Personalized plans",
                buttonText: "REQUEST SUPPORT"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const slides = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Hero[useEffect()]": ()=>{
                const interval = setInterval({
                    "Hero[useEffect() > setInterval()]": ()=>{
                        setCurrentSlide({
                            "Hero[useEffect() > setInterval() > setCurrentSlide()]": (prev)=>prev === slides.length - 1 ? 0 : prev + 1
                        }["Hero[useEffect() > setInterval() > setCurrentSlide()]"]);
                    }
                }["Hero[useEffect() > setInterval()]"], 4800);
                return ()=>clearInterval(interval);
            }
        })["Hero[useEffect()]"];
        t2 = [
            slides.length
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Hero[goToSlide]": (index)=>setCurrentSlide(index)
        })["Hero[goToSlide]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const goToSlide = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Hero[nextSlide]": ()=>setCurrentSlide({
                    "Hero[nextSlide > setCurrentSlide()]": (prev_0)=>prev_0 === slides.length - 1 ? 0 : prev_0 + 1
                }["Hero[nextSlide > setCurrentSlide()]"])
        })["Hero[nextSlide]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const nextSlide = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Hero[prevSlide]": ()=>setCurrentSlide({
                    "Hero[prevSlide > setCurrentSlide()]": (prev_1)=>prev_1 === 0 ? slides.length - 1 : prev_1 - 1
                }["Hero[prevSlide > setCurrentSlide()]"])
        })["Hero[prevSlide]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const prevSlide = t5;
    let t6;
    if ($[7] !== currentSlide) {
        t6 = slides.map({
            "Hero[slides.map()]": (slide, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-all duration-1000 ease-out ${index_0 === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.image,
                            alt: slide.highlight,
                            fill: true,
                            priority: index_0 === 0,
                            className: "object-cover brightness-75",
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 106,
                            columnNumber: 204
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-[#41654F]/80 via-[#41654F]/60 to-[#705444]/40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 106,
                            columnNumber: 343
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12 border border-[#9DCCB0]/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-x-2 bg-[#9DCCB0] text-[#41654F] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-3xl mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 788
                                            }, this),
                                            "REGISTERED NDIS PROVIDER"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 106,
                                        columnNumber: 637
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-6xl font-bold leading-none text-[#41654F]",
                                        children: slide.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 106,
                                        columnNumber: 850
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex items-baseline gap-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#9DCCB0] text-4xl font-semibold",
                                                children: slide.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 993
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#705444] text-4xl font-light",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 1072
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#705444] text-4xl font-semibold tracking-tight",
                                                children: slide.highlight
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 1133
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 106,
                                        columnNumber: 943
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-8 text-lg text-[#705444] leading-relaxed",
                                        children: slide.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 106,
                                        columnNumber: 1234
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 flex flex-wrap gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/request",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "cursor-pointer group flex items-center justify-center gap-x-3 bg-[#41654F] hover:bg-[#9DCCB0] hover:text-[#41654F] text-white px-9 py-6 rounded-3xl font-semibold text-lg transition-all duration-300 shadow-xl",
                                                    children: [
                                                        slide.buttonText,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-6 h-6 group-active:rotate-45 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/hero.jsx",
                                                            lineNumber: 106,
                                                            columnNumber: 1628
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/hero.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 1382
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 1360
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "cursor-pointer flex items-center justify-center gap-x-3 border-2 border-[#41654F] text-[#41654F] hover:bg-[#F3E3CD] px-9 py-6 rounded-3xl font-semibold text-lg transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Watch How It Works"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 1937
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/hero.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 1742
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 1722
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 106,
                                        columnNumber: 1316
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 pt-8 border-t border-[#9DCCB0]/20 flex items-center gap-x-8 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex -space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-[#9DCCB0] rounded-2xl flex items-center justify-center text-xs font-bold text-[#41654F]",
                                                        children: "U"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 2114
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-[#F3E3CD] rounded-2xl flex items-center justify-center text-xs font-bold text-[#705444]",
                                                        children: "A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 2237
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 2081
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#705444] font-medium",
                                                children: "Trusted by 28 egyptian universities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero.jsx",
                                                lineNumber: 106,
                                                columnNumber: 2366
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/hero.jsx",
                                        lineNumber: 106,
                                        columnNumber: 1990
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/hero.jsx",
                                lineNumber: 106,
                                columnNumber: 527
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.jsx",
                            lineNumber: 106,
                            columnNumber: 448
                        }, this)
                    ]
                }, index_0, true, {
                    fileName: "[project]/src/components/hero.jsx",
                    lineNumber: 106,
                    columnNumber: 49
                }, this)
        }["Hero[slides.map()]"]);
        $[7] = currentSlide;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== currentSlide) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3",
            children: slides.map({
                "Hero[slides.map()]": (_, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Hero[slides.map() > <button>.onClick]": ()=>goToSlide(index_1)
                        }["Hero[slides.map() > <button>.onClick]"],
                        className: ` cursor-pointer transition-all duration-300 ${index_1 === currentSlide ? "w-10 h-3 bg-[#9DCCB0] rounded-3xl" : "w-3 h-3 bg-white/60 hover:bg-white rounded-full"}`,
                        "aria-label": `Go to slide ${index_1 + 1}`
                    }, index_1, false, {
                        fileName: "[project]/src/components/hero.jsx",
                        lineNumber: 116,
                        columnNumber: 47
                    }, this)
            }["Hero[slides.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[9] = currentSlide;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prevSlide,
            className: "cursor-pointer absolute left-6 top-1/2 z-30 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#9DCCB0] hover:text-[#41654F] text-white rounded-3xl flex items-center justify-center transition-all",
            children: "←"
        }, void 0, false, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: nextSlide,
            className: "cursor-pointer absolute right-6 top-1/2 z-30 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#9DCCB0] hover:text-[#41654F] text-white rounded-3xl flex items-center justify-center transition-all",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t6 || $[14] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-screen max-h-[720px] overflow-hidden",
            children: [
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[13] = t6;
        $[14] = t7;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    return t10;
}
_s(Hero, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sectionB.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
function SectionB() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "9fde5a32287e97fcc6b0cd0fdefe697a657267e94b2842c653e835fec30306f7") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9fde5a32287e97fcc6b0cd0fdefe697a657267e94b2842c653e835fec30306f7";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const stories = [
            {
                name: "Sarah Johnson",
                program: "Computer Science, Class of 2023",
                story: "As a visually impaired student, the accommodation system provided me with digital textbooks and screen readers that transformed my learning experience. I graduated with honors thanks to their support.",
                image: "\uD83D\uDC69\u200D\uD83C\uDF93",
                accommodations: [
                    "Digital Textbooks",
                    "Screen Readers",
                    "Extended Exam Time"
                ],
                rating: 5
            },
            {
                name: "Michael Chen",
                program: "Psychology, Graduate Student",
                story: "The mobility support services, including campus transportation and accessible classroom arrangements, allowed me to focus on my studies without worrying about physical barriers.",
                image: "\uD83D\uDC68\u200D\uD83C\uDF93",
                accommodations: [
                    "Campus Transportation",
                    "Accessible Seating",
                    "Note-taking Support"
                ],
                rating: 5
            },
            {
                name: "Emma Rodriguez",
                program: "Business Administration",
                story: "Being hearing-impaired, I was provided with sign language interpreters and real-time captioning. The system made sure I never missed any important lectures or discussions.",
                image: "\uD83D\uDC69\u200D\uD83D\uDCBC",
                accommodations: [
                    "Sign Language Interpreter",
                    "Real-time Captioning",
                    "Visual Alerts"
                ],
                rating: 4
            }
        ];
        t2 = "py-20 px-4 sm:px-6 lg:px-8 bg-[#f3e3cd63]";
        t0 = "max-w-7xl mx-auto";
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-x-2 text-[#9DCCB0] font-semibold text-sm tracking-widest mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-px w-8 bg-[#9DCCB0]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionB.jsx",
                            lineNumber: 42,
                            columnNumber: 153
                        }, this),
                        "REAL STORIES • REAL IMPACT"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 42,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-[#41654F] mb-4",
                    children: "Student Success Stories"
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 42,
                    columnNumber: 227
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-[#705444] max-w-2xl mx-auto",
                    children: "Hear from university students who transformed their academic journey with our NDIS-registered support"
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 42,
                    columnNumber: 322
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sectionB.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: stories.map(_SectionBStoriesMap)
        }, void 0, false, {
            fileName: "[project]/src/components/sectionB.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t0,
                children: [
                    t1,
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 bg-[#41654F] rounded-3xl p-10 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
                            children: [
                                {
                                    number: "2,500+",
                                    label: "Students Supported"
                                },
                                {
                                    number: "98%",
                                    label: "Satisfaction Rate"
                                },
                                {
                                    number: "1.2k",
                                    label: "Monthly Requests"
                                },
                                {
                                    number: "24/7",
                                    label: "NDIS Support"
                                }
                            ].map(_SectionBAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionB.jsx",
                            lineNumber: 56,
                            columnNumber: 126
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionB.jsx",
                        lineNumber: 56,
                        columnNumber: 62
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionB.jsx",
                lineNumber: 56,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sectionB.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = SectionB;
function _SectionBAnonymous(stat, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl font-bold text-[#9DCCB0]",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/components/sectionB.jsx",
                lineNumber: 76,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#F3E3CD] mt-1",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/components/sectionB.jsx",
                lineNumber: 76,
                columnNumber: 95
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/components/sectionB.jsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
function _SectionBStoriesMap(student, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#9DCCB0]/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex mb-6",
                    children: [
                        ...Array(5)
                    ].map({
                        "SectionB[stories.map() > (anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-2xl ${i < student.rating ? "text-[#9DCCB0]" : "text-[#F3E3CD]"}`,
                                children: "★"
                            }, i, false, {
                                fileName: "[project]/src/components/sectionB.jsx",
                                lineNumber: 80,
                                columnNumber: 64
                            }, this)
                    }["SectionB[stories.map() > (anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 79,
                    columnNumber: 178
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    className: "text-[#705444] italic text-lg leading-relaxed mb-8",
                    children: [
                        "“",
                        student.story,
                        "”"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 81,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 bg-[#9DCCB0] text-[#41654F] rounded-2xl flex items-center justify-center text-4xl flex-shrink-0",
                            children: student.image
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionB.jsx",
                            lineNumber: 81,
                            columnNumber: 209
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-[#41654F] text-xl",
                                    children: student.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionB.jsx",
                                    lineNumber: 81,
                                    columnNumber: 358
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#705444] text-sm",
                                    children: student.program
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sectionB.jsx",
                                    lineNumber: 81,
                                    columnNumber: 424
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionB.jsx",
                            lineNumber: 81,
                            columnNumber: 353
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 81,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-6 border-t border-[#9DCCB0]/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#41654F] font-medium text-sm mb-3",
                            children: "Accommodations Used"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionB.jsx",
                            lineNumber: 81,
                            columnNumber: 551
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: student.accommodations.map(_SectionBStoriesMapStudentAccommodationsMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sectionB.jsx",
                            lineNumber: 81,
                            columnNumber: 629
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionB.jsx",
                    lineNumber: 81,
                    columnNumber: 495
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sectionB.jsx",
            lineNumber: 79,
            columnNumber: 45
        }, this)
    }, index, false, {
        fileName: "[project]/src/components/sectionB.jsx",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
function _SectionBStoriesMapStudentAccommodationsMap(acc, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-4 py-1.5 bg-[#9DCCB0]/10 text-[#41654F] text-xs font-medium rounded-3xl",
        children: acc
    }, idx, false, {
        fileName: "[project]/src/components/sectionB.jsx",
        lineNumber: 84,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SectionB");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sectionC.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function SectionC() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d0097b7276c5b71154d094ecdcf1ab9bd4630cc8106db2d21e0a5a8808c84429") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0097b7276c5b71154d094ecdcf1ab9bd4630cc8106db2d21e0a5a8808c84429";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                title: "Easy Submission",
                description: "Submit accommodation requests in minutes through our user-friendly portal",
                icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                color: "#9DCCB0"
            },
            {
                title: "Smart Routing",
                description: "Requests automatically sent to relevant departments for faster processing",
                icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                color: "#41654F"
            },
            {
                title: "Real-time Tracking",
                description: "Monitor request status with live updates and notifications",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                color: "#705444"
            },
            {
                title: "Secure & Confidential",
                description: "All data protected with enterprise-grade security and privacy",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                color: "#9DCCB0"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const features = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                number: "01",
                title: "Submit Request",
                description: "Fill out our simple online form with your accommodation needs"
            },
            {
                number: "02",
                title: "Review Process",
                description: "Our team evaluates and routes to appropriate departments"
            },
            {
                number: "03",
                title: "Approval & Setup",
                description: "Receive approval and accommodations are implemented"
            },
            {
                number: "04",
                title: "Ongoing Support",
                description: "Continuous monitoring and adjustments as needed"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const steps = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#9DCCB0] font-semibold tracking-widest",
                    children: "WHY NEWLEAF"
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionC.jsx",
                    lineNumber: 68,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-[#41654F] mt-2",
                    children: "Why Students Choose Us"
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionC.jsx",
                    lineNumber: 68,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: features.map(_SectionCFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionC.jsx",
                    lineNumber: 75,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "w-20 h-20 rounded-full",
            src: "../images/logo.jpg",
            alt: "logo"
        }, void 0, false, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2 bg-[#9DCCB0] p-12 flex flex-col items-center justify-center text-[#41654F]",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-4xl font-bold text-center leading-none",
                    children: [
                        "Simple.",
                        t5,
                        "Fast.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/sectionC.jsx",
                            lineNumber: 96,
                            columnNumber: 196
                        }, this),
                        "Inclusive."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sectionC.jsx",
                    lineNumber: 96,
                    columnNumber: 120
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-[#41654F]/80 text-center max-w-xs",
                    children: "From request to support in under 48 hours"
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionC.jsx",
                    lineNumber: 96,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-10",
            children: steps.map(_SectionCStepsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#41654F] rounded-3xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-5",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-3 bg-white p-10 md:p-12",
                                    children: [
                                        t7,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/request",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "cursor-pointer w-full md:w-auto bg-[#9DCCB0] hover:bg-[#41654F] hover:text-white text-[#41654F] px-10 py-6 rounded-3xl font-semibold text-lg flex items-center justify-center gap-x-3 transition-all",
                                                    children: [
                                                        "Start Your Request Now",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sectionC.jsx",
                                                            lineNumber: 110,
                                                            columnNumber: 546
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sectionC.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 307
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sectionC.jsx",
                                                lineNumber: 110,
                                                columnNumber: 285
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sectionC.jsx",
                                            lineNumber: 110,
                                            columnNumber: 262
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sectionC.jsx",
                                    lineNumber: 110,
                                    columnNumber: 205
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sectionC.jsx",
                            lineNumber: 110,
                            columnNumber: 164
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionC.jsx",
                        lineNumber: 110,
                        columnNumber: 106
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionC.jsx",
                lineNumber: 110,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sectionC.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}
_c = SectionC;
function _SectionCStepsMap(step, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-6 items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 w-12 h-12 bg-[#9DCCB0] text-[#41654F] rounded-2xl font-bold flex items-center justify-center text-2xl",
                children: step.number
            }, void 0, false, {
                fileName: "[project]/src/components/sectionC.jsx",
                lineNumber: 118,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-[#41654F] text-2xl",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionC.jsx",
                        lineNumber: 118,
                        columnNumber: 235
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary-500 mt-2",
                        children: step.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionC.jsx",
                        lineNumber: 118,
                        columnNumber: 306
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sectionC.jsx",
                lineNumber: 118,
                columnNumber: 211
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/components/sectionC.jsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
function _SectionCFeaturesMap(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#f3e3cd63] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 h-14 bg-[#41654F] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-7 h-7 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: feature.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/sectionC.jsx",
                        lineNumber: 121,
                        columnNumber: 345
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sectionC.jsx",
                    lineNumber: 121,
                    columnNumber: 255
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sectionC.jsx",
                lineNumber: 121,
                columnNumber: 122
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-bold text-[#41654F] mb-3",
                children: feature.title
            }, void 0, false, {
                fileName: "[project]/src/components/sectionC.jsx",
                lineNumber: 121,
                columnNumber: 443
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-primary-500",
                children: feature.description
            }, void 0, false, {
                fileName: "[project]/src/components/sectionC.jsx",
                lineNumber: 121,
                columnNumber: 518
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/sectionC.jsx",
        lineNumber: 121,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SectionC");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_689ead2c._.js.map