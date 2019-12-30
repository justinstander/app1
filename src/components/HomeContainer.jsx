import { connect } from "react-redux";

import Api from "../Api";

import Home from "./Home";

const mapStateToProps = (state) => {
  return {
    totalCost: state.main.totalCost,
    message: state.main.message
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
    	getTotalCost: (params) => {Api.getTotalCost(dispatch, params);}
	};
};

const HomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeComponent;