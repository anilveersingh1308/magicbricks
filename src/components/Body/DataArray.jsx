import preview1 from '../../assets/preview-1.png'
import preview2 from '../../assets/preview-2.png'
import preview3 from '../../assets/preview-3.png'
import preview4 from '../../assets/preview-4.jpg'

export const search_Menu = ['Buy', 'Rent', 'New Projects', 'PG', 'Plot', 'Commercial', 'Post Free Property Ad'];
export const img_preview = [
    {
        img1: [
            {
                id: 1, thumbnail: preview1, alt: 'Image 1'
            },
            {
                id: 2, thumbnail: preview2, alt: 'Image 2',
            },
            {
                id: 3, thumbnail: preview3, alt: 'Image 3,'
            },
            {
                id: 4, thumbnail: preview4, alt: 'Image 4'
            },
        ],
    },    
     
];

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

export const agent = [
    {
        co: 'MB Preferred',
        name: 'Ravi Kumar',
        company: [
            {
                name: 'Paul Associate',
                year: 'Operating Since 2001',
                emp: 'Buyers Served 1000+'
            }
        ],
        sale: '38',
        sale_title: 'Properties for Sale',
        rent: '9',
        rent_title: 'Properties for Rent',
        rating: null,
        rating_title: null,
    },
    {
        co: 'MB Preferred',
        name: 'Kunal Gupta',
        company: [
            {
                name: 'Shri Builder Connector Pvt Ltd.',
                year: 'Operating Since 2016',
                emp: 'Buyers Served 500+'
            }
        ],
        sale: '52',
        sale_title: 'Properties for Sale',
        rent: '4',
        rent_title: 'Properties for Rent',
        rating: null,
        rating_title: null,
    },
    {
        co: 'MB Preferred',
        name: 'Ashok Singh',
        company: [
            {
                name: 'Global Property',
                year: 'Operating Since 1992',
                emp: 'Buyers Served 1000+'
            }
        ],
        sale: '50',
        sale_title: 'Properties for Sale',
        rent: null,
        rent_title: null,
        rating: null,
        rating_title: null,
    },
    {
        co: 'MB Preferred',
        name: 'Smith Sharing',
        company: [
            {
                name: 'Sharing Real Estate',
                year: 'Operating Since 2014',
                emp: 'Buyers Served 2500+'
            }
        ],
        sale: '44',
        sale_title: 'Properties for Sale',
        rent: '29',
        rent_title: 'Properties for Rent',
        rating: null,
        rating_title: null,
    },
    {
        co: 'MB Preferred',
        name: 'Paras Bhardwaj',
        company: [
            {
                name: 'Sai Darshan Estate',
                year: null,
                emp: 'Buyers Served 2000+'
            }
        ],
        sale: '47',
        sale_title: 'Properties for Sale',
        rent: '5',
        rent_title: 'Properties for Rent',
        rating: '4',
        rating_title: 'CRISIL Rating',
    },
    {
        co: 'MB Preferred',
        name: 'Ramesh Tripathi',
        company: [
            {
                name: 'Awadh Purvanchal Real Estate',
                year: 'Operating Since 2012',
                emp: 'Buyers Served 2000+'
            }
        ],
        sale: '43',
        sale_title: 'Properties for Sale',
        rent: null,
        rent_title: null,
        rating: null,
        rating_title: null,
    },
    {
        co: 'MB Preferred',
        name: 'Vishal Soni',
        company: [
            {
                name: 'Om Documentation & Associates',
                year: 'Operating Since 2010',
                emp: 'Buyers Served 5500+'
            }
        ],
        sale: '50',
        sale_title: 'Properties for Sale',
        rent: null,
        rent_title: null,
        rating: '3',
        rating_title: 'CRISIL Rating',
    },
    {
        co: 'MB Preferred',
        name: 'Harveen Singh Sethi',
        company: [
            {
                name: 'Global Realitiez',
                year: 'Operating Since2012',
                emp: 'Buyers Served 1000+'
            }
        ],
        sale: '98',
        sale_title: 'Properties for Sale',
        rent: '3',
        rent_title: 'Properties for Rent',
        rating: null,
        rating_title: null,
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
        ext: 'A home to about 20 million People, Mumbai is the entertainment capital of India. Also known as Bombay and being the financial capital of India this city is a destination for many big events and activities throughout the year. The number of people who visit Mumbai is countless and so as the number of people who migrate to Mumbai. This recent shift leads to the rising demand for residential homes in Mumbai and commercial spaces in Mumbai. Finding a ',
        ext_next: ' perfect flat for rent or sale in Mumbai is tougher than getting a job in this city. This increasing demand for a house in Mumbai has invited several big builders to come up with affordable housing solution in Mumbai. From plethora of job options to better lifestyle, you will take time to find your flat in Mumbai. With Magicbricks you can make this journey easy as there are a number of residential projects in Mumbai whose details are easily accessible on the portal. Mumbai is known for its nightlife and secure environment and therefore it is considered to be the safest place to live in India. Describing every locality is bit difficult but suggesting the top localities for residential homes in Mumbai is an easy task. Some of the well-known localities in Mumbai for the residential purpose are Bandra, Goregaon, Andheri, Navi Mumbai, Juhu, Powai, South Mumbai, Worli Chembur and Lower Parel, where you will find lavishly designed apartments for sale or rent, luxurious villas and bungalows, commercial spaces for offices in Mumbai.',
        desig: [
            {count: '1747+', value: 'Low Budget Flats in Mumbai'},
            {count: '87951+', value: 'Properties for Sale in Mumbai',},
            {count: '292+', value: 'Residencial Property Agents in Mumbai',},
            {count: '66545+', value: 'Residencial Projects in Mumbai',},
        ]
    }
]
