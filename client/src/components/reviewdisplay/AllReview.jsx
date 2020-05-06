import React, { useState } from 'react';
import AllReviewEntry from './AllReviewEntry.jsx'

export default function AllReview ({reviewData}) {
  return(
    <div className="reviews-all-container">
      <AllReviewEntry reviewData={reviewData}/>
    </div>
  )
}