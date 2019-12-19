import { connect } from "react-redux";
import { getTotalCost } from "../actions";

import PlaceHolder from "./PlaceHolder";

const mapStateToProps = (state) => {
  return {
    totalCost: state.main.totalCost
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
    getTotalCost: () => {
        dispatch(getTotalCost());
		}
	};
};

const PlaceHolderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceHolder);

export default PlaceHolderComponent;