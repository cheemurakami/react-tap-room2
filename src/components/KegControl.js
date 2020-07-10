import React from "react";
import KegList from "./KegList";
import KegForm from "./KegForm";
import KegDetail from "./KegDetail";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showForm: false,
      selectedKeg: null
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }; 

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  whenKegClicked = (id) => {
        const selectedKeg = this.props.masterList[id]
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleSellButton = (updatedKeg) => {
    const editedMasterKegList = this.props.masterList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(updatedKeg);
    this.setState({
        selectedTicket: null
      });
  }

  handleDeleteButton = (id) => {
    const newMasterKegList = this.props.masterList.filter(ticket => ticket.id !== id)
    this.setState({
      selectedKeg: null
    });
  }

  render() {
    let currentPage = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentPage = <KegDetail keg={this.state.selectedKeg} handleSellButton={this.handleSellButton} handleDeleteButton = {this.handleDeleteButton}/>
      buttonText = "Return to Keg List"
    } else if (this.props.showForm) {
      currentPage = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Back"
    } else {
      currentPage = <KegList kegList={this.props.masterList} whenKegClicked = {this.whenKegClicked} />;
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        <div className="container">
          {currentPage}
          <button variant="outline-light" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  console.log(state)
  console.log(state.masterList)
  return {
    masterList: state.masterList,
    showForm: state.showForm
  }
}
KegControl = connect(mapStateToProps)(KegControl)

KegControl.propTypes = {
  masterList: PropTypes.object
}

export default KegControl;
