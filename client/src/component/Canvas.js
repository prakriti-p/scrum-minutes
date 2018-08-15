import React from "react";
import PropTypes from "prop-types";
import "./Canvas.css";
import HomePage from "./HomePage";
import SendMinutesPage from "./SendMinutesPage";
import ManageHistoryPage from "./ManageHistoryPage";
import ManageTeamPage from "./ManageTeamPage";

class Canvas extends React.Component {

    handleClickFunction = () => {
        //this.props.pageToLoad = "manageTeamPage";
    }

    render() {

        var pageToLoad;
        if(this.props.pageToLoad === "homePage") pageToLoad = <HomePage/>;
        else if(this.props.pageToLoad === "sendMinutesPage") pageToLoad = <SendMinutesPage/>;
        else if(this.props.pageToLoad === "manageHistoryPage") pageToLoad = <ManageHistoryPage/>;
        else if(this.props.pageToLoad === "manageTeamPage") pageToLoad = <ManageTeamPage/>;

        return (
            <div className="item2">
            <p>{this.props.pageToLoad}</p>
                {pageToLoad}
            </div>
        );
    }
}
Canvas.propTypes = {
    pageToLoad: PropTypes.string
};
export default Canvas;
