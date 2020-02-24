import React from "react";
import Results from "../results/results";
import BodyInput from "../bodyInput/bodyInput";
import AuthInput from "../authInput/authInput";
import "./homePage.scss";

const HomePage = props => {
  return (
    <>
      <div id="inputs">
        <BodyInput getBodyData={props.getBodyData} method={props.method} />
        <AuthInput
          getTokenInfo={props.getTokenInfo}
          getBasicInfo={props.getBasicInfo}
        />
      </div>
      <Results
        results={props.results}
        header={props.header}
        loading={props.loading}
      />
    </>
  );
};

export default HomePage;
