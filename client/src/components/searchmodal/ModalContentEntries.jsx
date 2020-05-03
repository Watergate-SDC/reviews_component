import React, {useState} from 'react'
import ModalContentEntry from './ModalContentEntry.jsx'

export default function ModalContentEntries({modalContent}){
  return (
    <div>
      {
        modalContent.map((entry, index) => (
          <ModalContentEntry modalContent={entry} key={index}/>
        ))
      }
    </div>
  )
}