import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./App.css";
import { getCognitiveServicesConfig } from "./api/config";

import { Navbar } from "./components/Navbar";
import { Vision } from "./vision";
import { TextAnalytics } from './text-analytics'

class App extends Component {
  state = {
    hasLoaded: false,
    cognitiveServicesConfig: null
  };
  async componentDidMount() {
    const cognitiveServicesConfig = await getCognitiveServicesConfig();
    this.setState({
      hasLoaded: true,
      cognitiveServicesConfig
    });
  }
  render() {
    const { hasLoaded, cognitiveServicesConfig } = this.state;
    if (!hasLoaded) return <div />;
    return (
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <section>
            <div className="container">
              <Route
                exact
                path="/"
                render={() => <Vision config={cognitiveServicesConfig} />}
              />
              <Route
                exact
                path="/text-analytics"
                render={() => <TextAnalytics config={cognitiveServicesConfig} />}
              />
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
