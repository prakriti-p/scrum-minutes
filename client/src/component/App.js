import React from "react";
import Canvas from "./Canvas";
import Menu from "./Menu";
import "./App.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

class AppConnected extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: {
        name: "homePage"
      }
    }
  }
  handleClick = (buttonName) => {
    this.setState(this.changePage(this.state.gameState, buttonName));
  };
  changePage = (pageName) => {
    this.setState({
      currentPage: {
        name: pageName
      }
    });
    
  }
  render() {
    return (
      <div className="grid-container">
        <Menu changePageNewFunction={this.changePage}/>
        <Canvas pageToLoad={this.props.currentPage}/>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(AppConnected);
export default App;
