import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ACTCard from '../../common/ACTCard';
import { getCatlogsbyCatgeoryId } from '../services/services';
import secureLocalStorage from 'react-secure-storage';
import LoadingBar from '../../common/components/LoadingBar';
import AddCatlogPopup from '../popups/AddCatlogPopup';
import LoadingButton from '../../common/input-fields/LoadingButton';

const CatlogDashboard = () => {

  //#region variables
  const navigate = useNavigate();
  const [catlogs, setCatlogs] = useState();
  const [isOpenAddPopup, setIsOpenAddPopup] = useState(false);

  //#region click events
  const onAddCatlogClick = () => {
    setIsOpenAddPopup(true);
  }

  const onCloseAddCatlogPopup = () => {
    setIsOpenAddPopup(false);
  }

  const onCatlogClick = (id,name) => {
    secureLocalStorage.setItem('catlogId', id);
    secureLocalStorage.setItem('catlogName', name);
    navigate('/catlog-activities')
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
    <div className=''>
      <div className='s-banner space-between align-item-center'>
          <div className='child-row-margin-5 align-item-center'>
            <i class="bi bi-arrow-left fs-5 cursor-pointer color-black"
                onClick={() => window.history.back()}
                style={{ color: 'white' }}></i>
            <h1>{secureLocalStorage.getItem("categoryName")}</h1>
          </div>
          <div>
            <LoadingButton 
              name="Add New Catlog"
              onClick={onAddCatlogClick}
              iconName="bi bi-plus" />
          </div>
      </div>
      {
        catlogs 
          ? catlogs?.length > 0
              ? <div className='container d-flex flex-wrap padding-20'>
                    {
                      catlogs
                        ?.map((item, index) => {
                        return (
                          <div key={index} className="p-2 col-sm-8 col-md-4">
                            <ACTCard 
                                title={item.Name}
                                description={item.Description}
                                onClick={()=>{onCatlogClick(item.CatlogID,item.Name)}} />
                          </div>
                        );
                      })
                    }
                  </div>
              : <div className='margin-top-10'>No Catlogs Found</div>
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