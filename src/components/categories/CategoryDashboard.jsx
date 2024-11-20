import React, { useState } from 'react'
import { mediaItemsJsonData } from '../services/datatemplate';
import { useParams } from 'react-router-dom';
import ACTCard from '../common/ACTCard';

const CategoryDashboard = () => {

  //#region variables
  const { categoryName } = useParams();
  const [mediaItems, setMediaItems] = useState(mediaItemsJsonData);

  //#region return
  return (
    <div className='container d-flex flex-wrap'>
      {
        mediaItems
          ?.filter(item => item.parentName == categoryName)
          ?.map((item, index) => {
          return (
            <div key={index} className="p-2 col-sm-8 col-md-4">
              <ACTCard 
                  title={item.name}
                  redirectLink={`/categories/${categoryName}/${item.name}`} />
            </div>
          );
        })
      }
    </div>
  )
}

export default CategoryDashboard