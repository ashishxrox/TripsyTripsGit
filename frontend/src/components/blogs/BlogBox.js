import React from 'react'
import { Link } from 'react-router-dom'
import '../../static/blogs.css'

const BlogBox = (props) => {
    const { data } = props
    return (
        <div className='col-md-2 mb-4 my-3 mx-3' style={{ height: "30rem", width: "25rem", padding: "0" }}>
            <div className='d-flex justify-content-between align-items-center flex-column' style={{ width: "100%", height: "100%" }}>
                <div style={{ flexBasis: "49%", height: "100%", width: "100%", backgroundImage: `url(${data.img_src})`, backgroundSize: "cover", borderRadius: "5px" }}>
                    {/* <img src={data.img_src} alt="" /> */}
                </div>
                <div className='d-flex justify-content-between align-items-start flex-column' style={{ flexBasis: "45%", height: "100%", width: "100%", }}>
                    <div className='d-flex justify-content-between align-items-center flex-row'>
                        <div className='h-blog-tags d-flex justify-content-center align-items-center' style={{  borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 1)", fontSize: "14px", fontWeight: "500", fontFamily:"General Sans" }}>{data.tag[0]}</div>
                        <div className='h-blog-tags d-flex justify-content-center align-items-center mx-3' style={{  borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 1)", fontSize: "14px", fontWeight: "500", fontFamily:"General Sans" }}>{data.tag[1]}</div>
                        <div className='h-blog-tags d-flex justify-content-center align-items-center' style={{  borderRadius: "30px", height: "45px", backgroundColor: "rgba(243, 236, 230, 1)", fontSize: "14px", fontWeight: "500", fontFamily:"General Sans" }}>{data.tag[2]}</div>
                    </div>
                    <h5 style={{ fontFamily: "Clash Display", fontSize: "20px", fontWeight: "500" }}>{data.title}</h5>
                    <Link  to={data.link}  className="blog-page-btn d-flex justify-content-center align-items-center" style={{fontFamily:"General Sans",fontSize:"16px", fontWeight:"500", width:"160px", height:"60px", borderRadius:"30px", border:"1px solid rgba(2, 71, 134, 1)", color:"rgba(2, 71, 134, 1)", cursor:"pointer", textDecoration:"none"}}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogBox
