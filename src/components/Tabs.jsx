import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs, defaultActiveTab, layout = 'horizontal', onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  const renderTabButton = (tab) => {
    const isActive = tab.id === activeTab;
    const baseClass = layout === 'horizontal' ? styles.tabButton : styles.verticalTabButton;

    return (
      <button
        key={tab.id}
        className={`${baseClass} ${isActive ? styles.active : ''}`}
        onClick={() => handleTabClick(tab.id)}
      >
        {tab.icon && <span className="material-symbols-outlined">{tab.icon}</span>}
        {tab.label}
      </button>
    );
  };

  const renderTabs = () => {
    if (layout === 'horizontal') {
      return (
        <div className={styles.tabsContainer}>
          {tabs.map(renderTabButton)}
        </div>
      );
    } else if (layout === 'vertical') {
      return (
        <div className={styles.verticalTabsContainer}>
          {tabs.map(renderTabButton)}
        </div>
      );
    } else if (layout === 'icon') {
      return (
        <div className={styles.iconTabContainer}>
          {tabs.map(renderTabButton)}
        </div>
      );
    } else if (layout === 'segmented') {
      return (
        <div className={styles.segmentedControlContainer}>
          {tabs.map(renderTabButton)}
        </div>
      );
    }
  };

  return renderTabs();
}
