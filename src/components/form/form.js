import React from "react";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "GET"
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    let url = e.target[0].value;
    let method = this.state.method;
    console.log(url);
    console.log(method);

    let raw = await this.props.fetchData(url, method);
    let data = await raw.json();

    let count = data.count;
    let response = data;
    let headers = {
      "Content-type": raw.headers.get("Content-Type")
    };
    let history = {
      url: url,
      method: method
    };

    this.props.saveHistory(history);
    this.props.handleForm(count, response, headers);
  };

  handleMethodSelect = e => {
    e.preventDefault();
    this.setState({ method: e.target.text });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="URL" />
        <div className="selectors">
          <a
            href="/#"
            className="methods"
            value="GET"
            onClick={this.handleMethodSelect}
          >
            GET
          </a>
          <a
            href="/#"
            className="methods"
            value="POST"
            onClick={this.handleMethodSelect}
          >
            POST
          </a>
          <a
            href="/#"
            className="methods"
            value="PUT"
            onClick={this.handleMethodSelect}
          >
            PUT
          </a>
          <a
            href="/#"
            className="methods"
            value="PATCH"
            onClick={this.handleMethodSelect}
          >
            PATCH
          </a>
          <a
            href="/#"
            className="methods"
            value="DELETE"
            onClick={this.handleMethodSelect}
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
