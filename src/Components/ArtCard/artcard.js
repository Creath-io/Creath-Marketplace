import React from 'react'
import './artcard.css'
import { useNavigate } from 'react-router-dom';

const ArtCard = (props)=>{

    let navigate = useNavigate();


    const ArtProfile = {
        name : `${props.name}`,
        title : `${props.title}`,
        description : `${props.description}`,
        price : `${props.price}`,
        artist : `${props.artist}`,
        id : `${props.id}`
    }

    const showProduct =  ()=>{
        props.setProduct(ArtProfile)
        navigate(`/product/${props.id}`)
    }

    const showArtist =  ()=>{
        props.setArtist(props.artist)
        navigate(`/artist`)
    }

    return(
        <div className='artMain'>
            <div className='artImage' onClick={showProduct}>
                {
                    props.img.includes('mp4') ? 
                    <video width="750" height="500"  autoPlay={true} muted={true} loop >
                        <source src={props.img} type="video/mp4"></source>
                    </video>
                    :
                    <img src={props.img} alt="Artwork"/>
                }
            </div>
            <div className='artText'>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <div className='subArtText'>
                    <p onClick={showArtist}>{props.artist}</p>
                    <p>{props.style}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )

}


export default ArtCard