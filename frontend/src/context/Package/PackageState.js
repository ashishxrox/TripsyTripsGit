import React, { useState } from 'react';
import PackageContext from './PackageContext';
import dubai from '../../static/assets/country/dubai2.jpeg'
import singapore from '../../static/assets/country/singapore.jpeg'
import malaysia from '../../static/assets/country/malaysia.jpeg'
import bali from '../../static/assets/country/bali.jpeg'
import turkey from '../../static/assets/country/turkey.jpeg'
import vietnam from '../../static/assets/country/vietnam.jpeg'
import lanka from '../../static/assets/country/lanka.jpeg'
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
            img_url: "../../static/media/dubai2.16ca67e692ec51c7f0c3.jpeg"
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
            img_url: "../../static/media/singapore.8ac4d0607d43025d5707.jpeg"
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
            img_url: "../../static/media/malaysia.aef026a959c6fbdf483c.jpeg"
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
            place: "Turkey (Istanbul and Cappadocia)",
            inclusion: [
                "Hotel 3 or 4 Star",
                "Istanbul Tour visit to Hippodrome, Topkai Palace, St. Sophia, Blue Mosque",
                "Hot air balloon Cappadocia",
                "City of Cappadocia visit to Goreme open air museum, Dervent Valley, Pastbag Valley",
                "Spice Bazar + Bosphorus Cruise in Istanbul"
            ],
            img_url: "../../static/media/turkey.a481fca873c0c8ed8e51.jpeg"
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
            img_url: "../../static/media/vietnam.7ff659c97f824a13608d.jpeg"
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