"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const hotel_model_1 = __importDefault(require("./models/hotel.model"));
// Load environment variables
dotenv_1.default.config();
// Connect to MongoDB
// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected...");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
// Seed Data
const seedHotels = async () => {
    await connectDB();
    const hotels = [
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
  
  At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
  
  Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
  
  Couples particularly like the location — they rated it 9.6 for a two-person trip.
  
  Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
  
  All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
  
  Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
  
  Couples particularly like the location — they rated it 9.1 for a two-person trip.
  
  Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
  
  These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
  
  Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
  
  Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
    
    At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
    
    Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
    
    Couples particularly like the location — they rated it 9.6 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
    
    All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
    
    Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
    
    Couples particularly like the location — they rated it 9.1 for a two-person trip.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
    
    These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
    
    Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
    
    Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        {
            name: "Notting Hill House",
            city: "Kensington and Chelsea, London",
            scoreNumber: 8.2,
            scoreLetter: "Very good",
            reviewsCount: 267,
            description: `Notting Hill House provides accommodation within 4.3 km of the centre of London, with free WiFi, and a kitchen with a microwave, a fridge and a stovetop. The property has city views and is less than 1 km from Portobello Road Market and 2 km from Paddington Station. The aparthotel features family rooms.
      
      At the aparthotel, all units have a desk, a flat-screen TV, a private bathroom, bed linen and towels. The units will provide guests with a wardrobe and a kettle.
      
      Royal Albert Hall is 2.3 km from the aparthotel, while The Serpentine is 2.8 km away. The nearest airport is London City Airport, 21 km from Notting Hill House.
      
      Couples particularly like the location — they rated it 9.6 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/464042313.webp?k=fa5c892f6a184eb5dc81bd082667f1203dc2138ba4e4429032fe7be1fb1190e6&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.9 },
                { category: "Facilities", rating: 9.0 },
                { category: "Cleanliness", rating: 9.1 },
                { category: "Free Wifi", rating: 8.5 },
                { category: "Location", rating: 8.5 },
                { category: "Value for money", rating: 8.6 },
                { category: "Comfort", rating: 9.1 },
            ],
            distance: "7.2 km from centre",
            freeCancellation: false,
            prepayment: true,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 150,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 250,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 8,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 400,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 5,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 350,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 3,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 1000,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 1,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hackney Suites - En-suite rooms & amenities",
            city: "Hackney, London",
            scoreNumber: 8.9,
            scoreLetter: "Fabulous",
            reviewsCount: 397,
            description: `Located in London and within 2.8 km of Victoria Park, Hackney Suites - En-suite rooms & amenities features a garden, allergy-free rooms, and free WiFi throughout the property. This 4-star hotel offers a shared kitchen and luggage storage space. The property is non-smoking and is situated 5.3 km from Tottenham Hale.
      
      All units at the hotel are equipped with a flat-screen TV with satellite channels, a kitchen and a dining area. Hackney Suites - En-suite rooms & amenities provides certain units with garden views, and rooms include a coffee machine. At the accommodation, every room is fitted with bed linen and towels.
      
      Emirates Stadium is 5.5 km from Hackney Suites - En-suite rooms & amenities, while Brick Lane is 5.7 km away. The nearest airport is London City Airport, 11 km from the hotel.
      
      Couples particularly like the location — they rated it 9.1 for a two-person trip.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bidet, Bathtub or shower, Slippers, Private Bathroom, Toilet, Free toiletries, Hairdryer, Bathtub, Shower",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                { category: "Languages Spoken", name: "English, Japanese, Korean" },
                {
                    category: "Accessibility",
                    name: "Toilet with grab rails, Wheelchair accessible, Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Convenience store on site, Designated smoking area, Air conditioning, Smoke-free property, Wake-up service, Heating, Soundproof, Carpeted, Elevator, Facilities for disabled guests, Non-smoking rooms, Wake-up service/Alarm clock",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Security alarm, Key card access, 24-hour security, Safe",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping, Suit press, Ironing service, Dry cleaning (Additional charge), Laundry (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, ATM on site, Baggage storage, Currency exchange, 24-hour front desk",
                },
                { category: "Parking", name: "Parking garage, Accessible parking" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                {
                    category: "Food & Drink",
                    name: "Kid-friendly buffet, Kids' meals, Restaurant, Tea/Coffee maker",
                },
                {
                    category: "Media & Technology",
                    name: "Streaming service (like Netflix), Flat-screen TV, Telephone, TV, Pay-per-view channels",
                },
                { category: "View", name: "City view, View" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 8.7 },
                { category: "Facilities", rating: 8.5 },
                { category: "Cleanliness", rating: 8.9 },
                { category: "Free Wifi", rating: 9.1 },
                { category: "Location", rating: 8.9 },
                { category: "Value for money", rating: 8.7 },
                { category: "Comfort", rating: 8.9 },
            ],
            distance: "5.5 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 130,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 220,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 10,
                        },
                    ],
                },
                {
                    roomType: "Ocean View Suite",
                    price: 370,
                    maxGuests: 4,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 320,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 4,
                        },
                    ],
                },
                {
                    roomType: "Presidential Suite",
                    price: 950,
                    maxGuests: 6,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 2,
                        },
                    ],
                },
            ],
        },
        {
            name: "Hyde Park Suites",
            city: "Westminster Borough, London",
            scoreNumber: 7.8,
            scoreLetter: "Good",
            reviewsCount: 508,
            description: `Situated in the heart of central London, Hyde Park Suites offers comfortable and stylish accommodation just 5 minutes' walk from Bayswater and Queensway Tube Stations. 
      
      These self-contained apartments feature free WiFi, a fully equipped kitchen with a hob, fridge, and microwave. Guests can relax in the lounge, which includes a flat-screen TV. The property has a 24-hour front desk and laundry facilities.
      
      Set in a quiet residential area, Hyde Park Suites is a short stroll from Kensington Gardens and the famous Hyde Park. The vibrant shops of Oxford Street and the world-renowned museums of South Kensington are also within easy reach.
      
      Distance in property description is calculated using © OpenStreetMap.`,
            image: "https://cf.bstatic.com/xdata/images/hotel/square240/528908425.webp?k=40444b0d9750d99141642efa164fb48e789434e807543b00866b7e29dd5f9048&o=",
            facilities: [
                {
                    category: "Bathroom",
                    name: "Toilet paper, Towels, Bathtub or shower, Private Bathroom, Toilet, Free toiletries, Hairdryer",
                },
                { category: "Bedroom", name: "Wardrobe or closet, Alarm clock" },
                {
                    category: "Languages Spoken",
                    name: "English, Spanish, French, Arabic",
                },
                {
                    category: "Accessibility",
                    name: "Upper floors accessible by elevator",
                },
                {
                    category: "General",
                    name: "Air conditioning, Smoke-free property, Heating, Soundproof, Carpeted, Elevator, Non-smoking rooms",
                },
                {
                    category: "Safety & security",
                    name: "Fire extinguishers, CCTV outside property, CCTV in common areas, Smoke alarms, Key card access",
                },
                {
                    category: "Business Facilities",
                    name: "Fax/Photocopying (Additional charge)",
                },
                {
                    category: "Cleaning Services",
                    name: "Daily housekeeping (Additional charge)",
                },
                {
                    category: "Front Desk Services",
                    name: "Invoice provided, 24-hour front desk",
                },
                { category: "Parking", name: "No parking available" },
                {
                    category: "Internet",
                    name: "WiFi is available in all areas and is free of charge.",
                },
                { category: "Food & Drink", name: "Tea/Coffee maker" },
                {
                    category: "Media & Technology",
                    name: "Flat-screen TV, Telephone, TV",
                },
                { category: "View", name: "City view" },
                {
                    category: "Kitchen",
                    name: "Coffee machine, Electric kettle, Refrigerator, Microwave",
                },
                {
                    category: "Room Amenities",
                    name: "Socket near the bed, Clothes rack",
                },
            ],
            avgGuestRating: [
                { category: "Staff", rating: 7.5 },
                { category: "Facilities", rating: 7.0 },
                { category: "Cleanliness", rating: 7.4 },
                { category: "Free Wifi", rating: 8.0 },
                { category: "Location", rating: 8.6 },
                { category: "Value for money", rating: 7.3 },
                { category: "Comfort", rating: 7.5 },
            ],
            distance: "6.8 km from centre",
            freeCancellation: true,
            prepayment: false,
            roomAvailability: [
                {
                    roomType: "Standard",
                    price: 110,
                    maxGuests: 2,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 15,
                        },
                    ],
                },
                {
                    roomType: "Deluxe",
                    price: 210,
                    maxGuests: 3,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 12,
                        },
                    ],
                },
                {
                    roomType: "Family Room",
                    price: 300,
                    maxGuests: 5,
                    availability: [
                        {
                            startDate: new Date("2023-07-01T00:00:00.000Z"),
                            endDate: new Date("2023-07-31T00:00:00.000Z"),
                            available: 7,
                        },
                    ],
                },
            ],
        },
        // Additional hotels can be added here.
    ];
    try {
        await hotel_model_1.default.deleteMany(); // Remove existing hotel data
        await hotel_model_1.default.insertMany(hotels); // Insert new hotel data
        console.log("Data seeded successfully");
        process.exit(0);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
seedHotels();
