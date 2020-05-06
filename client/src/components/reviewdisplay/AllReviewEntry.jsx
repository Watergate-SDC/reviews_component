import React, { useState } from 'react';
import ReviewEntries from './ReviewEntries.jsx';

export default function AllReviewEntry({ reviewData }) {
  // const [data, setData] = useState([])
  // let AllReviewCondition = () => {
  //   if(reviewData.reviews === undefined){
  //     return (
  //       <div></div>
  //     )
  //   } else {
  //     return (
  //       <div className="all-review-entry-container">
  //       {
  //         reviewData.reviews.map((review, index) => {
  //           <Review review={review} key={index}/>
  //         })
  //       }
  //     </div>
  //     )
  //   }
  // }
  // useEffect(() => {
  //   console.log('insideUseEFFECT', data)
  //   setData(reviewData)
  // })
  return (
    <div className="all-review-entry-container">
      {reviewData.map((review, index) => (
        <ReviewEntries review={review} key={index} />
      ))}
    </div>
  );
}
