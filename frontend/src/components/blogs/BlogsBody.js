import React from 'react'

import BlogBox from './BlogBox'

const BlogsBody = (props) => {
    const {data} = props
    

   
  return (
    <div className='d-flex justify-content-center align-items-center py-5' style={{width:"100%",  backgroundColor:"#fff"}}>
    <div className='row' style={{ width:"90%",}}>
      {data.map((data, index)=>{
        return <BlogBox index={index} data={data} />
      })}
    </div>
    </div>
  )
}

export default BlogsBody
