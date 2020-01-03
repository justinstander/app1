import React from "react";

import Badge from "react-bootstrap/Badge";

import Page from "./Page";
import {PageContainer} from "./Page.style";

import {
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
      <PageContainer>
        <h3>About</h3>
        <SettingsRow>
          <SettingsLabelCol>
            AWS Cost:
          </SettingsLabelCol>
          <SettingsValueCol>
            <Badge variant="success">{totalCost}</Badge>
          </SettingsValueCol>
        </SettingsRow>
      </PageContainer>
    );
  }
};

export default Settings;
