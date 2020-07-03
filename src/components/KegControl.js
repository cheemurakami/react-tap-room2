import React from "react";
import KegList from "./KegList";
import KegForm from "./KegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      showForm: false,
      selectedKeg: null
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

  whenKegClicked = (id) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render() {
    let currentPage = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentPage = <KegDetail keg={this.state.selectedKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.showForm) {
      currentPage = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Back"
    } else {
      currentPage = <KegList kegList={this.state.masterKegList} whenKegClicked = {this.whenKegClicked}/>;
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
