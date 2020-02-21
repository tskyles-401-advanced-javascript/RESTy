import React from "react";

const render = (children = null, condition = false) => {
  return condition ? children : null;
};

const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition })
  );

const Then = props => render(props.children, props.condition);
const Else = props => render(props.children, !props.condition);
const When = props => render(props.children, props.condition);
const Unless = props => render(props.children, props.condition);

export { If, Then, Else, When, Unless };
