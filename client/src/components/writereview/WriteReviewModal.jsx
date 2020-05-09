import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default class WriteReviewModal extends Component {
  constructor(props){
    super(props)
    this.state = {
  
    }
    this.getDataUrl = this.getDataUrl.bind(this)
  }

  getDataUrl(){
    let productData = {
      imageUrl: "",
      productTitle: ""
    }
    let {reviewData} = this.props
    if(reviewData === undefined){
      return null
    } else {
      let imgUrl
      for(let i = 0; i < reviewData.length; i++){
        productData.imageUrl = reviewData[i].image
        productData.productTitle = reviewData[i].productTitle
      }
      return productData
    }
  }


  render(){
    let data = this.getDataUrl()
    return (
      <div
        className={
          this.props.writeReviewToggle ? 'write-review-modal display-block' : 'modal display-none'
        }
      >
        <div className="write-review-modal-container">
        <span
            className="review-modal-close"
            onClick={()=>this.props.writeReviewToggleHandler()}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>
        <div className="write-review-modal-content">
        <div className="write-review-image-container">
          <img className="write-review-image" src={data.imageUrl}></img>
          <div className="write-review-product-title">
            <span>{data.productTitle}</span>
          </div>
        </div>
        <div className="write-review-form-container">

        </div>

        </div>
        </div>
      </div>
    );
  }
}