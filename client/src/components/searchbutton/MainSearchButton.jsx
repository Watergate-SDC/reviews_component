import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


export default function MainSearchButton({onSearchClick}) {
  
  return (
    <div>
      <button onClick={onSearchClick} className="main-review-search-button">
        <span className="main-review-search-icon"><FontAwesomeIcon icon={faSearch}/></span>
      </button>
    </div>

  );
}
