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
      loading: false
    };
  }

  handleForm = (count, results, header) => {
    console.log(this.state.loading);

    this.setState({ count, results, header, loading: false });
    console.log(this.state.loading);
  };

  saveHistory = callObj => {
    let joined = this.state.history.concat(callObj);
    this.setState({ history: joined });
  };

  fetchData = async (url, method) => {
    this.setState({ loading: true });

    try {
      return await fetch(url, {
        method: `${method}`,
        headers: {
          "Content-Type": "application/json"
        }
        // body: JSON.stringify(data)
      });
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
            saveHistory={this.saveHistory}
            fetchData={this.fetchData}
          />
          <Route exact path="/">
            <HomePage
              results={this.state.results}
              header={this.state.header}
              loading={this.state.loading}
            />
          </Route>
          <Route exact path="/history">
            <History history={this.state.history} />
          </Route>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
