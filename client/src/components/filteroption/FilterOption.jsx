import React, { Component } from 'react';

export default class FilterOption extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }



  render() {
    console.log('insideFilterOption', this.props.reviewData)
    return(
      <div className="reviews-filter-container">
      <div className="reviews-filter-count">
        <span>?-? of ? Reviews</span>
      </div>
      <div className="filter-review-select">
        <span> Sort by: </span>
        <select defaultValue="mostRecent" >
          <option value="mostRecent" > Most Recent </option>
          <option value="featured"> Featured </option>
          <option value="negative"> Lowest to Highest Rating </option>
          <option value="positive"> Highest to Lowest Rating </option>
        </select>
      </div>
      </div>
    )
  }
}
