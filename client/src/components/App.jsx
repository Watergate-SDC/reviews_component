import React, { Component } from 'react';
import axios from 'axios';
import '../../dist/styles/reviews.search.css'
import '../../dist/styles/reviews.modal.css'
import SearchBar from './searchbar/SearchBar.jsx'
import SearchButton from './searchbutton/SearchButton.jsx'
import SearchModal from '../components/searchmodal/SearchModal.jsx'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      modalToggle: false
    };
    this.getData = this.getData.bind(this);
    this.modalHandler = this.modalHandler.bind(this)
    // this.modalViewHandler = this.modalViewHandler.bind(this)
  }

  componentDidMount() {
    this.getData();
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

  modalHandler(e){
    e.preventDefault()
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  }

  render() {
    return (
      <div id="main-container">
        <hr className="search-line"></hr>
        <div className="search-bar-container">
          <SearchBar />
          <span onClick={this.modalHandler}><SearchButton /></span>
        </div>
        <div className="search-modal-container">
          <SearchModal show={this.state.modalToggle} handleClose= {this.modalHandler}/>
        </div>
        <hr className="search-line"></hr>
      </div>
    );
  }
}
