import React, { useEffect, useState } from 'react'
import ACTCard from '../common/ACTCard';
import { categoriesJsonData } from '../services/datatemplate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  //#region variables
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);

  //#region click events
  const onCategorieClick = () => {
    navigate("/categories");
  }

  //#region api get calls
  const getCategoriesByUserId = async () => {
    try {
      const response = await axios.get(
        "https://activitytrackerapiv1-e5avgzd5bbh7dyat.canadacentral-01.azurewebsites.net/v1/GetCategoriesbyUserId/userId=1"
      );
      setSections(response.data)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  

  //#region useeffect
  useEffect(() => {
    getCategoriesByUserId();
  },[])

  //#region return
  return (
    <div className='container d-flex flex-wrap'>
      {
        sections?.map((item, index) => {
          return (
            <div key={index} className="p-2 col-sm-8 col-md-4">
              <ACTCard 
                  title={item?.Name}
                  description={item?.Description}
                  redirectLink={`/categories/${item.name}`} />
            </div>
          );
        })
      }
    </div>
  )
}

export default Home