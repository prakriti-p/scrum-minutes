import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changePage } from "../js/actions/index";
import "./IconBox.css";

const mapDispatchToProps = dispatch => {
    return {
        changePage: page => dispatch(changePage(page))
    };
  };

class IconBoxConnected extends React.Component {

    handleSubmit = (event) => {
        this.props.changePage(this.props.name);
      }

    render() {
        return (
            <div className="iconbox" onClick={this.handleSubmit}>
                <i className={`fa fa-${ this.props.value } fa-2x`} aria-hidden="true"></i>
            </div>
        );
    }
}

IconBoxConnected.propTypes = {
  value: PropTypes.string,
  changePageFunction: PropTypes.func,
  name: PropTypes.string
};

const IconBox = connect(null, mapDispatchToProps)(IconBoxConnected);

export default IconBox;
