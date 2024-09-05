
export const options = [
    {
        id: 1,
        title : 'Just Me',
        description : 'Solo traveller',
        icon : '✈️',
        people : '1'
    },
    {
        id: 2,
        title : 'A Couple',
        description : 'Two Travellers',
        icon : '🥂',
        people : '2'
    },
    {
        id: 3,
        title : 'Family',
        description : 'A group of Fun',
        icon : '🏡' ,
        people : ' 4 to 6'
    },
    {
        id: 4,
        title : 'Friends',
        description : 'Group of Fun',
        icon : '⛵',
        people : ' 5 to 10'
    }
]

export const budgetOptions = [
    {
        id: 1,
        title : 'Cheap',
        description : 'Small amount of budget',
        icon : '💵'
    },
    {
        id: 2,
        title : 'Moderate',
        description : 'Keep Cost On Average',
        icon : '💰',
    },
    {
        id: 3,
        title : 'Luxury',
        description : 'Dont Worry Of Cost',
        icon : '💸',
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location} , for {totalDays} Days for {options} travellers with a {budget} budget , give me Hotels options list with HotelName, Hotel adress , Price , hotel itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, travel time to each of the location for {totalDays} days with each day plan with best time to visit in JSON format. '