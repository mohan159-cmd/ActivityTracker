import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';
import LoadingBar from '../../common/components/LoadingBar';
import LoadingButton from '../../common/input-fields/LoadingButton';
import { getCatlogsbyCatgeoryId } from '../../categories/services/services';
import ACTCard from '../../common/ACTCard';
import AddCatlogPopup from '../../categories/popups/AddCatlogPopup';
import AddActivityPopup from '../popups/AddActivityPopup';
import { getActivitiesbyCatlogId } from '../services/services';
import { formatDate } from '../../common/functions/Formatter';
import { Pie } from 'recharts';
import PieChartComponent from '../../common/components/PieChartComponent';

const ActivityDashboard = () => {

  //#region variables
  const [activites, setActivites] = useState();
  const [isOpenAddPopup, setIsOpenAddPopup] = useState(false);
  
  const [graphData,setGraphData] = useState(
    [
      { name: 'ACT 1', value: 400 },
      { name: 'ACT 2', value: 300 },
    ]
  );

  //#region click events
  const onAddActivityClick = () => {
    setIsOpenAddPopup(true);
  }

  const onCloseActivityPopup = () => {
    setIsOpenAddPopup(false);
  }
  
  //#region api get calls
  const getActivities = async() => {
    const catlogId = secureLocalStorage.getItem("catlogId");
    const data = await getActivitiesbyCatlogId(catlogId);
    if(data.responseCode === 200){
      setActivites(data.responseData);
    }else{
      setActivites([]);
    }
  }

  //#region useeffect
  useEffect(() => {
    getActivities();
  }, [])

  //#region return
  return (
    <div className=''>
       <div className='s-banner space-between align-item-center'>
          <div className='child-row-margin-5 align-item-center'>
            <i class="bi bi-arrow-left fs-5 cursor-pointer color-black"
                onClick={() => window.history.back()}
                style={{ color: 'white' }}></i>
            <h1>{secureLocalStorage.getItem("catlogName")}</h1>
          </div>
          <div>
            <LoadingButton 
              name="Add Activity"
              onClick={onAddActivityClick}
              iconName="bi bi-plus" />
          </div>
      </div>
      {
        activites 
          ? activites?.length > 0
              ? <div className=''>
                  <div className='container d-flex flex-wrap'>
                    {
                      activites
                        ?.map((item, index) => {
                        return (
                          <div key={index} className="p-2 col-sm-8 col-md-4">
                            <ACTCard 
                                title={item.Name}
                                description={
                                  <div className='child-margin-5'>
                                    <div>Description: {item.Description}</div>
                                    <div>Start Time: {formatDate(item.StartDate)}</div>
                                    <div>EndTime: {formatDate(item.EndDate)}</div>
                                  </div>
                                }
                                onClick={()=>{}} />
                          </div>
                        );
                      })
                    }
                  </div>
                  <div className='height-300 width-300'>
                    <PieChartComponent data={graphData} />
                  </div>
                </div>
              : <div className='margin-top-10'>No activites Found</div>
          : <div>
              <LoadingBar />
            </div>
      }
      {
        isOpenAddPopup &&
        <AddActivityPopup 
          isOpen={isOpenAddPopup}
          onClose={onCloseActivityPopup}
          getActivities={getActivities} />
      }
    </div>
  )
}

export default ActivityDashboard