import React from 'react'
import BlogBanner from './BlogBanner'
import BlogsBody from './BlogsBody'
import HeroBlog from './HeroBlog'
import blog1 from '../../static/assets/blog1.jpeg'
import blog2 from '../../static/assets/blog2.jpeg'
import '../../static/blogs.css'

const Blogs = () => {
  const blogData = [
    {
        img_src: blog1,
        tag: ["Travel", "Nature", "Environment"],
        title: "Travel Lovers prefer to stay in hostels rather than hotels",
        content: [
            {
                sub_title: "1. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "2. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "3. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
        ]
    },
    {
        img_src: blog2,
        tag: ["Travel", "Nature", "Environment"],
        title: "Travel Lovers prefer to stay in hostels rather than hotels",
        content: [
            {
                sub_title: "1. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "2. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "3. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
        ]
    },
    {
        img_src: blog1,
        tag: ["Travel", "Nature", "Environment"],
        title: "Travel Lovers prefer to stay in hostels rather than hotels",
        content: [
            {
                sub_title: "1. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "2. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "3. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
        ]
    },
    {
        img_src: blog2,
        tag: ["Travel", "Nature", "Environment"],
        title: "Travel Lovers prefer to stay in hostels rather than hotels",
        content: [
            {
                sub_title: "1. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "2. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "3. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
        ]
    },
    {
        img_src: blog1,
        tag: ["Travel", "Nature", "Environment"],
        title: "Travel Lovers prefer to stay in hostels rather than hotels",
        content: [
            {
                sub_title: "1. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "2. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "3. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
        ]
    },{
        img_src: blog2,
        tag: ["Travel", "Nature", "Environment"],
        title: "Travel Lovers prefer to stay in hostels rather than hotels",
        content: [
            {
                sub_title: "1. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "2. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
            {
                sub_title: "3. Diverse Celebrations",
                blog_cont: "One of the most striking aspects of India is its incredible diversity. With various religions, languages, and regions, every part of the country has its own distinct festivals and traditions. Event management companies in India must be well-versed in these differences to plan and execute events that resonate with the local culture. Whether it's a grand Indian wedding, a religious festival celebration, or a corporate event, understanding the nuances of regional cultures is crucial."
            },
        ]
    }
]
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <BlogBanner />
      <div className="visa-title my-5 d-flex justify-content-between align-items-start flex-row" style={{ height: "10vh", width: "90%", backgroundColor: "#fff" }}>

        <div className="head-box blogs-head-box d-flex justify-content-between align-items-end" style={{}}>
          <h2 style={{ fontFamily: "Clash Display", fontSize: "46px", fontWeight: "500" }}>Things to Know</h2>
        </div>
        <div className="head-box my-1" style={{ flexBasis: "15%", height: "80%", width: "100%", backgroundColor: "#fff" }}>

        </div>
      </div>
      <HeroBlog data = {blogData}/>
      <div className="b-options my-5 " style={{ width: "100%"}}>
        <BlogsBody data = {blogData}/>
      </div>
    </div>
  )
}

export default Blogs
