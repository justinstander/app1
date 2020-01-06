import React from "react";

import Alert from "react-bootstrap/Alert";

import Page from "./Page";
import {
  PageContainer,
  PageImage
} from "./Page.style";

class Home extends Page {
  render() {
    const { message } = this.props;

    return (
      <PageContainer>
        <PageImage
          srcSet="haasandmilan-576w.jpg 576w, haasandmilan-768w.jpg 768w, haasandmilan-992w.jpg 992w, haasandmilan-1200w.jpg 1200w"
          fluid />
        <h3>Haas & Milan</h3>
        <p>
          Serverless React applications
        </p>
        {message && 
          <Alert variant="danger">
            {message}
          </Alert>
        }
      </PageContainer>
    );
  }
}

export default Home;
