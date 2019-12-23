import React from "react";

import {
  PlaceHolderContainer,
  PlaceHolderHeader,
  PlaceHolderJumbotron,
  CostBadge,
  ErrorAlert
} from "./PlaceHolder.style";

class PlaceHolder extends React.PureComponent {
  componentDidMount() {
    this.props.getTotalCost({totalCost:"bar"});
  }

  render() {
    const { message } = this.props;

    return (
      <PlaceHolderContainer>
        <PlaceHolderHeader>
          <CostBadge variant="success">
            {this.props.totalCost}
          </CostBadge>
          <PlaceHolderJumbotron>
            <div>
              <h1>Coming Soon</h1>
              <h2>The Greatest Advertising Agency Ever</h2>
            </div>
          </PlaceHolderJumbotron>
          {message && <ErrorAlert variant="danger">
            {message}
          </ErrorAlert>}
        </PlaceHolderHeader>
      </PlaceHolderContainer>
    );
  }
};

export default PlaceHolder;
