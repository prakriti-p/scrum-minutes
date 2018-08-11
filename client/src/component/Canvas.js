import React from "react";
import PropTypes from "prop-types";
import "./Canvas.css";

class Canvas extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div className="item2">
                <div className="headings">
                    <span className="primary-heading">Welcome Prakriti!</span><br/>
                    <span className="secondary-heading">What do you want to do today?</span>
                </div>

                <div className="grid-container-inner">
                    <div className="action-box first-box">Send Minutes</div>
                    <div className="action-box second-box">Manage History</div>  
                    <div className="action-box third-box">Manage Team</div>
                </div>
            </div>
        );
    }
}
Canvas.propTypes = {
  resetFunction: PropTypes.func
};
export default Canvas;
