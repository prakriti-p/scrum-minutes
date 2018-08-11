import React from "react";
import PropTypes from "prop-types";
import "./Reset.css";

class Reset extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div id="controls" className="flex-item sidebar">
                <div></div>
            </div>
        );
    }
}
Reset.propTypes = {
  resetFunction: PropTypes.func
};
export default Reset;
