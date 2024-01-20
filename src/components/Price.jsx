import React from 'react'
import product from '../store/product';

const Price = () => {
  return (
    <div>
      <h4>{product.price}</h4>
    </div>
  )
}

export default Price
