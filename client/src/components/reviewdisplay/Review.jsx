import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Review({ post }) {
  console.log('post', post);

  let homeQuestions = () => {
    let { location, dislikes, likes } = post;
    if (location && dislikes && likes) {
      return (
        <div className="home-content-product-question">
          <div className="home-content-question-1">
            <div>
              <span className="home-content-question">Where are you from?</span>
              <span className="home-content-answers">{location}</span>
            </div>
          </div>
          <div className="home-content-question-2">
            <div>
              <span className="home-content-question">
                In a few words, what did you like?
              </span>
              <span className="home-content-answers">{likes}</span>
            </div>
          </div>
          <div className="home-content-question-3">
            <div>
              <span className="home-content-question">
                In a few words, what didn't you like?
              </span>
              <span className="home-content-answers">{dislikes}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="home-content-product-question-container"></div>;
    }
  };

  let homeRecommendation = () => {
    let { recommendation } = post;
    if (recommendation === false) {
      return (
        <div className="review-home-recommendation-message">
          <span className="review-recommendation-icon">
            <FontAwesomeIcon icon={faTimesCircle} />
            No,{' '}
          </span>
          <span> I do not recommend this product. </span>
        </div>
      );
    } else {
      return (
        <div className="review-home-recommendation-message">
          <span className="review-recommendation-icon"><FontAwesomeIcon icon={faCheckCircle} />Yes, </span>
          <span> I recommend this product. </span>
        </div>
      )
    }
  };

  return (
    <div className="all-review-entry-container">
      <div className="review-content-header">
        <div className="review-stars">*****</div>
        <div className="review-home-nickname">
          <span>{post.nickname}</span>
        </div>
        <div className="review-home-created">
          <span>· </span>
          <span>{moment(post.created_at).fromNow()}</span>
        </div>
      </div>
      <div className="reivew-home-title-container">
        <div className="reivew-home-title">
          <h3 className="review-home-title-h3">{post.title}</h3>
        </div>
      </div>
      <div className="review-home-content-body-container">
        <div className="review-home-content-body">{post.review}</div>
      </div>
      <div className="review-home-product-question-container">
        {homeQuestions()}
      </div>
      <div className="review-home-recommendation">
        {homeRecommendation()}
      </div>
      <hr className="search-line"></hr>
    </div>
  );
}
