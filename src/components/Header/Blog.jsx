import React from 'react'
import './blog.css'
const Blog = (props) => {
  return (
    <div className='blog'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <hr />
    </div>
  )
}

export default Blog