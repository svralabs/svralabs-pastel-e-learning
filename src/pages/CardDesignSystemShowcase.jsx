import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CardDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="hidden md:flex flex justify-between items-center w-full px-margin py-base max-w-full bg-background dark:bg-background docked full-width top-0 z-50">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-black text-primary dark:text-inverse-primary">KidsPlay Learning</span>
</div>
<div className="flex items-center gap-8">
<a className="text-on-surface-variant font-body-lg hover:text-primary transition-colors duration-200" href="#">Explore</a>
<a className="text-on-surface-variant font-body-lg hover:text-primary transition-colors duration-200" href="#">Quizzes</a>
<a className="text-on-surface-variant font-body-lg hover:text-primary transition-colors duration-200" href="#">Activities</a>
<a className="text-on-surface-variant font-body-lg hover:text-primary transition-colors duration-200" href="#">My Progress</a>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200 scale-95 transition-transform duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200 scale-95 transition-transform duration-150">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="font-label-bold text-label-bold bg-primary-container text-on-primary-container px-6 py-2 rounded-full scale-95 transition-transform duration-150">Parent Portal</button>
</div>
</nav>

<nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center px-gutter py-4 bg-surface-container-highest dark:bg-inverse-surface border-t-2 border-outline-variant fixed full-width bottom-0 z-50 rounded-t-lg">
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-dim dark:hover:bg-surface-variant rounded-full" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-bold text-label-bold mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-dim dark:hover:bg-surface-variant rounded-full" href="#">
<span className="material-symbols-outlined">school</span>
<span className="font-label-bold text-label-bold mt-1">Learn</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-dim dark:hover:bg-surface-variant rounded-full" href="#">
<span className="material-symbols-outlined">videogame_asset</span>
<span className="font-label-bold text-label-bold mt-1">Play</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-6 py-2 Active: scale-90 transition-all duration-300 ease-out" href="#">
<span className="material-symbols-outlined">face</span>
<span className="font-label-bold text-label-bold mt-1">Profile</span>
</a>
</nav>
<main className="px-margin pb-32 md:pb-margin pt-gutter max-w-7xl mx-auto space-y-gutter">

<section className="bg-primary-fixed rounded-bento p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
<div className="absolute inset-0 pattern-dots from-primary/10 to-transparent z-0"></div>
<div className="relative z-10 space-y-stack-gap max-w-3xl">
<h1 className="font-headline-xl text-headline-xl text-on-primary-fixed">Card Design System</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">The "pillowy" aesthetic combines high-saturation color blocks, heavy geometric shapes, and exaggerated 32px border radii. This approach rejects traditional drop shadows in favor of tonal layering and mathematical patterns, creating a tactile and rewarding learning experience.</p>
</div>
</section>

<section className="space-y-stack-gap">
<h2 className="font-headline-lg text-headline-lg text-primary">Anatomy of a Bento Card</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="bg-surface-container rounded-bento p-cell-padding flex items-center justify-center relative overflow-hidden h-[400px]">

<div className="bg-primary-container w-[80%] h-[80%] rounded-bento relative shadow-[0_0_0_2px_theme('colors.primary')] flex flex-col justify-between p-cell-padding pattern-concentric overflow-hidden">
<div className="z-10 flex justify-between items-start">
<div className="bg-surface rounded-full p-2">
<span className="material-symbols-outlined text-primary text-3xl">science</span>
</div>
<span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-4 py-1 rounded-chip">Science</span>
</div>
<div className="z-10 text-on-primary-container">
<h3 className="font-headline-md text-headline-md">Space Explorer</h3>
<p className="font-body-default text-body-default opacity-90">Discover the galaxy</p>
</div>
</div>
</div>
<div className="flex flex-col justify-center space-y-stack-gap">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary bg-primary-fixed rounded-full p-2">rounded_corner</span>
<div>
<h4 className="font-headline-md text-headline-md">Pillowy Radii</h4>
<p className="font-body-default text-body-default text-on-surface-variant">Strict adherence to 32px border radius for main bento containers creates the signature squishy feel.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary bg-secondary-fixed rounded-full p-2">text_fields</span>
<div>
<h4 className="font-headline-md text-headline-md">Structured Typography</h4>
<p className="font-body-default text-body-default text-on-surface-variant">Geist Sans forms the structural hierarchy, ensuring clarity amidst playful colors.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary bg-tertiary-fixed rounded-full p-2">category</span>
<div>
<h4 className="font-headline-md text-headline-md">Flat Depth</h4>
<p className="font-body-default text-body-default text-on-surface-variant">No drop shadows. Depth is achieved via tonal layering (Level 0 Canvas to Level 2 Components) and 2px thick borders.</p>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-stack-gap">
<h2 className="font-headline-lg text-headline-lg text-primary">Core Card Palette</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-primary-container rounded-bento p-cell-padding aspect-square flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 pattern-concentric opacity-20"></div>
<div className="relative z-10 space-y-2">
<span className="bg-white/20 text-on-primary-container px-3 py-1 rounded-chip font-label-bold text-label-bold inline-block">Primary Card</span>
<h3 className="font-headline-md text-headline-md text-on-primary-container">#7047EB</h3>
</div>
</div>
<div className="bg-secondary-container rounded-bento p-cell-padding aspect-square flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 pattern-dots from-secondary/10 to-transparent"></div>
<div className="relative z-10 space-y-2">
<span className="bg-black/10 text-on-secondary-container px-3 py-1 rounded-chip font-label-bold text-label-bold inline-block">Secondary Card</span>
<h3 className="font-headline-md text-headline-md text-on-secondary-container">#F4D06F (Amber)</h3>
</div>
</div>
<div className="bg-surface-container rounded-bento p-cell-padding aspect-square flex flex-col justify-end relative overflow-hidden group border-2 border-outline-variant/30">
<div className="relative z-10 space-y-2">
<span className="bg-primary-fixed text-primary px-3 py-1 rounded-chip font-label-bold text-label-bold inline-block">Surface Card</span>
<h3 className="font-headline-md text-headline-md text-on-surface">#E0D3FF (Light)</h3>
</div>
</div>
</div>
</section>

<section className="space-y-stack-gap">
<h2 className="font-headline-lg text-headline-lg text-primary">Live Card Configurations</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="col-span-1 md:col-span-8 bg-surface-container rounded-bento p-cell-padding flex flex-col md:flex-row gap-gutter border-2 border-surface-variant">
<div className="flex-1 space-y-stack-gap flex flex-col justify-center">
<div className="inline-block bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-chip font-label-bold text-label-bold w-max">Large Feature</div>
<h3 className="font-headline-xl text-headline-xl text-on-surface">The Solar System Tour</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant">Embark on a journey through the planets. Learn about orbits, atmospheres, and more!</p>
<button className="bg-primary-container text-on-primary-container rounded-full px-6 py-3 font-label-bold text-label-bold w-max hover:scale-105 transition-transform">Start Journey</button>
</div>
<div className="w-full md:w-1/2 aspect-video bg-primary-fixed rounded-bento relative overflow-hidden flex items-center justify-center">
<img alt="A vibrant, flat-design inspired digital illustration of a stylized solar system. The planets are rendered as bright, high-saturation geometric spheres against a dark, star-speckled background. The image uses a modern light-mode friendly color palette with soft pillowy shapes. The mood is educational and adventurous." className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="A vibrant, flat-design inspired digital illustration of a stylized solar system. The planets are rendered as bright, high-saturation geometric spheres against a dark, star-speckled background. The image uses a modern light-mode friendly color palette with soft pillowy shapes. The mood is educational and adventurous." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4V4z1S6x6DzwyIno5BLVviwQAiYjwz5J_whBFTcI3r0L2m69aNYDMOkj79BKcNNTdHqYA74oTdth90-uudWHdPSRd80IU_CxQACxSGxvQlp0cBiDuXK0IJgGGYxPTidMZJvR3hriERIrXvrVd1fxT5W2uV1BTMyJadhtYyJUT401On_oSQu5w1EH03TiSAQWMv_nhrZtYhvz9QlCLl4Jwf74snFzvJoIj8fAdmgVlJPuqVbJEStVGb-6DOTqm9G84-gL_tbip6AA4"/>
<span className="material-symbols-outlined text-6xl text-primary z-10 bg-surface/80 rounded-full p-4 backdrop-blur-sm">rocket_launch</span>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-primary-container text-on-primary-container rounded-bento p-cell-padding flex flex-col justify-between pattern-concentric">
<div className="space-y-4 relative z-10">
<div className="bg-surface/20 inline-flex p-2 rounded-full">
<span className="material-symbols-outlined">workspace_premium</span>
</div>
<div>
<span className="block font-label-bold text-label-bold opacity-80 uppercase tracking-wide">Action Card</span>
<h3 className="font-headline-md text-headline-md mt-1">Daily Challenge</h3>
</div>
</div>
<div className="mt-8 relative z-10">
<p className="font-body-default text-body-default mb-4">Complete today's math puzzle to earn 50 stars!</p>
<button className="bg-surface text-primary w-full py-3 rounded-full font-label-bold text-label-bold hover:bg-surface-variant transition-colors">Play Now</button>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-surface rounded-bento p-cell-padding border-2 border-surface-variant flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
<div className="bg-tertiary-fixed text-tertiary p-4 rounded-[24px] group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">brush</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">Art Class</h4>
<p className="font-body-default text-body-default text-on-surface-variant">Standard Content</p>
</div>
</div>
<div className="col-span-1 md:col-span-4 bg-surface rounded-bento p-cell-padding border-2 border-surface-variant flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
<div className="bg-error-container text-on-error-container p-4 rounded-[24px] group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">music_note</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">Music Studio</h4>
<p className="font-body-default text-body-default text-on-surface-variant">Standard Content</p>
</div>
</div>
<div className="col-span-1 md:col-span-4 bg-surface rounded-bento p-cell-padding border-2 border-surface-variant flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer group">
<div className="bg-secondary-fixed text-secondary p-4 rounded-[24px] group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">calculate</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface">Math Magic</h4>
<p className="font-body-default text-body-default text-on-surface-variant">Standard Content</p>
</div>
</div>
</div>
</section>
</main>

    </div>
  );
}
