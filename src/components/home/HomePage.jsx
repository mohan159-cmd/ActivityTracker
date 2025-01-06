import React, { useEffect, useState } from 'react'
import ACTCard from '../common/ACTCard';
import { categoriesJsonData } from '../services/datatemplate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCategoriesByUserId } from '../services/services';

const HomePage = () => {

  //#region variables
  const navigate = useNavigate();
  const [sections, setSections] = useState(null);

  //#region click events
  const onCategorieClick = () => {
    navigate("/categories");
  }

  //#region api get calls
  const getCategoriesByUser = async () => {
    const data = await getCategoriesByUserId(1);
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
    <div className='container d-flex flex-wrap'>
      {
        sections 
        ? sections?.length > 0
          ? sections?.map((item, index) => {
          return (
            <div key={index} className="p-2 col-sm-8 col-md-4">
              <ACTCard 
                  title={item?.Name}
                  description={item?.Description}
                  redirectLink={`/categories/${item.name}`} />
            </div>
          );
            })
          : "No data found"
        : "Loading..."
      }
    </div>
  )
}

export default HomePage