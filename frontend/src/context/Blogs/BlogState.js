import React, {useState} from 'react'

import BlogContext from './BlogContext.js'
import blog1 from '../../static/assets/blogs/blog1_img1.jpg'
import blog2 from '../../static/assets/blogs/blog2/blog2_img1.jpg'
import blog3 from '../../static/assets/blogs/blog3/blog3_img1.png'
import blog4 from '../../static/assets/blogs/blog4/blog4_img1.jpg'
import blog5 from '../../static/assets/blogs/blog5/blog5_img1.jpg'
import blog6 from '../../static/assets/blogs/blog6/blog6_img1.jpg'

const BlogState = (props) => {

    const initBlogs = [
            {
                img_src: blog1,
                tag: ["Travel", "Nature", "Environment"],
                title: "The Complete List of Visa-Free Countries for Indian Passport Holders",
                cover_text: "Your Ultimate Guide to Visa-Free Countries ",
                content: [
                    {
                        sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
                        blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
                    },
                    {
                        sub_title: "2. Visa-Free Countries for Indian Passport Holders",
                        blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it,  plan it, and book it! "
                    },
                    // {
                    //     sub_title: "3. Diverse Celebrations",
                    //     blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
                    // },
                ],
                meta_desc: "Discover all visa-free destinations for Indian passport holders. Plan your next trip with ease and skip the hassle of traditional visa applications. ",
                link: "/blogs/specBlog/The Complete List of Visa-Free Countries for Indian Passport Holders"
            },
            {
                img_src: blog2,
                tag: ["Travel", "Nature", "Environment"],
                title: "The Complete List of E-visa Destinations for Indian Passport Holders",
                cover_text: "Your Ultimate Guide to Visa-Free Countries ",
                content: [
                    {
                        sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
                        blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
                    },
                    {
                        sub_title: "2. Visa-Free Countries for Indian Passport Holders",
                        blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it,  plan it, and book it! "
                    },
                    // {
                    //     sub_title: "3. Diverse Celebrations",
                    //     blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
                    // },
                ],
                meta_desc: "Discover all visa-free destinations for Indian passport holders. Plan your next trip with ease and skip the hassle of traditional visa applications. ",
                link: "/blogs/specBlog/The Complete List of E-visa Destinations for Indian Passport Holders"
            },
            {
                img_src: blog3,
                tag: ["Travel", "Nature", "Environment"],
                title: "10 Essential Tripsy Tips for Guilt-Free Sustainable Travel",
                cover_text: "Here are ten super important tips to make your travels more sustainable whilst keeping it enjoyable! ",
                content: [
                    {
                        sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
                        blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
                    },
                    {
                        sub_title: "2. Visa-Free Countries for Indian Passport Holders",
                        blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it,  plan it, and book it! "
                    },
                    // {
                    //     sub_title: "3. Diverse Celebrations",
                    //     blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
                    // },
                ],
                meta_desc: " ",
                link: "/blogs/specBlog/10 Essential Tripsy Tips for Guilt-Free Sustainable Travel"
            },
            {
                img_src: blog4,
                tag: ["Travel", "Nature", "Environment"],
                title: "How to Travel on a Budget and Still Have Fun – Tripsy Tips Edition!",
                cover_text: "Flight Deals: The Early Bird Gets the... Best Fare! ",
                content: [
                    {
                        sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
                        blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
                    },
                    {
                        sub_title: "2. Visa-Free Countries for Indian Passport Holders",
                        blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it,  plan it, and book it! "
                    },
                    // {
                    //     sub_title: "3. Diverse Celebrations",
                    //     blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
                    // },
                ],
                meta_desc: " ",
                link: "/blogs/specBlog/How to Travel on a Budget and Still Have Fun"
            },
            {
                img_src: blog5,
                tag: ["Travel", "Nature", "Environment"],
                title: "Travel Hacks: Packing for the Overthinkers – Tripsy Tips Edition!",
                cover_text: "Flight Deals: The Early Bird Gets the... Best Fare! ",
                content: [
                    {
                        sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
                        blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
                    },
                    {
                        sub_title: "2. Visa-Free Countries for Indian Passport Holders",
                        blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it,  plan it, and book it! "
                    },
                    // {
                    //     sub_title: "3. Diverse Celebrations",
                    //     blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
                    // },
                ],
                meta_desc: " ",
                link: "/blogs/specBlog/Travel Hacks"
            },
            {
                img_src: blog6,
                tag: ["Travel", "Nature", "Environment"],
                title: "Pet-Friendly Travel: Tripsy Adventures with Your Furry Friends",
                cover_text: "Flight Deals: The Early Bird Gets the... Best Fare! ",
                content: [
                    {
                        sub_title: "1. Your Ultimate Guide to Visa-Free Countries for Indian Travellers",
                        blog_cont: "Travelling has become increasingly accessible for Indian passport holders, with a growing number of visa-free countries. Whether you're looking to explore new cultures or relax on a tropical beach, understanding where you can travel without the hassle of obtaining a visa is essential. This guide covers all the visa-free countries for Indian travellers, so you can plan your next adventure with ease. "
                    },
                    {
                        sub_title: "2. Visa-Free Countries for Indian Passport Holders",
                        blog_cont: "Indian passport holders have the privilege of travelling to several countries without the need for a visa. Here’s a comprehensive list:\n Barbados,   Bhutan,   Dominica,   Grenada,   Haiti,   Thailand,   Maldives,   Mauritius,   Montserrat,   Nepal,   Senegal,   Serbia,   St. Kitts and Nevis,   St. Vincent and the Grenadines,   Trinidad and Tobago,   Tunisia,   Vanuatu,   Malaysia,   Sri Lanka,   Seychelles  Travelling the world has never been more straightforward for Indian passport holders. With numerous visa-free countries, your dream of exploring new places is more accessible than ever. Whether you're planning a spontaneous trip or a planned vacation, this guide provides all the information you need to dream it,  plan it, and book it! "
                    },
                    // {
                    //     sub_title: "3. Diverse Celebrations",
                    //     blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
                    // },
                ],
                meta_desc: " ",
                link: "/blogs/specBlog/Tripsy Adventures with Your Furry Friends"
            },
        ]
    const [blogData, setBlog] = useState(initBlogs)
  return (
    <BlogContext.Provider value={{ blogData }}>
            {props.children}
        </BlogContext.Provider>
  )
}

export default BlogState
