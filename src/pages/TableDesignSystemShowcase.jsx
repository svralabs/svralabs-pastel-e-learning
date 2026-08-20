import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TableDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-surface-container dark:bg-surface-container-low text-primary dark:text-primary-fixed-dim font-label-bold text-label-bold font-body-default text-body-default h-screen w-64 docked left-0 bg-surface-container-low dark:bg-surface-container-lowest flat no shadows flex flex-col h-full py-base gap-stack-gap hidden md:flex shrink-0">
<div className="px-margin py-base">
<h1 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim">System</h1>
<p className="font-body-default text-body-default text-on-surface-variant">v1.0.2</p>
</div>
<div className="flex-1 flex flex-col gap-2 mt-4 overflow-y-auto px-2">
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined">smart_button</span>
                Buttons
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined">match_case</span>
                Typography
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined">palette</span>
                Colors
            </a>
<a className="text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 flex items-center gap-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined">space_bar</span>
                Spacing
            </a>
<a className="bg-primary-container text-on-primary-container rounded-full px-4 py-3 mx-2 flex items-center gap-2 scale-98 transition-all hover:bg-surface-variant dark:hover:bg-surface-container-highest" href="#">
<span className="material-symbols-outlined">texture</span>
                Patterns
            </a>
</div>
<div className="px-margin mt-auto mb-base">
<button className="w-full bg-primary-container text-on-primary-container rounded-full py-3 font-label-bold text-label-bold hover:bg-primary hover:text-on-primary transition-colors duration-200">
                New Component
            </button>
</div>
</nav>
<div className="flex-1 flex flex-col min-w-0">

<header className="bg-background dark:bg-background text-primary dark:text-primary-fixed-dim font-headline-md text-headline-md font-body-default text-body-default w-full top-0 sticky bg-surface dark:bg-surface-dim flat no shadows flex justify-between items-center px-margin py-base w-full z-50">
<div className="flex items-center gap-4">
<div className="md:hidden">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
</div>
<div className="text-headline-md font-headline-md text-primary dark:text-primary-fixed-dim tracking-tight">KidsPlay Design</div>
</div>
<nav className="hidden md:flex gap-6 items-center">
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#">Components</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 scale-95 transition-transform hover:text-primary dark:hover:text-primary-fixed-dim duration-200" href="#">Patterns</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#">Guidelines</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#">Tokens</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-bold text-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors hidden sm:block">
                    Get Started
                </button>
</div>
</header>

<main className="p-margin flex-1 overflow-y-auto">

<section className="mb-margin">
<h1 className="font-headline-xl text-headline-xl text-on-background mb-4">Table Design System</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                    Tables in the KidsPlay system prioritize data density without sacrificing our friendly, pillowy aesthetic. By utilizing generous padding, high-contrast typography, and significant border radii, we transform rigid data grids into approachable, digestible learning tools.
                </p>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="col-span-1 md:col-span-12 bg-surface-container rounded-xl p-cell-padding border-2 border-surface-variant relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-colors-primary-fixed-dim)_0%,_transparent_70%)] opacity-30"></div>
<h2 className="font-headline-md text-headline-md text-primary mb-6">Table Anatomy</h2>
<div className="bg-surface rounded-[32px] border-2 border-primary-fixed-dim p-4 relative overflow-visible">

<div className="flex items-center justify-between border-b border-surface-variant pb-4 mb-4">
<div className="flex items-center gap-4 relative">
<span className="material-symbols-outlined text-primary bg-primary-fixed-dim p-2 rounded-full">table_rows</span>
<span className="font-label-bold text-label-bold text-on-surface">Header Cell</span>

<div className="absolute -top-8 left-12 bg-secondary-container text-on-secondary-container text-xs px-2 py-1 rounded-full whitespace-nowrap hidden sm:block">Generous Padding</div>
</div>
<div className="flex items-center gap-4">
<span className="font-body-default text-body-default text-on-surface-variant">Data Cell</span>
<span className="material-symbols-outlined text-outline">info</span>
</div>
</div>
<div className="absolute -right-4 -bottom-4 bg-tertiary-container text-on-tertiary-container text-xs px-3 py-1 rounded-full transform rotate-12 shadow-sm border border-surface">Radius: 32px</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 bg-surface-container rounded-xl p-cell-padding">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Soft Bordered</h3>
<p className="font-body-default text-body-default text-on-surface-variant mb-6">Clean outlines suitable for less dense data.</p>
<div className="bg-surface rounded-[32px] border-2 border-surface-variant overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b-2 border-surface-variant">
<th className="p-4 font-label-bold text-label-bold text-on-surface">Metric</th>
<th className="p-4 font-label-bold text-label-bold text-on-surface">Value</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-surface-variant last:border-0">
<td className="p-4 font-body-default text-body-default text-on-surface-variant">Completed Modules</td>
<td className="p-4 font-body-default text-body-default text-primary font-bold">12 / 15</td>
</tr>
<tr className="border-b border-surface-variant last:border-0">
<td className="p-4 font-body-default text-body-default text-on-surface-variant">Average Score</td>
<td className="p-4 font-body-default text-body-default text-tertiary">92%</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-1 md:col-span-6 bg-surface-container rounded-xl p-cell-padding">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Zebra / Striped</h3>
<p className="font-body-default text-body-default text-on-surface-variant mb-6">Alternating rows for high readability in lists.</p>
<div className="bg-surface rounded-[32px] overflow-hidden border-2 border-surface-variant">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="p-4 font-label-bold text-label-bold text-on-surface">Date</th>
<th className="p-4 font-label-bold text-label-bold text-on-surface">Event</th>
</tr>
</thead>
<tbody>
<tr className="bg-surface-container-low">
<td className="p-4 font-body-default text-body-default text-on-surface-variant">Oct 12</td>
<td className="p-4 font-body-default text-body-default text-on-surface">Science Fair Intro</td>
</tr>
<tr className="bg-surface">
<td className="p-4 font-body-default text-body-default text-on-surface-variant">Oct 14</td>
<td className="p-4 font-body-default text-body-default text-on-surface">Math Quiz 3</td>
</tr>
<tr className="bg-surface-container-low">
<td className="p-4 font-body-default text-body-default text-on-surface-variant">Oct 18</td>
<td className="p-4 font-body-default text-body-default text-on-surface">Reading Milestone</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-1 md:col-span-12 bg-primary-fixed-dim rounded-xl p-cell-padding relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{"backgroundImage": "radial-gradient(var(--tw-colors-primary) 2px, transparent 2px)", "backgroundSize": "16px 16px"}}></div>
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg text-on-primary-fixed mb-4">Accent Header</h3>
<p className="font-body-default text-body-default text-on-primary-fixed-variant mb-6">Strong visual anchor for primary data sets.</p>
<div className="bg-surface rounded-[32px] overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-primary text-on-primary">
<th className="p-5 font-headline-md text-headline-md rounded-tl-[32px]">Category</th>
<th className="p-5 font-headline-md text-headline-md">Target</th>
<th className="p-5 font-headline-md text-headline-md rounded-tr-[32px]">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b-2 border-surface-container-low">
<td className="p-5 font-body-default text-body-default text-on-surface font-bold">Vocabulary</td>
<td className="p-5 font-body-default text-body-default text-on-surface-variant">50 New Words</td>
<td className="p-5">
<span className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">
<span className="material-symbols-outlined text-[16px]">check_circle</span> On Track
                                            </span>
</td>
</tr>
<tr>
<td className="p-5 font-body-default text-body-default text-on-surface font-bold">Geometry</td>
<td className="p-5 font-body-default text-body-default text-on-surface-variant">Identify Shapes</td>
<td className="p-5">
<span className="inline-flex items-center gap-1 bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">
<span className="material-symbols-outlined text-[16px]">pending</span> Pending
                                            </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 bg-surface-container-lowest rounded-xl p-cell-padding border-4 border-surface-variant">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Live Example: Progress Tracker</h3>
<p className="font-body-default text-body-default text-on-surface-variant mb-6">A full implementation demonstrating avatars, badges, and pillowy row structures.</p>
<div className="overflow-x-auto">
<table className="w-full text-left border-separate border-spacing-y-2">
<thead>
<tr>
<th className="p-4 font-label-bold text-label-bold text-outline uppercase tracking-wider">Student</th>
<th className="p-4 font-label-bold text-label-bold text-outline uppercase tracking-wider">Subject</th>
<th className="p-4 font-label-bold text-label-bold text-outline uppercase tracking-wider hidden sm:table-cell">Last Activity</th>
<th className="p-4 font-label-bold text-label-bold text-outline uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody>

<tr className="bg-surface-container hover:bg-primary-fixed transition-colors rounded-[24px]">
<td className="p-4 rounded-l-[24px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-lg">
                                                L
                                            </div>
<span className="font-body-lg text-body-lg text-on-surface font-bold">Leo M.</span>
</div>
</td>
<td className="p-4">
<span className="bg-surface-tint text-on-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Mathematics</span>
</td>
<td className="p-4 font-body-default text-body-default text-on-surface-variant hidden sm:table-cell">Today, 10:00 AM</td>
<td className="p-4 rounded-r-[24px] text-right">
<span className="inline-flex items-center justify-center w-8 h-8 bg-secondary-fixed text-secondary-fixed-dim rounded-full" title="Gold Star">
<span className="material-symbols-outlined fill" style={{"fontVariationSettings": "FILL 1"}}>star</span>
</span>
</td>
</tr>

<tr className="bg-surface-container hover:bg-primary-fixed transition-colors rounded-[24px]">
<td className="p-4 rounded-l-[24px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold text-lg">
                                                Z
                                            </div>
<span className="font-body-lg text-body-lg text-on-surface font-bold">Zoe K.</span>
</div>
</td>
<td className="p-4">
<span className="bg-primary-fixed-dim text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Reading</span>
</td>
<td className="p-4 font-body-default text-body-default text-on-surface-variant hidden sm:table-cell">Yesterday</td>
<td className="p-4 rounded-r-[24px] text-right">
<span className="inline-flex items-center justify-center w-8 h-8 bg-tertiary-fixed text-tertiary rounded-full" title="Medal">
<span className="material-symbols-outlined fill" style={{"fontVariationSettings": "FILL 1"}}>workspace_premium</span>
</span>
</td>
</tr>

<tr className="bg-surface-container hover:bg-primary-fixed transition-colors rounded-[24px]">
<td className="p-4 rounded-l-[24px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-lg">
                                                M
                                            </div>
<span className="font-body-lg text-body-lg text-on-surface font-bold">Mia T.</span>
</div>
</td>
<td className="p-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Science</span>
</td>
<td className="p-4 font-body-default text-body-default text-on-surface-variant hidden sm:table-cell">Mon, 2:00 PM</td>
<td className="p-4 rounded-r-[24px] text-right">
<span className="inline-flex items-center justify-center w-8 h-8 bg-surface-variant text-outline rounded-full" title="In Progress">
<span className="material-symbols-outlined">hourglass_empty</span>
</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<footer className="bg-surface-container-highest dark:bg-surface-container-high text-primary dark:text-primary-fixed-dim font-body-default text-body-default font-label-bold text-label-bold w-full py-margin bg-surface-container-highest dark:bg-surface-container-high flat no shadows flex flex-col md:flex-row justify-between items-center px-margin mt-auto">
<div className="text-headline-md font-headline-md text-on-surface mb-4 md:mb-0">
                © 2024 KidsPlay Learning System
            </div>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80 font-bold" href="#">Github</a>
<a className="text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Figma</a>
<a className="text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Support</a>
</div>
</footer>
</div>

    </div>
  );
}
