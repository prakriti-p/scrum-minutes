import React from "react";
import PropTypes from "prop-types";
import "./HomePage.css";

class HomePage extends React.Component {
    handleClickFunction = () => {
        this.props.changeCanvas();
    }

    render() {
        return (
            <div>
                <div className="headings">
                    <span className="primary-heading">Welcome Prakriti!</span><br/>
                    <span className="secondary-heading">What do you want to do today?</span>
                </div>

                <div className="grid-container-inner">
                    <div className="action-box first-box" onClick={this.handleClickFunction("sendMinutesPage")}>Send Minutes</div>
                    <div className="action-box second-box">Manage History</div>  
                    <div className="action-box third-box">Manage Team</div>
                </div>
            </div>
        );
    }
}
HomePage.propTypes = {
  changeCanvas: PropTypes.func
};
export default HomePage;
