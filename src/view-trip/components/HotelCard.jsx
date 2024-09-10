import { GetPlaceDetails, PHOTO_URl } from '@/service/GlobalAPI';
import React , {useState , useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'
/* eslint-disable react/prop-types */

function HotelCard({item}) {

    const [photoUrl , setPhotoUrl] = useState() ;

  const GetplacePhoto = useCallback( async () => {
    const data = {
      textQuery : item?.hotelName
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
            <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotelName + ',' + item?.hotelAddress} target='_blank'>
                <div className='hover:scale-110 transition-all cursor-pointer text-black'>
                    <img src={photoUrl?photoUrl : 'https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80'} alt="" className='rounded-md h-[200px] w-full object-cover' />
                    <div className='my-2'>
                        <h2 className='font-medium'> {item?.hotelName} </h2>
                        <h2 className='text-xs text-slate-500 py-2'>🕵️ {item?.hotelAddress} </h2>
                        <h2 className='text-sm font-semibold italic '>💸 {item?.price}</h2>
                        <h2 className='text-sm font-semibold italic '>⭐ {item?.rating}</h2>
                    </div>
                </div>
            </Link>
  )
}

export default HotelCard