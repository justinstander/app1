import styled from "styled-components";

import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

export const HomeContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CostBadge = styled(Badge)`
`;

export const ErrorAlert = styled(Alert)`
`;
