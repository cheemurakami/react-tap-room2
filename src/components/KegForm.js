import React from 'react'
import { v4 } from 'uuid';

function KegForm() {
  function handleKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <hr />
      <h2>Submit a form to add a new keg to a list</h2>
      <form onSubmit={handleKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
          <br />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
          <br />
        <input
          type='number'
          name='price'
          placeholder='Price' />
          <br />
          <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content' />
          <br />
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  )
}

export default KegForm
