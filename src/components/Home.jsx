import React from "react";

import ReactGA from "react-ga";

import { Menu } from "./Menu";

import {
  HomeContainer,
  ErrorAlert
} from "./Home.style";

class Home extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview("/");
  }

  render() {
    const { message } = this.props;

    return (
      <HomeContainer>
        <Menu />
        {message && 
          <ErrorAlert variant="danger">
            {message}
          </ErrorAlert>
        }
      </HomeContainer>
    );
  }
};

export default Home;
