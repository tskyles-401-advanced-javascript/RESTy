import React from "react";
import ReactJson from "react-json-view";
import { If, Then, Else } from "../conditionals/conditionals";
import "./results.scss";

const Results = props => {
  return (
    <section>
      <If condition={props.loading}>
        <Then>
          <div>Fetching...</div>
        </Then>
      </If>
      <If condition={!props.loading && props.results}>
        <Then>
          <div id="resultsContainer">
            <div id="headerDisplay">
              <ReactJson src={props.header} name="Header" />
            </div>
            <div id="resultsDisplay">
              <ReactJson src={props.results} name="Response" />
            </div>
          </div>
        </Then>
      </If>
    </section>
  );
};

export default Results;
