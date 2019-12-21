import { connect } from "react-redux";

import Api from "../Api";
// import { getTotalCost } from "../actions";

import PlaceHolder from "./PlaceHolder";

const mapStateToProps = (state) => {
  return {
    totalCost: state.main.totalCost,
    message: state.main.message
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
    getTotalCost: () => {
        Api.getTotalCost(dispatch);
		}
	};
};

const PlaceHolderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceHolder);

export default PlaceHolderComponent;