import React from "react";
import Form from "./components/form/form";
import HomePage from "./components/homePage/homePage";
import History from "./components/history/history";
import Header from "./components/header/header";
import "./styles.scss";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      loading: false,
      method: "GET"
    };
  }

  handleMethodSelect = e => {
    e.preventDefault();
    this.setState({ method: e.target.text });
  };

  handleForm = (count, results, header, method) => {
    this.setState((prevState, props) => {
      return { count, results, header, loading: false };
    });
  };

  saveHistory = callObj => {
    this.setState((prevState, props) => {
      return { history: prevState.history.concat(callObj) };
    });
  };

  getBodyData = body => {
    this.setState({ body: [body] });
  };

  getFetchOptions = (method, body) => {
    let noBodyOptions = {
      method: method,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.state.auth}`
      })
    };
    let bodyOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.state.auth}`
      },
      body: body
    };

    if (method === ("GET" || "DELETE")) {
      return noBodyOptions;
    } else {
      return bodyOptions;
    }
  };

  getTokenInfo = e => {
    e.preventDefault();
    this.setState({ auth: `Bearer ${e.target.value}` });
  };

  getBasicInfo = e => {
    e.preventDefault();
    let input;
    if (e.target.id === "name") {
      this.setState({ username: e.target.value });
    }
    if (e.target.id === "pass") {
      this.setState({ password: e.target.value });
    }
    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(
      `${this.state.username}:${this.state.password}`
    ).toString("base64");

    input = `Basic ${encodedAuth}`;
    this.setState({ auth: input });
  };

  fetchData = async (url, method, body) => {
    this.setState({ loading: true });
    let fetchOptions = this.getFetchOptions(method, body);
    try {
      let raw = await fetch(url, fetchOptions);
      let data = await raw.json();
      let count = data.count;
      let response = data;

      let headers = {
        "Content-type": raw.headers.get("Content-Type")
      };
      this.handleForm(count, response, headers);
    } catch (error) {}
  };

  saveHistory;
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Form
            handleForm={this.handleForm}
            handleMethodSelect={this.handleMethodSelect}
            saveHistory={this.saveHistory}
            fetchData={this.fetchData}
            method={this.state.method}
            body={this.state.body}
          />
          <Route exact path="/">
            <HomePage
              results={this.state.results}
              header={this.state.header}
              loading={this.state.loading}
              getBodyData={this.getBodyData}
              method={this.state.method}
              getTokenInfo={this.getTokenInfo}
              getBasicInfo={this.getBasicInfo}
            />
          </Route>
          <Route exact path="/history">
            <History history={this.state.history} fetchData={this.fetchData} />
          </Route>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
