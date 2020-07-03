import React from 'react'
import PropTypes from "prop-types";

function KegDetail(props) {

  function handleButtonClick(){
    props.handleSellButton(props.keg)
      if(props.keg.pints > 10) {
        props.keg.pints -= 1
      } else if (props.keg.pints <= 10 && props.keg.pints > 1){
        props.keg.pints -= 1
        props.keg.pintsMsg = "Almost Empty!"
        console.log(props.keg.pintsMsg)
      } else {
        props.keg.pints = "Out of Stock"
        props.keg.pintsMsg = ""
      }
  }

  function handleDeleteButtonClick(){
    props.handleDeleteButton(props.keg.id)
  }

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <p>Keg Name: {props.keg.name}</p>
      <p>Keg Brand: {props.keg.brand}</p>
      <p>Price: {props.keg.price}</p>
      <p>Alcohol Content: {props.keg.alcoholContent}</p>
      <p>Pints left: {props.keg.pints}</p>
      <p>{props.keg.pintsMsg}</p>
      
      <button onClick={handleButtonClick}>Sell this Keg</button>
      <button onClick={handleDeleteButtonClick}>Delete this Keg</button>
      <hr/>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  handleSellButton: PropTypes.func,
  handleDeletButton: PropTypes.func
};

export default KegDetail