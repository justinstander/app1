import React,{useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import Api from "../../../api"
import Badge from "react-bootstrap/Badge";

import {
  AboutContainer,
  AboutRow,
  AboutLabelCol,
  AboutValueCol
} from "./About.style";

export default (props) => {
  const { totalCost } = useSelector((state) => state.about)
  const dispatch = useDispatch();

  useEffect(() => {
    if( totalCost === "$" ) {
      dispatch(Api.getTotalCost())
    }
  })

  return (
    <AboutContainer>
      <h3>About</h3>
      <AboutRow>
        <AboutLabelCol>
          Last Month's Total AWS Cost:
        </AboutLabelCol>
        <AboutValueCol>
          <Badge variant="success">{totalCost.data}</Badge>
        </AboutValueCol>
      </AboutRow>
    </AboutContainer>
  );
};
