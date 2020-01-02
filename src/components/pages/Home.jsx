import React from "react";

import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'

import Page from "./Page";
import { Container } from "./Page.style";

class Home extends Page {
  render() {
    const { message } = this.props;

    return (
      <Container>
        <Image src="haasandmilan.jpg" fluid/>
        {message && 
          <Alert variant="danger">
            {message}
          </Alert>
        }
      </Container>
    );
  }
};

export default Home;
