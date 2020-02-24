import React from "react";
/**
 *
 *
 * @param {*} [children=null]
 * @param {boolean} [condition=false]
 */
const render = (children = null, condition = false) => {
  return condition ? children : null;
};
/**
 *
 *
 * @param {*} props
 */
const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition })
  );
/**
 *
 *
 * @param {*} props
 */
const Then = props => render(props.children, props.condition);
/**
 *
 *
 * @param {*} props
 */
const Else = props => render(props.children, !props.condition);
/**
 *
 *
 * @param {*} props
 */
const When = props => render(props.children, props.condition);
/**
 *
 *
 * @param {*} props
 */
const Unless = props => render(props.children, props.condition);

export { If, Then, Else, When, Unless };

