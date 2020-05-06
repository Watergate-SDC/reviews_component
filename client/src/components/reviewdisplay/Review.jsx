import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Review({ post }) {
  console.log('post', post);
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
    </div>
  );
}
