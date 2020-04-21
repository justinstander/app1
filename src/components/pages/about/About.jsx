import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "../Page";

import {
  AboutContainer,
  AboutRow,
  AboutLabelCol,
  AboutValueCol
} from "./About.style";

/**
 * About Page
 */
class About extends Page {
  /**
   * Fetches the total cost if needed
   * @return {undefined}
   */
  componentDidMount() {
    super.componentDidMount();

    if( this.props.totalCost === "$" ) {
      this.props.getTotalCost();
    }
  }

  /**
   * @inheritDoc
   */
  render() {
    return (
      <AboutContainer>
        <h3>About</h3>
        <AboutRow>
          <AboutLabelCol>
            Last Month's Total AWS Cost:
          </AboutLabelCol>
          <AboutValueCol>
            <Badge variant="success">{this.props.totalCost.data}</Badge>
          </AboutValueCol>
        </AboutRow>
      </AboutContainer>
    );
  }
}

export default About;
