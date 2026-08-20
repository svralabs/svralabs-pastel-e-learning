import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoLearningTable() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="h-full w-64 fixed left-0 top-0 border-r-2 border-border-color bg-surface-container-lowest flex flex-col p-md gap-sm z-50">
<div className="mb-xl px-sm">
<h1 className="font-headline-xl text-headline-xl font-black text-primary">DUOLINGO</h1>
<p className="text-gray-light font-label-sm uppercase tracking-widest mt-xs">Analytics Dashboard</p>
</div>
<nav className="flex flex-col gap-sm">
<a className="flex items-center gap-md text-gray-text hover:bg-surface-variant rounded-xl px-md py-sm transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-body-lg">Home</span>
</a>
<a className="flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-xl px-md py-sm border-b-4 border-secondary transition-all duration-200 active:translate-y-1 active:border-b-0" href="#">
<span className="material-symbols-outlined" data-icon="leaderboard" style={{"fontVariationSettings": "FILL 1"}}>leaderboard</span>
<span className="font-body-lg">Stats</span>
</a>
<a className="flex items-center gap-md text-gray-text hover:bg-surface-variant rounded-xl px-md py-sm transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
<span className="font-body-lg">Leaderboard</span>
</a>
<a className="flex items-center gap-md text-gray-text hover:bg-surface-variant rounded-xl px-md py-sm transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="font-body-lg">Shop</span>
</a>
</nav>
<div className="mt-auto p-md bg-surface-container-high rounded-xl border-2 border-border-color shadow-[0_4px_0_0_#E5E5E5]">
<div className="flex items-center gap-sm mb-sm">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img className="w-full h-full object-cover" data-alt="A friendly 3D cartoon avatar of a young language learner with bright expressive eyes and a cheerful smile, styled in the characteristic vibrant Duolingo aesthetic with clean shapes and a soft optimistic glow. The character is wearing a modern green hoodie that matches the brand's primary color." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4"/>
</div>
<div>
<p className="font-headline-md text-[16px] leading-tight text-on-surface">Alex Chen</p>
<p className="text-label-sm text-gray-light uppercase">Super Learner</p>
</div>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{"width": "75%"}}></div>
</div>
<p className="text-[11px] font-bold text-primary mt-xs text-center">XP Goal: 75% Reach</p>
</div>
</aside>

<header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b-2 border-border-color bg-surface flex justify-end items-center px-xl gap-xl z-40">
<div className="flex items-center gap-lg">
<div className="flex items-center gap-xs text-orange font-headline-md">
<span className="material-symbols-outlined" data-icon="local_fire_department" style={{"fontVariationSettings": "FILL 1"}}>local_fire_department</span>
<span>242</span>
</div>
<div className="flex items-center gap-xs text-secondary font-headline-md">
<span className="material-symbols-outlined" data-icon="payments" style={{"fontVariationSettings": "FILL 1"}}>payments</span>
<span>1,450</span>
</div>
<div className="flex items-center gap-xs text-red font-headline-md">
<span className="material-symbols-outlined" data-icon="military_tech" style={{"fontVariationSettings": "FILL 1"}}>military_tech</span>
<span>5</span>
</div>
</div>
<div className="w-px h-8 bg-border-color mx-md"></div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high transition-colors active:scale-95">
<span className="material-symbols-outlined text-gray-text" data-icon="notifications">notifications</span>
</button>
</header>

<main className="ml-64 pt-16 p-xl">
<div className="max-w-6xl mx-auto">

<div className="mb-xl">
<h2 className="font-headline-xl text-headline-xl text-on-surface">Statistik Belajar</h2>
<p className="text-gray-light font-body-lg">Lihat progres belajarmu di setiap bahasa.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-lg mb-xl">
<div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
<p className="text-label-caps text-gray-light mb-xs">TOTAL XP</p>
<p className="text-headline-xl text-primary">12,450</p>
</div>
<div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
<p className="text-label-caps text-gray-light mb-xs">KURSUS AKTIF</p>
<p className="text-headline-xl text-secondary">4</p>
</div>
<div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
<p className="text-label-caps text-gray-light mb-xs">HARI BERUNTUN</p>
<p className="text-headline-xl text-orange">242</p>
</div>
<div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
<p className="text-label-caps text-gray-light mb-xs">AKURASI</p>
<p className="text-headline-xl text-red">92%</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border-2 border-border-color shadow-[0_4px_0_0_#E5E5E5] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container">
<tr>
<th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">BAHASA</th>
<th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">UNIT</th>
<th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">PROGRES</th>
<th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">XP TERKUMPUL</th>
<th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">STATUS</th>
<th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color text-center">AKSI</th>
</tr>
</thead>
<tbody className="divide-y-2 divide-border-color">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
<img className="w-full h-full object-cover" data-alt="A stylized vibrant 3D flag of Spain with rich red and yellow colors, designed with soft rounded corners and a slight glossy finish to match the playful Duolingo UI style. The lighting is bright and cheerful, suggesting a professional educational app context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAari0JIzdbRVavUrrgeL0X1PYLh1AQR6qzgBWeMgU7MUb_NMtuL68Bha2PiOKzOoqYTtAnOCpcMcsFxuJw_Ofj3orSo3lpoeXlxGwuZJmKPjIZ3-Dkz1FDZylQvkOGRb7fbLFGzqkcAu6Yre2cDt7ZokrX49B-4cUDA9ZawtXEB7ge2PxRwlV5ihtqfNB_-l0VzBn8lR5-SFzXsa_DztDTByor5eG8NQF1egZkYBUKg_66K7oz6RNrJfUUVgTL7-6SjKzGZU_Nto_V"/>
</div>
<span className="font-headline-md text-on-surface">Spanyol</span>
</div>
</td>
<td className="px-xl py-lg">
<span className="font-body-lg text-gray-text">Unit 4</span>
</td>
<td className="px-xl py-lg">
<div className="flex flex-col gap-xs w-48">
<div className="flex justify-between items-center text-label-sm text-primary">
<span>Progress</span>
<span>65%</span>
</div>
<div className="h-3 w-full bg-surface-variant rounded-full relative overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width": "65%"}}>
<div className="absolute inset-x-0 top-0 h-[2px] bg-white opacity-30"></div>
</div>
</div>
</div>
</td>
<td className="px-xl py-lg">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-golden" data-icon="stars" style={{"fontVariationSettings": "FILL 1"}}>stars</span>
<span className="font-headline-md">4,200</span>
</div>
</td>
<td className="px-xl py-lg">
<span className="px-md py-1 bg-secondary-container/20 text-on-secondary-container border-2 border-secondary-container rounded-full font-label-sm">Berjalan</span>
</td>
<td className="px-xl py-lg text-center">
<button className="bg-primary-container text-white px-lg py-sm rounded-xl font-headline-md shadow-[0_4px_0_0_#61B800] hover:bg-green-hover transition-all active:translate-y-1 active:shadow-none">
                                        Lanjutkan
                                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
<img className="w-full h-full object-cover" data-alt="A stylized vibrant 3D flag of France with bold blue, white, and red stripes, designed with soft rounded corners and a high-quality matte finish. The colors are punchy and optimistic, fitting into a modern gamified educational dashboard aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMVPwQMsoOaC7tfa9WsAHCzwWjenqcWSPtrUa87oPPObsAA_2IpXTSk56n4g08ll16QUVs_6AJWlLNeYMt1ywTOWzPrTXYd178rpPvkKXiyXFgt18mJVImyIxKtXPmFLszMxEbXJ3dLybqbIciWM_s8u-cUToFmMBOre9uxJ6V9jNeU3EolwDMvt4X--8SLTfAPic-lUPGdEn03K1Ih-37saxPm0UmfGHpvRmEoqw_IWHj7vaGW_y5C1bgoTw6cM416k7Ml1fguxja"/>
</div>
<span className="font-headline-md text-on-surface">Prancis</span>
</div>
</td>
<td className="px-xl py-lg">
<span className="font-body-lg text-gray-text">Unit 12</span>
</td>
<td className="px-xl py-lg">
<div className="flex flex-col gap-xs w-48">
<div className="flex justify-between items-center text-label-sm text-primary">
<span>Progress</span>
<span>100%</span>
</div>
<div className="h-3 w-full bg-surface-variant rounded-full relative overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width": "100%"}}>
<div className="absolute inset-x-0 top-0 h-[2px] bg-white opacity-30"></div>
</div>
</div>
</div>
</td>
<td className="px-xl py-lg">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-golden" data-icon="stars" style={{"fontVariationSettings": "FILL 1"}}>stars</span>
<span className="font-headline-md">6,850</span>
</div>
</td>
<td className="px-xl py-lg">
<span className="px-md py-1 bg-primary-container/20 text-on-primary-container border-2 border-primary-container rounded-full font-label-sm">Selesai</span>
</td>
<td className="px-xl py-lg text-center">
<button className="bg-surface text-gray-text px-lg py-sm rounded-xl font-headline-md border-2 border-border-color shadow-[0_4px_0_0_#E5E5E5] hover:bg-surface-container-high transition-all active:translate-y-1 active:shadow-none">
                                        Ulangi
                                    </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="px-xl py-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
<img className="w-full h-full object-cover" data-alt="A stylized vibrant 3D flag of Japan with a bold red sun on a white background, featuring soft rounded corners and clean vector-like shadows. The design is bright and modern, specifically created for a high-energy learning application environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrR1_99tqVh1o-HM13acBHbqKjHMHeBN4-rFi9CvREZo70NEmAV-p_kAIMAcdXsCSuvlcPc9zzT0eqmnZOBRiEQhYFPvgCFh7Lps9r1EbWdEVwhCnbNqkjXrZHvk13XeSbJ8JqAKWMkI_awR9WJ-4QOutPcMKGizUKWHOL62UHZR3Lt9Qo7UuRyUxBaC1M41jgs2xkpnRoGjqVDcGLtX06_PVRqVx_rMCQ4VRXBcIRdbs3ysNFvGGK7eOi45b20e3BKEyyi-4HGiWS"/>
</div>
<span className="font-headline-md text-on-surface">Jepang</span>
</div>
</td>
<td className="px-xl py-lg">
<span className="font-body-lg text-gray-text">Unit 2</span>
</td>
<td className="px-xl py-lg">
<div className="flex flex-col gap-xs w-48">
<div className="flex justify-between items-center text-label-sm text-red">
<span>Progress</span>
<span>15%</span>
</div>
<div className="h-3 w-full bg-surface-variant rounded-full relative overflow-hidden">
<div className="h-full bg-red rounded-full" style={{"width": "15%"}}>
<div className="absolute inset-x-0 top-0 h-[2px] bg-white opacity-30"></div>
</div>
</div>
</div>
</td>
<td className="px-xl py-lg">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-golden" data-icon="stars" style={{"fontVariationSettings": "FILL 1"}}>stars</span>
<span className="font-headline-md">1,400</span>
</div>
</td>
<td className="px-xl py-lg">
<span className="px-md py-1 bg-red/10 text-red border-2 border-red rounded-full font-label-sm">Butuh Review</span>
</td>
<td className="px-xl py-lg text-center">
<button className="bg-primary-container text-white px-lg py-sm rounded-xl font-headline-md shadow-[0_4px_0_0_#61B800] hover:bg-green-hover transition-all active:translate-y-1 active:shadow-none">
                                        Lanjutkan
                                    </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="mt-xl grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="bg-secondary-container text-white rounded-xl p-xl flex items-center gap-xl shadow-[0_4px_0_0_#006590]">
<div className="flex-1">
<h3 className="font-headline-lg mb-sm">Terus Bersemangat, Alex!</h3>
<p className="font-body-md opacity-90">Kamu tinggal 150 XP lagi untuk naik ke Liga Berlian. Jangan biarkan api semangatmu padam!</p>
<button className="mt-md bg-white text-secondary px-lg py-sm rounded-xl font-headline-md shadow-[0_4px_0_0_#88ceff] active:translate-y-1 active:shadow-none transition-all">
                            Lihat Liga
                        </button>
</div>
<div className="w-32 h-32 flex-shrink-0">
<img className="w-full h-full object-contain" data-alt="The Duo owl mascot from Duolingo in a heroic, energetic pose, wearing a small golden cape and looking determined and happy. The 3D model is clean, bright, and optimistic, set against a soft blue background that matches the secondary container color." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDFYcdLtFWQ8QHmXSMTTi7Ye2SJSPXNuxPzQ7aJDLsX8-thriZhO57EY04ffJEYXqtp1-6oKX6dBNdRCy4h7tNe2CG_Jnp4gFt2nBk22ks3K0pnAFdodi0LJm1ll9wrrEsMEl81kgQ__-sYogjI0Io1xiOvg4ulUt9TZOnfCt2x25O4LxKBEUdrq3_85TWL9i_gvEKJob-a0aHxSTyGktbGnXqM7W9aJdajKpRfnVd4ucgbNZWTEqqrINgZ2-bu6TRZhKfQwSDbtLV"/>
</div>
</div>
<div className="bg-orange text-white rounded-xl p-xl flex items-center gap-xl shadow-[0_4px_0_0_#B36900]">
<div className="flex-1">
<h3 className="font-headline-lg mb-sm">Selesaikan Unit 4!</h3>
<p className="font-body-md opacity-90">Progres Spanyol kamu sudah mencapai 65%. Selesaikan unit ini hari ini untuk bonus 2x XP!</p>
<button className="mt-md bg-white text-orange px-lg py-sm rounded-xl font-headline-md shadow-[0_4px_0_0_#FFB74D] active:translate-y-1 active:shadow-none transition-all">
                            Mulai Belajar
                        </button>
</div>
<div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-[80px] text-white" data-icon="auto_awesome" style={{"fontVariationSettings": "FILL 1"}}>auto_awesome</span>
</div>
</div>
</div>
</div>
</main>



    </div>
  );
}
