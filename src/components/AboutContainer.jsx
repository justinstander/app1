import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Api from "../Api";

import About from "./About";

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

const AboutContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(About));

export default AboutContainer;