import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

export const PlaceHolderContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PlaceHolderHeader = styled.div`
  width: 80%;
`;

export const PlaceHolderJumbotron = styled(Jumbotron)`
  width: 100%;
`;

export const CostBadge = styled(Badge)`
`;

export const ErrorAlert = styled(Alert)`
`;
