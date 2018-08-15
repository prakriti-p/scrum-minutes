import React from "react";
import { connect } from "react-redux";

/* const mapStateToProps = state => {
  return { articles: state.articles };
}; */

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

/* const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
); */

const ConnectedList = ({ currentPage }) => (
  <div>{currentPage}</div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;