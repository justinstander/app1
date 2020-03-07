import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "./Page";

import {
  SettingsContainer,
  SettingsRow,
  SettingsLabelCol,
  SettingsValueCol
} from "./Settings.style";

class Settings extends Page {
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
      <SettingsContainer>
        <h3>About</h3>
        <SettingsRow>
          <SettingsLabelCol>
            Last Month's Total AWS Cost:
          </SettingsLabelCol>
          <SettingsValueCol>
            <Badge variant="success">{totalCost}</Badge>
          </SettingsValueCol>
        </SettingsRow>
      </SettingsContainer>
    );
  }
}

export default Settings;
