import React, { useState } from 'react';
import ReviewEntries from './ReviewEntries.jsx';

export default function AllReviewEntry({ reviewData }) {
  return (
    <div className="all-review-entry-container">
      {reviewData.map((review, index) => (
        <ReviewEntries review={review} key={index} />
      ))}
    </div>
  );
}
