import React, {useState} from 'react'

export default function MainSearchBar(props){
  
  return (
    <div className="main-review-search">
      <input className="main-review-search-input" name="reviewSearch" onChange={props.searchQueryChanger} placeholder="Search topics and reviews"></input>
    </div>
  )
}