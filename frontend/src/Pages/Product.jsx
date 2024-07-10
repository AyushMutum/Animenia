import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import AnimeDisplay from '../Components/AnimeDisplay/AnimeDisplay';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext'

const Product = () => {

  const {all_product} = useContext(ShopContext);

  const {url} = useContext(ShopContext)

  const {productId} = useParams();



  const product = all_product.find((product) => product._id === productId);

  


  return (
    <div >
       <Breadcrum product ={product} />
      <ProductDisplay product={product} /> 
      <DescriptionBox product={product} />
    <RelatedProducts product={product}  />

    </div>
  )
}

export default Product




  