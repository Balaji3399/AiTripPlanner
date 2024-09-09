import { GetPlaceDetails } from '@/service/GlobalAPI'
import React from 'react'
/* eslint-disable react/prop-types */

function Info({trip}) {

  const GetplacePhoto = async () => {
    const data = {
      textQuery : trip?.userChoices?.location.label 
    }
    const res = await GetPlaceDetails(data).then(response => {
      console.log(response.data) ;
    })
  }
  return (
    <div className='pt-10'>
        <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80" alt="" className='w-full h-[350px] rounded object-cover' />

        <div className='flex flex-col py-5 gap-2'>
            <h2 className='font-bold '>{trip?.userChoices?.location.label}</h2>
            <div className='flex gap-8'>
              <h2 className='p-1 px-3 rounded-full md:text-md bg-stone-400 font-semibold italic text-xs'>📅 {trip?.userChoices?.noOfDays} days</h2>
              <h2 className='p-1 px-3 rounded-full md:text-md bg-stone-400 font-semibold italic text-xs'>💸 Budget :{trip?.userChoices?.budget}</h2>
              <h2 className='p-1 px-3 rounded-full md:text-md bg-stone-400 font-semibold italic text-xs'>✈️ No. of Travellers : {trip?.userChoices?.options} </h2>
            </div>
        </div>
    </div>
  )
}

export default Info