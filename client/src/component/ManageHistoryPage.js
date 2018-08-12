import React from "react";
import PropTypes from "prop-types";
import "./ManageHistoryPage.css";

class ManageHistoryPage extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div className="item2">
                <div className="headings">
                    <span className="primary-heading">Your sent minutes!</span>
                </div>
            </div>
        );
    }
}
ManageHistoryPage.propTypes = {
  resetFunction: PropTypes.func
};
export default ManageHistoryPage;
