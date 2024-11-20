import React, { useState, useEffect } from 'react';

const TabSwitch = (props) => {
  const { tabs } = props;

  // Track the selected tab
  const [selectedTab, setSelectedTab] = useState(1);

  // Handle tab click
  const handleTabClick = (tabId, sectionId) => {
    setSelectedTab(tabId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll event
  const handleScroll = () => {
    let currentTab = selectedTab;
    tabs.forEach((item) => {
      const section = document.getElementById(item.link);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentTab = item.id;
        }
      }
    });
    if (currentTab !== selectedTab) {
      setSelectedTab(currentTab);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedTab, tabs]);

  return (
    <div>
      {/* Tab list - Make the tabs sticky at the top */}
      <ul className="nav nav-pills mb-3" role="tablist" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        {tabs.map((item) => (
          <li key={item.id} className="nav-item">
            <div
              className={`nav-link cursor-pointer custom-tab-button ${selectedTab === item.id ? 'selected' : ''}`}
              onClick={() => handleTabClick(item.id, item.link)}
              role="tab"
              aria-controls={item.link}
            >
              {item.title}
            </div>
          </li>
        ))}
      </ul>

      {/* Tab content scrollable area */}
      <div className="tab-content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {tabs.map((item) => (
          <div key={item.id} id={item.link} role="tabpanel" className="pt-3" aria-labelledby={item.link}>
            <h2>{item.title} Section</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSwitch;
