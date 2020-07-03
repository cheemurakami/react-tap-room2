import React from "react";
import KegList from "./KegList";
import KegForm from "./KegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      showForm: false,
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({ 
      masterKegList: newMasterKegList, 
      showForm: false 
    });
  }; //[]updating with a new keg, array of kegs

  handleClick = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  render() {
    let currentPage = null;
    let buttonText = null;
    if (this.state.showForm) {
      currentPage = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Back"
    } else {
      currentPage = <KegList kegList={this.state.masterKegList} />;
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
