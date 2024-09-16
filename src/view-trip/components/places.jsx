import React from 'react'
import PlacesCard from './PlacesCard'
/* eslint-disable react/prop-types */

function Places({ trip }) {

  let itineraryArray = [];

  // Check if itinerary is an array or object
  if (Array.isArray(trip?.tripInfo?.itinerary)) {
    // It's an array, use it directly
    itineraryArray = trip.tripInfo.itinerary;
  } else if (trip?.tripInfo?.itinerary && typeof trip.tripInfo.itinerary === 'object') {
    // It's an object, convert to array using Object.entries
    itineraryArray = Object.entries(trip.tripInfo.itinerary).map(([key, value]) => value);
  }

  return (
    <div>
      <h2 className='font-bold text-lg'>Near By Places to Visit</h2>
      <div>
        {itineraryArray.map((item, index) => (
          <div key={index}>
            <h2 className='font-bold text-2xl'>{`Day ${item.day || index + 1}: ${item.title}`}</h2>

            <div className="grid grid-col-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
              {item?.places?.map((places, index) => (
                <div key={index} className='py-2'>
                  <h2 className='font-medium text-sm text-[green] py-3 italic'>
                    <span className='font-bold text-black not-italic'>Best Time: </span>{places?.bestTime}
                  </h2>
                  <PlacesCard places={places} />
                </div>
              ))}

              {item?.plan?.map((places, index) => (
                <div key={index} className='py-2'>
                  <h2 className='font-medium text-sm text-[green] py-3 italic'>
                    <span className='font-bold text-black not-italic'>Best Time: </span>{places?.time} || {places?.bestTime}
                  </h2>
                  <PlacesCard places={places} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Places;
