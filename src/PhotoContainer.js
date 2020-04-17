import React from 'react'


export default function PhotoContainer ( props ){
    const {author, imgSrc, description, title}= props;
    return (
        <div>
            <h2>{title} by <span>{author}</span></h2>
            <img src = {imgSrc} alt='t'></img>
            <p>{description}</p>
            
        </div>
    )
}
