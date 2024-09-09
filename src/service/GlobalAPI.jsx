import axios from "axios";

const Url = 'https://places.googleapis.com/v1/places:searchText' ;

const config = {
    headers : {
        'Content-type' : 'application/json' ,
        'X-Goog-Api-Key' : import.meta.env.VITE_GOOGLE_API_KEY ,
        'X-Goog-FieldMask': [
            'places.photo' ,
            'places.displayName' ,
            'places.id'
        ]
    }
}

export const GetPlaceDetails = (data) => axios.post(Url , data , config) 