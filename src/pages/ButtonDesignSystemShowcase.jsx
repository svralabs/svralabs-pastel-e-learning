import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ButtonDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="hidden md:flex flex-col h-screen w-64 docked left-0 bg-surface-container dark:bg-surface-container-low border-r border-surface-container-highest py-base gap-stack-gap sticky top-0 shrink-0">
<div className="px-margin pt-margin pb-stack-gap">
<h1 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim">System</h1>
<p className="font-label-bold text-label-bold text-on-surface-variant">v1.0.2</p>
</div>
<div className="flex-1 overflow-y-auto flex flex-col gap-2">
<a className="bg-primary-container text-on-primary-container rounded-full px-4 py-3 mx-2 flex items-center gap-3 font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>smart_button</span>
                Buttons
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 font-label-bold text-label-bold hover:bg-surface-variant transition-all duration-200 rounded-full" href="#">
<span className="material-symbols-outlined">match_case</span>
                Typography
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 font-label-bold text-label-bold hover:bg-surface-variant transition-all duration-200 rounded-full" href="#">
<span className="material-symbols-outlined">palette</span>
                Colors
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 font-label-bold text-label-bold hover:bg-surface-variant transition-all duration-200 rounded-full" href="#">
<span className="material-symbols-outlined">space_bar</span>
                Spacing
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-3 font-label-bold text-label-bold hover:bg-surface-variant transition-all duration-200 rounded-full" href="#">
<span className="material-symbols-outlined">texture</span>
                Patterns
            </a>
</div>
<div className="px-margin pb-margin mt-auto">
<button className="w-full bg-primary text-on-primary rounded-full py-3 font-label-bold text-label-bold hover:bg-primary-fixed-variant transition-colors">New Component</button>
</div>
</nav>

<header className="md:hidden w-full top-0 sticky bg-surface border-b border-surface-container-highest z-50 flex justify-between items-center px-margin py-base">
<h1 className="text-headline-md font-headline-md text-primary">System</h1>
<button className="text-on-surface-variant p-2"><span className="material-symbols-outlined">menu</span></button>
</header>

<main className="flex-1 p-margin overflow-x-hidden">

<div className="mb-gutter max-w-4xl">
<h2 className="font-headline-xl text-headline-xl mb-4">Button Design System</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">A comprehensive guide to button anatomy, hierarchy, and usage within our playful, bento-inspired ecosystem. Designed for consistency, tactile engagement, and clarity.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-7xl mx-auto">

<div className="col-span-1 md:col-span-8 bg-surface-container-low rounded-xl p-cell-padding relative overflow-hidden dot-pattern flex flex-col justify-center min-h-[400px]">
<div className="absolute inset-0 pointer-events-none" style={{"background": "radial-gradient(circle at 50% 50%, transparent 40%, var(--tw-colors-surface-container-low) 100%)"}}></div>
<h3 className="font-headline-md text-headline-md mb-stack-gap relative z-10">Anatomy</h3>
<div className="flex-1 flex items-center justify-center relative z-10">
<div className="relative inline-block">

<div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="font-label-bold text-label-bold text-primary mb-1 whitespace-nowrap">Geist Sans, Bold</span>
<div className="h-8 w-px bg-primary"></div>
</div>
<div className="absolute top-1/2 -left-16 -translate-y-1/2 flex items-center">
<span className="font-label-bold text-label-bold text-primary mr-2 whitespace-nowrap">Rounded-full<br/>(9999px)</span>
<div className="w-12 h-px bg-primary"></div>
</div>
<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="h-8 w-px bg-primary"></div>
<span className="font-label-bold text-label-bold text-primary mt-1 whitespace-nowrap">Generous Padding<br/>(px-8 py-4)</span>
</div>

<button className="bg-primary-container text-on-primary-container rounded-full px-8 py-4 font-label-bold text-label-bold text-lg hover:scale-105 transition-transform duration-200 shadow-sm relative z-20">
                            Primary Action
                        </button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-secondary-container text-on-secondary-container rounded-xl p-cell-padding flex flex-col">
<h3 className="font-headline-md text-headline-md mb-stack-gap">Best Practices</h3>
<ul className="space-y-4 font-body-default text-body-default flex-1">
<li className="flex gap-3">
<span className="material-symbols-outlined text-tertiary">check_circle</span>
<span>Use Primary buttons for the main action on a screen.</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-tertiary">check_circle</span>
<span>Secondary buttons offer alternative choices without competing for attention.</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-tertiary">check_circle</span>
<span>Keep labels concise (1-3 words).</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-error">cancel</span>
<span>Avoid multiple Primary buttons in the same view.</span>
</li>
</ul>
</div>

<div className="col-span-1 md:col-span-12 bg-white rounded-xl p-cell-padding">
<h3 className="font-headline-md text-headline-md mb-stack-gap">Hierarchy &amp; Types</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center">
<button className="bg-primary-container text-on-primary-container rounded-full px-6 py-3 font-label-bold text-label-bold hover:scale-105 transition-transform duration-200">
                            Primary
                        </button>
<p className="font-body-default text-body-default text-on-surface-variant">High-emphasis. Solid #7047EB.</p>
</div>

<div className="bg-surface-container rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center">
<button className="bg-secondary-fixed-dim text-on-secondary-fixed-variant rounded-full px-6 py-3 font-label-bold text-label-bold hover:scale-105 transition-transform duration-200">
                            Secondary
                        </button>
<p className="font-body-default text-body-default text-on-surface-variant">Medium-emphasis. Solid #F4D06F.</p>
</div>

<div className="bg-surface-container rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center">
<button className="bg-transparent border-2 border-primary-container text-primary-container rounded-full px-6 py-3 font-label-bold text-label-bold hover:bg-surface-variant transition-colors duration-200">
                            Surface Outline
                        </button>
<p className="font-body-default text-body-default text-on-surface-variant">Low-emphasis. High contrast border.</p>
</div>

<div className="bg-surface-container rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center">
<div className="flex gap-3">
<button className="bg-primary-container text-on-primary-container rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform">
<span className="material-symbols-outlined">play_arrow</span>
</button>
<button className="bg-secondary-container text-on-secondary-container rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-surface-variant text-on-surface-variant rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform">
<span className="material-symbols-outlined">star</span>
</button>
</div>
<p className="font-body-default text-body-default text-on-surface-variant">Circular, minimal footprint.</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 bg-surface-container-highest rounded-xl p-cell-padding">
<h3 className="font-headline-md text-headline-md mb-stack-gap">Interactive States</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b-2 border-outline-variant">
<th className="font-label-bold text-label-bold py-3 px-4 text-on-surface-variant">Type</th>
<th className="font-label-bold text-label-bold py-3 px-4 text-on-surface-variant">Default</th>
<th className="font-label-bold text-label-bold py-3 px-4 text-on-surface-variant">Hover</th>
<th className="font-label-bold text-label-bold py-3 px-4 text-on-surface-variant">Active</th>
<th className="font-label-bold text-label-bold py-3 px-4 text-on-surface-variant">Disabled</th>
</tr>
</thead>
<tbody className="font-body-default text-body-default">
<tr className="border-b border-surface-variant">
<td className="py-4 px-4 font-label-bold">Primary</td>
<td className="py-4 px-4">
<button className="bg-primary-container text-on-primary-container rounded-full px-4 py-2 font-label-bold">Button</button>
</td>
<td className="py-4 px-4">
<button className="bg-primary-container text-on-primary-container rounded-full px-4 py-2 font-label-bold scale-105">Button</button>
</td>
<td className="py-4 px-4">
<button className="bg-primary text-on-primary rounded-full px-4 py-2 font-label-bold scale-95">Button</button>
</td>
<td className="py-4 px-4">
<button className="bg-surface-variant text-outline opacity-50 cursor-not-allowed rounded-full px-4 py-2 font-label-bold">Button</button>
</td>
</tr>
<tr>
<td className="py-4 px-4 font-label-bold">Secondary</td>
<td className="py-4 px-4">
<button className="bg-secondary-fixed-dim text-on-secondary-fixed-variant rounded-full px-4 py-2 font-label-bold">Button</button>
</td>
<td className="py-4 px-4">
<button className="bg-secondary-fixed-dim text-on-secondary-fixed-variant rounded-full px-4 py-2 font-label-bold scale-105">Button</button>
</td>
<td className="py-4 px-4">
<button className="bg-secondary-fixed text-on-secondary-fixed rounded-full px-4 py-2 font-label-bold scale-95">Button</button>
</td>
<td className="py-4 px-4">
<button className="bg-surface-variant text-outline opacity-50 cursor-not-allowed rounded-full px-4 py-2 font-label-bold">Button</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

    </div>
  );
}
