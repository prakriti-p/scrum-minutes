import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changePage } from "../js/actions/index";
import "./HomePage.css";

const mapDispatchToProps = dispatch => {
    return {
        changePage: page => dispatch(changePage(page))
    };
  };

class HomePageConnected extends React.Component {

    handleSubmit = (event) => {
      this.props.changePage(event.target.id);
    }

    render() {
        return (
            <div>
                <div className="headings">
                    <span className="primary-heading">Welcome Prakriti!</span><br/>
                    <span className="secondary-heading">What do you want to do today?</span>
                </div>

                <div className="grid-container-inner">
                    <div className="action-box first-box" id="sendMinutesPage" onClick={this.handleSubmit}>Send Minutes</div>
                    <div className="action-box second-box" id="manageHistoryPage" onClick={this.handleSubmit}>Manage History</div>  
                    <div className="action-box third-box" id="manageTeamPage" onClick={this.handleSubmit}>Manage Team</div>
                </div>
            </div>
        );
    }
}

HomePageConnected.propTypes = {
    changePage: PropTypes.func,
    name: PropTypes.string
};

const HomePage = connect(null, mapDispatchToProps)(HomePageConnected);

export default HomePage;
