import React from 'react'
import { Button } from '@/components/ui/button';
/* eslint-disable react/prop-types */
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom';

function PlacesCard({places}) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+places?.placeName } target='_blank'>
        <div className='md:flex gap-4 p-3 mt-2 hover:scale-105 transition-all cursor-pointer hover:shadow-md text-black'>
            <img className='w-[180px] h-[200px] rounded-xl p-1' src="https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80" alt="" />
            <div>
                <h2 className=' text-lg font-bold my-3'>{places?.placeName}</h2>
                <p className='text-sm justify-start text-gray-500 '>{places?.placeDetails}</p>
                <p className='text-sm italic font-semibold mt-3'>⏰ {places?.travelTime}

                <Button className="m-2"><IoLocation /></Button>

                </p>
            </div>
        </div>
    </Link>
  )
}

export default PlacesCard