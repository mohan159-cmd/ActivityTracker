import React, { useEffect, useState } from 'react'
import { moviesListDummyJson } from '../services/datatemplate';
import MovieCard from '../common/MovieCard';
import { Box, Grid2 } from '@mui/material';

const LandingPage = () => {

  //#region variables
  const [information, setInformation] = useState(moviesListDummyJson);
  const [moviesList,setMoviesLIst] = useState(moviesListDummyJson);

  //#region api get calls

  //#region useeffect
  useEffect(() => {
    const extractMovies = information?.listings?.map((listing) => {
      if (!listing?.cards?.[0]) return;
      if (listing.cards[0].text?.length <= 0) return;
      return {
        id: listing.cards[0].image?.id,
        name: listing.cards[0].text?.[0].components?.[0]?.text,
        description: listing.cards[0].image?.description,
        image: listing.cards[0].ctaUrl
      };
    }).filter(Boolean); // Remove undefined entries from the result    
    setMoviesLIst({listings: extractMovies})
  },[information])

  //#region return
  return (
    <div className='container d-flex flex-wrap'>
      {
        moviesList?.listings?.map((movie, index) => {
          return (
            <div key={index} className="p-2 col-sm-8 col-md-4">
              <MovieCard 
                      title={movie.name} />
            </div>
          );
        })
      }
    </div>
  )
}

export default LandingPage