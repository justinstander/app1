import React from "react";
import {useSelector} from "react-redux";

import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import {
  PageContainer,
  PageImage
} from "../style";

/**
 * Home Page
 */
export default (props) => {
  const { message } = useSelector((state) => state.error);

  return (
    <PageContainer>
      <Row>
        <Col>
          <PageImage
            srcSet="haasandmilan-576w.jpg 576w, haasandmilan-768w.jpg 768w, haasandmilan-992w.jpg 992w, haasandmilan-1200w.jpg 1200w"
            fluid />
          <h3>Haas & Milan</h3>
          <p>
            Advertising Agency
          </p>
          {message && 
            <Alert variant="danger">
              {message}
            </Alert>
          }
        </Col>
      </Row>
    </PageContainer>
  );
};
