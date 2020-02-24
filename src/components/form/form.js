import React from "react";
import "./form.scss";
/**

 * @param {*} props
 * @description renders form and handles submit
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
/**
 *
 *
 * @memberof Form
 */
  handleSubmit = async e => {
    e.preventDefault();

    let url = e.target[0].value;
    let method = this.props.method;
    let body = this.props.body;
    console.log(url);
    console.log("method", method);

    let history = {
      url: url,
      method: method
    };

    this.props.fetchData(url, method, body);
    this.props.saveHistory(history);
  };

  render() {
    return (
      <form id="urlForm" onSubmit={this.handleSubmit}>
        <input placeholder="URL" />
        <div className="selectors">
          <a
            href="/#"
            className="methods"
            value="GET"
            onClick={this.props.handleMethodSelect}
          >
            GET
          </a>
          <a
            href="/#"
            className="methods"
            value="POST"
            onClick={this.props.handleMethodSelect}
          >
            POST
          </a>
          <a
            href="/#"
            className="methods"
            value="PUT"
            onClick={this.props.handleMethodSelect}
          >
            PUT
          </a>
          <a
            href="/#"
            className="methods"
            value="PATCH"
            onClick={this.props.handleMethodSelect}
          >
            PATCH
          </a>
          <a
            href="/#"
            className="methods"
            value="DELETE"
            onClick={this.props.handleMethodSelect}
          >
            DELETE
          </a>
          <button>Go!</button>
        </div>
      </form>
    );
  }
}

export default Form;
