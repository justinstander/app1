import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "./Page";
import { Container } from "./Page.style";

class About extends Page {
  componentDidMount() {
    super.componentDidMount();

    const { totalCost } = this.props;
    if( totalCost === "$" ) {
      this.props.getTotalCost();
    }
  }

  render() {
  	const { totalCost } = this.props;

    return (
      <Container>
      	This month's AWS Cost for haasandmilan.com:<br/>
      	<Badge variant="success">{totalCost}</Badge>
      </Container>
    );
  }
};

export default About;
