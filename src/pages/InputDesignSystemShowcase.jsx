import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InputDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav aria-label="Main Navigation" className="bg-surface-container dark:bg-surface-container-low h-screen w-64 flex-shrink-0 border-r-0 flex flex-col py-base gap-stack-gap hidden md:flex">
<div className="px-margin mb-8">
<h1 className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed-dim">System</h1>
<p className="font-body-default text-body-default text-on-surface-variant">v1.0.2</p>
</div>
<ul className="flex flex-col gap-2 flex-grow">
<li>
<a className="flex items-center gap-4 text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="smart_button">smart_button</span>
<span className="font-label-bold text-label-bold">Buttons</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="match_case">match_case</span>
<span className="font-label-bold text-label-bold">Typography</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="palette">palette</span>
<span className="font-label-bold text-label-bold">Colors</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 text-on-surface-variant dark:text-outline-variant px-4 py-3 mx-2 rounded-full hover:bg-surface-variant dark:hover:bg-surface-container-highest transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="space_bar">space_bar</span>
<span className="font-label-bold text-label-bold">Spacing</span>
</a>
</li>
<li>

<a className="flex items-center gap-4 bg-primary-container text-on-primary-container rounded-full px-4 py-3 mx-2 scale-98 transition-all font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" data-icon="texture">texture</span>
<span>Patterns</span>
</a>
</li>
</ul>
<div className="px-margin mt-auto mb-margin">
<button className="w-full bg-primary text-on-primary font-label-bold text-label-bold rounded-full py-3 hover:scale-95 transition-transform">
                New Component
            </button>
</div>
</nav>

<main className="flex-1 overflow-y-auto p-margin">
<header className="mb-margin">
<h2 className="font-headline-xl text-headline-xl text-primary mb-4">Input Fields</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                The input component architecture embraces a "pillowy" aesthetic to reduce cognitive load during data entry. Utilizing generous 24px radii and high-contrast focus states, these inputs provide clear tactile feedback without relying on traditional drop shadows.
            </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-6 bg-surface-container-low rounded-xl p-cell-padding relative overflow-hidden">
<div className="mb-8">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Standard Input</h3>
<p className="font-body-default text-body-default text-on-surface-variant">
                        The baseline text field. Requires a clear label and optional placeholder. The border snaps to Primary Purple upon focus.
                    </p>
</div>
<div className="bg-white rounded-lg p-8 relative z-10">
<label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="standard-input">First Name</label>
<input className="w-full bg-white border-2 border-surface-variant rounded-[24px] px-6 py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors" id="standard-input" placeholder="e.g. Jane" type="text"/>
</div>
</div>

<div className="md:col-span-6 bg-surface-container-low rounded-xl p-cell-padding dot-grid">
<div className="mb-8">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Icon Affordances</h3>
<p className="font-body-default text-body-default text-on-surface-variant">
                        Leading icons establish context (e.g., search or email), while trailing icons handle actions (e.g., clearing input or revealing passwords).
                    </p>
</div>
<div className="bg-white rounded-lg p-8 space-y-6 relative z-10">

<div>
<label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="icon-input-lead">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline" data-icon="mail">mail</span>
</div>
<input className="w-full bg-white border-2 border-surface-variant rounded-[24px] pl-12 pr-6 py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors" id="icon-input-lead" placeholder="hello@example.com" type="email"/>
</div>
</div>

<div>
<label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="icon-input-trail">Password</label>
<div className="relative">
<input className="w-full bg-white border-2 border-surface-variant rounded-[24px] pl-6 pr-12 py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors" id="icon-input-trail" type="password" value="supersecret"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
<span className="material-symbols-outlined text-outline hover:text-primary transition-colors" data-icon="visibility">visibility</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 bg-surface-container-low rounded-xl p-cell-padding">
<div className="mb-8">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Validation States</h3>
<p className="font-body-default text-body-default text-on-surface-variant">
                        Clear visual feedback is essential. Success states utilize positive reinforcement (icons), while error states combine red borders with explicit descriptive text below the field.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-8">

<div>
<label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor="val-success">Username</label>
<div className="relative">
<input className="w-full bg-white border-2 border-surface-variant rounded-[24px] pl-6 pr-12 py-4 font-body-default text-body-default text-on-surface focus:outline-none transition-colors" id="val-success" type="text" value="DesignKid99"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-[#008a00]" data-icon="check_circle">check_circle</span>
</div>
</div>
<p className="font-label-bold text-label-bold text-[#008a00] mt-2 ml-4">Username is available!</p>
</div>

<div>
<label className="block font-label-bold text-label-bold text-error mb-2" htmlFor="val-error">Card Number</label>
<div className="relative">
<input className="w-full bg-error-container border-2 border-error rounded-[24px] pl-6 pr-12 py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-error focus:ring-0 transition-colors" id="val-error" type="text" value="4111 1111"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-error" data-icon="error">error</span>
</div>
</div>
<p className="font-label-bold text-label-bold text-error mt-2 ml-4">Please enter a valid 16-digit number.</p>
</div>
</div>
</div>

<div className="md:col-span-12 bg-primary-container rounded-xl p-cell-padding relative overflow-hidden flex flex-col justify-center items-center min-h-[300px]">

<div className="absolute inset-0 opacity-20 pointer-events-none flex justify-center items-center">
<div className="w-[300px] h-[300px] rounded-full border border-white"></div>
<div className="absolute w-[400px] h-[400px] rounded-full border border-white"></div>
<div className="absolute w-[500px] h-[500px] rounded-full border border-white"></div>
</div>
<div className="relative z-10 w-full max-w-2xl text-center">
<h3 className="font-headline-lg text-headline-lg text-on-primary-container mb-6">Discover Components</h3>
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="search">search</span>
</div>

<input className="w-full bg-white border-none rounded-[32px] pl-16 pr-8 py-6 font-headline-md text-headline-md text-on-surface placeholder-outline-variant shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary-container transition-all" placeholder="Search patterns, buttons, or layouts..." type="text"/>
<button className="absolute inset-y-2 right-2 bg-primary text-on-primary px-6 rounded-[24px] font-label-bold text-label-bold hover:bg-surface-tint transition-colors">
                            Search
                        </button>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
}
