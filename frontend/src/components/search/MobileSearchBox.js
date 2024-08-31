import '../../static/search.css';
import countryImg from '../../static/assets/country/america.jpeg'
import { Link } from 'react-router-dom'
import FormDataContext from '../../context/FormData/FormDataContext'


import React, { useState, useContext } from 'react';
import Select from 'react-select';


const options = [
  {
    value: "United Arab Emirates",
    label: "UAE 30 Days Single Entry E-Visa",
    flag: "uae",
    category: "E-Visa",
    img_url: "../../static/media/dubai.dd35c3499559ace4c096.jpg",
    visaType: {
      name: "UAE 30 Days Single Entry E-Visa",
      entry: "Single",
      validityDays: 60,
      durationDays: 30,
      processingTime: '3-5',
      docsReq: {
        doc1: "Passport Scan (Front Page)",
        doc2: "Passport Scan (Last Page)",
        doc3: "Pan Card  Scan",
        doc4: "Passport Size Photo Scan"
      },
      totalCost: 8900,
      _id: "65b12e329c1c437d4930fd31"
    },
  },

  {
    value: "United Arab Emirates",
    label: "UAE 60 Days Single Entry E-Visa",
    flag: "uae",
    category: "E-Visa",
    img_url: "../../static/media/dubai.dd35c3499559ace4c096.jpg",
    visaType: {
      "name": "UAE 60 Days Single Entry E-Visa",
      "entry": "Single",
      "validityDays": 60,
      "durationDays": 60,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Pan Card Scan",
        "doc4": "Passport Size Photo Scan"
      },
      "totalCost": 14000,
      "_id": "65b12e329c1c437d4930fd34"
    },
  },
  {
    value: "Hong Kong (PAR)",
    label: "Hong Kong E-Visa",
    flag: "hk",
    category: "E-Visa",
    img_url: "../../static/media/hongKong.a6f8c79a61c063b7ce9d.jpg",
    visaType: {
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
  },
  {
    value: "Vietnam",
    label: "Vietnam E-Visa",
    flag: "vn",
    category: "E-Visa",
    img_url: "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
    visaType: {
      "name": "Vietnam E-Visa",
      "entry": "Single",
      "validityDays": 30,
      "durationDays": 30,
      "processingTime": '7-8',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
      },
      "totalCost": 2700,
      "_id": "65b2b349af8c1506be6a91ed"
    },
  },
  {
    value: "Vietnam",
    label: "Vietnam 30 Days Single Entry Express E-Visa( 2-3 Working Days )",
    flag: "vn",
    category: "E-Visa",
    img_url: "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
    visaType: {
      "name": "Vietnam 30 Days Single Entry Express E-Visa( 2-3 Working Days )",
      "entry": "Single",
      "validityDays": 30,
      "durationDays": 30,
      "processingTime": '2-3',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "Flight Tickets Scan"
      },
      "totalCost": 9900,
      "_id": "65b2b349af8c1506be6a91ee"
    },
  },
  {
    value: "Vietnam",
    label: "Vietnam 30 Days Single Entry Express E-Visa (1 Working Day)",
    flag: "vn",
    category: "E-Visa",
    img_url: "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
    visaType: {
      "name": "Vietnam 30 Days Single Entry Express E-Visa (1 Working Day )",
      "entry": "Single",
      "validityDays": 30,
      "durationDays": 30,
      "processingTime": 1,
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "Arrival Flight Tickets (which shows port of entry) Scan"
      },
      "totalCost": 11800,
      "_id": "65b2b349af8c1506be6a91ef"
    },
  },
  {
    value: "Vietnam",
    label: "Vietnam 30 Days Multiple Entry E-Visa",
    flag: "vn",
    category: "E-Visa",
    img_url: "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
    visaType: {
      "name": "Vietnam 30 Days Multiple Entry E-Visa",
      "entry": "Multiple",
      "validityDays": 30,
      "durationDays": 30,
      "processingTime": '4-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "Arrival Flight Tickets (which shows port of entry)Scan"
      },
      "totalCost": 10500,
      "_id": "65b2b349af8c1506be6a91f0"
    },
  },
  {
    value: "Vietnam",
    label: "Vietnam 90 Days Multiple Entry E-Visa",
    flag: "vn",
    category: "E-Visa",
    img_url: "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg",
    visaType: {
      "name": "Vietnam 90 Days Multiple Entry E-Visa",
      "entry": "Multiple",
      "validityDays": 90,
      "durationDays": 90,
      "processingTime": '4-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "Arrival Flight Tickets (which shows port of entry) Scan"
      },
      "totalCost": 12500,
      "_id": "65b2b349af8c1506be6a91f1"
    }
  },
  {
    value: "Azerbaijan",
    label: "Asan E-Visa",
    flag: "az",
    category: "E-Visa",
    img_url: "../../static/media/azerbaijan.1c47e4e6a20702984ed4.jpeg",
    visaType: {
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
  },
  {
    value: "Azerbaijan",
    label: "Asan Express E-Visa",
    flag: "az",
    category: "E-Visa",
    img_url: "../../static/media/azerbaijan.1c47e4e6a20702984ed4.jpeg",
    visaType: {
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
  },
  {
    value: "Tanzania",
    label: "Tanzania E-Visa",
    flag: "tz",
    category: "E-Visa",
    img_url: "../../static/media/tanzania.c9072cec243d7f862aad.jpeg",
    visaType: {
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
  },
  {
    value: "Mongoloia",
    label: "Mongoloia E-Visa",
    flag: "tz",
    category: "E-Visa",
    img_url: "../../static/media/mongolia.da1d9da331c9c5e53067.jpeg",
    visaType: {
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
  },
  {
    value: "Bahrain",
    label: "Bahrain E-Visa",
    flag: "bh",
    category: "E-Visa",
    img_url: "../../static/media/bahrain.3eb986d3dfe0e57cd4d7.jpeg",
    visaType: {
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
  },
  {
    value: "Bahrain",
    label: "Bahrain 90 Days E-Visa",
    flag: "bh",
    category: "E-Visa",
    img_url: "../../static/media/bahrain.3eb986d3dfe0e57cd4d7.jpeg",
    visaType: {
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
  },
  {
    value: "Bahrain",
    label: "Bahrain 1 Year E-Visa",
    flag: "bh",
    category: "E-Visa",
    img_url: "../../static/media/bahrain.3eb986d3dfe0e57cd4d7.jpeg",
    visaType: {
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
  },
  {
    value: "Cambodia",
    label: "Cambodia E-Visa",
    flag: "cm",
    category: "E-Visa",
    img_url: "../../static/media/cambodia.48f0b56b307d7d812116.jpeg",
    visaType: {
      "name": "Cambodia E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 30,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 3500,
      "_id": "65b29f4caf8c1506be6a91a1"
    }
  },
  // {
  //   value: "Sri Lanka",
  //   label: "Sri Lanka E-Visa",
  //   flag: "sl",
  //   category: "E-Visa",
  //   img_url: "../../static/media/lanka.03d1c318b154fc4d785c.jpeg",
  //   visaType: {
  //     "name": "Sri Lanka E-Visa",
  //     "entry": "Single",
  //     "validityDays": 120,
  //     "durationDays": 30,
  //     "processingTime": '1-2',
  //     "docsReq": {
  //       "doc1": "Passport Scan (Front Page)",
  //       "doc2": "Passport Scan (Last Page)",
  //     },
  //     "totalCost": 1699,
  //     "_id": "65b2a842af8c1506be6a91dd12"
  //   }
  // },
  {
    value: "Egypt",
    label: "Egypt Single Entry E-Visa",
    flag: "eg",
    category: "E-Visa",
    img_url: "../../static/media/egypt.b0b451973e67d9dc66ba.jpeg",
    visaType: {
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
  },
  {
    value: "Egypt",
    label: "Egypt Multiple Entry E-Visa",
    flag: "eg",
    category: "E-Visa",
    img_url: "../../static/media/egypt.b0b451973e67d9dc66ba.jpeg",
    visaType: {
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
  },
  {
    value: "Ethiopia",
    label: "Ethiopia E-Visa",
    flag: "et",
    category: "E-Visa",
    img_url: "../../static/media/ethiopia.18d5841b0ade6a659d49.jpeg",
    visaType: {
      "name": "Ethiopia E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 30,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 7500,
      "_id": "65b2a00aaf8c1506be6a91a8"
    }
  },
  {
    value: "Indonesia",
    label: "Indonesia E-Visa",
    flag: "idn",
    category: "E-Visa",
    img_url: "../../static/media/indonesia.c7d66200bee0189d6d3d.jpeg",
    visaType: {
      "name": "Indonesia E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 30,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "Flight Tickets Scan"
      },
      "totalCost": 3500,
      "_id": "65b2a266af8c1506be6a91b1"
    }
  },
  {
    value: "Jordan",
    label: "Jordan E-Visa",
    flag: "jd",
    category: "E-Visa",
    img_url: "../../static/media/jordan.cd569956c08ebfabd0c9.jpeg",
    visaType: {
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
  },
  {
    value: "Moldova",
    label: "E-Visa",
    flag: "ml",
    category: "E-Visa",
    img_url: "../../static/media/moldova.6d5aa0ecec7a273038c2.jpeg",
    visaType: {
      "name": "E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 30,
      "processingTime": '5-7',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "6 Months Bank Statement Scan",
        "doc5": "Flight Itinerary Scan",
        "doc6": "Hotel Booking Voucher Scan"
      },
      "totalCost": 5000,
      "_id": "65b2a311af8c1506be6a91b7"
    }
  },
  {
    value: "Kyrgzstan",
    label: "Kyrgyzstan E-Visa",
    flag: "kry",
    category: "E-Visa",
    img_url: "../../static/media/kyrgyzstan.797f4fb7a60b68bde0e7.jpeg",
    visaType: {
      "name": "Kyrgyzstan E-Visa",
      "entry": "Single",
      "validityDays": 30,
      "durationDays": 30,
      "processingTime": '15-17',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "Travel Itinerary Scan"
      },
      "totalCost": 14500,
      "_id": "65b2a3bfaf8c1506be6a91bd"
    }
  },
  {
    value: "Laos",
    label: "Laos E-Visa",
    flag: "lao",
    category: "E-Visa",
    img_url: "../../static/media/laos.c549b728380a089b607e.jpeg",
    visaType: {
      "name": "Laos E-Visa",
      "entry": "Single",
      "validityDays": 60,
      "durationDays": 30,
      "processingTime": '4-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "What is your port of Entry(Required as it is mentioned on the E-visa) Scan"
      },
      "totalCost": 5000,
      "_id": "65b2a426af8c1506be6a91c0"
    }
  },
  {
    value: "Madagascar",
    label: "Madagascar E-Visa",
    flag: "mdg",
    category: "E-Visa",
    img_url: "../../static/media/madagascar.cdef75e68a3728438dea.jpeg",
    visaType: {
      "name": "Madagascar E-Visa",
      "entry": "Single",
      "validityDays": 60,
      "durationDays": 15,
      "processingTime": '4-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 1500,
      "_id": "65b2a452af8c1506be6a91c3"
    }
  },
  {
    value: "Morocco",
    label: "Morocco E-Visa",
    flag: "mro",
    category: "E-Visa",
    img_url: "../../static/media/morocco.d5a254e5df83ba4c57a4.jpeg",
    visaType: {
      "name": "Morocco E-Visa",
      "entry": "Single",
      "validityDays": 180,
      "durationDays": 30,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 7500,
      "_id": "65b2a4a2af8c1506be6a91c6"
    },
  },
  {
    value: "Morocco",
    label: "Morocco E-Visa Express",
    flag: "mro",
    category: "E-Visa",
    img_url: "../../static/media/morocco.d5a254e5df83ba4c57a4.jpeg",
    visaType: {
      "name": "Morocco E-Visa Express",
      "entry": "Single",
      "validityDays": 180,
      "durationDays": 30,
      "processingTime": '1',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 10900,
      "_id": "65b2a4a2af8c1506be6a91c7"
    }
  },
  {
    value: "Oman",
    label: "Oman 10 Day E-Visa",
    flag: "omn",
    category: "E-Visa",
    visaType: {
      "name": "Oman 10 Day E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 10,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 2500,
      "_id": "65b2a724af8c1506be6a91d2"
    },
  },
  {
    value: "Oman",
    label: "Oman 10 Day Express E-Visa",
    flag: "omn",
    category: "E-Visa",
    img_url: "../../static/media/oman.86993fea95cd810bfc7f.jpeg",
    visaType: {
      "name": "Oman 10 Day Express E-Visa",
      "entry": "Single",
      "validityDays": 30,
      "durationDays": 10,
      "processingTime": '1',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 3700,
      "_id": "65b2a724af8c1506be6a91d3"
    },
  },
  {
    value: "Oman",
    label: "Oman 30 Day E-Visa",
    flag: "omn",
    category: "E-Visa",
    img_url: "../../static/media/oman.86993fea95cd810bfc7f.jpeg",
    visaType: {
      "name": "Oman 30 Day E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 30,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 5990,
      "_id": "65b2a724af8c1506be6a91d4"
    }
  },
  {
    value: "Russia",
    label: "Russian E-Visa",
    flag: "rsa",
    category: "E-Visa",
    img_url: "../../static/media/russia.75a073ad7df17090fa1a.jpeg",
    visaType: {
      "name": "Russian E-Visa",
      "entry": "Single",
      "validityDays": 60,
      "durationDays": 16,
      "processingTime": '6-7',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 5550,
      "_id": "65b2a789af8c1506be6a91d7"
    }
  },
  {
    value: "Rwanda",
    label: "Rwanda E-Visa",
    flag: "rwd",
    category: "E-Visa",
    img_url: "../../static/media/rwanda.e3f0a3372e85adfb4a5f.jpeg",
    visaType: {
      "name": "Rwanda E-Visa",
      "entry": "Single",
      "validityDays": 30,
      "durationDays": 30,
      "processingTime": '5-7',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 4900,
      "_id": "65b2a7b2af8c1506be6a91da"
    }
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia E-Visa Multiple Entry",
    flag: "sab",
    category: "E-Visa",
    img_url: "../../static/media/saudi.d2725bb5e01a14c352a9.jpeg",
    visaType: {
      "name": "Saudi Arabia E-Visa Multiple Entry",
      "entry": "Multiple",
      "validityDays": 365,
      "durationDays": 90,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
        "doc4": "US/UK/SCHENGEN Visa Scan"
      },
      "totalCost": 11900,
      "_id": "65b2a842af8c1506be6a91dd"
    },
  },
  {
    value: "Saudi Arabia",
    label: "Umrah E-Visa",
    flag: "sab",
    category: "E-Visa",
    img_url: "../../static/media/saudi.d2725bb5e01a14c352a9.jpeg",
    visaType: {
      "name": "Umrah E-Visa",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 14,
      "processingTime": '5-7',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan"
      },
      "totalCost": 15500,
      "_id": "65b2a842af8c1506be6a91de"
    }
  },
  {
    value: "Qatar",
    label: "Qatar E-Visa 30 Days Single Entry",
    flag: "qtr",
    category: "E-Visa",
    img_url: "../../static/media/qatar.2a3cf3fba0f649e5dc8c.jpeg",
    visaType: {
      "name": "Qatar E-Visa 30 Days Single Entry",
      "entry": "Single",
      "validityDays": 90,
      "durationDays": 30,
      "processingTime": '3-5',
      "docsReq": {
        "doc1": "Passport Scan (Front Page)",
        "doc2": "Passport Scan (Last Page)",
        "doc3": "Passport Size Photo Scan",
      },
      "totalCost": 1765,
      "_id": "65b2b20aaf8c1506be6a91ea23"
    }
  }, {
    value: "Turkey",
    label: "Turkey E-Visa",
    flag: "tur",
    category: "E-Visa",
    img_url: "../../static/media/turkey.d1848f14817c46282eda.jpeg",
    visaType: {
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
    }
  },
  {
    value: "Canada",
    label: "Canada Tourist Visa",
    category: "Reg-Visa",
    visaType: {
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
        }]
    }
  },
  {
    value: "United Kingdom",
    label: "United Kingdom Tourist Visa",
    category: "Reg-Visa",
    visaType: {
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
    }
  },
  {
    value: "Schengen Area",
    label: "Schengen Tourist Visa",
    category: "Reg-Visa",
    visaType: {
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
    }
  },
  {
    value: "United States of America",
    label: "United States of America Tourist Visa",
    category: "Reg-Visa",
    visaType: {
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
    }
  },
  {
    value: "Turkey",
    label: "Turkey Visa",
    category: "Reg-Visa",
    visaType: {
      "_id": "65b2a8f1af8c1506be6a91e3",
      "country": "Turkey",
      "eVisa": "yes",
      "visaType": [
        {
          "name": "Turkey Visa",
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
    }
  },
  {
    value: "New Zealand",
    label: "New Zealand Visa",
    category: "Reg-Visa",
    visaType: {
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
    }
  },
  {
    value: "Taiwan",
    label: "TaiwanTAC",
    category: "Reg-Visa",
    visaType: {
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
    }
  },
  {
    value: "Australia",
    label: "Australia Tourist Visa (Subclass 600)",
    category: "Reg-Visa",
    visaType: {
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
    }
  },

];


const MobileSearchBox = ({ handleSearchPerformed }) => {
    const { setEvisa, setType, appType } = useContext(FormDataContext);
    const [searchTerm, setSearchTerm] = useState(null);

    const handleClick = (type, category) => {
        if (category === 'E-Visa') {
            setEvisa("yes");
        }
        setType(type);
        setSearchTerm('');
        console.log(appType);
    };

    const formatOptions = ({ label, value, category, visaType, img_url }) => (
        <Link
            to={`/visa/application/${value}/${visaType.name}`}
            onClick={() => handleClick(visaType, category)}
            className="format-options"
            style={{ textDecoration: "none" }}
        >
            <div className='fo-cont d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-start flex-column' style={{ flexBasis: "50%", height: "100%" }}>
                    <h5 style={{ color: "rgba(2, 71, 134, 1)", fontSize: "14px", textDecoration: "underline", fontFamily: "Clash Display", letterSpacing: "1px", fontWeight: "500" }}>{category}</h5>
                    <h3 style={{ fontSize: "24px", fontWeight: "500", fontFamily: "Clash Display", color: "#000" }}>{label}</h3>
                    <h5>{value}</h5>
                </div>
                <div style={{ flexBasis: "35%", height: "100%", backgroundImage: `url(${img_url})`, backgroundSize: "cover" }}></div>
            </div>
        </Link>
    );

    const handleSearchChange = (selectedOption) => {
        setSearchTerm(selectedOption ? selectedOption.value : '');
        if (selectedOption) {
            handleSearchPerformed(); // Call the function to indicate search is performed
            setSearchTerm(''); // Reset search term after selection
        }
    };

    return (
        <div className="search-form">
            <Select
                placeholder="Search..."
                formatOptionLabel={formatOptions}
                options={options}
                value={options.find(option => option.value === searchTerm)}
                onChange={handleSearchChange}
                isClearable
                isSearchable
                styles={{
                    control: (base) => ({
                        ...base,
                        width: '100%',
                        minHeight: '40px',
                        border: 'none',
                        borderRadius: '15px',
                        padding: '10px 15px',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }),
                    input: (base) => ({
                        ...base,
                        padding: searchTerm ? '10px' : '0px',
                        fontSize: '16px',
                    }),
                    menu: (base) => ({
                        ...base,
                        marginTop: '2px',
                        zIndex: 9999,
                        backgroundColor: 'white',
                        height: '400px',  // Fixed height for the menu
                    }),
                    menuList: (base) => ({
                        ...base,
                        maxHeight: '500px',  // Max height for the menu list
                        overflowY: 'auto',   // Scrollable overflow
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 1px',
                        borderBottom: '1px solid #ccc',
                        backgroundColor: state.isSelected ? '#000047' : 'white',
                        cursor: 'pointer',
                        height: "100%",
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: '#000047',
                        fontSize: '16px',
                    }),
                }}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => (
                        <div style={{ padding: '8px', cursor: 'pointer' }}>
                            <ion-icon name="search-outline" style={{ fontSize: '30px', color: '#000047', transform: "translateX(-10px)" }}></ion-icon>
                        </div>
                    ),
                }}
            />
        </div>
    );
}

export default MobileSearchBox;
