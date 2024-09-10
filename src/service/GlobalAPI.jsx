import axios from "axios";

const Url_p = 'https://places.googleapis.com/v1/places:searchText' ;

const config = {
    headers : {
        'Content-Type': 'application/json' ,
        'X-Goog-Api-Key' : import.meta.env.VITE_GOOGLE_PLACE_API_KEY ,
        'X-Goog-FieldMask': [
            'places.photos' ,
            'places.displayName' ,
            'places.id'
        ]
    }
}

export const GetPlaceDetails = (data) => axios.post(Url_p , data , config) 

export const PHOTO_URl = 'https://places.googleapis.com/v1/{name}/media?maxHeightPx=600&maxWidthPx=600&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY ;
