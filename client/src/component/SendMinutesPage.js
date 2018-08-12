import React from "react";
import PropTypes from "prop-types";
import "./SendMinutesPage.css";

class SendMinutesPage extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div className="item2">
                <div className="headings">
                    <span className="primary-heading">Let's send today's minutes!</span>
                </div>
            </div>
        );
    }
}
SendMinutesPage.propTypes = {
  resetFunction: PropTypes.func
};
export default SendMinutesPage;
