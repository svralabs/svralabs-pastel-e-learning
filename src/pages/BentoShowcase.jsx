import { ArrowLeft, ArrowRight, Check, X, Search, Bell, User, Calendar, Settings, Heart, Star } from 'lucide-react';

export default function BentoShowcase() {
  const bentoItems = [
    {
      id: 1,
      title: 'Numbers & Shapes!',
      description: 'Count stars, build with blocks, and solve fun puzzles to unlock your next badge.',
      category: 'Math Magic',
      icon: 'calculate',
      tags: ['Level 2', 'Geometry'],
      color: 'primary',
      span: { md: 'col-span-8 row-span-2' },
      graphic: true
    },
    {
      id: 2,
      title: 'Space Explorer',
      description: 'Journey to Mars and back.',
      category: 'Science',
      icon: 'science',
      tags: ['New'],
      color: 'secondary',
      span: { md: 'col-span-4 row-span-1' }
    },
    {
      id: 3,
      title: 'Color Splash',
      description: 'Mix paints and draw.',
      category: 'Art',
      icon: 'palette',
      color: 'primary',
      span: { md: 'col-span-4 row-span-1' },
      border: true
    },
    {
      id: 4,
      title: 'Word Wizards',
      description: 'Read stories and learn new words with interactive tales.',
      category: 'Story Time',
      icon: 'menu_book',
      color: 'surface',
      span: { md: 'col-span-6 row-span-1' },
      graphic: true
    },
    {
      id: 5,
      title: 'Daily Challenge',
      description: 'Complete today\'s challenge to earn a special badge!',
      category: 'Challenge',
      icon: 'star',
      color: 'surface',
      span: { md: 'col-span-6 row-span-1' },
      progress: 75
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* TopNavBar (Web Only) */}
      <nav className="hidden md:flex bg-background flex justify-between items-center w-full px-margin py-base max-w-full sticky top-0 z-50">
        <div className="font-headline-lg text-headline-lg font-black text-primary">
          KidsPlay Learning
        </div>
        <div className="flex gap-8 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-lg text-body-lg" href="#">Explore</a>
          <a className="text-on-surface-variant font-body-lg text-body-lg hover:text-primary transition-colors duration-200" href="#">Quizzes</a>
          <a className="text-on-surface-variant font-body-lg text-body-lg hover:text-primary transition-colors duration-200" href="#">Activities</a>
          <a className="text-on-surface-variant font-body-lg text-body-lg hover:text-primary transition-colors duration-200" href="#">My Progress</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-6 py-2 rounded-full hover:scale-95 transition-transform duration-150 border-2 border-transparent">
            Parent Portal
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-margin pt-8 md:pt-12">
        <header className="mb-gutter text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-2">Pick Your Adventure</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Where do you want to go today?</p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl ${item.color === 'primary' ? 'bg-primary-container text-on-primary' :
                          item.color === 'secondary' ? 'bg-secondary-container text-on-secondary-container' :
                          item.color === 'surface' ? 'bg-surface-container-high text-on-surface' :
                          'bg-surface-container-lowest text-on-surface'} p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300 ${item.span.md} ${item.border ? 'border-2 border-primary-fixed-dim' : ''}`}
            >
              {item.graphic && (
                <div className="absolute inset-0 pattern-circles opacity-50"></div>
              )}
              <div className="relative z-10 flex justify-between items-start">
                <div className={`bg-${item.color}-fixed text-${item.color} px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2 border-2 border-transparent`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  {item.category}
                </div>
                {item.id === 1 && (
                  <button className="bg-on-primary text-primary-container w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                )}
                {item.id === 2 && (
                  <span className="bg-surface/50 px-3 py-1 rounded-full text-xs font-label-bold uppercase tracking-wider">New</span>
                )}
              </div>
              <div className="relative z-10 w-full md:w-2/3">
                <h2 className="font-headline-md text-headline-md mb-2">{item.title}</h2>
                <p className="font-body-default text-body-default opacity-80">{item.description}</p>
                {item.tags && (
                  <div className="flex gap-2 mt-4">
                    {item.tags.map((tag, index) => (
                      <span key={index} className={`bg-${item.color}/50 text-on-${item.color} px-3 py-1 rounded-full text-sm font-label-bold`}>{tag}</span>
                    ))}
                  </div>
                )}
                {item.progress && (
                  <div className="mt-4">
                    <div className="w-full bg-surface-variant rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
                    </div>
                    <p className="text-xs font-label-bold text-on-surface-variant mt-1">{item.progress}% Complete</p>
                  </div>
                )}
              </div>
              {item.id === 1 && (
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 blur-2xl"></div>
              )}
              {item.id === 4 && (
                <div className="w-1/2 relative h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center pattern-dots from-secondary-fixed/40 to-transparent">
                    <span className="material-symbols-outlined text-5xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
