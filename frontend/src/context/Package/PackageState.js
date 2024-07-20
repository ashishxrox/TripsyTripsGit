import React, { useState } from 'react';
import PackageContext from './PackageContext';
import dubai from '../../static/assets/country/dubaiPkg.jpeg'
import singapore from '../../static/assets/country/singapore.jpeg'
import malaysia from '../../static/assets/country/malaysia.jpeg'
import bali from '../../static/assets/country/bali.jpeg'
import turkey from '../../static/assets/country/turkey.jpeg'
import vietnam from '../../static/assets/country/vietnam.jpeg'
import lanka from '../../static/assets/country/lanka.jpg'
import thailand from '../../static/assets/country/thailand.jpeg'
import kerala from '../../static/assets/country/kerala.jpeg'
import kashmir from '../../static/assets/country/kashmir.jpeg'


const PackageState = (props) => {

    const tourImgs = [
        dubai,
        singapore,
        malaysia,
        bali,
        turkey,
        vietnam,
        lanka,
        thailand,
        kerala,
        kashmir
    ]

    const initTours = [
        {
            place: "Dubai",
            inclusion: [
                "Hotel 3 or 4 Star",
                "Desert Safari + BBQ Dinner and Sky View",
                "124 Floor Burj Khalifa View + Dubai Mall",
                "Global Village + Miracle Garden",
                "Abu Dhabi City tour + Mosque",
                "Musuem of Future + Dubai Frame"
            ],
            img_url: "../../static/media/dubai.dd35c3499559ace4c096.jpg"
        },
        {
            place: "Singapore",
            inclusion: [
                "Hotel 3 or 4 Star",
                "Universal Studio",
                "Night Safari",
                "Sands Sky Park & Gardens by the Bay",
                "Sentosa",
                "Singapore City Tour"
            ],
            img_url: "../../static/media/singapore.dbfa9d7ac54be7e4d01d.jpeg"
        },
        {
            place: "Malaysia",
            inclusion: [
                "Hotel 3 or 4 Star",
                "Kuala lumpur city Tour",
                "Twin Tower Visit",
                "Sunway Lagoon Theme Park",
                "Genting Island 1 Night"
            ],
            img_url: "../../static/media/malaysia.f9c543518703d70497e3.jpg"
        },
        {
            place: "Bali",
            inclusion: [
                "Hotel 3 or 4 Star",
                "Garuda Winsu Park",
                "Uluwatu Sunset Tour + Kecak Dance Show",
                "Bali Pioneer Swing + Rice Terrace",
                "Teganingan Waterfall + UBUD Art Market"
            ],
            img_url: "../../static/media/bali.3b9b22af06cf894f365c.jpeg"
        },
        {
            place: "Turkey",
            inclusion: [
                "Hotel 3 or 4 Star",
                "Istanbul Tour visit to Hippodrome, Topkai Palace, St. Sophia, Blue Mosque",
                "Hot air balloon Cappadocia",
                "City of Cappadocia visit to Goreme open air museum, Dervent Valley, Pastbag Valley",
                "Spice Bazar + Bosphorus Cruise in Istanbul"
            ],
            img_url: "../../static/media/turkeyPkg.35da3bba4f6345350c2e.jpg"
        },
        {
            place: "Kerala",
            inclusion: [
                "1N Kochin",
                "2N Munnar",
                "1N Thekkady",
                "1N Alleppey",
                "2N Kovalam",
                "Includes: All sightseeing, boat rides, tea plantation and others"
            ],
            img_url: "../../static/media/kerala.8fff81d98ab6050bfb58.jpeg"
        },
        {
            place: "Kashmir",
            inclusion: [
                "2N Srinagar",
                "1N Gulmarg",
                "1N Pahalgam",
                "1N Houseboat",
                "Includes: City tour, Shikara Ride in Dal Lake, sightseeing",
                
            ],
            img_url: "../../static/media/kashmir.238df277f7d6de4ca932.jpeg"
        },
        {
            place: "Vietnam",
            inclusion: [
                "1N Hanoi",
                "1N Halong Bay Cruise",
                "2N Danang",
                "2N Ho Chi Minh",
                "Include: City tour, experience the local culture"
            ],
            img_url: "../../static/media/vietnam.cc28aa33baa20e59fc12.jpeg"
        },
        {
            place: "Sri Lanka",
            inclusion: [
                "Spice Garden with head massage",
                "Gem museum + Dance Show",
                "Kandy Lake + Ramboda Falls + Tea Factory",
                "Sri Bhakta Hanuman Temple + Seetha Amman Temple + Ravana Falls + Ravana Cave",
                "9 Arch Bridge + Little Adams Peak + Galle Fort"
            ],
            img_url: "../../static/media/lanka.03d1c318b154fc4d785c.jpeg"
        },
        {
            place: "Thailand",
            inclusion: [
                "Hotel 3 or 4 Star",
                "2N Bangkok",
                "1N Krabi",
                "2N Pattaya"

            ],
            img_url: "../../static/media/thailand.68b5e7f65f56a0260bf5.jpeg"
        },
        {
            place: "Leh & Nubra Valley ",
            inclusion: [
                "Hotel 3 or 4 Star",
                "2N Bangkok",
                "1N Krabi",
                "2N Pattaya"

            ],
            img_url: "../../static/media/leh.dfb3becdca44e0abf1a2.jpg"
        },
        {
            place: "Meghalaya",
            inclusion: [
                "Hotel 3 or 4 Star",
                "2N Bangkok",
                "1N Krabi",
                "2N Pattaya"

            ],
            img_url: "../../static/media/meghalaya.c29d9e14ecf36375e707.jpg"
        },
        {
            place: "Abu Dhabi",
            inclusion: [
                "Hotel 3 or 4 Star",
                "2N Bangkok",
                "1N Krabi",
                "2N Pattaya"

            ],
            img_url: "../../static/media/abuDhabi.ee363217d01ecfff3734.jpg"
        }


    ]

  

    const [tours, setTour] = useState(initTours);

    return (
        <PackageContext.Provider value={{ tours, setTour }}>
            {props.children}
        </PackageContext.Provider>
    )
}

export default PackageState