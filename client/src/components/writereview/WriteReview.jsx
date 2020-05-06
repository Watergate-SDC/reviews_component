import React, { Component } from 'react';
export default class WriteReview extends Component {
  constructor(props){
    super(props)
    this.state = {
  
    }
  }


  render(){
    return(
      <div className="write-review-container">
        <div className="write-review-header">
          <h2>Reviews</h2>
        </div>
        <div className="write-review-button-container">
          <button className="write-review-button">WRITE A REVIEW</button>
        </div>
      </div>
    )
  }
}
