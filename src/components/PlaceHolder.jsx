import React from "react";

import ReactGA from "react-ga";

import { Menu } from "./Menu";
import {
  PlaceHolderContainer,
  PlaceHolderHeader,
  PlaceHolderJumbotron,
  CostBadge,
  ErrorAlert
} from "./PlaceHolder.style";

class PlaceHolder extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview("/");
    this.props.getTotalCost();
  }

  render() {
    const { message } = this.props;

    return (
      <PlaceHolderContainer>
        <PlaceHolderHeader>
          <Menu />
          <PlaceHolderJumbotron>
            Welcome to Haas & Milan
          </PlaceHolderJumbotron>
          <CostBadge variant="success">
            {this.props.totalCost}
          </CostBadge>
          {message && <ErrorAlert variant="danger">
            {message}
          </ErrorAlert>}
        </PlaceHolderHeader>
      </PlaceHolderContainer>
    );
  }
};

export default PlaceHolder;
