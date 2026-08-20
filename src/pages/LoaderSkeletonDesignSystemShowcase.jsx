import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoaderSkeletonDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-surface-container h-screen w-64 flex flex-col py-base gap-stack-gap border-r border-surface-variant hidden md:flex sticky top-0 shrink-0">

<div className="px-margin pt-margin pb-stack-gap">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md text-headline-md">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>widgets</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md text-primary">System</h1>
<p className="font-label-bold text-label-bold text-on-surface-variant">v1.0.2</p>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-2 mt-4">
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">smart_button</span>
<span className="font-body-default text-body-default">Buttons</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">match_case</span>
<span className="font-body-default text-body-default">Typography</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">palette</span>
<span className="font-body-default text-body-default">Colors</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">space_bar</span>
<span className="font-body-default text-body-default">Spacing</span>
</a>
<a className="bg-primary-container text-on-primary-container rounded-full px-4 py-3 mx-2 flex items-center gap-3 hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">texture</span>
<span className="font-body-default text-body-default font-bold">Loader &amp; Skeleton</span>
</a>
<a className="text-on-surface-variant px-4 py-3 mx-2 flex items-center gap-3 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-default text-body-default">Patterns</span>
</a>
</div>

<div className="px-margin pb-margin mt-auto">
<button className="w-full bg-primary-container text-on-primary-container font-label-bold text-label-bold py-3 rounded-full hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
            New Component
        </button>
</div>
</nav>

<main className="flex-1 flex flex-col min-h-screen max-w-7xl mx-auto w-full">

<header className="bg-background w-full top-0 sticky z-50 flex justify-between items-center px-margin py-base md:hidden border-b border-surface-variant">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-3xl">menu</span>
<span className="font-headline-md text-headline-md text-primary">KidsPlay Design</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant">dark_mode</span>
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-label-bold text-label-bold">Get Started</button>
</div>
</header>

<div className="p-margin flex-1 pb-24">

<div className="mb-12 max-w-3xl">
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">Loader &amp; Skeleton</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                Loading states are crucial for maintaining engagement during data transitions. 
                Our skeletons maintain the "pillowy" aesthetic with extreme border radii, while 
                spinners rely on playful, thick geometric strokes rather than thin lines.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-12 bg-white rounded-xl p-cell-padding shadow-sm border border-surface-variant relative overflow-hidden group">
<div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Skeleton Anatomy</h2>
<p className="font-body-default text-body-default text-on-surface-variant mb-6 max-w-lg">
                             Skeletons use <code className="bg-surface-variant px-2 py-1 rounded text-primary text-sm">surface-container-high</code> 
                             and <code className="bg-surface-variant px-2 py-1 rounded text-primary text-sm">surface-variant</code>. 
                             They maintain the exact structural footprint of the content they replace, featuring 32px radii for containers and fully rounded pill shapes for text.
                         </p>
</div>

<div className="flex-1 w-full bg-surface-container rounded-xl p-8 flex justify-center items-center">

<div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-sm flex flex-col gap-4 border border-surface-variant">

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full skeleton-shimmer shrink-0"></div>
<div className="flex flex-col gap-2 w-full">
<div className="h-4 w-3/4 rounded-full skeleton-shimmer"></div>
<div className="h-3 w-1/2 rounded-full skeleton-shimmer"></div>
</div>
</div>

<div className="h-32 w-full rounded-[24px] skeleton-shimmer mt-2"></div>

<div className="flex justify-between items-center mt-2">
<div className="h-8 w-24 rounded-full skeleton-shimmer"></div>
<div className="h-8 w-8 rounded-full skeleton-shimmer"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-6 bg-surface-container-low rounded-xl p-cell-padding shadow-sm">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">view_cozy</span>
                    Card Structure
                </h3>
<div className="bg-white rounded-xl p-6 border-2 border-surface-variant border-dashed"><div className="w-full h-64 bg-surface-dim animate-pulse rounded-[32px]"></div></div>
</div>

<div className="md:col-span-6 bg-surface-container-low rounded-xl p-cell-padding shadow-sm">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">format_list_bulleted</span>
                    List Items
                </h3>
<div className="bg-white rounded-xl p-6 border-2 border-surface-variant border-dashed flex flex-col gap-6"><div className="w-full h-4 bg-surface-dim animate-pulse rounded-full mb-4"></div><div className="w-full h-4 bg-surface-dim animate-pulse rounded-full mb-4"></div><div className="w-full h-4 bg-surface-dim animate-pulse rounded-full mb-4"></div><div className="w-full h-4 bg-surface-dim animate-pulse rounded-full mb-4"></div></div>
</div>

<div className="md:col-span-12 bg-primary-fixed rounded-xl p-cell-padding shadow-sm relative overflow-hidden">
<div className="absolute right-[-100px] top-[-100px] w-64 h-64 border-[40px] border-primary-fixed-dim rounded-full opacity-50"></div>
<div className="absolute right-10 bottom-[-50px] w-32 h-32 border-[20px] border-white rounded-full opacity-30"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<h3 className="font-headline-lg text-headline-lg text-on-primary-fixed mb-4">Spinners &amp; Progress</h3>
<p className="font-body-default text-body-default text-on-primary-fixed-variant mb-6">
                            For brief interactions or when layout isn't known, use chunky spinners. For linear progression, 
                            use fully rounded progress bars with high-contrast pillowy segments.
                        </p>
</div>
<div className="flex-1 flex flex-col gap-8 justify-center bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">

<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full border-4 border-surface-variant border-t-primary spinner"></div>
<span className="font-label-bold text-label-bold text-primary">Loading data...</span>
</div>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-end mb-1">
<span className="font-label-bold text-label-bold text-primary">Uploading Lesson</span>
<span className="font-label-bold text-label-bold text-primary">60%</span>
</div>
<div className="h-4 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-[60%] relative">

<div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-t-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 mt-4">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">Best Practices</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="bg-surface-container rounded-xl p-cell-padding border-t-4 border-[#34a853]">
<div className="flex items-center gap-3 mb-4">
<div className="bg-[#e6f4ea] text-[#137333] w-8 h-8 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[20px] font-bold">check</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface">Do</h4>
</div>
<ul className="space-y-4 font-body-default text-body-default text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-surface-tint text-sm mt-1">fiber_manual_record</span>
                                Use a subtle, low-contrast shimmer animation moving left to right.
                            </li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-surface-tint text-sm mt-1">fiber_manual_record</span>
                                Match the skeleton structure exactly to the expected loaded content layout.
                            </li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-surface-tint text-sm mt-1">fiber_manual_record</span>
                                Keep text placeholder lines fully rounded (pill-shaped) to match the brand aesthetic.
                            </li>
</ul>
</div>

<div className="bg-surface-container rounded-xl p-cell-padding border-t-4 border-error">
<div className="flex items-center gap-3 mb-4">
<div className="bg-error-container text-on-error-container w-8 h-8 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[20px] font-bold">close</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface">Don't</h4>
</div>
<ul className="space-y-4 font-body-default text-body-default text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error text-sm mt-1">fiber_manual_record</span>
                                Do not use dark, high-contrast colors (like black or dark gray) for skeletons in light mode.
                            </li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error text-sm mt-1">fiber_manual_record</span>
                                Avoid sharp corners on skeleton blocks; always use rounded radii (minimum 8px).
                            </li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error text-sm mt-1">fiber_manual_record</span>
                                Do not mix a structural skeleton with a generic center-screen loading spinner.
                            </li>
</ul>
</div>
</div>
</div>
</div> 
</div>

<footer className="bg-surface-container-highest w-full py-margin mt-auto border-t border-surface-variant">
<div className="flex flex-col md:flex-row justify-between items-center px-margin max-w-7xl mx-auto w-full gap-4">
<div className="text-headline-md font-headline-md text-on-surface">
                KidsPlay Learning System
            </div>
<div className="font-body-default text-body-default font-label-bold text-label-bold text-on-surface-variant">
                © 2024 KidsPlay Learning System
            </div>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Github</a>
<a className="text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Figma</a>
<a className="text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Support</a>
</div>
</div>
</footer>
</main>



    </div>
  );
}
