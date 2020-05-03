import React, {useState} from 'react'

export default function ModalSearchBar({searchQueryChanger}){
  
  return (
    <div className="modal-review-search">
      <input onChange={searchQueryChanger} className="modal-review-search-input" name="reviewSearch" placeholder="Search topics and reviews"></input>
    </div>
  )
}