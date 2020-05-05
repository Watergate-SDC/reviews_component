import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export default function ModalSingleReview({ singleReview }) {
  let reviewStars = (rating) => {
    if (rating === 1) {
      return (
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      );
    } else if (rating === 2) {
      return (
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      );
    } else if (rating === 3) {
      return (
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      );
    } else if (rating === 4) {
      return (
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
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

  console.log('singleReview in ModalSingle', singleReview);
  return (
    <div className="modal-single-review-content">
      <div className="modal-single-content-header">
        <div className="modal-review-stars">
          {reviewStars(singleReview.rating)}
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
