import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
export default function ReviewEntries({ review, reviewLimit }) {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    setReviewData(review.reviews);
  }, [review]);

  return (
    <div className="all-review-entry-container">
      {reviewData.slice(0, reviewLimit).map((post, index) => (
        <Review post={post} key={index} />
      ))}
    </div>
  );
}
