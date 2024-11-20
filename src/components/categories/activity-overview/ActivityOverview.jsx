import React from 'react'
import TabConatiner from '../../common/TabConatiner'
import { useParams } from 'react-router-dom';

const ActivityOverview = () => {

  //#region variables
  const { categoryId,activityName } = useParams();
  const tabs = [
    { id: 1, title: "Overview", link: "#Overview" },
    { id: 2, title: "Activity", link: "#Activity" },
    { id: 3, title: "Notes", link: "#Notes" },
  ]

  //#region return
  return (
    <div>
      <h1>{activityName}</h1>
      <TabConatiner tabs={tabs} />
    </div>
  )
}

export default ActivityOverview