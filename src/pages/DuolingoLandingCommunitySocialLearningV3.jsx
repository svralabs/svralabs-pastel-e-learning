import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoLandingCommunitySocialLearningV3() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
<div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
<div className="flex items-center gap-8">
<img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ"/>
<div className="hidden md:flex gap-1">
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)] px-3 py-2" href="#">Belajar</a>
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)] px-3 py-2" href="#">Liga</a>
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)] px-3 py-2" href="#">Toko</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Masuk</a>
<button className="btn btn-primary h-[36px] px-4 text-[13px]">Daftar</button>
</div>
</div>
</nav>


<header className="mt-[64px] bg-[linear-gradient(180deg,rgba(28,176,246,0.1),#fff_80%)] py-[80px] px-6">
<div className="max-w-[1000px] mx-auto text-center">
<h1 className="t-display mb-6">Belajar lebih seru <br/><span className="text-[rgb(28,176,246)]">bersama teman!</span></h1>
<p className="text-[20px] font-medium text-[rgb(119,119,119)] max-w-[600px] mx-auto mb-10 leading-[1.6]">
      Bergabunglah dengan jutaan pelajar di seluruh dunia. Bersaing di Liga, raih streak, dan kuasai bahasa baru bersama-sama.
    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="btn btn-primary w-full sm:w-auto min-w-[240px]">Mulai Belajar Sekarang</button>
<div className="flex items-center gap-3">
<div className="avatars">
<img alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt13EPE8pHRv6BjqzCVlce0scOgsL_fEoAB19NFZkEuymiqjvU1AsK1CUpSxw9Upfq41gs0QA_MziNJx0Oaigtgak2Hz_tHFiqwr_PHjq7hUkxHKigGdEr37gypaQwnaj9DDvdiKbvmZ8syFMlxeCT996mZ5OW-ahgimLUe_JTEBGIUJLZiOC8OF1PuV7j66mMgfamTWsqmbHas9JqV0bO4nV7UWmouOKkq8JaoEdEaq_6ftNaw_GH8g"/>
<img alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwo_1BM5DSePO1vVvqpwwVTuO0jQyO8GPXS4ms2ufr-NmUJ3vN2OVmCgWLUTs1OPBLsDQ6vMfuCUXJjHVMQdK6fNcsVbvaAr-iCyU8nBQbXLgsv36T20WvkC6J1is2DLUkxnAybUVr6X6Lajmnffc8P-IaWRB3chmNuPWKwoQtKOA-EjaE_fgdJZSHY9dGK6eMJgOMD5ABCe9yW0qnv1xmBclMWV4vm9tAClIfU-ftQchRLd6VTGPaNA"/>
<img alt="User 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-54Iq6Edss8kDOr8A5fO94UWOCvPAPTJ2sCMXMMLaCVAKCUYEHkGzolRLnI1sRl8rZyA9bo8ruNAApN_nbnmWx7Elz7pF7c0lYygdSM8ooR_t-h3nmwualXIpcIwBPnhGqxDNVT5KawFRuuVGxFANGwMyE2o_QwwRzHn-IphjO3gBZvahss4JEywtz3fB2-wk93NQeE4N5qMoQkpoS2h4WMUtEhBs-eibxiieZIKcIuNNvJSwxP9Fag"/>
<span className="av-count">+12Jt</span>
</div>
<span className="text-[14px] font-bold text-[rgb(75,75,75)]">Pelajar aktif</span>
</div>
</div>
</div>
</header>


<section className="py-[72px] px-6 bg-white border-b border-[rgb(229,229,229)]">
<div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(255,150,0)] mb-3 block">Liga &amp; Kompetisi</span>
<h2 className="t-h1 mb-6">Naikkan peringkatmu di Liga Duolingo</h2>
<p className="text-[16px] text-[rgb(119,119,119)] leading-[1.6] mb-8">
        Setiap minggu, kamu akan masuk ke dalam grup berisi 30 pelajar. Selesaikan pelajaran untuk mendapatkan XP dan naik ke Liga berikutnya!
      </p>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 border-2 border-[rgb(229,229,229)] rounded-[16px]">
<div className="w-10 h-10 flex items-center justify-center font-black text-[20px] text-[rgb(255,200,0)]">1</div>
<img alt="User" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt13EPE8pHRv6BjqzCVlce0scOgsL_fEoAB19NFZkEuymiqjvU1AsK1CUpSxw9Upfq41gs0QA_MziNJx0Oaigtgak2Hz_tHFiqwr_PHjq7hUkxHKigGdEr37gypaQwnaj9DDvdiKbvmZ8syFMlxeCT996mZ5OW-ahgimLUe_JTEBGIUJLZiOC8OF1PuV7j66mMgfamTWsqmbHas9JqV0bO4nV7UWmouOKkq8JaoEdEaq_6ftNaw_GH8g"/>
<div className="flex-1">
<div className="font-bold text-[15px]">Andi Saputra</div>
<div className="prog-bar mt-1"><div className="prog-fill" style={{"width": "92%", "background": "var(--golden)"}}></div></div>
</div>
<div className="font-black text-[rgb(255,150,0)]">2,450 XP</div>
</div>
<div className="flex items-center gap-4 p-4 border-2 border-[rgb(229,229,229)] rounded-[16px] bg-[rgba(88,204,2,0.05)]">
<div className="w-10 h-10 flex items-center justify-center font-black text-[20px] text-[rgb(175,175,175)]">2</div>
<div className="w-10 h-10 rounded-full bg-[rgb(28,176,246)] flex items-center justify-center text-white font-bold">KM</div>
<div className="flex-1">
<div className="font-bold text-[15px]">Kamu (Budi)</div>
<div className="prog-bar mt-1"><div className="prog-fill" style={{"width": "75%", "background": "var(--green)"}}></div></div>
</div>
<div className="font-black text-[rgb(88,204,2)]">1,820 XP</div>
</div>
</div>
</div>
<div className="bg-[rgb(16,15,62)] rounded-[24px] p-8 text-center text-white">
<div className="text-[64px] mb-4">🏆</div>
<h3 className="t-h2 !text-white !lowercase !mb-4">Liga Zamrud</h3>
<p className="text-[rgba(255,255,255,0.7)] mb-8">Tinggal 2 hari lagi! Berada di 10 besar untuk promosi ke Liga Berlian.</p>
<div className="flex justify-center gap-3 mb-8">
<span className="badge b-orange !text-white">Streak 15 Hari</span>
<span className="badge" style={{"background": "rgba(255,200,0,0.2)", "color": "var(--golden)"}}>Top 3 Finisher</span>
</div>
<button className="btn btn-white w-full">Lihat Peringkat Lengkap</button>
</div>
</div>
</section>


<section className="py-[72px] px-6 bg-[rgba(247,247,247,1)]">
<div className="max-w-[1000px] mx-auto text-center">
<h2 className="t-h1 mb-[48px]">Belajar Bareng Teman Itu Lebih Seru!</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-[24px] border-2 border-[rgb(229,229,229)] text-center">
<div className="streak mb-4"><span className="fire">🔥</span><span className="num">365</span></div>
<p className="font-bold text-[17px] mb-2">"Saling dukung setiap hari"</p>
<p className="text-[14px] text-[rgb(119,119,119)]">Fitur Teman membantuku tetap disiplin. Kami saling kirim selamat saat mencapai target.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwo_1BM5DSePO1vVvqpwwVTuO0jQyO8GPXS4ms2ufr-NmUJ3vN2OVmCgWLUTs1OPBLsDQ6vMfuCUXJjHVMQdK6fNcsVbvaAr-iCyU8nBQbXLgsv36T20WvkC6J1is2DLUkxnAybUVr6X6Lajmnffc8P-IaWRB3chmNuPWKwoQtKOA-EjaE_fgdJZSHY9dGK6eMJgOMD5ABCe9yW0qnv1xmBclMWV4vm9tAClIfU-ftQchRLd6VTGPaNA"/>
<span className="text-[13px] font-bold">Siska Rahayu</span>
</div>
</div>
<div className="bg-white p-8 rounded-[24px] border-2 border-[rgb(229,229,229)] text-center scale-105 shadow-xl relative z-10">
<div className="mb-4"><span className="badge b-blue">Quest Teman</span></div>
<p className="font-bold text-[17px] mb-2">Tantangan Mingguan</p>
<p className="text-[14px] text-[rgb(119,119,119)]">Selesaikan target bersama satu orang teman terpilih setiap minggu untuk hadiah spesial.</p>
<div className="mt-6 flex justify-center">
<div className="avatars">
<img alt="User 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt13EPE8pHRv6BjqzCVlce0scOgsL_fEoAB19NFZkEuymiqjvU1AsK1CUpSxw9Upfq41gs0QA_MziNJx0Oaigtgak2Hz_tHFiqwr_PHjq7hUkxHKigGdEr37gypaQwnaj9DDvdiKbvmZ8syFMlxeCT996mZ5OW-ahgimLUe_JTEBGIUJLZiOC8OF1PuV7j66mMgfamTWsqmbHas9JqV0bO4nV7UWmouOKkq8JaoEdEaq_6ftNaw_GH8g"/>
<img alt="User 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-54Iq6Edss8kDOr8A5fO94UWOCvPAPTJ2sCMXMMLaCVAKCUYEHkGzolRLnI1sRl8rZyA9bo8ruNAApN_nbnmWx7Elz7pF7c0lYygdSM8ooR_t-h3nmwualXIpcIwBPnhGqxDNVT5KawFRuuVGxFANGwMyE2o_QwwRzHn-IphjO3gBZvahss4JEywtz3fB2-wk93NQeE4N5qMoQkpoS2h4WMUtEhBs-eibxiieZIKcIuNNvJSwxP9Fag"/>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-[24px] border-2 border-[rgb(229,229,229)] text-center">
<div className="mb-4"><span className="badge b-green">Komunitas</span></div>
<p className="font-bold text-[17px] mb-2">Diskusi &amp; Bantuan</p>
<p className="text-[14px] text-[rgb(119,119,119)]">Tanya jawab soal tata bahasa atau budaya langsung kepada jutaan pengguna lain di forum kami.</p>
<div className="mt-6 font-extrabold text-[rgb(88,204,2)]">40+ Bahasa</div>
</div>
</div>
</div>
</section>


<section className="py-[72px] px-6">
<div className="max-w-[1000px] mx-auto">
<h2 className="t-h1 text-center mb-[48px]">Pilih kursus yang ingin kamu kuasai</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="card">
<img alt="Spanish" className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNWoN7UbMH5vMWfrRJyh_fAWPLmGubJRhslUkKVgPIEHk3N4CQXTa_oKG6GpxaDYYz0rd5PnmqqS-s_hOp6gfGoGSZvo9-Q0tH-Hylmz1L27oqkkDQD-IA158PJ1SUmuZDpJ2IOwXdo2j88t6lXjZcCIQ1-v-aMmulxBEOJ9mXkV5YfvUc6q69fbPQFLISADFVZMxXQLeb9Hfieu09HVqJoZut3Dv9phjQQFd7bfUwi64Rc1Zk5CGZA"/>
<div className="card-body">
<span className="tag tag-green">Populer</span>
<div className="card-title">Bahasa Spanyol</div>
<div className="card-desc">Pelajari bahasa yang digunakan di lebih dari 20 negara dengan metode yang efektif.</div>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">15 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)] cursor-pointer hover:opacity-70">Mulai</span>
</div>
</div>

<div className="card">
<img alt="French" className="card-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH_Lzps6ZgIE6GsXwmHRXCTG5wDle_Qbz-exulamToZSPbyWoHGbRwuynYL9F6NkzTU1oWDv021v__xBFPmZFdz0O2ze9g7W9d5uoEoXvsR0nLZvLmZFHzpWXchhH6agCfze3xSCtisgqAyc4mBiUoIP3wyw0l9Q_VHtvh1eUSMPxAkE1hskWuB-NU0xTWm9OW4fXg3c4sK2E6RfFVjBsFA-x9AcXDoajVbCjue-3u0E3fhmySmA9C4Q"/>
<div className="card-body">
<span className="tag tag-blue">Trending</span>
<div className="card-title">Bahasa Prancis</div>
<div className="card-desc">Kuasai pelafalan dan kosakata harian melalui percakapan simulasi yang nyata.</div>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">12 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)] cursor-pointer hover:opacity-70">Mulai</span>
</div>
</div>

<div className="card">
<div className="h-[140px] w-full bg-[rgb(16,15,62)] flex items-center justify-center text-white text-[48px]">🇯🇵</div>
<div className="card-body">
<span className="tag tag-gold">Baru</span>
<div className="card-title">Bahasa Jepang</div>
<div className="card-desc">Mulai dari Hiragana hingga frasa kompleks untuk perjalananmu ke Jepang.</div>
</div>
<div className="flex justify-between items-center p-4 border-t border-[rgb(229,229,229)]">
<span className="text-[12px] font-bold uppercase text-[rgb(175,175,175)]">20 Unit</span>
<span className="text-[12px] font-extrabold uppercase text-[rgb(28,176,246)] cursor-pointer hover:opacity-70">Mulai</span>
</div>
</div>
</div>
</div>
</section>


<section className="max-w-[1000px] mx-auto mb-[72px] px-6">
<div className="bg-[rgb(88,204,2)] text-center py-[64px] px-6 rounded-[24px] shadow-[0_8px_0_#61B800]">
<h2 className="t-display !text-white !lowercase mb-4">Siap untuk mulai?</h2>
<p className="text-[18px] font-bold text-[rgba(255,255,255,0.9)] mb-8">Gabung dengan jutaan orang lainnya hari ini. Gratis selamanya.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="btn btn-white min-w-[200px]">Mulai Sekarang</button>
<button className="btn btn-secondary !border-white !text-white !bg-transparent min-w-[200px] !shadow-none">Pelajari Caranya</button>
</div>
</div>
</section>


<footer className="bg-[rgb(78,198,4)] text-white py-16 px-6">
<div className="max-w-[1000px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Tentang Kami</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Efikasi</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Tim</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Karier</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Produk</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Duolingo</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Super Duolingo</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Duolingo Sekolah</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Bantuan</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Pusat Bantuan</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Panduan Gaya</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Hubungi Kami</a></li>
</ul>
</div>
<div>
<h5 className="text-[13px] font-extrabold uppercase tracking-[1px] mb-6">Sosial</h5>
<ul className="space-y-3">
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Facebook</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Twitter</a></li>
<li><a className="text-[14px] font-semibold opacity-80 hover:opacity-100 hover:underline" href="#">Instagram</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.2)] flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[13px] font-bold opacity-70">© 2024 Duolingo — V3: Edisi Pembelajaran Sosial</div>
<div className="flex gap-6">
<a className="text-[12px] font-bold opacity-70 hover:opacity-100" href="#">Privasi</a>
<a className="text-[12px] font-bold opacity-70 hover:opacity-100" href="#">Ketentuan</a>
</div>
</div>
</div>
</footer>


    </div>
  );
}
