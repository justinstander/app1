import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "./Page";
import { Container } from "./Page.style";

import {
  SettingsRow,
  SettingsCol,
  SettingsLabelCol
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
  	const { totalCost } = this.props;

    return (
      <Container>
        <h3>Settings</h3>
        <SettingsRow>
          <SettingsLabelCol>
            AWS Cost:
          </SettingsLabelCol>
          <SettingsCol>
            <Badge variant="success">{totalCost}</Badge>
          </SettingsCol>
        </SettingsRow>
        <SettingsRow>
          <SettingsLabelCol>
            Some other stuff:
          </SettingsLabelCol>
          <SettingsCol>
            <Badge variant="success">some value</Badge>
          </SettingsCol>
        </SettingsRow>
      </Container>
    );
  }
};

export default About;
