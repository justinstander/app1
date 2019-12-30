import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "./Page";

class About extends Page {
  componentDidMount() {
  	this.props.getTotalCost();
  }

  render() {
  	const { totalCost } = this.props;

    return (
      <div>
      	This month's AWS Cost for haasandmilan.com:<br/>
      	<Badge variant="success">{totalCost}</Badge>
      </div>
    );
  }
};

export default About;
