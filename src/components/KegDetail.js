import React from 'react'
import PropTypes from "prop-types";

function KegDetail(props) {
  function handleButtonClick(){
    if(props.keg.pints > 1) {
      props.keg.pints -= 1
    } else {
      props.keg.pints = "Out of stock"
    }
    props.handleSellButton(props.keg)
  }

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <p>Keg Name: {props.keg.name}</p>
      <p>Keg Brand: {props.keg.brand}</p>
      <p>Price: {props.keg.price}</p>
      <p>Alcohol Content: {props.keg.alcoholContent}</p>
      <p>Pints left: {props.keg.pints}</p>
      <button onClick={handleButtonClick}>Sell this Keg</button>
      <hr/>
    </React.Fragment>
  )
}

export default KegDetail
KegDetail.propTypes = {
  keg: PropTypes.object
};