import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { budgetOptions, options } from '@/components/constants/options';
import { Link } from 'react-router-dom';

function CreateTrip() {
  // Access environment variables using `import.meta.env`
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const [place , setPlace] = useState(null) ;
  return (
    <div className="px-5 sm:px-10 md:px-32 lg:px-32 xl:px-72 pt-20">
      <h1 className="font-bold text-3xl mt-5">Your Travel Preferences</h1>
      <p className="text-md mt-4 font-medium">
        Just provide some basic travel information, and our trip planner will generate a customized plan based on the given information.
      </p>

      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className="text-[20px] my-8 font-medium">Add your Destination</h2>
          {apiKey && (
            <GooglePlacesAutocomplete
              place
              apiKey={apiKey}
              selectProps={{
                placeholder: 'Enter destination',
                isClearable: true,
                place ,
                onChange : (value) => {
                  console.log(value) ;
                  setPlace(value) ;
                },
                styles : {
                  control : (provided) => ({
                    ...provided ,
                    fontWeight : 'bold' 
                  }),
                }

              }}
            />
          )}
        </div>
        <div>
          <h2 className="text-[20px] my-5 font-medium">No. of days your planning for trip</h2>
          <Input placeholder="Ex.3" type='number' className="border-2 font-semibold focus:border-blue-700" />
        </div>
      </div>

      <div>
        <h2 className="text-[20px] mt-8 font-medium">Mention Your Budget</h2>
        <div className='grid grid-cols-3 gap-5 my-10'>
          {budgetOptions.map((item , index) => (
            <div key={index} className='p-5 border rounded-lg hover:shadow-lg cursor-pointer flex flex-col gap-2'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-600 italic'>{item.description}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[20px] mt-8 font-medium">Who do you plan on traveling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 my-10'>
          {options.map((item , index) => (
            <div key={index} className='p-5 border rounded-lg hover:shadow-lg cursor-pointer flex flex-col gap-2'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-600 italic'>{item.description}</h2>
            </div>
          ))}
        </div>
      </div>
      <Link to={'/'}>
        <Button className="float-right my-5 mb-16 hover:shadow-lg"> Generate Trip </Button>
      </Link>
    </div>
  );
}

export default CreateTrip;
