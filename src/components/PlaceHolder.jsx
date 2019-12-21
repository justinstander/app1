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
    this.props.getTotalCost();
  }

  render() {
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
          {this.props.message && <ErrorAlert variant="danger">
            {this.props.message}
          </ErrorAlert>}
        </PlaceHolderHeader>
      </PlaceHolderContainer>
    );
  }
};

export default PlaceHolder;
