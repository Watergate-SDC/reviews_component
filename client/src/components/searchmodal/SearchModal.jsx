import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ModalSearchBar from '../searchbar/ModalSearchBar.jsx';
import ModalSearchButton from '../searchbutton/ModalSearchButton.jsx';
import ModalContent from './ModalContent.jsx';
import ModalSingleReview from './ModalSingleReview.jsx';

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleViewToggle: false,
      singleViewAnimation: false
    };
    this.singleViewToggleHandler = this.singleViewToggleHandler.bind(this);
    this.reviewShow = this.reviewShow.bind(this);
    this.modalCloseButtonHandler = this.modalCloseButtonHandler.bind(this);
    this.searchBarDisplayHandler = this.searchBarDisplayHandler.bind(this);
  }

  singleViewToggleHandler(e) {
    this.setState({
      singleViewToggle: !this.state.singleViewToggle
    });
  }

  reviewShow() {
    if (this.state.singleViewToggle === false) {
      return (
        <ModalContent
          filteredReviewData={this.props.filteredReviewData}
          singleReviewClickHandler={this.props.singleReviewClickHandler}
          toggleClickHandler={this.singleViewToggleHandler}
        />
      );
    } else {
      return <ModalSingleReview singleReview={this.props.singleReview} />;
    }
  }

  modalCloseButtonHandler() {
    let { singleViewToggle } = this.state;
    if (singleViewToggle === false) {
      this.props.handleClose();
    } else {
      this.setState({
        singleViewToggle: !this.state.singleViewToggle
      });
    }
  }

  searchBarDisplayHandler() {
    let { singleViewToggle } = this.state;
    let startingNum;
    let endingNum = this.props.filteredReviewData.length;

    if (this.props.filteredReviewData.length === 0) {
      startingNum = 0;
    } else {
      startingNum = 1;
    }

    if (singleViewToggle === false) {
      return (
        <div>
          <div className="search-modal-container">
            <ModalSearchBar
              searchQueryChanger={this.props.searchQueryChanger}
            />
            <span>
              <ModalSearchButton getFilteredData={this.props.getFilteredData} />
            </span>
          </div>
          <hr className="search-line"></hr>
          <div className="modal-header">
            <h2>Search Results</h2>
          </div>
          <div className="modal-review-count-container">
            <span>Showing</span>{' '}
            <span className="modal-counter">{`${startingNum}-${endingNum}`}</span>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div
        className={
          this.props.show ? 'search-modal display-block' : 'modal display-none'
        }
      >
        <div className="review-search-modal">
          <span
            className="review-modal-close"
            onClick={this.modalCloseButtonHandler}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </span>

          <div className="review-search-modal-content">
            {this.searchBarDisplayHandler()}
          </div>

          <div className="modal-review-content">{this.reviewShow()}</div>
        </div>
      </div>
    );
  }
}
