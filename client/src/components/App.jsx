import React, { Component } from 'react';
import axios from 'axios';
import '../../dist/styles/reviews.modal.search.css'
import '../../dist/styles/reviews.modal.css'
import '../../dist/styles/reviews-modal-content.css'
import MainSearchBar from './searchbar/MainSearchBar.jsx'
import MainSearchButton from './searchbutton/MainSearchButton.jsx'
import SearchModal from '../components/searchmodal/SearchModal.jsx'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      filteredReviewData: [],
      modalToggle: false,
      reviewSearch: ''
    };
    this.getData = this.getData.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.searchQueryChanger = this.searchQueryChanger.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this)
    this.onSearchClick = this.onSearchClick.bind(this)
  }

  componentDidMount() {
    this.getData();
    // this.getFilteredData()
  }

  getFilteredData() {
    let {reviewSearch} = this.state 
    axios.get(`/reviews/searchQuery/1`, {params: {query: reviewSearch}}).then((data) => {
      this.setState(
        {
          filteredReviewData: data.data
        },
        () => console.log('All data retrieved', this.state)
      );
    });
  }

  getData() {
    axios.get(`/reviews/1`).then((data) => {
      this.setState(
        {
          reviewData: data.data
        },
        () => console.log('All data retrieved', this.state)
      );
    });
  }

  modalHandler(){
    // e.preventDefault()
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  }

  searchQueryChanger(e){
    let {name, value} = e.target
    this.setState({
      [name]: value
    }, () => console.log(this.state.reviewSearch))
  }

  onSearchClick(){
    this.getFilteredData()
    this.modalHandler();
  }

  render() {
    return (
      <div id="main-container">
        <hr className="search-line"></hr>
        <div className="main-search-bar-container">
          <MainSearchBar searchQueryChanger={this.searchQueryChanger}/>
          <span><MainSearchButton onSearchClick={this.onSearchClick}/></span>
        </div>
        <div className="main-search-modal-container">
          <SearchModal show={this.state.modalToggle} handleClose= {this.modalHandler} filteredReviewData={this.state.filteredReviewData} searchQueryChanger={this.searchQueryChanger} getFilteredData={this.getFilteredData}/>
        </div>
        <hr className="search-line"></hr>
      </div>
    );
  }
}
