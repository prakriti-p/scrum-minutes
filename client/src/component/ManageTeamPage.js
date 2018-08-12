import React from "react";
import PropTypes from "prop-types";
import "./ManageTeamPage.css";

class ManageTeamPage extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div className="item2">
                <div className="headings">
                    <span className="primary-heading">Your Clan!</span><br/>
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
ManageTeamPage.propTypes = {
  resetFunction: PropTypes.func
};
export default ManageTeamPage;
