// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductCard from '../../../components/ProductCard';
import { productData } from '../../../utils/MockData';

function Unique() {
  const uniqueProductData = productData?.slice(0,3);

  return (
    <div className="flex flex-wrap mt-6">
        {uniqueProductData?.map((item) => {
          return <ProductCard key={item?.id} productItem={item} />;
        })}
      </div>
  )
}

export default Unique