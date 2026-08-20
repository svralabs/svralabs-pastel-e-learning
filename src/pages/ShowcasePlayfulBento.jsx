import React from 'react';

const ShowcasePlayfulBento = () => {
  const t = (key) => {
    const translations = {
      mathMagic: 'Toán Học Kỳ Diệu',
      level2: 'Cấp 2',
      geometry: 'Hình học',
      mathDescription: 'Khám phá thế giới hình học và số học qua các trò chơi vui nhộn.',
      spaceExplorer: 'Khám Phá Không Gian',
      spaceDescription: 'Du hành qua các hành tinh và học về vũ trụ.',
      colorSplash: 'Màu Sắc Nổi Loạn',
      artDescription: 'Thể hiện sự sáng tạo với màu sắc và nghệ thuật.',
      wordWizards: 'Phù Thủy Ngôn Từ',
      languageDescription: 'Học từ vựng và ngữ pháp qua các câu chuyện kỳ thú.',
      dailyChallenge: 'Thử Thách Hàng Ngày',
      challengeDescription: 'Hoàn thành các thử thách để nhận phần thưởng.',
      kidsPlayLearning: 'Kids Play & Learning',
      explore: 'Khám phá'
    };
    return translations[key] || key;
  };

  const subjects = [
    {
      id: 1,
      title: t('mathMagic'),
      icon: 'calculate',
      level: t('level2'),
      category: t('geometry'),
      description: t('mathDescription'),
      span: 'md:col-span-8 md:row-span-2',
      bgColor: 'bg-primary-container',
      textColor: 'text-on-primary',
      pattern: 'pattern-circles',
      graphic: true
    },
    {
      id: 2,
      title: t('spaceExplorer'),
      icon: 'science',
      description: t('spaceDescription'),
      span: 'md:col-span-4 md:row-span-1',
      bgColor: 'bg-secondary-container',
      textColor: 'text-on-secondary-container',
      pattern: 'pattern-dots from-secondary-fixed/50 to-transparent',
      new: true
    },
    {
      id: 3,
      title: t('colorSplash'),
      icon: 'palette',
      description: t('artDescription'),
      span: 'md:col-span-4 md:row-span-1',
      bgColor: 'bg-primary-fixed',
      textColor: 'text-on-primary-fixed',
      pattern: 'pattern-circles-amber',
      border: 'border-2 border-primary-fixed-dim'
    },
    {
      id: 4,
      title: t('wordWizards'),
      icon: 'menu_book',
      description: t('languageDescription'),
      span: 'md:col-span-6 md:row-span-1',
      bgColor: 'bg-surface-container-high',
      textColor: 'text-on-surface',
      pattern: '',
      border: 'border-2 border-outline-variant',
      layout: 'flex-row'
    },
    {
      id: 5,
      title: t('dailyChallenge'),
      icon: 'star',
      description: t('challengeDescription'),
      span: 'md:col-span-6 md:row-span-1',
      bgColor: 'bg-surface-container-lowest',
      textColor: 'text-on-surface',
      pattern: '',
      border: 'border-2 border-surface-dim',
      layout: 'flex-row'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="hidden md:flex bg-background flex justify-between items-center w-full px-margin py-base max-w-full sticky top-0 z-50">
        <div className="font-headline-lg text-headline-lg font-black text-primary">
          {t('kidsPlayLearning')}
        </div>
        <div className="flex gap-8 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-lg text-body-lg" href="#">{t('explore')}</a>
        </div>
      </nav>
      <div className="grid grid-cols-12 gap-4 p-4 auto-rows-min">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className={`${subject.span} ${subject.bgColor} ${subject.textColor} rounded-2xl p-6 relative overflow-hidden ${subject.border || ''}`}
          >
            <div className={`flex ${subject.layout === 'flex-row' ? 'flex-row items-center' : 'flex-col'} h-full gap-4`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined">{subject.icon}</span>
                  {subject.level && <span className="text-sm bg-surface-variant px-2 py-1 rounded-full">{subject.level}</span>}
                  {subject.new && <span className="text-xs bg-error-container text-error px-2 py-1 rounded-full">Mới</span>}
                </div>
                <h3 className="font-headline-md text-headline-md font-bold mb-2">{subject.title}</h3>
                <p className="font-body-md text-body-md">{subject.description}</p>
                {subject.category && <p className="text-sm mt-2 text-on-surface-variant">{subject.category}</p>}
              </div>
              {subject.graphic && (
                <div className="w-24 h-24 bg-surface-variant/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">calculate</span>
                </div>
              )}
            </div>
            {subject.pattern && (
              <div className={`absolute inset-0 opacity-10 ${subject.pattern}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcasePlayfulBento;
