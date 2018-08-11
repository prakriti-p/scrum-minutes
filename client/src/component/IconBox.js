import React from "react";
import PropTypes from "prop-types";
import "./IconBox.css";

class IconBox extends React.Component {
    handleClickFunction = () => {
        this.props.resetFunction();
    }

    render() {
        return (
            <div className="iconbox">
                <i className={`fa fa-${ this.props.value } fa-2x`} aria-hidden="true"></i>
            </div>
        );
    }
}
IconBox.propTypes = {
  value: PropTypes.string
};
export default IconBox;
