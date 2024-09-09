import { toast } from '@/hooks/use-toast';
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);

    const GetTripData = useCallback(async () => {
        const docRef = doc(db, 'AiTrips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("data:" , docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log('No data');
            toast('No data available');
        }
    }, [tripId]);

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId, GetTripData]);

    return (
        <div className='pt-16'>
            <h1>View Trip</h1>
            <p><strong>Location:</strong> {trip?.userChoices?.location?.label}</p>
            <h2>Hotels</h2>
            <p>{trip?.tripInfo?.hotels?.hotelName}</p>
        </div>
    );
}

export default Viewtrip;
