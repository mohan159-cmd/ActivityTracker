import React, { useState } from 'react'
import { mediaItemsJsonData } from '../services/datatemplate';
import { useParams } from 'react-router-dom';
import ACTCard from '../common/ACTCard';

const Dashboard = () => {

  //#region variables
  const { categoryId } = useParams();
  const [mediaItems, setMediaItems] = useState(mediaItemsJsonData);

  //#region return
  return (
    <div className='container d-flex flex-wrap'>
      {
        mediaItems
          ?.filter(item => item.parentId == categoryId)
          ?.map((item, index) => {
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

export default Dashboard