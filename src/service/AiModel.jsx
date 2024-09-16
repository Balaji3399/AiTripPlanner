// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
  import { GoogleGenerativeAI , HarmCategory , HarmBlockThreshold } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({

      history: [
        {
            role:'user' ,
            parts : [
                {
                    text : 'Generate Travel Plan for location : Las vegas , for three days for couple with a cheap budget , Give me a Hotels options list with HotelName , Hotel address , price , hotel image url , geo coordinates , rating , descriptions and suggest itinerary with placeName , place details , place Image Url , Geo Coordinated , ticket pricing , rating , travel time to each of the location for 3 days with each day plan with best time as bestTime in JSON format. '             }
            ],
        },
        {
            role:'model' ,
            parts: [
              {
                text: `{
                  "hotels": [
                    {
                      "hotelName": "The D Las Vegas",
                      "hotelAddress": "301 Fremont Street, Las Vegas, NV89101",
                      "price": "$50-$100 per night",
                      "hotelImageUrl": "https://www.theDcasino.com/images/hero/main-hero-02.jpg",
                      "geoCoordinates": "36.1695, -115.1438",
                      "rating": "3.5 stars",
                      "description": "A budget-friendly hotel located in downtown Las Vegas with a retro vibe. It features a casino, a pool, and several dining options."
                    },
                    {
                      "hotelName": "Circus Circus Hotel & Casino"
                    }
                  ]
                }`
              }
            ]
            
        },
      ],
    });
