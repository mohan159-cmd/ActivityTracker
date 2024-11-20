import React, { useState } from 'react'

const TabConatiner = (props) => {

  //#region props
  const { tabs } = props;

  //#region variables
  const [selectedTab,setSelectedTab] = useState(tabs[0]?.id || 0);

  //#region click events
  const onTabClick = (id) => {
    setSelectedTab(id);
  }

  return (
    <>
        <ul class="nav nav-pills mb-3" role="tablist">
            {
                tabs?.map((item, index) => {
                    return (
                        <div className={`nav-link cursor-pointer custom-tab-button ${selectedTab === item.id ? 'selected' : ''}`} 
                                id={item.id} 
                                onClick={() => onTabClick(item.id)} 
                                role="tab" 
                                aria-controls={item.id} aria-selected={selectedTab == item.id}>
                            {item.title}
                        </div>
                    );
                })
            }
        </ul>
        <div class="tab-content">
        {
            selectedTab ?
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                {tabs?.find(item => item.id == selectedTab)?.link}
            </div> 
            : "Please select a tab"
        }
        </div>
    </>
  )
}

export default TabConatiner