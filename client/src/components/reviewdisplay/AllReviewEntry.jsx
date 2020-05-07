import React, { useState } from 'react';
import ReviewEntries from './ReviewEntries.jsx';

export default function AllReviewEntry({ reviewData, reviewLimit }) {
  console.log('lsadkfjl', reviewLimit)
  return (
    <div className="all-review-entry-container">
      {reviewData.map((review, index) => (
        <ReviewEntries review={review} key={index} reviewLimit={reviewLimit}/>
      ))}
    </div>
  );
}
