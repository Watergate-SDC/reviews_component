import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function ModalSearchButton({ getFilteredData }) {
  return (
    <div>
      <button onClick={() => getFilteredData()} className="modal-review-search-button">
        <span className="modal-review-search-icon"><FontAwesomeIcon icon={faSearch} /></span>
      </button>
    </div>

  );
}
