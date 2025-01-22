import React, { useEffect, useState } from 'react'
import secureLocalStorage from 'react-secure-storage';
import LoadingBar from '../../common/components/LoadingBar';
import LoadingButton from '../../common/input-fields/LoadingButton';
import { getCatlogsbyCatgeoryId } from '../../categories/services/services';
import ACTCard from '../../common/ACTCard';
import AddCatlogPopup from '../../categories/popups/AddCatlogPopup';
import AddActivityPopup from '../popups/AddActivityPopup';
import { getActivitiesbyCatlogId } from '../services/services';

const ActivityDashboard = () => {

  //#region variables
  const [activites, setActivites] = useState();
  const [isOpenAddPopup, setIsOpenAddPopup] = useState(false);

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
    <div className='padding-20'>
      <div className='d-flex space-between margin-top-10'>
        <div className='child-margin-10'>
          <div className='child-row-margin-5 align-item-center'>
            <i class="bi bi-arrow-left fs-5 cursor-pointer" onClick={() => window.history.back()}></i>
            <div>{secureLocalStorage.getItem("catlogName")} Activities</div>
          </div>
        </div>
        <LoadingButton 
            name="Add Activity"
            onClick={onAddActivityClick}
            iconName="bi bi-plus" />
      </div>
      {
        activites 
          ? activites?.length > 0
              ? <div className='container d-flex flex-wrap'>
                    {
                      activites
                        ?.map((item, index) => {
                        return (
                          <div key={index} className="p-2 col-sm-8 col-md-4">
                            <ACTCard 
                                title={item.Name}
                                description={item.Description}
                                onClick={()=>{}} />
                          </div>
                        );
                      })
                    }
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