import React from 'react'
import product from '../store/product';


const Image = () => {
  return (

      <img style={{borderRadius:20 , width:"100%"}} src={product.imgsrc} alt='product image'></img>
    
  )
}

export default Image
