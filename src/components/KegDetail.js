import React from 'react'
import PropTypes from "prop-types";

function KegDetail(props) {
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      {props.keg.name}
      <hr/>
    </React.Fragment>
  )
}

export default KegDetail
KegDetail.propTypes = {
  keg: PropTypes.object
};