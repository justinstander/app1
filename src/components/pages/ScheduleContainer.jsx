import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Schedules from "./Schedules";

const SchedulesContainer = withRouter(connect()(Schedules));

export default SchedulesContainer;