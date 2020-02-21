import React from "react";
import Results from "../results/results";

const HomePage = props => {
  return (
    <>
      <Results
        results={props.results}
        header={props.header}
        loading={props.loading}
      />
    </>
  );
};

export default HomePage;
