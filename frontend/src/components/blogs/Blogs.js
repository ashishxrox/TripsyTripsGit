import React, {useContext} from 'react'
import BlogBanner from './BlogBanner'
import BlogsBody from './BlogsBody'
import HeroBlog from './HeroBlog'
import blog1 from '../../static/assets/blogs/blog1_img1.jpg'
import blog2 from '../../static/assets/blog2.jpeg'
import '../../static/blogs.css'
import BlogContext from '../../context/Blogs/BlogContext'


const Blogs = () => {
    // const blogData = [
    //     {
    //         img_src: blog1,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "The Complete List of Visa-Free Countries for Indian Passport Holders",
    //         cover_text: "Your Ultimate Guide to Visa-Free Countries ",
    //         content: [
    //             {
    //                 sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
    //                 blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
    //             },
    //             {
    //                 sub_title: "2. Visa-Free Countries for Indian Passport Holders",
    //                 blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it, plan it, and book it! "
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ],
    //         meta_desc: "Discover all visa-free destinations for Indian passport holders. Plan your next trip with ease and skip the hassle of traditional visa applications. "
    //     },
    // ]

    const context = useContext(BlogContext)
    const { blogData } = context

    // const blogData = [
    //     {
    //         img_src: blog1,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "Travel Lovers prefer to stay in hostels rather than hotels",
    //         content: [
    //             {
    //                 sub_title: "1. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "2. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ]
    //     },
    //     {
    //         img_src: blog2,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "Travel Lovers prefer to stay in hostels rather than hotels",
    //         content: [
    //             {
    //                 sub_title: "1. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "2. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ]
    //     },
    //     {
    //         img_src: blog1,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "Travel Lovers prefer to stay in hostels rather than hotels",
    //         content: [
    //             {
    //                 sub_title: "1. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "2. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ]
    //     },
    //     {
    //         img_src: blog2,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "Travel Lovers prefer to stay in hostels rather than hotels",
    //         content: [
    //             {
    //                 sub_title: "1. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "2. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ]
    //     },
    //     {
    //         img_src: blog1,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "Travel Lovers prefer to stay in hostels rather than hotels",
    //         content: [
    //             {
    //                 sub_title: "1. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "2. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ]
    //     }, {
    //         img_src: blog2,
    //         tag: ["Travel", "Nature", "Environment"],
    //         title: "Travel Lovers prefer to stay in hostels rather than hotels",
    //         content: [
    //             {
    //                 sub_title: "1. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "2. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //             {
    //                 sub_title: "3. Diverse Celebrations",
    //                 blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
    //             },
    //         ]
    //     }
    // ]
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <BlogBanner />
            <div className="visa-title my-5 d-flex justify-content-between align-items-start flex-row" style={{ height: "85px", width: "90%", backgroundColor: "#fff" }}>

                <div className="head-box blogs-head-box d-flex justify-content-between align-items-end" style={{}}>
                    <h2 style={{ fontFamily: "Clash Display", fontSize: "46px", fontWeight: "500" }}>Things to Know</h2>
                </div>
                <div className="head-box my-1" style={{ flexBasis: "15%", height: "80%", width: "100%", backgroundColor: "#fff" }}>

                </div>
            </div>
            <HeroBlog data={blogData} />
            <div className="b-options my-5 " style={{ width: "100%" }}>
                <BlogsBody data={blogData} />
            </div>
        </div>
    )
}

export default Blogs
