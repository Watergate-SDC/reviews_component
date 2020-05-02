import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


export default function SearchButton(props) {
  const searchIcon = <FontAwesomeIcon icon={faSearch}/>
  
  return (
    <div>
      <button className="review-search-button">
        <span><searchIcon /></span>
      </button>
    </div>

  );
}
