// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import VisaContext from './VisaContext';

import dubai from '../../static/assets/country/dubai.jpeg'

import azerbaijan from '../../static/assets/country/azerbaijan.jpeg'
import bahrain from '../../static/assets/country/bahrain.jpeg'
import cambodia from '../../static/assets/country/cambodia.jpg'
import egypt from '../../static/assets/country/egypt.jpg'
import ethiopia from '../../static/assets/country/ethiopia.jpeg'
import georgia from '../../static/assets/country/georgia.jpeg'
import hongKong from '../../static/assets/country/hongKong.jpeg'
import indonesia from '../../static/assets/country/bali.jpeg'
import jordan from '../../static/assets/country/jordan.jpeg'
import kyrgyzstan from '../../static/assets/country/kyrgyzstan.jpeg'
import laos from '../../static/assets/country/laos.jpeg'
import madagascar from '../../static/assets/country/madagascar.jpeg'
import moldova from '../../static/assets/country/moldova.jpeg'
import morocco from '../../static/assets/country/morocco.jpeg'

import oman from '../../static/assets/country/oman.jpeg'
import russia from '../../static/assets/country/russia.jpeg'
import rwanda from '../../static/assets/country/rwanda.jpg'
import saudi from '../../static/assets/country/saudi.jpeg'


import vietnam from '../../static/assets/country/vietnam.jpeg'
import qatar from '../../static/assets/country/qatar.jpeg'


import lanka from '../../static/assets/country/lanka.jpg'
import tanzania from '../../static/assets/country/tanzania.jpeg'
import mongolia from '../../static/assets/country/mongolia.jpeg'


import canada from '../../static/assets/country/canada.png'
import uk from '../../static/assets/country/uk.png'
import schengen from '../../static/assets/country/schengen.png'
import america from '../../static/assets/country/america.png'
import taiwan from '../../static/assets/country/taiwan.png'
import turkey from '../../static/assets/country/turkey.png'
import newZealand from '../../static/assets/country/newZealand.png'
import australia from '../../static/assets/country/australia.png'









const VisaState = (props) => {

   const initCountries = [ 
    {
      "_id": "65b2a1d7af8c1506be6a91ad",
      "country": "Hong Kong (PAR)",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Hong Kong E-Visa  (PreArrival Registration)",
          "entry": "Multiple",
          "validityDays": 180,
          "durationDays": 14,
          "processingTime": '1-2',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 555,
          "_id": "65b2a1d7af8c1506be6a91ae"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/hongKong.3684db6e18f3252c13de.jpg",
      "tag": "hongKong"
    },
   {
      "_id": "65b2b349af8c1506be6a91ec",
      "country": "Vietnam",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Vietnam E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '7-8',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
          },
          "totalCost": 2700,
          "_id": "65b2b349af8c1506be6a91ed"
        },
        {
          "name": "Vietnam 30 Days Single Entry Express E-Visa( 2-3 Working Days )",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '2-3',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Flight Tickets Scan"
          },
          "totalCost": 9900,
          "_id": "65b2b349af8c1506be6a91ee"
        },
        {
          "name": "Vietnam 30 Days Single Entry Express E-Visa (1 Working Day )",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": 1,
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Arrival Flight Tickets (which shows port of entry) Scan"
          },
          "totalCost": 11800,
          "_id": "65b2b349af8c1506be6a91ef"
        },
        {
          "name": "Vietnam 30 Days Multiple Entry E-Visa",
          "entry": "Multiple",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Arrival Flight Tickets (which shows port of entry)Scan"
          },
          "totalCost": 10500,
          "_id": "65b2b349af8c1506be6a91f0"
        },
        {
          "name": "Vietnam 90 Days Multiple Entry E-Visa",
          "entry": "Multiple",
          "validityDays": 90,
          "durationDays": 90,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Arrival Flight Tickets (which shows port of entry) Scan"
          },
          "totalCost": 12500,
          "_id": "65b2b349af8c1506be6a91f1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
      "tag": "vietnam"
    },
    {
      "_id": "65b12f829c1c437d4930fd37",
      "country": "Azerbaijan",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Asan E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)"
          },
          "totalCost": 2590,
          "_id": "65b12f829c1c437d4930fd38"
        },
        {
          "name": "Asan Express E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '1',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)"
          },
          "totalCost": 6212,
          "_id": "65b12f829c1c437d4930fd39"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/azerbaijan.443cdac2b9425ae6912a.jpeg",
      "tag": "azerbaijan"
    },
    {
      "_id": "65b2a1d7af8c1506be6a91ad1w2",
      "country": "Tanzania",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Tanzania E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 90,
          "processingTime": '10-15',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photo",
          },
          "totalCost": 5500,
          "_id": "65b2a1d7af8c1506be6a91ae1wx1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/tanzania.c9072cec243d7f862aad.jpeg",
      "tag": "tanzania"
    },
    {
      "_id": "65b2a1d7af8c1506be6a91ad3w2",
      "country": "Mongolia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Mongoloa E-Visa",
          "entry": "Single",
          "validityDays": 120,
          "durationDays": 30,
          "processingTime": '4-6',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photo",
          },
          "totalCost": 2900,
          "_id": "65b2a1d7af8c1506be6a91ae3wx1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/mongolia.da1d9da331c9c5e53067.jpeg",
      "tag": "Mongolia"
    },
    {
      "_id": "65b130a99c1c437d4930fd3b",
      "country": "Bahrain",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Bahrain E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 14,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Flight Tickets Scan",
            "doc4": "Hotel Booking Voucher Scan",
            "doc5": "Bank Statement of last 6 months(min 1000 USD) Scan"
          },
          "totalCost": 2960,
          "_id": "65b130a99c1c437d4930fd3c"
        },
        {
          "name": "Bahrain 90 Days E-Visa",
          "entry": "Multiple",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '20-30',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Flight Tickets Scan",
            "doc4": "Hotel Booking Voucher Scan",
            "doc5": "Bank Statement of last 6 months(min 2500 USD) Scan"
          },
          "totalCost": 4843,
          "_id": "65b130a99c1c437d4930fd3d"
        },
        {
          "name": "Bahrain 1 Year E-Visa",
          "entry": "Multiple",
          "validityDays": 365,
          "durationDays": 90,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Flight Tickets Scan",
            "doc4": "Hotel Booking Voucher Scan",
            "doc5": "Bank Statement of last 6 months(min 2000 USD) Scan"
          },
          "totalCost": 11708,
          "_id": "65b130a99c1c437d4930fd3e"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/bahrain.3eb986d3dfe0e57cd4d7.jpeg",
      "tag": "bahrain"
    },
    {
      "_id": "65b29f4caf8c1506be6a91a0",
      "country": "Cambodia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Cambodia E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 3500,
          "_id": "65b29f4caf8c1506be6a91a1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/cambodia.fe536fa01810363990f1.jpg",
      "tag": "cambodia"
    },
    // {
    //   "_id": "65b2a842af8c1506be6a91dc",
    //   "country": "Sri Lanka",
    //   "eVisa": "yes",
    //   "visaType": [
    //     {
    //       "name": "Sri Lanka E-Visa",
    //       "entry": "Single",
    //       "validityDays": 120,
    //       "durationDays": 30,
    //       "processingTime": '1-2',
    //       "docsReq": {
    //         "doc1": "Passport Scan (Front Page)",
    //         "doc2": "Passport Scan (Last Page)",
    //       },
    //       "totalCost": 1699,
    //       "_id": "65b2a842af8c1506be6a91dd12"
    //     }
    //   ],
    //   "__v": 0,
    //   "img_url": "../../static/media/lanka.c643e5df2c166d288f72.jpg",
    //   "tag": "sriLanka"
    // },
    {
      "_id": "65b29fc4af8c1506be6a91a3",
      "country": "Egypt",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Egypt Single Entry E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 2795,
          "_id": "65b29fc4af8c1506be6a91a4"
        },
        {
          "name": "Egypt Multiple Entry E-Visa",
          "entry": "Multiple",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 4875,
          "_id": "65b29fc4af8c1506be6a91a5"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/egypt.9f44d56deacabf3f5ec1.jpg",
      "tag": "egypt"
    },
    {
      "_id": "65b2a00aaf8c1506be6a91a7",
      "country": "Ethiopia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Ethiopia E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 7500,
          "_id": "65b2a00aaf8c1506be6a91a8"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/ethiopia.18d5841b0ade6a659d49.jpeg",
      "tag": "ethiopia"
    },
    {
      "_id": "65b2a166af8c1506be6a91aa",
      "country": "Georgia",
      "eVisa": "no",
      "visaType": [
        {
          "name": "Georgia E-Visa",
          "entry": "Single",
          "validityDays": 120,
          "durationDays": 30,
          "processingTime": '7-10',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Flight Tickets Scan",
            "doc5": "Travel Itinerary Scan",
            "doc6": "Hotel Booking Voucher Scan",
            "doc7": "Travel Insurance Scan",
            "doc8": "Bank E-statement of 6 Months Scan",
            "doc9": "All Pages of Passport Scan Scan",
            "doc10": "ITR of last 2 Years Scan",
            "doc11": "Marriage Certificate (If applicable) Scan",
            "doc12": "Company Leave Letter Scan",
            "doc13": "3 Months Salary Slip or GST Certificate Scan"
        },
          "totalCost": 3900,
          "_id": "65b2a166af8c1506be6a91ab"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/georgia.e6b5ae595c03f240859c.jpeg",
      "tag": "georgia"
    },
    {
      "_id": "65b2a266af8c1506be6a91b0",
      "country": "Indonesia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Indonesia E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Flight Tickets Scan"
          },
          "totalCost": 3500,
          "_id": "65b2a266af8c1506be6a91b1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/bali.5e9c25855eaaf8c36980.jpeg",
      "tag": "indonesia"
    },
    {
      "_id": "65b2a2adaf8c1506be6a91b3",
      "country": "Jordan",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Jordan E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '2-3',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 5500,
          "_id": "65b2a2adaf8c1506be6a91b4"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/jordan.f0c9f10a66f5f0bf307c.jpeg",
      "tag": "jordan"
    },
    {
      "_id": "65b2a311af8c1506be6a91b6",
      "country": "Moldova",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '5-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "6 Months Bank Statement Scan",
            "doc5": "Flight Itinerary Scan",
            "doc6": "Hotel Booking Voucher Scan"
          },
          "totalCost": 5000,
          "_id": "65b2a311af8c1506be6a91b7"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/moldova.bec7372e5859aa8891f7.jpeg",
      "tag": "moldova"
    },
    {
      "_id": "65b12e329c1c437d4930fd30",
      "country": "United Arab Emirates",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "UAE 30 Days Single Entry E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Pan Card  Scan",
            "doc4": "Passport Size Photograph Scan"
          },
          "totalCost": 8900,
          "_id": "65b12e329c1c437d4930fd31"
        },
        {
          "name": "UAE 60 Days Single Entry E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 60,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Pan Card Scan",
            "doc4": "Passport Size Photograph Scan"
          },
          "totalCost": 14000,
          "_id": "65b12e329c1c437d4930fd34"
        },
        
      ],
      "__v": 0,
      "img_url": "../../static/media/dubai.ed54eea1d8eab5f08530.jpg",
      "tag": "dubai"
    },
    {
      "_id": "65b2a3bfaf8c1506be6a91bc",
      "country": "Kyrgzstan",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Kyrgyzstan E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '15-17',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Travel Itinerary Scan"
          },
          "totalCost": 14500,
          "_id": "65b2a3bfaf8c1506be6a91bd"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/kyrgyzstan.797f4fb7a60b68bde0e7.jpeg",
      "tag": "kyrgyzstan"
    },
    {
      "_id": "65b2a426af8c1506be6a91bf",
      "country": "Laos",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Laos E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 30,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "What is your port of Entry(Required as it is mentioned on the E-visa) Scan"
          },
          "totalCost": 5000,
          "_id": "65b2a426af8c1506be6a91c0"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/laos.e6fd221a31f5bce63a8d.jpeg",
      "tag": "laos"
    },
    {
      "_id": "65b2a452af8c1506be6a91c2",
      "country": "Madagascar",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Madagascar E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 15,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 1500,
          "_id": "65b2a452af8c1506be6a91c3"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/madagascar.8b4676fe954f8bc73b0a.jpeg",
      "tag": "madagascar"
    },
    {
      "_id": "65b2a4a2af8c1506be6a91c5",
      "country": "Morocco",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Morocco E-Visa",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 7500,
          "_id": "65b2a4a2af8c1506be6a91c6"
        },
        {
          "name": "Morocco E-Visa Express",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '1',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 10900,
          "_id": "65b2a4a2af8c1506be6a91c7"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/morocco.d5a254e5df83ba4c57a4.jpeg",
      "tag": "morocco"
    },
    {
      "_id": "65b2a724af8c1506be6a91d1",
      "country": "Oman",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Oman 10 Day E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 10,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 2500,
          "_id": "65b2a724af8c1506be6a91d2"
        },
        {
          "name": "Oman 10 Day Express E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 10,
          "processingTime": '1',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 3700,
          "_id": "65b2a724af8c1506be6a91d3"
        },
        {
          "name": "Oman 30 Day E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 5990,
          "_id": "65b2a724af8c1506be6a91d4"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/oman.86993fea95cd810bfc7f.jpeg",
      "tag": "oman"
    },
    {
      "_id": "65b2a789af8c1506be6a91d6",
      "country": "Russia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Russian E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 16,
          "processingTime": '6-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 5550,
          "_id": "65b2a789af8c1506be6a91d7"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/russia.75a073ad7df17090fa1a.jpeg",
      "tag": "russia"
    },
    {
      "_id": "65b2a7b2af8c1506be6a91d9",
      "country": "Rwanda",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Rwanda E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '5-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 4900,
          "_id": "65b2a7b2af8c1506be6a91da"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/rwanda.ba5e930ef020e6ac7668.jpeg",
      "tag": "rwanda"
    },
    {
      "_id": "65b2a842af8c1506be6a91dc",
      "country": "Saudi Arabia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Saudi Arabia E-Visa Multiple Entry",
          "entry": "Multiple",
          "validityDays": 365,
          "durationDays": 90,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "US/UK/SCHENGEN Visa Scan"
          },
          "totalCost": 11900,
          "_id": "65b2a842af8c1506be6a91dd"
        },
        {
          "name": "Umrah E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 14,
          "processingTime": '5-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 15500,
          "_id": "65b2a842af8c1506be6a91de"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/saudi.d2725bb5e01a14c352a9.jpeg",
      "tag": "saudi"
    },
    {
      "_id": "65b2b20aaf8c1506be6a91e925",
      "country": "Qatar",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Qatar E-Visa 30 Days Single Entry",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
          },
          "totalCost": 1765,
          "_id": "65b2b20aaf8c1506be6a91ea23"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/qatar.2a3cf3fba0f649e5dc8c.jpeg",
      "tag": "qatar"
    },
    {
      "_id": "65b2a8f1af8c1506be6a91e3",
      "country": "Turkey",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Turkey E-Visa",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '1-2',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "US/UK/SCHENGEN Visa Scan [mandatory for Turkey E-visa]"
          },
          "totalCost": 4500,
          "_id": "65b2a8f1af8c1506be6a91e4"
        },
       
      ],
      "__v": 0,
      "img_url": "../../static/media/turkey.d1848f14817c46282eda.jpeg",
      "tag": "turkey"
    },
   
   
   
    
  ]

    // eslint-disable-next-line
    const initImg = [
        dubai,
        egypt,
        australia,
        ethiopia,
        azerbaijan,
        bahrain,
        newZealand,
        uk,
        taiwan,
        vietnam,
        turkey,
        saudi,
        moldova,
        morocco,
        oman,
        russia,
        rwanda,
        cambodia,
        georgia,
        hongKong,
        indonesia,
        jordan,
        kyrgyzstan,
        laos,
        madagascar,qatar, america,canada, lanka, tanzania, mongolia
    ]

    const asia = [{
      "_id": "65b12e329c1c437d4930fd30",
      "country": "United Arab Emirates",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "UAE 30 Days Single Entry E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Pan Card  Scan",
            "doc4": "Passport Size Photograph Scan"
          },
          "totalCost": 8900,
          "_id": "65b12e329c1c437d4930fd31"
        },
        {
          "name": "UAE 60 Days Single Entry E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 60,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Pan Card Scan",
            "doc4": "Passport Size Photograph Scan"
          },
          "totalCost": 14000,
          "_id": "65b12e329c1c437d4930fd34"
        },
        
      ],
      "__v": 0,
      "img_url": "../../static/media/dubai.ed54eea1d8eab5f08530.jpg",
      "tag": "dubai"
    },
    {
      "_id": "65b12f829c1c437d4930fd37",
      "country": "Azerbaijan",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Asan E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)"
          },
          "totalCost": 2590,
          "_id": "65b12f829c1c437d4930fd38"
        },
        {
          "name": "Asan Express E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '1',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)"
          },
          "totalCost": 6212,
          "_id": "65b12f829c1c437d4930fd39"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/azerbaijan.443cdac2b9425ae6912a.jpeg",
      "tag": "azerbaijan"
    },
    {
      "_id": "65b130a99c1c437d4930fd3b",
      "country": "Bahrain",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Bahrain E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 14,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Flight Tickets Scan",
            "doc4": "Hotel Booking Voucher Scan",
            "doc5": "Bank Statement of last 6 months(min 1000 USD) Scan"
          },
          "totalCost": 2960,
          "_id": "65b130a99c1c437d4930fd3c"
        },
        {
          "name": "Bahrain 90 Days E-Visa",
          "entry": "Multiple",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '20-30',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Flight Tickets Scan",
            "doc4": "Hotel Booking Voucher Scan",
            "doc5": "Bank Statement of last 6 months(min 2500 USD) Scan"
          },
          "totalCost": 4843,
          "_id": "65b130a99c1c437d4930fd3d"
        },
        {
          "name": "Bahrain 1 Year E-Visa",
          "entry": "Multiple",
          "validityDays": 365,
          "durationDays": 90,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Flight Tickets Scan",
            "doc4": "Hotel Booking Voucher Scan",
            "doc5": "Bank Statement of last 6 months(min 2000 USD) Scan"
          },
          "totalCost": 11708,
          "_id": "65b130a99c1c437d4930fd3e"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/bahrain.3eb986d3dfe0e57cd4d7.jpeg",
      "tag": "bahrain"
    },
    {
      "_id": "65b29f4caf8c1506be6a91a0",
      "country": "Cambodia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Cambodia E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 3500,
          "_id": "65b29f4caf8c1506be6a91a1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/cambodia.fe536fa01810363990f1.jpg",
      "tag": "cambodia"
    },
    {
      "_id": "65b2a1d7af8c1506be6a91ad",
      "country": "Hong Kong (PAR)",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Hong Kong E-Visa (PreArrival Registration)",
          "entry": "Multiple",
          "validityDays": 180,
          "durationDays": 14,
          "processingTime": '1-2',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 555,
          "_id": "65b2a1d7af8c1506be6a91ae"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/hongKong.3684db6e18f3252c13de.jpg",
      "tag": "hongKong"
    },
    {
      "_id": "65b2a266af8c1506be6a91b0",
      "country": "Indonesia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Indonesia E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Flight Tickets Scan"
          },
          "totalCost": 3500,
          "_id": "65b2a266af8c1506be6a91b1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/bali.5e9c25855eaaf8c36980.jpeg",
      "tag": "indonesia"
    },
    {
      "_id": "65b2a2adaf8c1506be6a91b3",
      "country": "Jordan",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Jordan E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '2-3',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 5500,
          "_id": "65b2a2adaf8c1506be6a91b4"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/jordan.f0c9f10a66f5f0bf307c.jpeg",
      "tag": "jordan"
    },
    {
      "_id": "65b2a3bfaf8c1506be6a91bc",
      "country": "Kyrgzstan",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Kyrgyzstan E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '15-17',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Travel Itinerary Scan"
          },
          "totalCost": 14500,
          "_id": "65b2a3bfaf8c1506be6a91bd"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/kyrgyzstan.797f4fb7a60b68bde0e7.jpeg",
      "tag": "kyrgyzstan"
    },
    {
      "_id": "65b2a426af8c1506be6a91bf",
      "country": "Laos",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Laos E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 30,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "What is your port of Entry(Required as it is mentioned on the E-visa) Scan"
          },
          "totalCost": 5000,
          "_id": "65b2a426af8c1506be6a91c0"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/laos.e6fd221a31f5bce63a8d.jpeg",
      "tag": "laos"
    },
    {
      "_id": "65b2a724af8c1506be6a91d1",
      "country": "Oman",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Oman 10 Day E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 10,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 2500,
          "_id": "65b2a724af8c1506be6a91d2"
        },
        {
          "name": "Oman 10 Day Express E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 10,
          "processingTime": '1',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 3700,
          "_id": "65b2a724af8c1506be6a91d3"
        },
        {
          "name": "Oman 30 Day E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 5990,
          "_id": "65b2a724af8c1506be6a91d4"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/oman.86993fea95cd810bfc7f.jpeg",
      "tag": "oman"
    },
    {
      "_id": "65b2a842af8c1506be6a91dc",
      "country": "Saudi Arabia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Saudi Arabia E-Visa Multiple Entry",
          "entry": "Multiple",
          "validityDays": 365,
          "durationDays": 90,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "US/UK/SCHENGEN Visa Scan"
          },
          "totalCost": 11900,
          "_id": "65b2a842af8c1506be6a91dd"
        },
        {
          "name": "Umrah E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 14,
          "processingTime": '5-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 15500,
          "_id": "65b2a842af8c1506be6a91de"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/saudi.d2725bb5e01a14c352a9.jpeg",
      "tag": "saudi"
    },
    {
      "_id": "65b2b349af8c1506be6a91ec",
      "country": "Vietnam",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Vietnam E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '7-8',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
          },
          "totalCost": 2700,
          "_id": "65b2b349af8c1506be6a91ed"
        },
        {
          "name": "Vietnam 30 Days Single Entry Express E-Visa( 2-3 Working Days )",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '2-3',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Flight Tickets Scan"
          },
          "totalCost": 9900,
          "_id": "65b2b349af8c1506be6a91ee"
        },
        {
          "name": "Vietnam 30 Days Single Entry Express E-Visa (1 Working Day )",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": 1,
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Arrival Flight Tickets (which shows port of entry) Scan"
          },
          "totalCost": 11800,
          "_id": "65b2b349af8c1506be6a91ef"
        },
        {
          "name": "Vietnam 30 Days Multiple Entry E-Visa",
          "entry": "Multiple",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Arrival Flight Tickets (which shows port of entry)Scan"
          },
          "totalCost": 10500,
          "_id": "65b2b349af8c1506be6a91f0"
        },
        {
          "name": "Vietnam 90 Days Multiple Entry E-Visa",
          "entry": "Multiple",
          "validityDays": 90,
          "durationDays": 90,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "Arrival Flight Tickets (which shows port of entry) Scan"
          },
          "totalCost": 12500,
          "_id": "65b2b349af8c1506be6a91f1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
      "tag": "vietnam"
    },
    {
      "_id": "65b2b20aaf8c1506be6a91e925",
      "country": "Qatar",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Qatar E-Visa 30 Days Single Entry",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
          },
          "totalCost": 1765,
          "_id": "65b2b20aaf8c1506be6a91ea23"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/qatar.2a3cf3fba0f649e5dc8c.jpeg",
      "tag": "qatar"
    },
    // {
    //   "_id": "65b2a842af8c1506be6a91dc",
    //   "country": "Sri Lanka",
    //   "eVisa": "yes",
    //   "visaType": [
    //     {
    //       "name": "Sri Lanka E-Visa",
    //       "entry": "Single",
    //       "validityDays": 120,
    //       "durationDays": 30,
    //       "processingTime": '1-2',
    //       "docsReq": {
    //         "doc1": "Passport Scan (Front Page)",
    //         "doc2": "Passport Scan (Last Page)",
    //       },
    //       "totalCost": 1699,
    //       "_id": "65b2a842af8c1506be6a91dd12"
    //     }
    //   ],
    //   "__v": 0,
    //   "img_url": "../../static/media/lanka.c643e5df2c166d288f72.jpg",
    //   "tag": "sriLanka"
    // },
    {
      "_id": "65b2a1d7af8c1506be6a91ad3w2",
      "country": "Mongolia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Mongoloa E-Visa",
          "entry": "Single",
          "validityDays": 120,
          "durationDays": 30,
          "processingTime": '4-6',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photo",
          },
          "totalCost": 2900,
          "_id": "65b2a1d7af8c1506be6a91ae3wx1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/mongolia.da1d9da331c9c5e53067.jpeg",
      "tag": "Mongolia"
    },]
    const africa = [{
      "_id": "65b29fc4af8c1506be6a91a3",
      "country": "Egypt",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Egypt Single Entry E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 2795,
          "_id": "65b29fc4af8c1506be6a91a4"
        },
        {
          "name": "Egypt Multiple Entry E-Visa",
          "entry": "Multiple",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
          },
          "totalCost": 4875,
          "_id": "65b29fc4af8c1506be6a91a5"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/egypt.9f44d56deacabf3f5ec1.jpg",
      "tag": "egypt"
    },
    {
      "_id": "65b2a00aaf8c1506be6a91a7",
      "country": "Ethiopia",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Ethiopia E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 7500,
          "_id": "65b2a00aaf8c1506be6a91a8"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/ethiopia.18d5841b0ade6a659d49.jpeg",
      "tag": "ethiopia"
    },
    {
      "_id": "65b2a452af8c1506be6a91c2",
      "country": "Madagascar",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Madagascar E-Visa",
          "entry": "Single",
          "validityDays": 60,
          "durationDays": 15,
          "processingTime": '4-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 1500,
          "_id": "65b2a452af8c1506be6a91c3"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/madagascar.8b4676fe954f8bc73b0a.jpeg",
      "tag": "madagascar"
    },
    {
      "_id": "65b2a4a2af8c1506be6a91c5",
      "country": "Morocco",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Morocco E-Visa",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '3-5',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 7500,
          "_id": "65b2a4a2af8c1506be6a91c6"
        },
        {
          "name": "Morocco E-Visa Express",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '1',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 10900,
          "_id": "65b2a4a2af8c1506be6a91c7"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/morocco.d5a254e5df83ba4c57a4.jpeg",
      "tag": "morocco"
    },
    {
      "_id": "65b2a7b2af8c1506be6a91d9",
      "country": "Rwanda",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Rwanda E-Visa",
          "entry": "Single",
          "validityDays": 30,
          "durationDays": 30,
          "processingTime": '5-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan"
          },
          "totalCost": 4900,
          "_id": "65b2a7b2af8c1506be6a91da"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/rwanda.ba5e930ef020e6ac7668.jpeg",
      "tag": "rwanda"
    },
    {
      "_id": "65b2a1d7af8c1506be6a91ad1w2",
      "country": "Tanzania",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Tanzania E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 90,
          "processingTime": '10-15',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photo",
          },
          "totalCost": 5500,
          "_id": "65b2a1d7af8c1506be6a91ae1wx1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/tanzania.c9072cec243d7f862aad.jpeg",
      "tag": "tanzania"
    },]

    const europe = [{
      "_id": "65b2a311af8c1506be6a91b6",
      "country": "Moldova",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "E-Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": '5-7',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "6 Months Bank Statement Scan",
            "doc5": "Flight Itinerary Scan",
            "doc6": "Hotel Booking Voucher Scan"
          },
          "totalCost": 5000,
          "_id": "65b2a311af8c1506be6a91b7"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/moldova.bec7372e5859aa8891f7.jpeg",
      "tag": "moldova"
    },
    {
      "_id": "65b2a8f1af8c1506be6a91e3",
      "country": "Turkey",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Turkey E-Visa",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '1-2',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "US/UK/SCHENGEN Visa Scan [mandatory for Turkey E-visa]"
          },
          "totalCost": 4500,
          "_id": "65b2a8f1af8c1506be6a91e4"
        },
       
      ],
      "__v": 0,
      "img_url": "../../static/media/turkey.d1848f14817c46282eda.jpeg",
      "tag": "turkey"
    },]

    const regVisa = [{
      "_id": "65b2b20aaf8c1506be6a91e93",
      "country": "Canada",
      "eVisa": "no",
      "visaType": [
        {
          "name": "Canada Tourist Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": 20,
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc15": "Residential proof of inviter(if applicable)",
            "doc16": "Inviter passport Scan (Front and back)(if Applicable)",
            "doc17": "Sponsor back statement(Last 6 months)(if sponsored)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 3000,
          "_id": "65b2b20aaf8c1506be6a91ea3"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/canada.9563950ace4af1e0d463.png",
      "tag": "uk"
    },
    
    {
      "_id": "65b2b20aaf8c1506be6a91e91",
      "country": "United Kingdom",
      "eVisa": "no",
      "visaType": [
        {
          "name": "United Kingdom Tourist Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": 20,
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc15": "Residential proof of inviter(if applicable)",
            "doc16": "Inviter passport Scan (Front and back)(if Applicable)",
            "doc17": "Sponsor back statement(Last 6 months)(if sponsored)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 3000,
          "_id": "65b2b20aaf8c1506be6a91ea1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/uk.e548a2d5785aac846e51.png",
      "tag": "uk"
    },
    
    {
      "_id": "65b2b20aaf8c1506be6a91e92",
      "country": "Schengen Area",
      "eVisa": "no",
      "visaType": [
        {
          "name": "Schengen Tourist Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": 20,
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc15": "Residential proof of inviter(if applicable)",
            "doc16": "Inviter passport Scan (Front and back)(if Applicable)",
            "doc17": "Sponsor back statement(Last 6 months)(if sponsored)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 3000,
          "_id": "65b2b20aaf8c1506be6a91ea2"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/schengen.393a83fc506a4e4e38a8.png",
      "tag": "uk"
    },
    
    {
      "_id": "65b2b20aaf8c1506be6a91e92",
      "country": "United States of America",
      "eVisa": "no",
      "visaType": [
        {
          "name": "United States of America Tourist Visa",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": 20,
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc15": "Residential proof of inviter(if applicable)",
            "doc16": "Inviter passport Scan (Front and back)(if Applicable)",
            "doc17": "Sponsor back statement(Last 6 months)(if sponsored)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 3000,
          "_id": "65b2b20aaf8c1506be6a91ea2"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/america.7a3b51061cb92e178bdd.png",
      "tag": "uk"
    },
    
    {
      "_id": "65b2a8f1af8c1506be6a91e3",
      "country": "Turkey",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Turkey E-Visa",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '1-2',
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 4500,
          "_id": "65b2a8f1af8c1506be6a91e4"
        },
        {
          "name": "Turkey Tourist Visa",
          "entry": "Single",
          "validityDays": 180,
          "durationDays": 30,
          "processingTime": '1-2',
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc15": "Residential proof of inviter(if applicable)",
            "doc16": "Inviter passport Scan (Front and back)(if Applicable)",
            "doc17": "Sponsor back statement(Last 6 months)(if sponsored)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 3000,
          "_id": "65b2a8f1af8c1506be6a91e4"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/turkey.8c1bee2a7650b1117772.png",
      "tag": "turkey"
    },
    
    {
      "_id": "65b2a656af8c1506be6a91c9",
      "country": "New Zealand",
      "eVisa": "no",
      "visaType": [
        {
          "name": "New Zealand Visa",
          "entry": "Single",
          "validityDays": 365,
          "durationDays": 180,
          "processingTime": 45,
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card",
            "doc4": "Pan Card",
            "doc5": "Last 2 Years ITR",
            "doc6": "6 Month Bank Statement(E-Statement only)",
            "doc7": "Last 3 months Salary Slip(If employed)",
            "doc8": "Leave Letter from the company(If employed)",
            "doc9": "Letter of Employement(If employed)",
            "doc10": "GST Certificate(If self-employed)",
            "doc11": "Last 6 Months Company Banl account statement(If self-employed)",
            "doc12": "Covid Vacination Certificate",
            "doc13": "Marriage Certificate(If Applicable)",
            "doc14": "All passport Old and New Pages Scannerd copy",
            "doc15": "Covering Letter(Addressed to New Zealand High Commission in Delhi)",
            "doc16": "Other Saving and investment",
            "doc17": "FOrm 54"
          },
          "totalCost": 3000,
          "_id": "65b2a656af8c1506be6a91ca"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/newZealand.9c9629324f51f4c70430.png",
      "tag": "newZealand"
    },
    
    {
      "_id": "65b2a8a2af8c1506be6a91e0",
      "country": "Taiwan",
      "eVisa": "no",
      "visaType": [
        {
          "name": "TaiwanTAC",
          "entry": "Multiple",
          "validityDays": 90,
          "durationDays": 14,
          "processingTime": '2-3',
          "docsReq": {
            "doc1": "Passport Scan (Front Page)",
            "doc2": "Passport Scan (Last Page)",
            "doc3": "Passport Size Photograph Scan",
            "doc4": "US/UK/SCHENGEN Visa Scan"
          },
          "totalCost": 3000,
          "_id": "65b2a8a2af8c1506be6a91e1"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/taiwan.746509bf75e765c51e47.png",
      "tag": "taiwan"
    },
    
    {
      "_id": "65b2ab41af8c1506be6a91e6",
      "country": "Australia",
      "eVisa": "no",
      "visaType": [
        {
          "name": "Australia Tourist Visa (Subclass 600)",
          "entry": "Single",
          "validityDays": 90,
          "durationDays": 30,
          "processingTime": 20,
          "docsReq": {
            "doc1": "Passport Scan (Front and Back)",
            "doc2": "Passport Size Photo",
            "doc3": "Aadhar Card Scan Copy",
            "doc4": "Pan Card Scan Copy",
            "doc5": "Last 3 Years ITR (if self funded)",
            "doc6": "Last 3 months Sallary Slips (if employed)",
            "doc7": "Last 6 months savings bank account statement(Min Balance of 4-5Lakhs)",
            "doc8": "Invitation Letter(if any)",
            "doc9": "NOC for leave from employer(if employed)",
            "doc10": "Cover Letter for Visa Application",
            "doc11": "Flight Itinerary",
            "doc12": "Hotel Booking(if applicable)",
            "doc13": "All pages passport scan copy",
            "doc14": "Index 2 of property owned(if any)",
            "doc15": "Residential proof of inviter(if applicable)",
            "doc16": "Inviter passport Scan (Front and back)(if Applicable)",
            "doc17": "Sponsor back statement(Last 6 months)(if sponsored)",
            "doc18": "Sponsor Last 3 year ITR",
            "doc19": "Sponsor NOC for sponsoring the trip"
          },
          "totalCost": 3000,
          "_id": "65b2ab41af8c1506be6a91e7"
        }
      ],
      "__v": 0,
      "img_url": "../../static/media/australia.31d8cc9358b3f7578cbe.png",
      "tag": "australia"
    },
    ]
    

    const [countries, setCountries] = useState(initCountries);
    const [asianCountries, setAsianCountries] = useState(asia)
    const [africanCountries, setAfricanCountries] = useState(africa)
    const [europeanCountries, setEuropeanCountries] = useState(europe)
    const [regVisaCountries, setRegVisaCountries] = useState(regVisa)
    // const [images, setImages] = useState(initImg);

    // useEffect(() => {
    //     const fetchCountryData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:4321/api/getVisaData');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const jsonData = await response.json();
    //             setCountries(jsonData);
    //         } catch (error) {
    //             console.error('Error fetching country data:', error);
    //         }
    //     };


    //     fetchCountryData();
    // }, []); 
    

    return (
        <VisaContext.Provider value={{ countries, setCountries, asianCountries, africanCountries, europeanCountries, regVisaCountries }}>
            {props.children}
        </VisaContext.Provider>
    );
};

export default VisaState;





