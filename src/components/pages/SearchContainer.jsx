import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Search from "./Search";

const SearchContainer = withRouter(connect()(Search));

export default SearchContainer;