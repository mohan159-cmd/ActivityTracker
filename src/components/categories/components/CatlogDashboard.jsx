import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ACTCard from '../../common/ACTCard';
import { getCatlogsbyCatgeoryId } from '../services/services';
import secureLocalStorage from 'react-secure-storage';
import LoadingBar from '../../common/components/LoadingBar';
import AddCatlogPopup from '../popups/AddCatlogPopup';
import LoadingButton from '../../common/input-fields/LoadingButton';

const CatlogDashboard = () => {

  //#region variables
  const { categoryName } = useParams();
  const [catlogs, setCatlogs] = useState();
  const [isOpenAddPopup, setIsOpenAddPopup] = useState(false);

  //#region click events
  const onAddCatlogClick = () => {
    setIsOpenAddPopup(true);
  }

  const onCloseAddCatlogPopup = () => {
    setIsOpenAddPopup(false);
  }
  
  //#region api get calls
  const getCatlogs = async() => {
    const categoryId = secureLocalStorage.getItem("categoryId");
    const data = await getCatlogsbyCatgeoryId(categoryId);
    if(data.responseCode === 200){
      setCatlogs(data.responseData);
    }else{
      setCatlogs([]);
    }
  }

  //#region useeffect
  useEffect(() => {
    getCatlogs();
  }, [])

  //#region return
  return (
    <div className='padding-20'>
      <div className='d-flex space-between margin-top-10'>
        <div className='child-margin-10'>
          <div className='child-row-margin-5 align-item-center'>
            <i class="bi bi-arrow-left fs-5 cursor-pointer" onClick={() => window.history.back()}></i>
            <div>Catlogs</div>
          </div>
        </div>
        <LoadingButton 
            name="ADD NEW CATEGORY"
            onClick={onAddCatlogClick}
            iconName="bi bi-plus" />
      </div>
      {
        catlogs 
          ? <div className='container d-flex flex-wrap'>
              {
                catlogs
                  ?.filter(item => item.parentName == categoryName)
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
          : <div>
              <LoadingBar />
            </div>
      }
      {
        isOpenAddPopup &&
        <AddCatlogPopup 
          isOpen={isOpenAddPopup}
          onClose={onCloseAddCatlogPopup}
          getCatlogs={getCatlogs} />
      }
    </div>
  )
}

export default CatlogDashboard