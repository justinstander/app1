import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

export const PlaceHolderContainer = styled.div`
`;

export const PlaceHolderHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const PlaceHolderJumbotron = styled(Jumbotron)`
  color: white;
  text-align: center;
  text-shadow: 3px 3px 3px #000000;
  font-size: calc(10px + 2vmin);
  background-image: url('haasandmilan.png');
  background-size: cover;
  background-position: center;
`;

export const CostBadge = styled(Badge)`
`;

export const ErrorAlert = styled(Alert)`
`;
