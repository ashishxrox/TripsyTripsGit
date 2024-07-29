import React from 'react'

import BlogBox from './BlogBox'
import '../../static/blogs.css'

const BlogsBody = (props) => {
    const {data} = props
    

   
  return (
    <div className='b-options-main d-flex align-items-center py-5' style={{  backgroundColor:"#fff"}}>
    <div className='row' style={{ width:"90%",}}>
      {data.map((data, index)=>{
        return <BlogBox index={index} data={data} />
      })}
    </div>
    </div>
  )
}

export default BlogsBody
