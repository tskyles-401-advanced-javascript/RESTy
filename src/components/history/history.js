import React from "react";
import { useHistory } from "react-router-dom";
import "./history.scss";
/**

 * @param {*} props
 * @description renders history page
 */
const History = props => {
  let history = useHistory();
  let items = props.history.map((item, i) => (
    <>
      <li key={i}>
        <span className="historyMethod">{item.method}</span>
        <span className="historyUrl">{item.url}</span>
        <button
          onClick={() => {
            props.fetchData(item.url, item.method);
            history.goBack();
          }}
        >
          Re-Run
        </button>
      </li>
    </>
  ));

  return <ul id="historyList">{items}</ul>;
};

export default History;
