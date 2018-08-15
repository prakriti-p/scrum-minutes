import React from "react";
import Canvas from "./Canvas";
import Menu from "./Menu";
import "./App.css";
import List from "./List";
import Form from "./Form";
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
      /* <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div> */
    );
  }
}

const App = connect(mapStateToProps)(AppConnected);
export default App;
