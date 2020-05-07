import React, { Component } from 'react';
import axios from 'axios';
import '../../dist/styles/reviews.modal.search.css';
import '../../dist/styles/reviews.modal.css';
import '../../dist/styles/reviews-modal-content.css';
import '../../dist/styles/reviews-modal-single-review.css';
import '../../dist/styles/reviews-write-review.css';
import '../../dist/styles/reviews-main.css';
import '../../dist/styles/reviews-filter-review.css'
import '../../dist/styles/reviews-histogram.css'
import '../../dist/styles/reviews-display.css'
import '../../dist/styles/reviews-home-review.css'
import MainSearchBar from './searchbar/MainSearchBar.jsx';
import MainSearchButton from './searchbutton/MainSearchButton.jsx';
import SearchModal from '../components/searchmodal/SearchModal.jsx';
import WriteReview from './writereview/WriteReview.jsx';
import FilterOption from './filteroption/FilterOption.jsx'
import ReviewHistogram from './reviewhistogram/ReviewHistogram.jsx';
import ReviewDisplay from './reviewdisplay/ReviewDisplay.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      ratingsData: [],
      filteredReviewData: [],
      modalToggle: false,
      reviewSearch: '',
      singleReview: [],
      singleReviewToggle: false,
      filteredRatingData: [],
      reviewDisplayToggle: false
    };
    this.getData = this.getData.bind(this);
    this.getRatings = this.getRatings.bind(this)
    this.modalHandler = this.modalHandler.bind(this);
    this.searchQueryChanger = this.searchQueryChanger.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.singleReviewClickHandler = this.singleReviewClickHandler.bind(this);
    this.ratingFilterHandler = this.ratingFilterHandler.bind(this)
    this.reviewDisplayToggleHandlerTrue = this.reviewDisplayToggleHandlerTrue.bind(this)
    this.reviewDisplayToggleHandlerFalse = this.reviewDisplayToggleHandlerFalse.bind(this)
  }

  componentDidMount() {
    this.getData();
    this.getRatings()
  }

  getFilteredData() {
    let { reviewSearch } = this.state;
    axios
      .get(`/reviews/searchQuery/1`, { params: { query: reviewSearch } })
      .then((data) => {
        this.setState(
          {
            filteredReviewData: data.data
          },
          () => console.log('All data retrieved', this.state)
        );
      });
  }

  getData() {
    axios.get(`/reviews/8`).then((data) => {
      this.setState(
        {
          reviewData: data.data
        });
    });
  }

  getRatings(){
    axios.get(`/reviews/rating/8`)
    .then(data => {
      this.setState({
        ratingsData: data.data
      })
    })
  }

  modalHandler() {
    // e.preventDefault()
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  }

  searchQueryChanger(e) {
    let { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state.reviewSearch)
    );
  }

  onSearchClick() {
    this.getFilteredData();
    this.modalHandler();
  }

  singleReviewClickHandler(data) {
    this.setState({
      singleReview: data
    });
  }

  ratingFilterHandler(num) {
    let reviewFilteredData = []
    let { ratingsData } = this.state
    for(let i = 0; i < ratingsData.length; i++){
      for(let j = 0; j < ratingsData[i].length; j++){
        if(ratingsData[i][j].rating === num){
          reviewFilteredData.push(ratingsData[i][j])
        }
      }
    }
    this.setState({
      filteredRatingData: reviewFilteredData
    }, () => console.log('statttee', this.state))
  }

  reviewDisplayToggleHandlerTrue(){
    this.setState({
      reviewDisplayToggle: true
    }, ()=> console.log('TOGGLE CHANGE', this.state.reviewDisplayToggle))
  }
  reviewDisplayToggleHandlerFalse(){
    this.setState({
      reviewDisplayToggle: false
    })
  }
  

  render() {
    return (
      <div className="review-main-container">
        <hr className="search-line"></hr>
        <div className="main-search-bar-container">
          <MainSearchBar searchQueryChanger={this.searchQueryChanger} />
          <span>
            <MainSearchButton onSearchClick={this.onSearchClick} />
          </span>
        </div>
        <div className="main-search-modal-container">
          <SearchModal
            show={this.state.modalToggle}
            handleClose={this.modalHandler}
            filteredReviewData={this.state.filteredReviewData}
            searchQueryChanger={this.searchQueryChanger}
            getFilteredData={this.getFilteredData}
            singleReview={this.state.singleReview}
            singleReviewClickHandler={this.singleReviewClickHandler}
          />
        </div>
        <hr className="search-line"></hr>
        <div className="main-write-review-container">
          <WriteReview />
        </div>
        <div className="reviews-histogram-container">
          <ReviewHistogram ratingsData={this.state.ratingsData} ratingFilterHandler={this.ratingFilterHandler} reviewDisplayToggleHandlerTrue={this.reviewDisplayToggleHandlerTrue}/>
        </div>
        <div className="main-filter-review-container">
          <FilterOption reviewData={this.state.reviewData}/>
        </div>
        <div className="review-display-container">
          <ReviewDisplay filteredRatingData={this.state.filteredRatingData} reviewData={this.state.reviewData} reviewDisplayToggle={this.state.reviewDisplayToggle} reviewDisplayToggleHandlerFalse={this.reviewDisplayToggleHandlerFalse}/>
        </div>
      </div>
    );
  }
}
