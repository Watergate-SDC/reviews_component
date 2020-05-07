import React, { Component } from 'react';

export default class FilterOption extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.reviewCount = this.reviewCount.bind(this)
  }
  reviewCount(){
    let {reviewData, reviewLimit} = this.props
    let firstNum
    let secondNum
    let total

    if(reviewData.length < 1){
      return(
        <span>0</span>
      )
    } else {
      if(reviewData[0].reviews.length < 1){
        firstNum = 0
      } else {
        firstNum = 1
      }
      if(reviewData[0].reviews.length < reviewLimit){
        secondNum = reviewData[0].reviews.length
      } else {
        secondNum = reviewLimit
      }
      total = reviewData[0].reviews.length
      return (
        <span>{firstNum}-{secondNum} of {total}</span>
      )
    }
  }



  render() {
    console.log('insideFilterOption', this.props.reviewData)
    return(
      <div className="reviews-filter-container">
      <div className="reviews-filter-count">
        <span>{this.reviewCount()} Reviews</span>
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
