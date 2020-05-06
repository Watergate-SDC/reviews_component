import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import AllReview from './AllReview.jsx';
import StarFilteredReview from './StarFilteredReview.jsx';

export default function ReviewDisplay({
  filteredRatingData,
  reviewData,
  reviewDisplayToggle,
  reviewDisplayToggleHandlerFalse
}) {
  let reviewComponentDisplay = () => {
    if (reviewDisplayToggle === false) {
      return <AllReview reviewData={reviewData} />;
    } else {
      return <StarFilteredReview filteredRatingData={filteredRatingData} />;
    }
  };
  let activeFilterDisplay = () => {
    if (reviewDisplayToggle === true) {
      return (
        <div className="active-filter-button-container">
          <div className="active-reviews-title">Active Filters</div>
          <div className="active-reviews-clear-button">
            <button
              onClick={reviewDisplayToggleHandlerFalse}
              className="reviews-clear-button"
            >
              <span className="reviews-filter-clear">
                Clear All <FontAwesomeIcon icon={faTimesCircle}/>
              </span>
            </button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="review-display-container">
      {activeFilterDisplay()}
      <div className="review-showing-container">{reviewComponentDisplay()}</div>

    </div>
  );
}
