import React from 'react'
import { Link } from 'react-router-dom'
import HotelCard from './HotelCard'

/* eslint-disable react/prop-types */

function Hotels({trip}) {
  return (
    <div>
        <h1 className='font-bold text-xl mt-5'>Recommendations</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 '>
            {trip?.tripInfo?.hotels?.map((item , index)=>(
                <HotelCard item = {item} key={index} />
            ))}
        </div>
    </div>
  )
}

export default Hotels