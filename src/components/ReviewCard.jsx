// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const ReviewCard = ({reviews}) => {
  // eslint-disable-next-line react/prop-types
  const {name,profileUrl,feedback} = reviews;
  console.log(profileUrl);
  return (
    <div className='flex flex-col justify-between items-center bg-white rounded-lg py-20 px-10 hover:bg-slate-200'>
      <section className='flex flex-col justify-between gap-10 '>
        <p>{feedback}</p>
        <span className='flex flex-col items-center gap-4'>
          <img src={profileUrl} alt='profile_img'/>
          <p>{name}</p>
        </span>
      </section>
    </div>
  )
}

export default ReviewCard