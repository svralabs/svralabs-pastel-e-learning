import { useState } from 'react';

export default function Tabs({ children, defaultActiveKey, activeKey, onChange, vertical }) {
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey || children[0].key);
  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  const handleTabClick = (key) => {
    if (onChange) {
      onChange(key);
    } else {
      setInternalActiveKey(key);
    }
  };

  const tabList = children.map((child) => {
    const isActive = child.key === currentActiveKey;
    const baseClasses = vertical
      ? 'flex items-center gap-3 w-full p-4 text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-bold text-label-bold text-left transition-colors'
      : 'pb-2 border-b-4 text-on-surface-variant hover:text-primary transition-colors font-headline-md text-headline-md px-2';
    const activeClasses = vertical
      ? 'bg-primary text-on-primary'
      : 'border-primary text-primary';
    const inactiveClasses = vertical
      ? ''
      : 'border-transparent';

    return (
      <button
        key={child.key}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        onClick={() => handleTabClick(child.key)}
      >
        {child.props.tab}
      </button>
    );
  });

  const tabContent = children.find((child) => child.key === currentActiveKey);

  return (
    <div className={vertical ? 'flex flex-col md:flex-row min-h-[400px]' : ''}>
      <div className={vertical ? 'w-full md:w-64 bg-surface-container p-cell-padding border-b-2 md:border-b-0 md:border-r-2 border-surface-variant flex flex-col gap-2' : 'border-b-2 border-surface-variant flex gap-8'}>
        {tabList}
      </div>
      <div className={vertical ? 'flex-1 p-cell-padding' : 'p-cell-padding'}>
        {tabContent}
      </div>
    </div>
  );
}

export function TabPane({ children }) {
  return <div>{children}</div>;
}
