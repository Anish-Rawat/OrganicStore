import { useLocation } from 'react-router-dom'
import ProductInfo from './components/ProductInfo';
import { productData } from '../../utils/MockData';
import Product from '../home/components/Product';

const ProductDetails = () => {
  const location = useLocation();
  const fetchProductId = location?.pathname?.split("/")?.slice(2)?.join("");

  const fetchProductInfo = productData?.find((element) => {
    return element?.id === fetchProductId  ;
  })

  const {url} = fetchProductInfo;

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="w-2/3 flex flex-row pt-20">
        <section className='w-full flex flex-row gap-10'>
            <img src={url} alt="product-image" className="w-full"/>
            <ProductInfo fetchProductInfo={fetchProductInfo}/>
        </section>
      </div>
      <section>
          <Product title="Related Products"/>
        </section>
    </div>
  )
}

export default ProductDetails