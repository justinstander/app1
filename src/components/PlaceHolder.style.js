import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const PlaceHolderContainer = styled.div`
  text-align: center;
`;

export const PlaceHolderHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-shadow: 3px 3px 3px #000000;
`;

export const PlaceHolderJumbotron = styled(Jumbotron)`
  background-image: url('haasandmilan.png');
  background-size: cover;
  background-position: center;
`;
