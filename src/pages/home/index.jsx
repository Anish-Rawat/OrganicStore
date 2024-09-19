// eslint-disable-next-line no-unused-vars
import React from 'react'
import Label from './components/Label';
import Product from './components/Product';
import Food from './components/Food';
import Brands from './components/Brands';
import Review from './components/Review';
import LandingPage from './components/LandingPage';

const Home = () => {
  return (
    <div className='font-serif'>
        <LandingPage/>
        <Label/>
        <Product title={"Best Selling Products"}/>
        <Food/>
        <Product title={"Trending Products"}/>
        <Review/>
        <Brands/>
    </div>
  )
}

export default Home;