import React from "react";
import KegList from "./KegList";
import KegForm from "./KegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        { name: "fake keg", brand: "fake brand", price: 10, alcoholContent: 5 },
        {
          name: "fake keg2",
          brand: "fake brand",
          price: 10,
          alcoholContent: 5,
        },
      ],
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
    this.setState({showForm: true});
  }

  render() {
    let currentPage = null;
    let addKegButton = null;
    if (this.state.showForm) {
      currentPage = (
        <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
    } else {
      currentPage = <KegList kegList={this.state.masterKegList} />;
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>
    }
    return (
      <React.Fragment>
        {currentPage}
        {addKegButton}
      </React.Fragment>
    );
  }
}

export default KegControl;
