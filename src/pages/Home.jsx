import React from 'react';

const Home = () => {
  const subjects = [
    {
      id: 1,
      title: 'Numbers & Shapes!',
      description: 'Count stars, build with blocks, and solve fun puzzles to unlock your next badge.',
      category: 'Math Magic',
      level: 'Level 2',
      tags: ['Geometry'],
      icon: 'calculate',
      color: 'primary-container',
      textColor: 'on-primary',
      span: { md: 'col-span-8 row-span-2' },
      graphic: true
    },
    {
      id: 2,
      title: 'Space Explorer',
      description: 'Journey to Mars and back.',
      category: '',
      level: '',
      tags: [],
      icon: 'science',
      color: 'secondary-container',
      textColor: 'on-secondary-container',
      span: { md: 'col-span-4 row-span-1' },
      new: true
    },
    {
      id: 3,
      title: 'Color Splash',
      description: 'Mix paints and draw.',
      category: '',
      level: '',
      tags: [],
      icon: 'palette',
      color: 'primary-fixed',
      textColor: 'on-primary-fixed',
      span: { md: 'col-span-4 row-span-1' },
      border: true
    },
    {
      id: 4,
      title: 'Word Wizards',
      description: 'Read stories and learn new words with interactive tales.',
      category: 'Story Time',
      level: '',
      tags: [],
      icon: 'menu_book',
      color: 'surface-container-high',
      textColor: 'on-surface',
      span: { md: 'col-span-6 row-span-1' },
      border: true,
      graphic: true
    },
    {
      id: 5,
      title: 'Daily Challenge',
      description: 'Complete today\'s challenge to earn a special badge!',
      category: '',
      level: '',
      tags: [],
      icon: 'star',
      color: 'surface-container-lowest',
      textColor: 'on-surface',
      span: { md: 'col-span-6 row-span-1' },
      border: true,
      challenge: true
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
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`rounded-xl ${subject.color} text-${subject.textColor} p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300 ${subject.span.md} ${subject.border ? 'border-2 border-outline-variant' : ''}`}
            >
              {subject.graphic && (
                <div className="absolute inset-0 pattern-circles opacity-50"></div>
              )}
              <div className="relative z-10 flex justify-between items-start">
                {subject.category && (
                  <div className="bg-primary-fixed text-primary px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2 border-2 border-transparent">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{subject.icon}</span>
                    {subject.category}
                  </div>
                )}
                {subject.new && (
                  <span className="bg-surface/50 px-3 py-1 rounded-full text-xs font-label-bold uppercase tracking-wider">New</span>
                )}
                {!subject.category && !subject.new && (
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{subject.icon}</span>
                )}
                {subject.challenge ? (
                  <div className="bg-error-container text-on-error-container w-20 h-20 rounded-[2rem] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{subject.icon}</span>
                  </div>
                ) : (
                  <button className="bg-on-primary text-primary-container w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                )}
              </div>
              <div className="relative z-10 w-full md:w-2/3">
                <h3 className="font-headline-md text-headline-md mb-2">{subject.title}</h3>
                <p className="font-body-default text-body-default opacity-80">{subject.description}</p>
                {subject.level && (
                  <div className="flex gap-2 mt-4">
                    <span className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">{subject.level}</span>
                    {subject.tags.map((tag, index) => (
                      <span key={index} className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              {subject.graphic && (
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 blur-2xl"></div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
