import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TabSwitch from '../../common/TabSwitch';

const ActivityOverview = () => {
  //#region variables
  const { categoryId, activityName } = useParams();
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    { id: 1, title: 'Overview', link: 'Overview', content: 'Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...' },
    { id: 2, title: 'Activity', link: 'Activity', content: 'Content for the Activity section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...Content for the Overview section...' },
    { id: 3, title: 'Notes', link: 'Notes', content: 'Content for the Notes section...' },
  ];

  //#region return
  return (
    <div>
      <h1>{activityName}</h1>
      <TabSwitch tabs={tabs} />
    </div>
  );
  //#endregion
};

export default ActivityOverview;
