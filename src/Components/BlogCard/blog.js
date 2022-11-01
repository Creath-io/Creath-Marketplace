import React from 'react';
import './blog.css'


const Blog = ({image, alt, title, date})=>{
    return(
        <div className='blog_main'>
            <img src={image} alt={alt}/>
            <div className='blog_text'>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Blog