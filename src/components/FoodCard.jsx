import React from 'react'
import Button from '../components/Button'
import { FaLongArrowAltRight } from "react-icons/fa";

const cardStyle = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
  backgroundSize: "65%",
}

const FoodCard = ({data=[]}) => {
    
  return (
    <div className='w-3/4 flex flex-row justify-center py-20 space-x-10'>
        {
            data?.length > 0 ? (
              data?.map((item)=>{
                return (
                    <span key={item?.id} className='bg-white p-10 rounded-lg bg hover:-translate-y-1 hover:scale-105' style={{...cardStyle,
                      backgroundImage: `url(${item?.url})`,
                    }}>
                        <p className='font-bold text-3xl '>{item?.title}</p>
                        <p className='pt-5'>{item?.subtitle}</p>
                        <Button btnIcon={<FaLongArrowAltRight />} text="SHOP NOW"/>
                    </span>
                )
            })
            ) : (
              <p>No items available.</p>
            )
        }
    </div>
  )
}

export default FoodCard