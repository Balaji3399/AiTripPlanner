import { GetPlaceDetails, PHOTO_URl } from '@/service/GlobalAPI';
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */

function MyTripsCard({item}) {
  const [photoUrl , setPhotoUrl] = useState() ;

  const GetplacePhoto = useCallback( async () => {
    const data = {
      textQuery : item?.userChoices?.location?.label
    }
    const res = await GetPlaceDetails(data).then(response => {
      console.log(response.data) ;

      const image = PHOTO_URl.replace('{name}', response.data.places[0].photos[3].name) ;
      console.log(image) ;
      setPhotoUrl(image) ;
    })

  },[item])

  useEffect (() => {
    item&&GetplacePhoto() ;
  },[item , GetplacePhoto])

  return (
    <Link to={'/view-trip/' + item?.id}>
      <div className='text-black hover:scale-110 transition-all'>
        <img src={photoUrl ? photoUrl : "https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80"} 
        alt="" className='md:w-full h-[250px] sm:w-1/2 rounded' />
          <div>
            <h2 className='font-semibold text-sm mt-6 text-left'>{item?.userChoices?.location?.label}</h2>
            <h2 className='text-gray-600 italic text-sm mt-2'>{item?.userChoices?.noOfDays} days with {item?.userChoices?.budget} budget</h2>
          </div>
      </div>
    </Link>
  )
}

export default MyTripsCard