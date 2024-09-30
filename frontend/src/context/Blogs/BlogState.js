import React, {useState} from 'react'

import BlogContext from './BlogContext.js'
import blog1 from '../../static/assets/blogs/blog1_img1.jpg'

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
                meta_desc: "Discover all visa-free destinations for Indian passport holders. Plan your next trip with ease and skip the hassle of traditional visa applications. "
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