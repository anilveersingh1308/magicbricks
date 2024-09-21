import preview1 from '../../assets/preview-1.png'
import preview2 from '../../assets/preview-2.png'
import preview3 from '../../assets/preview-3.png'
import preview4 from '../../assets/preview-4.jpg'

export const search_Menu = ['Buy', 'Rent', 'New Projects', 'PG', 'Plot', 'Commercial', 'Post Free Property Ad'];
export const img_preview = [
    {
        thumbnail: preview1,
        pre_link: '/',
    },
    {
        thumbnail: preview2,
        pre_link: '/',
    },
    {
        thumbnail: preview3,
        pre_link: '/',
    },
    {
        thumbnail: preview4,
        pre_link: '/',
    },
];

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

export const near_property = [
    {
        property_count: '11773',
        type: 'Owner Properties',
        exp: 'Explore',
    },
    {
        property_count: '332',
        type: 'Projects',
        exp: 'Explore',
    },
    {
        property_count: '26391',
        type: 'Ready to move-in',
        exp: 'Explore',
    },
    {
        property_count: '4111',
        type: 'Budget Homes',
        exp: 'Explore',
    },
];

export const property = [
    {
        type: '4 BHK Flat',
        price: '₹2.50 Cr',
        prop_area: '2250 sqft',
        location: 'Sector 23 Rohini, New Delhi',
        status: 'Ready to Move',
    },
    {
        type: '3 BHK Flat',
        price: '₹56 Lac',
        location: 'Uttam Nagar, New Delhi',
        status: 'Ready to Move',
    },
    {
        type: '3 BHK Flat',
        price: '₹54 Lac',
        prop_area: '720 sqft',
        location: 'Mohan Garden Uttam Nagar, New ...',
        status: 'Ready to Move',   
    },
    {
        type: '3 BHK Flat',
        price: '₹1 Cr',
        prop_area: '1100 sqft',
        location: 'Shakti Nagar, New Delhi',
        status: 'Ready to Move',
    },
    {
        type: '3 BHK Flat',
        price: '₹54 Lac',
        prop_area: '720 sqft',
        location: 'Mohan Garden Uttam Nagar, New ...',
        status: 'Ready to Move',
    },
    {
        type: '3 BHK Flat',
        price: '₹1.75 Cr',
        prop_area: '1665 sqft',
        location: 'Bhogal, Jangpura, New Delhi',
        status: 'Ready to Move',
    },
    {
        type: '4 BHK Flat',
        price: '₹5 Cr',
        prop_area: '2997 sqft',
        location: 'Block A Ashok Vihar, New Delhi',
        status: 'Ready to Move',
    },
    {
        type: '2 BHK Flat',
        price: '₹2.50 Cr',
        prop_area: '1000 sqft',
        location: 'Lajpat Nagar 1, New Delhi',
        status: 'Ready to Move',
    },
    {
        type: '1 BHK Flat',
        price: '₹24 Lac',
        prop_area: '495 sqft',
        location: 'Roshanara Road, Shakti Nagar, New...',
        status: 'Ready to Move',
    }
];

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

import gn_prop1 from '../../assets/owner-property.webp'
import gn_prop2 from '../../assets/new-projects.webp'
import gn_prop3 from '../../assets/ready-to-move-in.webp'
import gn_prop4 from '../../assets/budget-homes.webp'

export const general_properties = [
    {
        property: gn_prop1,
        property_link: '/',
    },
    {
        property: gn_prop2,
        property_link: '/',
    },
    {
        property: gn_prop3,
        property_link: '/',
    },
    {
        property: gn_prop4,
        property_link: '/',
    },
]