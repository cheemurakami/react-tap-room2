import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  return (
    <React.Fragment>
      <div>
        <h2>{props.name}</h2>
        <p>Brand: {props.brand}</p>
        <p>Price: {props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}</p>
      </div>
    </React.Fragment>
  )
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
};
export default Keg
