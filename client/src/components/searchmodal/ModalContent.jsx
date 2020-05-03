import React, {useState} from 'react'
import ModalContentEntry from './ModalContentEntry.jsx'

export default function ModalContent({filteredReviewData}){
  console.log('filteredReviewData inside ModalContent', filteredReviewData)
  return (
    <div className="modal-content-container">
      {
        filteredReviewData.map((content, index) => (
          <ModalContentEntry modalContent={content} key={index}/>
        ))
      }
    </div>
  )
}