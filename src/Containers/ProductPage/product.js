import React from 'react';
import './product.css'



const Product = ({product})=>{
    return(
        <div className='productMain'>
            {product.title}
        </div>
    )
}

export default Product
