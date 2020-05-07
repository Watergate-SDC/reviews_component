import React, { useState } from 'react';
import FilteredReviewEntries from './FilteredReviewEntries.jsx'

export default function StarFilteredReview({filteredRatingData}) {
 console.log('inside ReviewDisplay', filteredRatingData)
  return(
    <div className="all-review-entry-container">
      {filteredRatingData.map((review, index) => (
        <FilteredReviewEntries review={review} key={index} />
      ))}
    </div>
  )
}