import React from "react";
import { useHistory } from "react-router-dom";

const History = props => {
  let history = useHistory();
  let items = props.history.map((item, i) => (
    <>
      <li key={i}>
        <span>{item.method}</span>
        {item.url}
        <button onClick={() => history.goBack()}>Go</button>
      </li>
    </>
  ));
  return <ul>{items}</ul>;
};

export default History;
