import React from 'react'
import PlacesCard from './PlacesCard'
/* eslint-disable react/prop-types */

function Places({trip}) {

    
  return (
    <div>
        <h2 className='font-bold text-lg'>Near By Places to Visit</h2>
        <div>
            {trip?.tripInfo?.itinerary?.map((item , index) =>(
                <div key={index} >
                    <h2 className='font-bold  text-2xl'>Day {item.day}</h2>
                    
                        <div className="grid grid-col-2 md:grid-cols-1 lg:grid-cols-2 gap-6" >
                        {item?.places?.map((places , index) => (
                            <div key={index} className='py-2'>
                                <h2 className='font-medium text-sm text-[green] py-3 italic'><span className='font-bold text-black not-italic'>Best Time : </span>{places?.bestTime}</h2>
                                <PlacesCard places={places}/>
                            </div>
                            ))}
                        </div>

                        <div className="grid grid-col-2 md:grid-cols-1 lg:grid-cols-2 gap-6" >
                        {item?.plan?.map((places , index) => (
                            <div key={index} className='py-2'>
                                <h2 className='font-medium text-sm text-[green] py-3 italic'><span className='font-bold text-black not-italic'>Best Time : </span>{places?.time} || {places?.bestTime}</h2>
                                <PlacesCard places={places}  />
                            </div>
                            ))}
                        </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Places