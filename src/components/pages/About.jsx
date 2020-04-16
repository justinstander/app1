import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "./Page";

import {
  AboutContainer,
  AboutRow,
  AboutLabelCol,
  AboutValueCol
} from "./About.style";

class About extends Page {
  componentDidMount() {
    super.componentDidMount();

    const { totalCost } = this.props;
    if( totalCost === "$" ) {
      this.props.getTotalCost();
    }
  }

  render() {
    const { data } = this.props.totalCost;

    return (
      <AboutContainer>
        <h3>About</h3>
        <AboutRow>
          <AboutLabelCol>
            Last Month's Total AWS Cost:
          </AboutLabelCol>
          <AboutValueCol>
            <Badge variant="success">{data}</Badge>
          </AboutValueCol>
        </AboutRow>
      </AboutContainer>
    );
  }
}

export default About;
