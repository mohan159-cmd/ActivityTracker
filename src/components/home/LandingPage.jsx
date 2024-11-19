import React, { useEffect, useState } from 'react'
import ACTCard from '../common/ACTCard';
import { categoriesJsonData } from '../services/datatemplate';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  //#region variables
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);

  //#region click events
  const onCategorieClick = () => {
    navigate("/categories");
  }

  //#region api get calls

  //#region useeffect
  useEffect(() => {
    setSections(categoriesJsonData)
  },[])

  //#region return
  return (
    <div className='container d-flex flex-wrap'>
      {
        sections?.map((item, index) => {
          return (
            <div key={index} className="p-2 col-sm-8 col-md-4">
              <ACTCard 
                  title={item.name}
                  redirectLink={`/categories/${item.id}`} />
            </div>
          );
        })
      }
    </div>
  )
}

export default LandingPage