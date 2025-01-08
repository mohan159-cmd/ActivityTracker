import React, { useEffect, useState } from 'react'
import ACTCard from '../../common/ACTCard';
import { categoriesJsonData } from '../../services/datatemplate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCategoriesByUserId } from '../../services/services';
import { useUserContext } from '../../../store/ContextAPIs';
import LoadingButton from '../../common/input-fields/LoadingButton';
import AddCategoryPopup from '../popups/AddCategoryPopup';

const HomePage = () => {

  //#region variables
  const navigate = useNavigate();
  const [sections, setSections] = useState(null);
  const { userContext } = useUserContext();
  const [openPopup,setOpenPopup] = useState(false);

  //#region click events
  const onAddCategorieClick = () => {
    setOpenPopup(true);
  }

  const onCloseAddcategoryPopup = () => {
    setOpenPopup(false);
  }

  //#region api get calls
  const getCategoriesByUser = async () => {
    const data = await getCategoriesByUserId(userContext?.UserID);
    if (data.responseCode === 200) {
      setSections(data?.responseData)
    }
    else {
      setSections([])
    }
  };
  

  //#region useeffect
  useEffect(() => {
    getCategoriesByUser();
  },[])

  //#region return
  return (
    <div className='padding-15 child-margin-10'>
      <div className='d-flex space-between margin-top-10'>
        <div></div>
        <LoadingButton 
           name="ADD NEW CATEGORY"
           onClick={onAddCategorieClick} />
      </div>
      <div className='d-flex flex-wrap'>
      {
        sections 
        ? sections?.length > 0
          ? sections?.map((item, index) => {
          return (
            <div key={index} className="p-2 col-sm-8 col-md-4">
              <ACTCard 
                  title={item?.Name}
                  description={item?.Description} />
            </div>
          );
            })
          : "No data found"
        : "Loading..."
      }
      </div>
      {
        openPopup && 
          <AddCategoryPopup 
             isOpen={openPopup} 
             onClose={onCloseAddcategoryPopup}
             getCategoriesByUser={getCategoriesByUser} />
      }
    </div>
  )
}

export default HomePage