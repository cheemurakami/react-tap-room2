import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'


function KegForm(props) {
  function handleKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4(),
      pints: 124
    })
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
KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}
export default KegForm
