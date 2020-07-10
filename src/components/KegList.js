import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props) {
  return (
    <React.Fragment>
      {Object.values(props.kegList).map((keg, index) => {
        return <Keg 
          name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          id = {keg.id}
          key = {index}
          whenKegClicked = {props.whenKegClicked}/>
          }
        )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object
};

export default KegList;
