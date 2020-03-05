import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Api from "../../Api";

import { clear } from "../../actions/search";

import Search from "./Search";

const mapStateToProps = (state) => {
  return {
    message: state.main.message,
    searchResults: state.search.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
    search: (params) => {Api.search(dispatch, params);},
    clear: () => {dispatch(clear());}
	};
};

const SearchContainer = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Search));

export default SearchContainer;