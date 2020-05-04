import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import ModalSingleReview from './ModalSingleReview.jsx';

export default function ModalContentEntry({ modalContent, singleReviewClickHandler, toggleClickHandler}) {
  // const [singleReview, setSingleReview] = useState(false);
  // console.log('modalcontententry', modalContent);
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
  // let reviewShow = () => {
  //   if (singleReview === false) {
  //     return (
  //       <h3>
  //         <a onClick={toggleClickHandler}>{modalContent.reviews.title}</a>
  //       </h3>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <ModalSingleReview modalContent={modalContent} />
  //       </div>
  //     );
  //   }
  // };
  let showPartialReview = () => {
    let { review } = modalContent.reviews;
    if (review.split(' ').length > 13) {
      let partialReview = review.split(' ').slice(0, 13);
      return <div>{partialReview.join(' ')}.....</div>;
    } else {
      return <div>{review}</div>;
    }
  };
  let modalQuestions = () => {
    let { location, dislikes, likes } = modalContent.reviews;
    if (location && dislikes && likes) {
      return (
        <div className="modal-content-product-question">
          <div className="modal-content-question-1">
            <div className="modal-content-question">
              <span>Where are you from?</span>
            </div>
            <div className="modal-content-answers">{location}</div>
          </div>
          <div className="modal-content-question-2">
            <div className="modal-content-question">
              <span>In a few words, what did you like?</span>
            </div>
            <div className="modal-content-answers">{likes}</div>
          </div>
          <div className="modal-content-question-3">
            <div className="modal-content-question">
              <span>In a few words, what didn't you like?</span>
            </div>
            <div className="modal-content-answers">{dislikes}</div>
          </div>
        </div>
      );
    } else {
      return <div className="modal-content-product-question-container"></div>;
    }
  };
  // let toggleClickHandler = (e) => {
  //   setSingleReview(!singleReview);
  // };

  let singleReviewHandler = (singleContent) => {
    singleReviewClickHandler(singleContent);
    toggleClickHandler()
  }

  console.log('ModalContentEntry', modalContent);
  return (
    <div className="modal-content">
      <div className="modal-content-header">
        <div className="modal-review-stars">
          {reviewStars(modalContent.reviews.rating)}
        </div>
        <div className="modal-review-nickname">
          <span>{modalContent.reviews.nickname}</span>
        </div>
        <div className="modal-review-created">
          <span>· </span>
          <span>{moment(modalContent.reviews.created_at).fromNow()}</span>
        </div>
      </div>
      <div className="modal-content-title-container">
        <h3>
          <a onClick={() => singleReviewHandler(modalContent.reviews)}>{modalContent.reviews.title}</a>
        </h3>
      </div>
      <div className="modal-content-body-container">
        {/* {modalContent.reviews.review} */}
        {showPartialReview()}
      </div>
      <div className="modal-content-product-question-container">
        {modalQuestions()}
      </div>
    </div>
  );
}
