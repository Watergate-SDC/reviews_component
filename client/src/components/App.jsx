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
import '../../dist/styles/reviews-write-review-modal.css'
import MainSearchBar from './searchbar/MainSearchBar.jsx';
import MainSearchButton from './searchbutton/MainSearchButton.jsx';
import SearchModal from '../components/searchmodal/SearchModal.jsx';
import WriteReview from './writereview/WriteReview.jsx';
import FilterOption from './filteroption/FilterOption.jsx'
import ReviewHistogram from './reviewhistogram/ReviewHistogram.jsx';
import ReviewDisplay from './reviewdisplay/ReviewDisplay.jsx'
import WriteReviewModal from './writereview/WriteReviewModal.jsx'


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
      reviewDisplayToggle: false,
      reviewLimit: 8,
      writeReviewToggle: false,
      randomId: 1
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
    this.onLoadMore = this.onLoadMore.bind(this)
    this.writeReviewToggleHandler = this.writeReviewToggleHandler.bind(this)
    this.onModalSearchClick = this.onModalSearchClick.bind(this)
  }

  componentDidMount() {
    const randomIdGen = Math.ceil(Math.random() * 100)
    this.setState({randomId: randomIdGen}, () => {
      this.getData(this.state.randomId);
      this.getRatings(this.state.randomId)
    })

  }

  getFilteredData(id) {
    let { reviewSearch } = this.state;
    axios
      .get(`http://localhost:9000/reviews/searchQuery/${id}`, { params: { query: reviewSearch }, headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'} }, )
      .then((data) => {
        this.setState(
          {
            filteredReviewData: data.data
          });
      });
  }

  getData(id) {
    axios.get(`http://localhost:9000/reviews/${id}`, {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}}).then((data) => {
    console.log(data, "getdata call");
    this.setState(
        {
          reviewData: data.data
        });
    });
  }

  getRatings(id){
    axios.get(`http://localhost:9000/reviews/rating/${id}`, {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}})
    .then(data => {
      this.setState({
        ratingsData: data.data
      })
    })
  }

  modalHandler() {
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  }

  searchQueryChanger(e) {
    let { name, value } = e.target;
    this.setState(
      {
        [name]: value
      }
    );
  }

  onSearchClick() {
    this.getFilteredData(this.state.randomId);
    this.modalHandler();
  }

  onModalSearchClick(){
    this.getFilteredData(this.state.randomId);
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
    })
  }

  reviewDisplayToggleHandlerTrue(){
    this.setState({
      reviewDisplayToggle: true
    })
  }
  reviewDisplayToggleHandlerFalse(){
    this.setState({
      reviewDisplayToggle: false
    })
  }

  onLoadMore(){
    this.setState({
      reviewLimit: this.state.reviewLimit + 8
    })
  }

  writeReviewToggleHandler(){
    this.setState({
      writeReviewToggle: !this.state.writeReviewToggle
    });
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
            getFilteredData={this.onModalSearchClick}
            singleReview={this.state.singleReview}
            singleReviewClickHandler={this.singleReviewClickHandler}
          />
        </div>
        <hr className="search-line"></hr>
        <div className="main-write-review-container">
          <WriteReview writeReviewToggle={this.state.writeReviewToggle} writeReviewToggleHandler={this.writeReviewToggleHandler}/>
        </div>
        <div className="reviews-histogram-container">
          <ReviewHistogram ratingsData={this.state.ratingsData} ratingFilterHandler={this.ratingFilterHandler} reviewDisplayToggleHandlerTrue={this.reviewDisplayToggleHandlerTrue}/>
        </div>
        <div className="main-filter-review-container">
          <FilterOption reviewData={this.state.reviewData} reviewLimit={this.state.reviewLimit}/>
        </div>
        <div className="review-display-container">
          <ReviewDisplay filteredRatingData={this.state.filteredRatingData} reviewData={this.state.reviewData} reviewDisplayToggle={this.state.reviewDisplayToggle} reviewDisplayToggleHandlerFalse={this.reviewDisplayToggleHandlerFalse} reviewLimit={this.state.reviewLimit} />
        </div>
        <div className="main-write-review-modal-container">
          <WriteReviewModal getData={this.getData} writeReviewToggleHandler={this.writeReviewToggleHandler} writeReviewToggle={this.state.writeReviewToggle} reviewData={this.state.reviewData}/>
        </div>
        <div className="review-display-load-more-container">
          <button className="review-load-more-button" onClick={this.onLoadMore}><span className="review-load-more-text">Load More</span></button>
        </div>
      </div>
    );
  }
}
