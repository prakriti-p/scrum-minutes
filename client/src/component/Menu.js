import React from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import IconBox from "./IconBox";

class Menu extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div className="item1">
                <IconBox value="home"/>
                <IconBox value="envelope"/>
                <IconBox value="history"/>
                <IconBox value="users"/>
            </div>
        );
    }
}
Menu.propTypes = {
  resetFunction: PropTypes.func
};
export default Menu;
