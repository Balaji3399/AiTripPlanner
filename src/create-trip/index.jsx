import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AI_PROMPT, budgetOptions, options } from '@/components/constants/options';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { chatSession } from '@/service/AiModel';
import { Dialog , DialogHeader , DialogDescription , DialogContent} from '@/components/ui/dialog';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function CreateTrip() {

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [openDialogueBox , setOpenDialogueBox] = useState(false) ;
  const [load , setLoad] = useState(false) ;

  const router = useNavigate() ;
  const handleInput = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const generateTrip = async () => {

    const user = localStorage.getItem('user') ;


    if(formData?.noOfDays > 5 && !formData?.budget || !formData?.options){
      toast({
        variant : 'destructive' ,
        title : "Fill All the details"
      })
      return ;
    }

    if(!user){
      setOpenDialogueBox(true) ;
      return ;
    }
      // console.log(formData) ;
      toast({
        variant : 'destructive' ,
        title : "Please wait , Generating Trip"
      })
      setLoad(true) ;

      const Prompt = AI_PROMPT
      .replace('{location}' , formData?.location?.label)
      .replace('{totalDays}' , formData?.noOfDays)
      .replace('{options}' , formData?.options)
      .replace('{budget}' , formData?.budget)
      .replace('{totalDays}' , formData?.noOfDays)

      const result = await chatSession.sendMessage(Prompt) ;
      console.log(result?.response?.text());
      console.log(Prompt) ;
      setLoad(false) ;
      AiTrip(result?.response?.text()) ;
  }
  const login = useGoogleLogin ({
    onSuccess:(response) => getUserData(response), 
    onError : (err) => console.log(err) 
  })

  const AiTrip = async (tripInfo) => {
    setLoad(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const id = Date.now().toString();
  
    let parsedTripInfo;
    try {
     
      let cleanedTripInfo = tripInfo
        .replace(/```json|```/g, '')   
        .replace(/\n/g, '')            
        .trim();                      

      // console.log('Cleaned Trip Info:', cleanedTripInfo);
  
      const jsonEndIndex = cleanedTripInfo.lastIndexOf('}');
      cleanedTripInfo = cleanedTripInfo.substring(0, jsonEndIndex + 1);
    
      parsedTripInfo = JSON.parse(cleanedTripInfo);
    } catch (error) {
      console.error('Error parsing tripInfo JSON:', error);
      toast({
        variant: 'destructive',
        title: 'Error generating trip. Please try again.',
      });
      setLoad(false);
      return;
    }
    
    await setDoc(doc(db, 'AiTrips', id), {
      userChoices: formData,
      tripInfo: parsedTripInfo,
      userEmail: user?.email,
      id: id,
    });
  
    setLoad(false);
    router('/view-trip/' + id);
  }
  

  const getUserData = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}` , {
      headers : {
        Authorization : `Bearer ${tokenInfo?.access_token}` , 
        Accept : 'Application/json'
      }
    }).then((response) => {
      localStorage.setItem('user' , JSON.stringify(response.data))
      setOpenDialogueBox(false) ;
      generateTrip() ;
    })
  }

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
              apiKey={apiKey}
              selectProps={{
                placeholder: 'Enter destination',
                isClearable: true,
                value: place,
                onChange: (value) => {
                  setPlace(value);
                  handleInput('location', value);
                },
                styles: {
                  control: (provided) => ({
                    ...provided,
                    fontWeight: 'bold',
                  }),
                },
              }}
            />
          )}
        </div>
        <div>
          <h2 className="text-[20px] my-5 font-medium">No. of days you’re planning for the trip</h2>
          <Input
            placeholder="Ex. 3"
            type='number'
            className="border-2 font-semibold focus:border-blue-700"
            onChange={(e) => handleInput('noOfDays', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-[20px] mt-8 font-medium">Mention Your Budget</h2>
        <div className='grid grid-cols-3 gap-5 my-10'>
          {budgetOptions.map((item, index) => (
            <div
              key={index}
              className={`p-5 border rounded-lg hover:shadow-lg cursor-pointer flex flex-col gap-2
                ${formData?.budget == item.title ? 'border-black shadow-lg' : 'border-none'}`}
              onClick={() => {
                handleInput('budget', item.title);
              }}
            >
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
          {options.map((item, index) => (
            <div
              key={index}
              className={`p-5 border rounded-lg hover:shadow-lg cursor-pointer flex flex-col gap-2
                ${formData?.options == item.people ? 'border-black shadow-lg' : 'border-none'}`
              }
              onClick={() => {
                handleInput('options', item.people);
              }}
            >
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-600 italic'>{item.description}</h2>
            </div>
          ))}
        </div>
      </div>
      <Link>
        <Button disabled={load} onClick={generateTrip} className="float-right my-5 mb-16 hover:shadow-lg">
          {load? <AiOutlineLoading3Quarters className='w-7 h-7 animate-spin' /> : "Generate Trip"
          }
          </Button>
      </Link>

      <Dialog open={openDialogueBox} >
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <img src="logo.svg" alt="" />
            <h2 className='font-bold text-black mt-7 text-lg justify-evenly'>Sign In with Google</h2>
            <p>Sign In to App with google securely</p>

            <Button onClick={login} className='w-full mt-5 flex gap-4 items-center' >
              
              <FcGoogle className='h-7 w-7'/>
                Sign In with Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      </Dialog>



    </div>
  );
}

export default CreateTrip;
