import { toast } from '@/hooks/use-toast';
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../components/Info';
import Hotels from '../components/hotels';
import Places from '../components/places';

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    // const [loading, setLoading] = useState(true); // Loading state

    const GetTripData = useCallback(async () => {
        try {
            const docRef = doc(db, 'AiTrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("data:", docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log('No data');
                toast('No data available');
            }
        } catch (error) {
            console.error("Error fetching document:", error);
            toast('Failed to fetch data');
        } 
    }, [tripId]);

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId, GetTripData]);

    // if (loading) {
    //     return <div>Loading...</div>; // Show loading spinner or message
    // }

    return (
        <div className='p-10 md:px-15 lg:px-44 xl:px-56'>
            <Info trip={trip} /> 
            <Hotels trip={trip} />
            <Places trip={trip}/>
        </div>
    );
}

export default Viewtrip ;