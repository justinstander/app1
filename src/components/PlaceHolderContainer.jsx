import { connect } from "react-redux";

import Api from "../Api";

import PlaceHolder from "./PlaceHolder";

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

const PlaceHolderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceHolder);

export default PlaceHolderComponent;