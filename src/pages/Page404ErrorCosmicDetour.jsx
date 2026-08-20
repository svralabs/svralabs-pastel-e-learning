import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Page404ErrorCosmicDetour() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="flex-grow flex items-center justify-center p-margin w-full max-w-7xl mx-auto relative overflow-hidden">

<div className="absolute inset-0 dot-pattern opacity-50 z-0"></div>
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] concentric-circles rounded-full opacity-30 z-0"></div>
<div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] concentric-circles rounded-full opacity-30 z-0"></div>

<div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-12 lg:col-span-7 bg-surface-container rounded-[32px] p-cell-padding flex items-center justify-center relative overflow-hidden h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover rounded-[32px]" data-alt="A playful, high-saturation 3D illustration of a friendly purple space explorer floating awkwardly in zero gravity next to a vibrant yellow 'Wrong Way' road sign. The style is modern, squishy flat design with pillowy shapes, no harsh shadows, just tonal layering. Set against a clean, light surface background to fit a vibrant, educational KidsPlay learning app aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIY_WGZfWOCO10LM3Tvr_CvQ4cJ6TPfgRSt3A5pRTYBOYsXWJe3NWcWhLVuHer_3QQfn-SndKyVrlj3IKt_xDSK9W5BdLp0hwtZ2kegZZMQ0kamRAMo2fGOjV-G5WzSAxohIHsOCQq3H2hY4uGF_wkBbzWurridFaambHzXQwiWAo6YsqsmBZBvC_xfg7Mh_iszvMGbO_kfCtTh2pCqMKKKSsaT95UTdA5jX1U6CjhTwMUe916t_-N2rRNCaY178FXE9jqNOCGjayV"/>
<div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
</div>

<div className="md:col-span-12 lg:col-span-5 flex flex-col gap-gutter">

<div className="bg-primary-container text-on-primary rounded-[32px] p-cell-padding flex flex-col justify-center flex-grow h-full relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 concentric-circles rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
<h1 className="font-headline-xl text-headline-xl md:text-headline-xl mb-4 relative z-10">404</h1>
<h2 className="font-headline-md text-headline-md mb-2 relative z-10">Oops! Cosmic Detour</h2>
<p className="font-body-lg text-body-lg text-primary-fixed relative z-10">
                        You've wandered into deep space. Let's get you back to the classroom!
                    </p>
</div>

<div className="bg-secondary-container rounded-[32px] p-cell-padding flex flex-col items-center justify-center">
<a className="w-full bg-primary-container text-on-primary hover:bg-primary-fixed-variant transition-colors duration-300 rounded-full py-4 px-6 flex items-center justify-center gap-2 font-label-bold text-label-bold" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>rocket_launch</span>
                        Back to Home
                    </a>
</div>
</div>
</div>
</main>


    </div>
  );
}
