import React from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../../static/assets/blog1.jpeg'
import '../../static/blogs.css'

const HeroBlog = ({data}) => {
  console.log(data)
  
  return (
    <div className='hero-blog-main d-flex justify-content-center align-items-center flex-column' style={{ width: "90%", border: "1px solid black", borderRadius: "15px" }}>
      <div className="h-blog-img d-flex justify-content-center align-items-center" style={{ flexBasis: "75%", height: "100%", width: "100%", borderRadius: "15px", overflow: "hidden" }}>
        <img src={data.img_src} style={{ width: "100%", aspectRatio: "" }} alt="" />
      </div>
      <div className="h-blog-text d-flex justify-content-between align-items-center flex-row my-1 py-4" style={{ flexBasis: "25%", height: "100%", width: "95%" }}>
        <div className="hbt-left d-flex justify-content-around align-items-start flex-column" style={{ flexBasis: "40%", height: "100%", width: "100%", }}>
          <h4 style={{ fontFamily: "Clash Display", fontSize: "24px", fontWeight: "500" }}>{data.title}</h4>
          <div className='d-flex justify-content-between align-items-center flex-row'>
            <div className='h-blog-tags d-flex justify-content-center align-items-center' style={{  borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 1)", fontSize: "16px", fontWeight: "500", fontFamily:"General Sans" }}>Travel</div>
            <div className='h-blog-tags d-flex justify-content-center align-items-center mx-3' style={{  borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 1)", fontSize: "16px", fontWeight: "500", fontFamily:"General Sans" }}>Nature</div>
            <div className=' h-blog-tags d-flex justify-content-center align-items-center' style={{borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 1)", fontSize: "16px", fontWeight: "500", fontFamily:"General Sans" }}>Environment</div>
          </div>
        </div>
        <Link to={`/blogs/specBlog/${data.title}`} className="hbt-right justify-content-end align-items-center" style={{ flexBasis: "20%", height: "100%", width: "100%" }}>
          <svg style={{cursor:"pointer"}} width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27" r="25.875" stroke="#024786" stroke-width="2.25" />
            <path d="M38.8961 27.8301C39.3545 27.3716 39.3545 26.6284 38.8961 26.1699L31.4253 18.6992C30.9669 18.2407 30.2236 18.2407 29.7652 18.6992C29.3067 19.1576 29.3067 19.9009 29.7652 20.3593L36.4058 27L29.7652 33.6407C29.3067 34.0991 29.3067 34.8424 29.7652 35.3008C30.2236 35.7593 30.9669 35.7593 31.4253 35.3008L38.8961 27.8301ZM16.9355 28.1739H38.066V25.8261H16.9355V28.1739Z" fill="#024786" />
          </svg>

        </Link>
      </div>
    </div>
  )
}

export default HeroBlog
