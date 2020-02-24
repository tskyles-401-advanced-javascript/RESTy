import React from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import { If, Then, Else } from "../conditionals/conditionals";

import "./bodyInput.scss";

const BodyInput = props => {
  return (
    <div id="bodyInputContainer">
      <h4>Body:</h4>
      <If condition={props.method === "GET" || props.method === "DELETE"}>
        <Then>
          <JSONInput
            id="bodyInput"
            placeholder={{ data: "Sample Data" }}
            locale={locale}
            height="200px"
            width="500px"
            theme="light_mitsuketa_tribute"
            viewOnly="true"
            colors={{
              background: "#d3d3d3"
            }}
            onChange={data => props.getBodyData(data.json)}
          />
        </Then>
        <Else>
          <JSONInput
            id="bodyInput"
            placeholder={{ data: "Sample Data" }}
            locale={locale}
            height="200px"
            width="500px"
            theme="light_mitsuketa_tribute"
            onChange={data => props.getBodyData(data.json)}
          />
        </Else>
      </If>
    </div>
  );
};

export default BodyInput;
