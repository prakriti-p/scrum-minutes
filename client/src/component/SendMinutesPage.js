import React from "react";
import PropTypes from "prop-types";
import "./SendMinutesPage.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { teamMembers: state.teamMembers };
  };

class ConnectedSendMinutesPage extends React.Component {

    createTable = () => {
        let table = []
        // Outer loop to create parent
        for (let i = 0; i < this.props.teamMembers.length; i++) {
          let children = []
          //Inner loop to create children
          children.push(<td key={`${this.props.teamMembers[i]}-row-name`}>{this.props.teamMembers[i]}</td>)
          for (let j = 0; j < 2; j++) {
            children.push(<td key={`${this.props.teamMembers[i]}-row-${j}`}><textarea/></td>)
          }
          //Create the parent and add the children
          table.push(<tr key={`${this.props.teamMembers[i]}-row`}>{children}</tr>)
        }
        return table
    }

    render(teamMembers) {
        return (
            <div className="item2">
                <div className="headings">
                    <span className="primary-heading">Let's send today's minutes!</span>
                </div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Updates</th>
                            <th>Action Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
                <button>Send Mail</button>
            </div>
        );
    }
}

ConnectedSendMinutesPage.propTypes = {
    teamMembers: PropTypes.array
};

const SendMinutesPage = connect(mapStateToProps)(ConnectedSendMinutesPage);

export default SendMinutesPage;
