import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export default function ModalSingleReview({ singleReview }) {
  let starCount = () => {
    let { rating } = singleReview;
    
    if (rating === 5) {
      return (
        <span className="review-home-star-container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    }
    if (rating === 4) {
      return (
        <span className="review-home-star-container">
          <span className="review-home-star-container2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="review-home-stars">
            <FontAwesomeIcon icon={faStar} />
          </span>
        </span>
      );
    }
    if (rating === 3) {
      return (
        <span className="review-home-star-container">
          <span className="review-home-star-container2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="review-home-stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </span>
      );
    }
    if (rating === 2) {
      return (
        <span className="review-home-star-container">
          <span className="review-home-star-container2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="review-home-stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </span>
      );
    }
    if (rating === 1) {
      return (
        <span className="review-home-star-container">
          <span className="review-home-star-container2">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="review-home-stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </span>
      );
    }
  };

  let modalQuestions = () => {
    let { location, dislikes, likes } = singleReview;
    if (location && dislikes && likes) {
      return (
        <div className="modal-content-product-question">
          <div className="modal-content-question-1">
            <div>
              <span className="modal-content-question">
                Where are you from?
              </span>
              <span className="modal-content-answers">{location}</span>
            </div>
          </div>
          <div className="modal-content-question-2">
            <div>
              <span className="modal-content-question">
                In a few words, what did you like?
              </span>
              <span className="modal-content-answers">{likes}</span>
            </div>
          </div>
          <div className="modal-content-question-3">
            <div>
              <span className="modal-content-question">
                In a few words, what didn't you like?
              </span>
              <span className="modal-content-answers">{dislikes}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="modal-content-product-question-container"></div>;
    }
  };

  return (
    <div className="modal-single-review-content">
      <div className="modal-single-content-header">
        <div className="modal-review-stars">
          {starCount()}
        </div>
        <div className="modal-single-writer">
          <div className="modal-single-review-nickname">
            <span>{singleReview.nickname}</span>
          </div>
          <div className="modal-single-review-created">
            <span>· </span>
            <span>{moment(singleReview.created_at).fromNow()}</span>
          </div>
        </div>
      </div>
      <div className="modal-content-title-container">
        <h3>{singleReview.title}</h3>
      </div>
      <div className="modal-content-body-container">{singleReview.review}</div>
      <div className="modal-content-product-question-container">
        {modalQuestions()}
      </div>
    </div>
  );
}
