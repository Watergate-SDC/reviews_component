import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: []
    };
    this.getData = this.getData.bind(this);
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

  render() {
    return (
      <div id="main-container">
        <div className="search-bar-container">
          
        </div>
      </div>
    );
  }
}
