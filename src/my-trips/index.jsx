import { db } from '@/service/firebaseConfig';
import { query , collection , getDocs, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom'
import MyTripsCard from './MyTripsCard';

function MyTrips() {
    const [userTrip , setUserTrips] = useState() ;
    const navigate = useNavigation() ;
    useEffect(() => {
        userTrips() ;
    },[])
    
    const userTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user')) ;

        if(!user){
            navigate('/') ;
            return ;
        }


        const q = query(collection(db , 'AiTrips'), where('userEmail' , '==' , user?.email));
        const querySnapShot = await getDocs(q) ;
        setUserTrips([]) ;
        querySnapShot.forEach((doc) => {
            // console.log(doc.id , '=>' , doc.data()) ;
            setUserTrips(prev => [...prev , doc.data()]) ;
        })

        console.log(userTrip)
    }


  return (
    <div className='px-5 sm:px-16 md:px-32 lg:px-32 xl:px-72 pt-20 pb-10'>
        <h2 className='font-bold text-2xl my-5'>My Trips</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
             {userTrip?.length > 0 ? userTrip?.map((item , index) => (
                <MyTripsCard item={item} key={index} />
             ))
             :
             [1 , 2 , 3 , 4 , 5 , 6].map((item , index) => (
                <div key={index} className='h-[300px] w-full bg-slate-300 animate-pulse rounded-xl'>

                </div>
             ))
            }
        </div>
    </div>
  )
}

export default MyTrips