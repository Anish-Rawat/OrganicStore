import React from 'react'

export const FooterMiddle = () => {
    const quickLinks = ["About","Cart","Checkout","Contact","Home","My Account","Shop"];
    const siteLinks = ["Privacy Policy","Shipping Details","Offer Coupons","Terms & Conditions"];

  return (
    <div className='w-1/3 flex flex-col items-center justify-between text-gray-400 gap-10'>
        <section className='flex flex-col justify-between gap-10'>
            <p className='font-bold text-white text-2xl'>Quick Links</p>
            <span className='flex flex-col items-start gap-2'>
                {
                    quickLinks.map((item,index)=>(<p key={index} className='hover:text-slate-50'>{item}</p>))
                }
            </span>
        </section>
        <section className='flex flex-col justify-between gap-10'>
            <p className='font-bold text-white text-2xl'>Site Links</p>
            <span className='flex flex-col gap-2'>
                {
                    siteLinks.map((item,index)=>(<p key={index} className='hover:text-slate-50'>{item}</p>))
                }
            </span>
        </section>
    </div>
  )
}
