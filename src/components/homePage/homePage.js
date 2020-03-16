import React from "react";
import AuthInput from "../authInput/authInput";
import BodyInput from "../bodyInput/bodyInput";
import Results from "../results/results";
import "./homePage.scss";
/**

 * @param {*} props
 * @description renders home page
 */
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
