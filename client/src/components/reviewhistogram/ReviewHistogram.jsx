import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class ReviewHistogram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredRatingData: []
    };
    this.getCount = this.getCount.bind(this);
    this.allReviewCount = this.allReviewCount.bind(this);
    // this.ratingFilterHandler = this.ratingFilterHandler.bind(this)
  }

  getCount() {
    let count = {
      ratingFive: 0,
      ratingFour: 0,
      ratingThree: 0,
      ratingTwo: 0,
      ratingOne: 0
    };
    if (this.props.ratingsData === []) {
      return count;
    } else {
      let { ratingsData } = this.props;
      ratingsData.map((rate) => {
        for (let i = 0; i < rate.length; i++) {
          if (rate[i].rating === 5) {
            count['ratingFive']++;
          }
          if (rate[i].rating === 4) {
            count['ratingFour']++;
          }
          if (rate[i].rating === 3) {
            count['ratingThree']++;
          }
          if (rate[i].rating === 2) {
            count['ratingTwo']++;
          }
          if (rate[i].rating === 1) {
            count['ratingOne']++;
          }
        }
      });
      return count;
    }
  }
  allReviewCount() {
    let countObj = this.getCount();
    let allCount = 0;
    for (let key in countObj) {
      allCount += countObj[key];
    }
    return allCount;
  }

  // ratingFilterHandler(num) {
  //   let reviewFilteredData = []
  //   let { ratingsData } = this.props
  //   for(let i = 0; i < ratingsData.length; i++){
  //     for(let j = 0; j < ratingsData[i].length; j++){
  //       if(ratingsData[i][j].rating === num){
  //         reviewFilteredData.push(ratingsData[i][j])
  //       }
  //     }
  //   }
  //   this.setState({
  //     filteredRatingData: reviewFilteredData
  //   }, () => console.log('statttee', this.state))
  // }

  render() {
    let ratingCount = this.getCount();
    let totalReviews = this.allReviewCount();
    return (
      <div className="review-histogram-container">
        <div className="histogram-bar-container">
        <div className="histogram-title">Rating Snapshot</div>
        <div className="histogram-filter-helper">Select a row below to filter reviews.</div>
          <div onClick={() => {this.props.ratingFilterHandler(5); this.props.reviewDisplayToggleHandlerTrue()}} className="histogram-five-star-container">
            <div className="histogram-rating">
              5<FontAwesomeIcon icon={faStar} />
            </div>
            <div className="five-star-background">
              <div
                className="five-star-foreground"
                style={{
                  width: `${Math.floor(
                    (ratingCount.ratingFive / totalReviews) * 100
                  )}%`
                }}
              ></div>
            </div>
            <div className="histogram-rating-score">
              {ratingCount.ratingFive}
            </div>
          </div>
          <div onClick={() => {this.props.ratingFilterHandler(4); this.props.reviewDisplayToggleHandlerTrue()}} className="histogram-four-star-container">
            <div className="histogram-rating">
              4<FontAwesomeIcon icon={faStar} />
            </div>
            <div className="four-star-background">
              <div
                className="four-star-foreground"
                style={{
                  width: `${Math.floor(
                    (ratingCount.ratingFour / totalReviews) * 100
                  )}%`
                }}
              ></div>
            </div>
            <div className="histogram-rating-score">
              {ratingCount.ratingFour}
            </div>
          </div>
          <div onClick={() => {this.props.ratingFilterHandler(3); this.props.reviewDisplayToggleHandlerTrue()}} className="histogram-three-star-container" >
            <div className="histogram-rating">
              3<FontAwesomeIcon icon={faStar} />
            </div>
            <div className="three-star-background">
              <div
                className="three-star-foreground"
                style={{
                  width: `${Math.floor(
                    (ratingCount.ratingThree / totalReviews) * 100
                  )}%`
                }}
              ></div>
            </div>
            <div className="histogram-rating-score">
              {ratingCount.ratingThree}
            </div>
          </div>
          <div onClick={() => {this.props.ratingFilterHandler(2); this.props.reviewDisplayToggleHandlerTrue()}} className="histogram-two-star-container" >
            <div className="histogram-rating">
              2<FontAwesomeIcon icon={faStar} />
            </div>
            <div className="two-star-background">
              <div
                className="two-star-foreground"
                style={{
                  width: `${Math.floor(
                    (ratingCount.ratingTwo / totalReviews) * 100
                  )}%`
                }}
              ></div>
            </div>
            <div className="histogram-rating-score">
              {ratingCount.ratingTwo}
            </div>
          </div>
          <div onClick={() => {this.props.ratingFilterHandler(1); this.props.reviewDisplayToggleHandlerTrue()}} className="histogram-one-star-container" >
            <div className="histogram-rating">
              1<FontAwesomeIcon icon={faStar} />
            </div>
            <div className="one-star-background">
              <div
                className="one-star-foreground"
                style={{
                  width: `${Math.floor(
                    (ratingCount.ratingOne / totalReviews) * 100
                  )}%`
                }}
              ></div>
            </div>
            <div className="histogram-rating-score">
              {ratingCount.ratingOne}
            </div>
          </div>
        </div>
        <div className="review-overall-rating-container"></div>
      </div>
    );
  }
}
