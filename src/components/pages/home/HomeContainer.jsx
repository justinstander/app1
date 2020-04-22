import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Home from "./Home";

const mapStateToProps = (state) => {
  return {
    message: state.error.message
  };
};

const HomeContainer = withRouter(connect(
  mapStateToProps
)(Home));

export default HomeContainer;