import React from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import IconBox from "./IconBox";

class Menu extends React.Component {
    handleClickFunction = (name) => {
        this.props.changePageNewFunction(name);
    }

    render() {
        return (
            <div className="item1">
                <IconBox value="home" name="homePage" changePageFunction={this.handleClickFunction}/>
                <IconBox value="envelope" name="sendMinutesPage" changePageFunction={this.handleClickFunction}/>
                <IconBox value="history" name="manageHistoryPage" changePageFunction={this.handleClickFunction}/>
                <IconBox value="users" name="manageTeamPage" changePageFunction={this.handleClickFunction}/>
            </div>
        );
    }
}
Menu.propTypes = {
    changePageNewFunction: PropTypes.func
};
export default Menu;
