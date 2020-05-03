import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import ModalSingleReview from './ModalSingleReview.jsx'

export default function ModalContentEntry({ modalContent }) {
  const [singleReview, setSingleReview] = useState(false);
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
  let reviewShow = () => {
    if (singleReview === false) {
      return (
        <h3>
          <a onClick={toggleClickHandler}>{modalContent.reviews.title}</a>
        </h3>
      );
    } else {
      return (
        <div>
          <ModalSingleReview modalContent={modalContent}/>
        </div>
      )
    }
  };
  let toggleClickHandler = (e) => {
    setSingleReview(!singleReview)
  }
  console.log('ModalContentEntry', modalContent)
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
        {reviewShow()}
      </div>
    </div>
  );
}
