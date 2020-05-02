import React, { useState } from 'react';
import Search from '../searchbar/SearchBar.jsx';
import SearchButton from '../searchbutton/SearchButton.jsx';

export default function SearchModal({ show, handleClose }) {
  const showHideClassName = show
    ? 'search-modal display-block'
    : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className="review-search-modal">
      <button className="review-modal-close" onClick={handleClose}><span>x</span></button>
        <div className="review-search-modal-content">
        <div className="search-modal-container">
          <Search />
          <span>
            <SearchButton />
          </span>
        </div>
          <hr className="search-line"></hr>
        </div>
      </div>
    </div>
  );
}
