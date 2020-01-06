import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Api from "../../Api";

import Settings from "./Settings";

const mapStateToProps = (state) => {
  return {
    totalCost: state.main.totalCost
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getTotalCost: (params) => {Api.getTotalCost(dispatch, params);}
	};
};

const SettingsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings));

export default SettingsContainer;