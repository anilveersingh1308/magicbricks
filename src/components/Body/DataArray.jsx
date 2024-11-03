import preview1 from '../../assets/preview-1.png'
import preview2 from '../../assets/preview-2.png'
import preview3 from '../../assets/preview-3.png'
import preview4 from '../../assets/preview-4.jpg'

export const search_Menu = ['Buy', 'Rent', 'New Projects', 'PG', 'Plot', 'Commercial', 'Post Free Property Ad'];

/*--------------------------------------------------------------- Serach Bar Type -------------------------------------------*/

export const type_Menu = [
    {
        property: 'Residential',
        type: ['Flat', 'House/Villa', 'Plot'],
        flat: ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'],
    },
    {
        property: 'Commercial',
        type: [
            'Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'
        ],
    },
    {
        property: 'Other Property Types',
        type: ['Agricultural Land', 'Form House'],
    },
];

/*------------------------------------------------------ Search Bar Budget --------------------------------------------------*/

export const budget = [
    {
        Head: 'Min Price',
        type: 'Min',
        range: [
            '₹5 Lac', '₹10 Lac', '₹20 Lac','₹30 Lac', '₹40 Lac', '₹50 Lac', '₹60 Lac', '₹70 Lac', '₹80 Lac', '₹90 Lac',
            '₹1 Cr', '₹1.2 Cr', '₹1.4 Cr', '₹1.6 Cr', '₹1.8 Cr', '₹2 Cr', '₹2.3 Cr', '₹2.6 Cr', '₹3 Cr', '₹3.5 Cr',
            '₹4 Cr', '₹4.5 Cr', '₹5 Cr', '₹10 Cr', '₹20 Cr',
        ],
    },
    {
        Head: "Max Price",
        type: "Max",
        range: [
            '₹5 Lac', '₹10 Lac', '₹20 Lac', '₹30 Lac', '₹40 Lac', '₹50 Lac', '₹60 Lac', '₹70 Lac', '₹80 Lac', '₹90 Lac',
            '₹1 Cr', '₹1.2 Cr', '₹1.4 Cr', '₹1.6 Cr', '₹1.8 Cr', '₹2 Cr', '₹2.3 Cr', '₹2.6 Cr', '₹3 Cr', '₹3.5 Cr', '₹4 Cr',
            '₹4.5 Cr', '₹5 Cr', '₹10 Cr', '₹20 Cr',
        ],
    },
];

/*------------------------------------------------- General Properties --------------------------------------------*/

import gn_prop1 from '../../assets/owner-property.webp'
import gn_prop2 from '../../assets/new-projects.webp'
import gn_prop3 from '../../assets/ready-to-move-in.webp'
import gn_prop4 from '../../assets/budget-homes.webp'

export const general_properties = [
    {
        property: gn_prop1,
        property_link: '/',
        near_property: [
            {
                property_count: '11773',
                type: 'Owner Properties',
                exp: 'Explore',
            }
        ]
    },
    {
        property: gn_prop2,
        property_link: '/',
        near_property: [
            {
                property_count: '332',
                type: 'Projects',
                exp: 'Explore',
            },
        ]
    },
    {
        property: gn_prop3,
        property_link: '/',
        near_property: [
            {
                property_count: '26391',
                type: 'Ready to move-in',
                exp: 'Explore',
            },
        ]
    },
    {
        property: gn_prop4,
        property_link: '/',
        near_property: [
            {
                property_count: '4111',
                type: 'Budget Homes',
                exp: 'Explore',
            },
        ]
    },
]

/*------------------------------------------------- Featured Properties----------------------------------------------*/
import fprop from '../../assets/pjs.jpg'
import flogo from '../../assets/pjs-logo.jpg'

export const f_property=[
    {
        p_img: fprop,
        p_logo: flogo,
        title: 'Northern Hills', price: '₹ 1.8 Cr',
        type: '2, 3 BHK Flats', cons: 'by N Rose Developers Pvt Ltd', loc: 'Dahisar East, Mumbai',
    }
]

/*------------------------------------------------- Popular Properties----------------------------------------------*/

import prop1 from '../../assets/prop-img1.jpg'
import prop2 from '../../assets/prop-img2.jpeg'
import prop3 from '../../assets/prop-img3.jpg'
import prop4 from '../../assets/prop-img4.jpg'
import prop5 from '../../assets/prop-img5.jpg'
import prop6 from '../../assets/prop-img6.jpeg'
import prop7 from '../../assets/prop-img7.jpg'
import prop8 from '../../assets/prop-img8.jpg'

export const property = [
    {
        prop_img: prop1,
        type: '4 BHK Flat',
        price: '₹2.50 Cr', divider: '|',
        prop_area: '2250 sqft',
        location: 'Sector 23 Rohini, New Delhi',
        status: 'Ready to Move',
    },
    {
        prop_img: prop2,
        type: '3 BHK Flat',
        price: '₹56 Lac',
        location: 'Uttam Nagar, New Delhi',
        status: 'Ready to Move',
    },
    {
        prop_img: prop3,
        type: '3 BHK Flat',
        price: '₹54 Lac', divider: '|',
        prop_area: '720 sqft',
        location: 'Uttam Nagar, New Delhi',
        status: 'Ready to Move',   
    },
    {
        prop_img: prop4,
        type: '3 BHK Flat',
        price: '₹1 Cr', divider: '|',
        prop_area: '1100 sqft',
        location: 'Shakti Nagar, New Delhi',
        status: 'Ready to Move',
    },
    {
        prop_img: prop5,
        type: '3 BHK Flat',
        price: '₹54 Lac', divider: '|',
        prop_area: '720 sqft',
        location: 'Uttam Nagar, New Delhi',
        status: 'Ready to Move',
    },
    {
        prop_img: prop6,
        type: '3 BHK Flat',
        price: '₹1.75 Cr', divider: '|',
        prop_area: '1665 sqft',
        location: 'Bhogal, Jangpura, New Delhi',
        status: 'Under Construct',
    },
    {
        prop_img: prop7,
        type: '4 BHK Flat',
        price: '₹5 Cr', divider: '|',
        prop_area: '2997 sqft',
        location: 'Block A Ashok Vihar, New Delhi',
        status: 'Ready to Move',
    },
    {
        prop_img: prop8,
        type: '2 BHK Flat',
        price: '₹2.50 Cr', divider: '|',
        prop_area: '1000 sqft',
        location: 'Lajpat Nagar 1, New Delhi',
        status: 'Ready to Move',
    },
];

/*------------------------------------------------------ MB Agents ---------------------------------------------*/

import mb_img1 from '../../assets/L1.jpg'
import mb_img2 from '../../assets/L2.jpg'
import mb_img3 from '../../assets/L3.jpg'
import mb_img4 from '../../assets/L4.jpg'
import mb_img5 from '../../assets/L5.jpg'
import mb_img6 from '../../assets/L6.png'
import mb_img7 from '../../assets/L7.jpg'
import mb_img8 from '../../assets/L8.jpg'
import agent_img1 from '../../assets/mb_agent1.jpg'
import agent_img2 from '../../assets/mb_agent2.jpg'
import agent_img3 from '../../assets/mb_agent3.jpg'
import agent_img4 from '../../assets/mb_agent4.jpg'
import agent_img5 from '../../assets/mb_agent5.jpg'
import agent_img6 from '../../assets/mb_agent6.jpg'
import agent_img7 from '../../assets/mb_agent7.jpg'
import agent_img8 from '../../assets/mb_agent8.jpeg'

export const agent = [
    {
        agent_img: agent_img1,
        name: 'Ravi Kumar',
        company: [
            {
                img: mb_img1,
                name: 'Paul Associate',
                year: '2001',
                emp: '1000+'
            }
        ],
        sale: '38',
        rent: '9',
        rating: null,
        rating_title: null,  
        operating_loc: 'Moti Nagar, Karol Bagh, Kirti Nagar, Karam Pura, Bijwasan',
        rent_range: '₹ 1.10 Cr - 23 Cr',
        sell_sange: '₹ 19,000 - 2.3 Lacs',
    },
    {
        agent_img: agent_img2,
        name: 'Kunal Gupta',
        company: [
            {
                img: mb_img2,
                name: 'Shri Builder Connector Pvt Ltd.',
                year: '2016',
                emp: '500+'
            }
        ],
        sale: '52',
        rent: '4',
        rating: null,
        rating_title: null,  
        operating_loc: 'Uttam Nagar, Uttam Nagar East, Nawada, Om Vihar, Dwarka Mor, Uttam Nagar West',
        rent_range: '₹ 14 Lacs - 66 Lacs',
        sell_sange: null,
    },
    {
        agent_img: agent_img3,
        name: 'Ashok Singh',
        company: [
            {
                img: mb_img3,
                name: 'Global Property',
                year: '1992',
                emp: '1000+'
            }
        ],
        sale: '50',
        rent: null,
        rent_title: null,
        rating: null,
        rating_title: null,  
        operating_loc: 'Greater Kailash 1, Vasant Vihar, Neeti Bagh, Shanti Niketan, Defence Colony, Greater Kailash 2, Greater Kailash Part 3, East Of Kailash, Gulmohar Park, Pamposh Enclave, Kailash Colony, Jangpura Extension, Anand Lok, Safdarjung Development Area, Greater Kailash Enclave 1, West End Colony, Block E Greater Kailash 2, Panchsheel Park, Hauz Khas, Greater Kailash Enclave 2, Green Park, Hauz Khas Enclave, New Friends Colony, Hemkunt Colony, Chirag Enclave, Masjid Moth, Anand Niketan, Jangpura A, D Block East of Kailash',
        rent_range: '₹ 4.25 Cr - 28 Cr',
        sell_sange: '₹ 1.1 Lacs - 7 Lacs',
    },
    {
        agent_img: agent_img4,
        name: 'Smith Sharing',
        company: [
            {
                img: mb_img4,
                name: 'Sharing Real Estate',
                year: '2014',
                emp: '2500+'
            }
        ],
        sale: '44',
        rent: '29',
        rating: null,
        rating_title: null,  
        operating_loc: 'Sector 6 Dwarka, Sector 7 Dwarka, Block A Sector 12 Dwarka, Sector 10 Dwarka, Sector 22 Dwarka, Sector 18 Dwarka, Dwarka Sector 9, Sector 5 Dwarka, Sector 12 Dwarka, Dwarka Sector 3, Sector 23 Dwarka, Pocket A Sector 13 Dwarka, Block A Mahavir Enclave, Mahavir Enclave Part 1, Block A Mahavir Enclave Part 1, Sector 11 Dwarka, Sector 4 Dwarka, Sector 19 Dwarka, Sector 13 Dwarka, Dwarka, Sector 17 Dwarka, Block B Vijay Enclave, Pocket 7 Sector 12 Dwarka, Palam Extension, Mahavir Enclave, Sector 2 Dwarka, Pocket 2 Sector 6 Dwarka, Sector 8 Dwarka, Pocket 2 Dwarka Sector 9',
        rent_range: '₹ 21 Lacs - 5.85 Cr',
        sell_sange: null,
    },
    {
        agent_img: agent_img5,
        name: 'Paras Bhardwaj',
        company: [
            {
                img: mb_img5,
                name: 'Sai Darshan Estate',
                year: null,
                emp: '2000+'
            }
        ],
        sale: '47',
        rent: '5',
        rating: '4',
        rating_title: 'CRISIL Rating',      
        operating_loc: 'Sector 10 Dwarka, Sector 2 Dwarka, Sector 6 Dwarka, Sector 11 Dwarka, Dwarka, Sector 5 Dwarka, Sector 12 Dwarka, Sector 19 Dwarka, Dwarka Sector 9, Sector 4 Dwarka, Sector 18 Dwarka, Sector 22 Dwarka, Sector 18A Dwarka, Sector 13 Dwarka, Sector 7 Dwarka',
        rent_range: '₹ 1.84 Cr - 4.25 Cr',
        sell_sange: null,        
    },
    {
        agent_img: agent_img6,
        name: 'Ramesh Tripathi',
        company: [
            {
                img: mb_img6,
                name: 'Awadh Purvanchal Real Estate',
                year: '2012',
                emp: '2000+'
            }
        ],
        sale: '43',
        rent: null,
        rent_title: null,
        rating: null,
        rating_title: null,        
        operating_loc: 'Sector 19 Dwarka, Dwarka, Sector 12 Dwarka,  Sector 10 Dwarka, Sector 5 Dwarka, Sector 18 Dwarka, Sector 2 Dwarka, Sector 22 Dwarka, Dwarka Sector 9, Pocket A2 Sector 17 Dwarka, Sector 23 Dwarka, Sector 11 Dwarka, Sector 4 Dwarka, Dwarka Sector 3, Sector 13 Dwarka, Sector 6 Dwarka',
        rent_range: '₹ 2.10 Cr - 4.38 Cr',
        sell_sange: '₹ 41,000 - 50,000',
    },
    {
        agent_img: agent_img7,
        name: 'Vishal Soni',
        company: [
            {
                img: mb_img7,
                name: 'Om Documentation & Associates',
                year: '2010',
                emp: '5500+'
            }
        ],
        sale: '50',
        rent: null,
        rent_title: null,
        rating: '3',
        rating_title: 'CRISIL Rating',        
        operating_loc: 'Moti Nagar, New Moti Nagar, Sector 19B Dwarka, Lowrence Road',
        rent_range: '₹ 37.5 Lacs - 120 Cr',
        sell_sange: '₹ 24,000 - 55,000',
    },
    {
        agent_img: agent_img8,
        name: 'Harveen Singh Sethi',
        company: [
            {
                img: mb_img8,
                name: 'Global Realitiez',
                year: 'Operating Since2012',
                emp: '1000+'
            }
        ],
        sale: '98',
        rent: '3',
        rating: null,
        rating_title: null,
        operating_loc: 'Malviya Nagar, Nehru Enclave Chittaranjan Park, Hauz Khas',
        rent_range: '₹ 1.30 Cr - 9 Cr',
        sell_sange: '₹ 32,000 - 40,000',
    },
];

/*---------------------------------------------- Property Services ------------------------------------------------------*/

import sr1 from '../../assets/service1.webp'
import sr2 from '../../assets/service2.jpg'

export const service = [
    {
        service_img: sr1,
        head: 'Best Home loan Deals', 
        body: 'Compare & choose from 34+ banks to get the best home loan deal'
    },
    {
        service_img: sr2,
        head: 'Home Interiors', 
        body: 'Transform your place with our trusted decor partners'
    },
];

/*------------------------------------------------- Featured Properties----------------------------------------------*/
import tprop from '../../assets/tpj.jpg'

export const t_property=[
    {
        p_img: tprop,
        title: 'Bellanza Phase 1 Wing A B...', price: '₹ 1.51 Cr',
        type: '2, 3 BHK Flats', cons: 'by The Prestige Group', loc: 'Mulund West, Mumbai', ads: 'by Uptown Spaces',
    }
]


/*----------------------------------------------- Projects Gallery -------------------------------------------------------*/

import gImg1 from '../../assets/pj1.jpg'
import gImg2 from '../../assets/pj2.jpg'
import gImg3 from '../../assets/pj3.jpg'
import gImg4 from '../../assets/pj4.jpg'
import gImg5 from '../../assets/pj5.jpg'
import gImg6 from '../../assets/pj6.jpg'
import gImg7 from '../../assets/pj7.jpg'
import gImg8 from '../../assets/pj8.jpg'

export const project = [
    {
        pj_img: gImg1,
        title: 'Kanakia Silicon Valley',
        cons: 'Kanakia Spaces Realty Pvt Ltd',
        loc: 'Powai',
        type: '2,3 BHK Flats',
        price: '₹ 2.29 Cr',
        ads: 'Uniq Consultancy',
    },
    {
        pj_img: gImg2,
        title: 'Jiten CHS',
        cons: 'NICCO',
        loc: 'Andheri West',
        type: '1,2 BHK Flats',
        price: '₹ 1.25 Cr',
        ads: 'Nicco',
    },
    {
        pj_img: gImg3,
        title: 'Om Mayuresh',
        cons: 'NICCO',
        loc: 'Mulund East',
        type: '1,2,3 BHK Flats',
        price: '₹ 1.12 Cr',
        ads: 'NICCO',
    },
    {
        pj_img: gImg4,
        title: 'Island Cove',
        cons: 'L & T Realty',
        loc: 'Mahim',
        type: '2,3 BHK Flats',
        price: '₹ 3.36 Cr',
        ads: 'Extra Realty Pvt Ltd',
    },
    {
        pj_img: gImg5,
        title: 'Mahant Sahyadsree',
        cons: 'Mahant Constructions LLP',
        loc: 'Goregaon East',
        type: '1, 2, 3, 4, 5 BHK Flats',
        price: '₹ 1.11 Cr',
        ads: 'Mahant Constructions...',
    },
    {
        pj_img: gImg6,
        title: 'Satre Happynest',
        cons: 'Satre Constructions LLP',
        loc: 'Kanjurmarg East',
        type: '1, 2 BHK Flats',
        price: '₹ 87.1 Lac',
        ads: 'Satre Constructions LLP',
    },
    {
        pj_img: gImg7,
        title: 'Rejuve 360',
        cons: 'L&T Realty',
        loc: 'Mulund West',
        type: '2, 3, 4 BHK Flats',
        price: '₹ 1.93 Cr',
        ads: 'UPTOWN SPACES',
    },
    {
        pj_img: gImg8,
        title: 'NICCO Residency',
        cons: 'Neelkamal Realty & Constructi...',
        loc: 'Jogeshwari East',
        type: '2,3, 4 BHK Flats',
        price: '₹ 2 Cr',
        ads: 'Neelkamal Realty & Con...',
    },
];


export const snap= [
    {
        ext: 'A home to about 20 million People, New Delhi is the entertainment capital of India. Also known as Bombay and being the financial capital of India this city is a destination for many big events and activities throughout the year. The number of people who visit New Delhi is countless and so as the number of people who migrate to New Delhi. This recent shift leads to the rising demand for residential homes in New Delhi and commercial spaces in New Delhi. Finding a ',
        ext_next: ' perfect flat for rent or sale in New Delhi is tougher than getting a job in this city. This increasing demand for a house in New Delhi has invited several big builders to come up with affordable housing solution in New Delhi. From plethora of job options to better lifestyle, you will take time to find your flat in New Delhi. With Magicbricks you can make this journey easy as there are a number of residential projects in New Delhi whose details are easily accessible on the portal. New Delhi is known for its nightlife and secure environment and therefore it is considered to be the safest place to live in India. Describing every locality is bit difficult but suggesting the top localities for residential homes in New Delhi is an easy task. Some of the well-known localities in New Delhi for the residential purpose are Bandra, Goregaon, Andheri, Navi New Delhi, Juhu, Powai, South New Delhi, Worli Chembur and Lower Parel, where you will find lavishly designed apartments for sale or rent, luxurious villas and bungalows, commercial spaces for offices in New Delhi.',
        desig: [
            {count: '1747+', value: 'Low Budget Flats in New Delhi'},
            {count: '87951+', value: 'Properties for Sale in New Delhi',},
            {count: '292+', value: 'Residencial Property Agents in New Delhi',},
            {count: '66545+', value: 'Residencial Projects in New Delhi',},
        ]
    }
]

export const residence = [
    {
        id : '1',
        city : 'Banglore',
        sub_cities : [
            "Sobha Dream Acres", "Prestige Lakeside Habitat", "Prestige Shantiniketan", "Prestige Falcon City",
            "Adarsh Palm Retreat", "Godrej Splendour", "Sobha Windsor", "Sobha City", "Prestige Golfshire",
            "SNN Clermont", "Prestige Jindal City", "Brigade Eldorado", "Sumadhura Eden Garden", "Sobha Royal Pavilion", 
            "SNN Raj Serenity", "Purva Palm Beach", "Prestige Lake Ridge", "Prestige Ferns Residency", "Godrej Ananda",
            "Adarsh Palm Retreat", "Brigade Lakefront", "Bhartiya City Nikoo Homes", "TATA Promont", "SNN Raj Etternia",
        ]
    },
    {
        id : '2',
        city : 'Mumbai', 
        sub_cities : [
            "Vasant Oasis", "Royal Palms", "Highland Park", "Spring Field", "Omkar 1973", "Sea Bird", "Rustomjee Paramount",
            "Runwal Greens", "Maitri Park", "Lodha Altamount", "Imperial Heights", "Auris Serenity", "Runwal Forests", 
            "Palais Royale", "One Avighna Park", "Nathani Heights", "Nahar Amrit Shakti", "Lodha World Towers", "Hiranandani Gardens",
            "Ekta Nagar", "Bhakti Park", "Ave Maria", "4th Avenue", "Sunteck Naigaon",
        ],
    },
    {
        id : '3',
        city : 'Pune', 
        sub_cities : [
            "Park Street", "Palm Atlantis", "Lodha Belmondo", "Kundlika Valley", "Zinnia Elegans", "Dream Homes", "Pride World City", "Lake Town",
            "Rohan Abhilasha", "Panchshil Towers", "Kolte Patil Life Republic", "Kendriya Vihar", "Xrbia Hinjewadi", "Spring Meadows", 
            "Spine City Mall", "VTP Blue Waters", "Nyati Elysia", "Gagan Vihar", "Blue Ridge", "Vaarivana", "Windermere", "Technopolis", 
            "Rose Valley", "SP Infocity",
        ],
    },
    {
        id : '4',
        city : 'Hyderabad', 
        sub_cities : [
            "My Home Bhooja", "My Home Avatar", "Galaxy Apartments", "Whistling Woods", "Rainbow Vistas", "Prestige High Fields", "My Home Vihanga", 
            "Lanco Hills", "Rajapushpa Provincia", "PBEL City", "Aparna Serene Park", "My Home Mangala", "Mantri Celestia", "Jal Vayu Vihar", 
            "Aliens Space Station", "Vasavi Urban", "Sumadhura Acropolis", "SMR Vinay Iconia", "My Home Krishe", "Rajapushpa Atria", "My Home Jewel", 
            "Vessella Meadows", "Vaishnavi Oasis", "Ramky Towers", 
        ],
    },
    {
        id : '5',
        city : 'Noida', 
        sub_cities : [
            "Mahagun Mywoods", "Gaur City 2", "Cleo County", "Panchsheel Greens", "Godrej Woods", "Amrapali Sapphire", "Supertech Eco Village 1", 
            "Nirala Estate", "Mahagun Moderne", "Krishna Apartment", "ACE Divino", "Supertech Capetown", "Supertech Emerald Court", "Supernova Spira",
            "Paras Tierea", "Panchsheel Greens 2", "PAN Oasis", "Lotus Boulevard", "Jalvayu Towers", "Gulshan Ikebana", "Fusion Homes", "Golf City",
            "ATS One Hamlet", "Supertech Supernova", 
        ],
    },
    {
        id : '6',
        city : 'Gurgaon', 
        sub_cities : [
            "Vatika City", "Chintels Paradiso", "Galaxy Apartment", "M3M Golf Estate", "Parsvnath Exotica", "DLF Camellias", "Birds Eye View", 
            "The Retreat", "Tata Primanti", "Mapsko Mount Ville", "DLF The Ultima", "Tatvam Villas", "Malibu Town", "Mahindra Luminare", 
            "M3M Woodshire", "M3M Merlin", "M3M Marina", "Ireo Victory Valley", "Park View Apartment", "Orchid Petals", "IREO Skyon", "Emaar Palm Hills", 
            "DLF Skycourt", "DLF Magnolias", 
        ],
    },
    {
        id : '7',
        city : 'Kolkata',
        sub_cities : [
            "Mega City", "Elita Garden Vista", "Dream City", "Balaji Enclave", "Balaji Residency", "Urbana", "Southwinds", "Sunrise Point", 
            "Windmere", "Embassy Boulevard", "Siddha Galaxia", "Krishna Kunj", "Hiland Park", "Godrej Prakriti", "DTC Southern Heights", 
            "Balaji Apartment", "Chitrakut Dham", "The 42 Kolkata", "South City", "Surya Heights", "Flora Fountain", "Uniworld City", "Greenfield City", "Emami City",
        ],
    },
    {
        id : '8',
        city : 'Chennai',
        sub_cities : [
            "House of Hiranandani", "Sree Krishna", "Prestige Bella Vista", "Kosmo One", "DLF Gardencity", "Casagrand Zenith", "Casagrand First city", 
            "Casagrand Athens", "Purva Windermere", "Brigade Xanadu", "Prestige Courtyards", "Platinum City", "Osian Chlorophyll", "Mayfair Apartments", 
            "Mahalakshmi Nagar", "KG Signature City", "Alliance Orchid Springs", "VGN Stafford", "TVS Emerald Green Enclave", "Swarnabhoomi", 
            "Sunshine Apartments", "Sobha Winchester", "Olympia Opaline", "Kings Court", 
        ],
    },
    {
        id : '9',
        city : 'Thane', 
        sub_cities : [
            "Lodha Amara", "Lodha Splendora", "Regency Anantam", "Runwal Gardens", "Lodha Palava", "Sai Residency", "Rustomjee Urbania", 
            "Bella Vista", 'Lodha Palava City', "Lodha Crown", "Green Woods", "Runwal Eirene", "Dosti West County", "Piramal Vaikunth", 
            "Park View", "One Hiranandani Park", "Lodha Sterling", "Vasant Valley", "Krishna Complex", "Regency Antilia", "Marathon Nexworld", 
            "Jasmine Tower", "Kalpataru Paramount",
        ],
    },
    {
        id : '10',
        city : 'Ahmedabad',
        sub_cities : [
            "Godrej Garden City", "Adani Shantigram", "Ananta", "Super City", "Suryam Repose", "Saujanya", "Iscon Platinum", "Riverfront Flower Park",
            "Suramya Abode", "Kalhaar Blues and Greens", "Glade One", "Iscon Mega Mall", "Swaminarayan City", "Royal Homes", "Basant Bahar", 
            "Prestige Tower", "Vinayak Residency", "Swati Parkside", "Suramya Lifespace", "Serenity Meadows", "Sun Solace", "Sentossa Greenland", 
            "Ganesh Genesis", "Casa Vyoma",
        ],
    },
];

export const blogs = [
    {
        id : '1',
        title : 'Govt Portals',
        sub_title : [
            'IGRS AP', 'IGRS Rajasthan', 'IGRS Jharkhand', 'MPIGR', 'TNREGINET', 'TSMDC', 'EPFO UAN Login', 'IGR Maharashtra', 'IGRS Telangana', 'IGRS Bihar', 'IGRSUP',
        ],
    },
    {
        id : '2',
        title : 'Celebrity Homes',
        sub_title : [
            'Mukesh Ambani House Antilia', 'Mannat - Shahrukh Khan House', 'Pataudi Palace', 'Salman Khan House', 'Alia Bhatt House', 'Virat Kohli House',
            'MS Dhoni Farm House', 'Ajay Devgan House', 'Hrithik Roshan House', 'Amitabh Bachchan House', 'Gautam Adani House', 'Sachin Tendulkar House',
        ],
    },
    {
        id : '3',
        title : 'Home Decor',
        sub_title : [
            'Two Colour Combination for Bedroom Walls', 'Two Colour Combination for Living Room', 'Pink Two Colour Combination for Bedroom Walls',
            'Orange Two Colour Combination for Bedroom Walls', 'Pop Design', 'Plus Minus Pop Design', 'Pop Design for Hall', 'Kitchen Designs', 
            'Bathroom Designs', 'Griha Pravesh Muhurat 2022',
        ],
    },
    {
        id : '4',
        title : 'Visual Stories',
        sub_title : [
            'Bathroom Design Ideas', 'Monsoon-proof Decor Tips', 'Top Office Buildings in India', 'Name Plate Vastu Ideas', 'Vastu Approved Pets',
            'Feng Shui Secret to Attract Money', 'Dinning Room Vastu Tips', 'Mukesh Ambani House', 'Samruddhi Mahamarg', 'Gautam Adani House', 'Vastu Shastra Ideas'
        ],
    },
    {
        id : '5',
        title : 'Land Records',
        sub_title : [
            '7 12 Mahabhulekh', 'Bhoomi Online: Karnataka Land Records', 'UP Bhulekh', 'Bihar Bhulekh', 'Patta Chitta', 'Meebhoomi', 'Jharbhoomi',
            'Jamabandi Punjab', 'Jamabandi Haryana', 'Banglarbhumi', 'AnyROR Gujarat', 'Apna Khata Rajasthan',
        ],
    },
    {
        id : '6',
        title : 'Housing Scheme',
        sub_title : [
            'MHADA Lottery Pune', 'MHADA Lottery 2022', 'DDA Housing Scheme', 'CIDCO Lottery', 'RGRHCL', 'APSHCL', 
        ],
    },
    {
        id : '7',
        title : 'RERA',
        sub_title : [
            'UP RERA', 'RERA Act', 'RERA Registration Process', 'RERA Gujarat', 'RERA Karnataka', 'RERA Kerala', 'RERA MP', 'RERA Odisha', 'RERA Bihar', 'RERA Goa',
        ],
    },
    {
        id : '8',
        title : 'Stamp Duty',
        sub_title : [
            'Stamp Duty in Telangana', 'Stamp Duty in Punjab', 'Stamp Duty in Maharashtra', 'Stamp Duty in UP', 'Stamp Duty in MP', 
            'Stamp Duty in Delhi', 'Stamp Duty in Tamil Nadu', 'Stamp Duty in West Bengal', 'Stamp Duty in Gujarat', 'Stamp Duty in Haryana',
            'Stamp Duty in Rajasthan',
        ],
    },
    {
        id : '9',
        title : 'Home Loan',
        sub_title : [
            'Home Loan Online', 'Home Loan Eligibility Calculator', 'Home Loan EMI Calculator', 'Home Loan Prepayment Calculator', 
            'Home Loan Required Documents', 'Home Loan Balance Transfer', 'Home Loan Interest Rate', 
        ],
    },
    {
        id : '10',
        title : 'PMAY', 
        sub_title : [
            'Pradhan Mantri Awas Yojana', 'Pradhan Mantri Awas Yojana Gramin', 'Pradhan Mantri Awas Yojana Urban', 'Documents required for PMAY',
            'Pradhan Mantri Awas Yojana Eligibility', 'Pradhan Mantri Awas Yojana Online Form','PMAY Subsidy Status', 'PMAY Gramin List',
            'PMAY List', 'PMAY Urban List',
        ],
    },
    {
        id : '11',
        title : 'Metro Projects',
        sub_title : [
            'Delhi Metro', 'Mumbai Metro', 'Namma Metro Bangalore', 'Kolkata Metro', 'Chennai Metro',
        ],
    },
    {
        id : '12',
        title : 'Interior Visuals',
        sub_title : [
            'Interior Design Tips', 'Wooden Bathroom Design', 'Stainless-steel Door Locks', 'Easy Rangoli Design', 'Wooden Door Handle Design', 
            'Bedroom Side Table Design', 'Sliding Wardrobe Design', 'Red Kitchen Design', 'Bathroom Cupboard Design', 'Green Kitchen Design', 
            'Red White Kitchen Design', 'Duplex House Design',
        ],
    },
    {
        id : '13',
        title : 'Circle Rates',
        sub_title : [
            'Circle Rate in Delhi', 'Circle Rate in NOIDA', 'Circle Rate in Gurgaon', 'Circle Rates in Ghaziabad', 'Circle Rates in Lucknow', 
            'Circle Rate in Hyderabad', 'Circle Rate in Pune',
        ],
    },
    {
        id : '14',
        title : 'Property Tax', 
        sub_title : [
            'BBMP Property Tax Bangalore', 'GHMC Property Tax Hyderabad', 'Pune Property Tax', 'MCD Property Tax Delhi', 'MCG Property Tax Gurgaon',
            'Ahmedabad Municipal Corporation Property Tax', 'PCMC Property Tax', 'Chennai Property Tax', 'Pune Property Tax', 'MCGM Property Tax BMC Mumbai',
        ],
    },
];

export const areaCalc = [
    'Square feet to Square Meter', 'Square Meter to Square Feet', 'Hectare to Acre', 'Square feet to Square Yard', 'Are to Square Feet',
    'Square Meter to Square Feet', 'Hectare to Feet', 'Cent to Square Feet', 'HEctare to Square Feet', 'Square Feet to Square Yard',
    'Acre to Hectare', 'Cent to Square Feet', 'Square Feet to Gaj', 'Acre to Square Meter', 'Hectare to Bigha', 'Acre to Bigha',
    'Square Yard to Swuare Meter', 'Square Meter to Square Yard', 'Acre to Square Yard', 'Bigha to Square Feet', 'Bigha to Acre', 
    'Bigha to Hectare', 'Bigha to Gaj', 'Katha Square Feet', 'Meter to Feet', 'Feet to Meter', 'Inches to CM', 'MM to Inches', 
    'CM to Feet', 'Square Feet to Square Yaard', 'Bigha to Biswa', 'Biswa to Square Feet', 
];

export const propOptionsCities = [
    {
        id: '1',
        type: 'Buy',
        subType: [
            {
                category: 'Popular Residential Searches',
                subCategory: [
                    'Property for Sale in Mumbai', 'Flats in Mumbai', 'Studio Apartments in Mumbai', 'Resale House in Mumbai', 'House for Sale in Mumbai', 
                    'Villas for Sale in Mumbai', 'Penthouse in Mumbai', 'Ready To Move Flats in Mumbai', 'Resale Flats in Mumbai', 
                ],
            },
            {
                category: 'Popular BHK Searches',
                subCategory: [
                    '1 BHK Flats in Mumbai', '2 BHK Flats in Mumbai', '3 BHK Flats in Mumbai', '4 BHK Flats in Mumbai', '1 BHK House for Sale in Mumbai', 
                    '2 BHK House for Sale in Mumbai', '3 BHK House for Sale in Mumbai', '4 BHK House for Sale in Mumbai', '1 BHK Villa for Sale in Mumbai',
                    '2 BHK Villa for Sale in Mumbai', '3 BHK Villa for Sale in Mumbai', '4 BHK Villa for Sale in Mumbai',
                ],
            },
            {
                category: 'Popular Flat Searches',
                subCategory: [
                    'Flats for Sale in Andheri East', 'Flats for Sale in Chembur', 'Flats for Sale in Borivali West', 'Flats for Sale in Virar West', 
                    'Flats for Sale in Kandivali West', 'Flats for Sale in Bandra West', 'Flats for Sale in Goregaon West', 'Flats for Sale in Goregaon East', 
                    'Flats for Sale in Andheri West',
                ],
            },
            {
                category: 'Popular House Searches',
                subCategory: [
                    'House for Sale in Bandra West', 'House for Sale in Chembur', 'House for Sale in Andheri West', 'House for Sale in Borivali West',
                    'House for Sale in Virar', 'House for Sale in Malad West', 'House for Sale in Juhu', 'House for Sale in Andheri East', 'House for Sale in Vasai',
                ],
            },
            {
                category: 'Popular Property Searches',
                subCategory: [
                    'Property for Sale in Andheri West', 'Property for Sale in Chembur', 'Property for Sale in Goregaon East', 'Property for Sale in Borivali West',
                    'Property for Sale in Kandivali West', 'Property for Sale in Malad West', 'Property for Sale in Andheri East', 'Property for Sale in Goregaon West', 
                    'Property for Sale in Virar West', 
                ],
            }, 
            {
                category: 'Popular Plot Searches',
                subCategory: [
                    'Plots for Sale in Vasai', 'Plots for Sale in Virar', 'Plots for Sale in Andheri East', 'Plots for Sale in Virar West', 
                    'Plots for Sale in Bandra West',
                ],
            }, 
            {
                category: 'Popular Commercial Searches',
                subCategory: [
                    'Commercial Property for Sale in Mumbai', 'Office Space for Sale in Mumbai', 'Shops for Sale in Mumbai', 'Showroom for Sale in Mumbai',
                    'Commercial Land for Sale in Mumbai', 'Industrial Land for Sale in Mumbai', 'Agricultural Land for Sale in Mumbai', 
                ],
            }, 
            {
                category: 'Popular Commercial Locality',
                subCategory: [
                    'Commercial Property in Western Express Highway', 'Commercial Property in Swami Vivekanand Road', 'Commercial Property in New Link Road', 
                    'Commercial Property in CD Barfiwala Road', 'Commercial Property in Andheri', 'Commercial Property in Jogeshwari Vikhroli Link Road', 
                    'Commercial Property in Sahar Road', 'Commercial Property in Saki Vihar Road', 'Commercial Property in Andheri Kurla Road', 'Commercial Property in Marve Road ',
                ],
            },
            {
                category: 'Popular Luxury Searches',
                subCategory: [
                    'Luxury Houses in Mumbai', 'Luxury Villas in Mumbai', 'Luxury Bungalows in Mumbai', 
                ],
            },
            {
                category: 'Property Near Me',
                subCategory: [
                    'Flats for sale near me', 'Houses for sale near me', 'Plots for sale near me', 'Villa for sale near me', 'Property for sale near me',
                ],
            },
            {
                category: 'Real Estate India',
                subCategory: [
                    'House in India', 'Apartment in India', 'Villas in India', 'Pent House in India', 'Land in India', 'Property in India', 
                    'Flats in India', 'Agriculture Land in India', 'Farm House in India', 
                ],
            },
            {
                category: 'New Project Searches',
                subCategory: [
                    'New Projects in Andheri East', 'New Projects in Chembur', 'New Projects in Borivali West', 'New Projects in Virar West', 
                    'New Projects in Kandivali West', 'New Projects in Bandra West', 'New Projects in Goregaon West', 'New Projects in Mira Road', 
                    'New Projects in Goregaon East', 'New Projects in Andheri West', 
                ],
            },            
        ],
        
    },
    {
        id: '2',
        type: 'Rent',
        subType: [
            {
                category: 'Popular Rental Searches',
                subCategory: [
                    'Property for Rent in Mumbai', 'Flats for Rent in Mumbai', 'Coworking space in Mumbai', 'Studio Apartments for Rent in Mumbai',
                    'Hostels in Mumbai', 'Single Room for Rent in Mumbai', 'House for Lease in Mumbai', 'Fully Furnished Flat for Rent in Mumbai',
                    'House for Rent in Mumbai', 'Studio Apartment for Rent in Mumbai', 'Villa for Rent in Mumbai', 'PG in Mumbai', 'Service Apartments in Mumbai',
                ],
            },
            {
                category: 'Popular BHK Searches',
                subCategory: [
                    '1 BHK Flats for Rent in Mumbai', '2 BHK Flats for Rent in Mumbai', '3 BHK Flats for Rent in Mumbai', '4 BHK Flats for Rent in Mumbai', '1 BHK House for Rent in Mumbai', 
                    '2 BHK House for Rent in Mumbai', '3 BHK House for Rent in Mumbai', '4 BHK House for Rent in Mumbai', '1 BHK Villa for Rent in Mumbai',
                    '2 BHK Villa for Rent in Mumbai', '3 BHK Villa for Rent in Mumbai', '4 BHK Villa for Rent in Mumbai',
                ],
            },
            {
                category: 'Popular Flat Searches',
                subCategory: [
                    'Flats for Rent in Andheri East', 'Flats for Rent in Chembur', 'Flats for Rent in Borivali West', 'Flats for Rent in Virar West', 
                    'Flats for Rent in Kandivali West', 'Flats for Rent in Bandra West', 'Flats for Rent in Goregaon West', 'Flats for Rent in Goregaon East', 
                    'Flats for Rent in Andheri West',
                ],
            },
            {
                category: 'Popular House Searches',
                subCategory: [
                    'House for Rent in Bandra West', 'House for Rent in Chembur', 'House for Rent in Andheri West', 'House for Rent in Borivali West',
                    'House for Rent in Virar', 'House for Rent in Malad West', 'House for Rent in Juhu', 'House for Rent in Andheri East', 'House for Rent in Vasai',
                ],
            },
            {
                category: 'Popular Property Searches',
                subCategory: [
                    'Property for Rent in Vasai West', 'Property for Rent in Bhandup West', 'Property for Rent in Ulhasnagar', 'Property for Rent in Mumbai CST Area',
                    'Property for Rent in Kurla West', 'Property for Rent in Goregaon East', 'Property for Rent in Borivali West', 'Property for Rent in Andheri West',
                ],
            }, 
            {
                category: 'Popular Commercial Locality',
                subCategory: [
                    'Commercial Property for Rent in Western Express Highway', 'Commercial Property for Rent in CD Barfiwala Road', 'Commercial Property for Rent in Andheri',
                    'Commercial Property for Rent in Jogeshwari Vikhroli Link Road', 'Commercial Property for Rent in Swami Vivekanand Road', 'Commercial Property for Rent in Saki Vihar Road',
                    'Commercial Property for Rent in Andheri Kurla Road', 'Commercial Property for Rent in Sahar Road', 'Commercial Property for Rent in Teli G',
                ],
            }, 
            {
                category: 'Popular Commercial Searches',
                subCategory: [
                    'Commercial Property for Rent in Mumbai', 'Office Space for Rent in Mumbai', 'Shops for Rent in Mumbai', 'Showroom for Rent in Mumbai',
                    'Commercial Land for Rent in Mumbai', 'Industrial Land for Rent in Mumbai', 'Agricultural Land for Rent in Mumbai', 
                ],
            }, 
            {
                category: 'Popular PG Locality',
                subCategory: [
                    'PG in Western Express Highway', 'PG in Swami Vivekanand Road', 'PG in New Link Road', 
                    'PG in CD Barfiwala Road', 'PG in Andheri', 'PG in Jogeshwari Vikhroli Link Road', 
                    'PG in Sahar Road', 'PG in Saki Vihar Road', 'PG in Andheri Kurla Road', 'PG in Marve Road ',
                ],
            },
            {
                category: 'Property Near Me',
                subCategory: [
                    'Flats for rent near me', 'Houses for rent near me', 'Plots for rent near me', 'Villa for rent near me', 'Property for rent near me',
                ],
            },        
        ],
        
    },
]