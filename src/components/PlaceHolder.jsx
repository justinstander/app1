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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, tortor nec scelerisque porta, neque quam sollicitudin odio, in condimentum arcu magna in elit. Sed blandit gravida elit non rhoncus. Curabitur ut imperdiet ipsum, ornare consectetur velit. Pellentesque convallis in elit vitae mollis. In ligula augue, vulputate blandit suscipit ut, ornare in ex. Donec id ligula vitae quam semper interdum vel nec diam.
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
