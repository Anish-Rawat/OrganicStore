// eslint-disable-next-line no-unused-vars
import React from "react";
import ReviewCard from "../../../components/ReviewCard";
import DealCard from "../../../components/DealCard";
import { LEFT_LEAF_URL ,RIGHT_LEAF_URL} from "../../../utils/Constants";
import { reviewsData} from "../../../utils/MockData";

const style = {
  backgroundImage: `url(${LEFT_LEAF_URL})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom-left",
  backgroundSize: "25%",
}

const Review = () => {
  
  const data = reviewsData;
  return (
    <div
      className="flex flex-row justify-center items-center py-40 bg-[#f8f6f3]"
      style={style}
    >
      <div className="flex flex-col justify-between items-center space-y-8">
        <p className="font-bold text-4xl text-center">Custumer Reviews</p>
        <img src={RIGHT_LEAF_URL} alt="leaf" className="w-20 h-auto" />
        <div className="flex flex-row justify-center px-40 py-10 space-x-6">
          <ReviewCard reviews={data?.[0]}/>
          <DealCard/>
          <ReviewCard reviews={data?.[1]}/>
        </div>
      </div>
    </div>
  );
};

export default Review;
