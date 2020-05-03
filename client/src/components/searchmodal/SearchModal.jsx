import React, { useState } from 'react';
import ModalSearchBar from '../searchbar/ModalSearchBar.jsx';
import ModalSearchButton from '../searchbutton/ModalSearchButton.jsx';
import ModalContent from './ModalContent.jsx'

export default function SearchModal({ show, handleClose, filteredReviewData, getFilteredData, searchQueryChanger}) {
  const showHideClassName = show
    ? 'search-modal display-block'
    : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className="review-search-modal">
      <button className="review-modal-close" onClick={handleClose}><span>x</span></button>
        <div className="review-search-modal-content">
        <div className="search-modal-container">
          <ModalSearchBar searchQueryChanger={searchQueryChanger}/>
          <span>
            <ModalSearchButton getFilteredData={getFilteredData}/>
          </span>
        </div>
          <hr className="search-line"></hr>
        </div>
        <div className="modal-header">
          <h2>Search Results</h2>
        </div>
        <div className="modal-review-count-container">
          <span>Showing</span> <span className="modal-counter">?-?</span>
        </div>
        <div className="modal-review-content">
          <ModalContent filteredReviewData={filteredReviewData}/>
        </div>
      </div>
    </div>
  );
}
