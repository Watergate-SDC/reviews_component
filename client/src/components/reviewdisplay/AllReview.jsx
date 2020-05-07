import React, { useState } from 'react';
import AllReviewEntry from './AllReviewEntry.jsx'

export default function AllReview ({reviewData, reviewLimit}) {
  return(
    <div className="reviews-all-container">
      <AllReviewEntry reviewData={reviewData} reviewLimit={reviewLimit}/>
    </div>
  )
}