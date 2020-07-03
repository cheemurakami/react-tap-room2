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
    this.setState({ masterKegList: newMasterKegList });
  }; //[]updating with a new keg, array of kegs

  render() {
    let currentPage = null;
    if (this.state.showForm) {
      currentPage = (
        <KegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
    } else {
      currentPage = <KegList kegList={this.state.masterKegList} />;
    }
    return <React.Fragment>{currentPage}</React.Fragment>;
  }
}

export default KegControl;
