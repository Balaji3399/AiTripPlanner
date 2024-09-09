import React from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */

function Hotels({trip}) {
  return (
    <div>
        <h1 className='font-bold text-xl mt-5'>Recommendations</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-5 '>
            {trip?.tripInfo?.hotels?.map((item , index)=>(
                <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotelName + ',' + item?.hotelAddress} key={index} target='_blank'>
                <div className='hover:scale-110 transition-all cursor-pointer text-black'>
                    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80" alt="" />
                    <div className='my-2'>
                        <h2 className='font-medium'> {item?.hotelName} </h2>
                        <h2 className='text-xs text-slate-500 py-2'>🕵️ {item?.hotelAddress} </h2>
                        <h2 className='text-sm font-semibold italic '>💸 {item?.price}</h2>
                        <h2 className='text-sm font-semibold italic '>⭐ {item?.rating}</h2>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Hotels