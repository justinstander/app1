import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Api from "../../../api";

import { clear } from "../../../actions/Search";

import Search from "./Search";

const mapStateToProps = (state) => {
  return {
    message: state.main.message,
    ...state.search
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
    search: (params) => Api.search(dispatch, params),
    clear: () => dispatch(clear())
	};
};

const SearchContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Search));

export default SearchContainer;