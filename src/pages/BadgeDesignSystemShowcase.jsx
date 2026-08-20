import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BadgeDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="hidden md:flex flex-col h-screen w-64 docked left-0 py-base gap-stack-gap bg-surface-container text-primary font-label-bold text-label-bold sticky top-0 border-r-0">
<div className="px-margin py-base flex items-center gap-2">
<span className="material-symbols-outlined font-headline-lg text-headline-lg text-primary" style={{"fontVariationSettings": "FILL 1"}}>widgets</span>
<div>
<h1 className="font-headline-md text-headline-md text-primary">System</h1>
<p className="font-body-default text-body-default text-on-surface-variant">v1.0.2</p>
</div>
</div>
<div className="px-margin mb-4">
<button className="w-full bg-primary-container text-on-primary-container rounded-full px-4 py-3 font-label-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Component
            </button>
</div>
<ul className="flex flex-col gap-1 w-full flex-grow">
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">smart_button</span>
                    Buttons
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">match_case</span>
                    Typography
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">palette</span>
                    Colors
                </a>
</li>
<li>
<a className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-full px-4 py-3 mx-2 transition-all duration-200" href="#">
<span className="material-symbols-outlined">space_bar</span>
                    Badges
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">texture</span>
                    Patterns
                </a>
</li>
</ul>
</nav>

<nav className="md:hidden flex justify-between items-center px-margin py-base w-full z-50 bg-background text-primary font-headline-md text-headline-md sticky top-0 shadow-none border-b-0">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary font-headline-md" style={{"fontVariationSettings": "FILL 1"}}>widgets</span>
            KidsPlay Design
        </div>
<button className="text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</nav>

<main className="flex-1 p-margin md:p-12 overflow-y-auto">

<header className="mb-12 max-w-4xl">
<h1 className="font-headline-xl text-headline-xl text-on-background mb-4">Badge Design System</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Small, high-visibility indicators designed to communicate status, categories, and achievements. Our badges use the "pillowy" design language with fully rounded corners and vibrant, high-saturation colors to maintain an engaging, learning-focused aesthetic.
            </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-7xl">

<section className="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-lg p-cell-padding shadow-sm ring-1 ring-surface-dim relative overflow-hidden flex flex-col justify-center items-center min-h-[300px]">
<div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none"></div>
<div className="relative z-10 text-center w-full max-w-md">
<h2 className="font-headline-md text-headline-md text-primary mb-8 absolute top-0 left-0 w-full text-left">Anatomy</h2>
<div className="relative inline-block mt-12 mb-8 group">

<div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-outline-variant"></div>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 font-label-bold text-label-bold text-on-surface-variant whitespace-nowrap bg-surface-container-lowest px-2 py-1 rounded-full border border-outline-variant">Border Radius: 9999px</div>
<div className="absolute top-1/2 -left-8 -translate-y-1/2 w-6 h-[1px] bg-outline-variant"></div>
<div className="absolute top-1/2 -left-32 -translate-y-1/2 font-label-bold text-label-bold text-on-surface-variant bg-surface-container-lowest px-2 py-1 rounded-full border border-outline-variant">Padding: 8px 16px</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-outline-variant"></div>
<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-label-bold text-label-bold text-on-surface-variant whitespace-nowrap bg-surface-container-lowest px-2 py-1 rounded-full border border-outline-variant">Font: Geist Bold (Label)</div>

<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-bold text-label-bold ring-2 ring-transparent group-hover:ring-surface-tint transition-all cursor-default">
<span className="material-symbols-outlined text-[16px]">stars</span>
                            Perfect Score
                        </span>
</div>
</div>
</section>

<section className="col-span-1 md:col-span-4 bg-surface-container-low rounded-lg p-cell-padding flex flex-col gap-4 border-2 border-transparent">
<h2 className="font-headline-md text-headline-md text-primary">Best Practices</h2>
<ul className="space-y-4 font-body-default text-body-default text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span><strong>Do:</strong> Keep text extremely short (1-2 words max).</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span><strong>Do:</strong> Use fully rounded pills to maintain the squishy aesthetic.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error mt-0.5">cancel</span>
<span><strong>Don't:</strong> Use more than 3 distinct badge colors on a single screen to avoid rainbow fatigue.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error mt-0.5">cancel</span>
<span><strong>Don't:</strong> Use badges for primary page actions; they are indicators, not buttons (unless used as filters).</span>
</li>
</ul>
</section>

<section className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-lg p-cell-padding shadow-sm border border-surface-dim flex flex-col gap-6">
<h3 className="font-headline-md text-headline-md text-primary">Status</h3>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-bold text-label-bold">
                        New
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-bold text-label-bold">
<span className="material-symbols-outlined text-[14px]">check</span>
                        Completed
                    </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-inverse-primary text-on-primary-fixed-variant font-label-bold text-label-bold">
                        In Progress
                    </span>
</div>
</section>

<section className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-lg p-cell-padding shadow-sm border border-surface-dim flex flex-col gap-6">
<h3 className="font-headline-md text-headline-md text-primary">Categories</h3>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-bold text-label-bold">
                        Math
                    </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label-bold text-label-bold">
                        Science
                    </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-bold text-label-bold">
                        Art
                    </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-bold text-label-bold">
                        Reading
                    </span>
</div>
</section>

<section className="col-span-1 md:col-span-4 bg-surface-container-lowest rounded-lg p-cell-padding shadow-sm border border-surface-dim flex flex-col gap-6">
<h3 className="font-headline-md text-headline-md text-primary">Achievements</h3>
<div className="flex flex-wrap gap-4 items-center h-full">
<div className="flex flex-col items-center gap-2">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container ring-4 ring-secondary-fixed shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{"fontVariationSettings": "FILL 1"}}>star</span>
</span>
<span className="font-label-bold text-label-bold text-on-surface-variant">Star</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container text-on-primary-container ring-4 ring-primary-fixed shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{"fontVariationSettings": "FILL 1"}}>trophy</span>
</span>
<span className="font-label-bold text-label-bold text-on-surface-variant">Champion</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container ring-4 ring-tertiary-fixed shadow-sm">
<span className="material-symbols-outlined text-[24px]" style={{"fontVariationSettings": "FILL 1"}}>military_tech</span>
</span>
<span className="font-label-bold text-label-bold text-on-surface-variant">Medal</span>
</div>
</div>
</section>

<section className="col-span-1 md:col-span-12 bg-surface-container-low rounded-lg p-cell-padding grid grid-cols-1 md:grid-cols-2 gap-gutter border-2 border-transparent relative">
<div className="absolute right-0 bottom-0 w-64 h-64 border-4 border-primary/5 rounded-full -mr-32 -mb-32 pointer-events-none"></div>
<div className="absolute right-0 bottom-0 w-48 h-48 border-4 border-primary/10 rounded-full -mr-24 -mb-24 pointer-events-none"></div>
<div className="flex flex-col gap-6 relative z-10">
<h3 className="font-headline-md text-headline-md text-primary">Badge Styles</h3>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg">
<span className="font-body-default text-body-default text-on-surface-variant w-24">Solid</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-bold text-label-bold">Critical Info</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg">
<span className="font-body-default text-body-default text-on-surface-variant w-24">Tonal</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-variant text-on-surface-variant font-label-bold text-label-bold">Metadata</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg">
<span className="font-body-default text-body-default text-on-surface-variant w-24">Outline</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full border-2 border-outline text-on-surface-variant bg-transparent font-label-bold text-label-bold">Secondary</span>
</div>
</div>
</div>
<div className="flex flex-col gap-6 relative z-10">
<h3 className="font-headline-md text-headline-md text-primary">Interactive Filters</h3>
<p className="font-body-default text-body-default text-on-surface-variant">When used as chips for filtering, badges require a clear active and inactive state, often incorporating a subtle bounce or color snap.</p>
<div className="p-6 bg-surface-container-lowest rounded-lg flex flex-wrap gap-3 items-center justify-center min-h-[160px] border border-surface-dim">
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-variant text-on-surface-variant font-label-bold text-label-bold hover:bg-surface-dim transition-colors">
                            All Classes
                        </button>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-bold text-label-bold shadow-sm scale-105 transition-transform cursor-pointer ring-2 ring-primary">
<span className="material-symbols-outlined text-[16px]">check</span>
                            Math
                        </button>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-variant text-on-surface-variant font-label-bold text-label-bold hover:bg-surface-dim transition-colors">
                            Science
                        </button>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-variant text-on-surface-variant font-label-bold text-label-bold hover:bg-surface-dim transition-colors">
                            Art
                        </button>
</div>
</div>
</section>
</div>
</main>

    </div>
  );
}
