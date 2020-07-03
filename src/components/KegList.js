import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props) {
  console.log(props)
  return (
    <React.Fragment>
      {props.kegList.map((keg, index) => 
        <Keg 
          name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          id = {keg.id}
          key = {index}
          whenKegClicked = {props.whenKegClicked}
          />
          )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  masterKegList: PropTypes.array
};

export default KegList
