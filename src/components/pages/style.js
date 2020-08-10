import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";

/**
 * Styled Bootstrap Container
 * @type {Container}
 */
export const PageContainer = styled(Container)`
  padding-top: 3.5rem;
  height: 100%;
`;

/**
 * [PageRow description]
 * @type {Row}
 */
export const PageRow = styled(Row)`
  height: 100%;
`
export const PageColumn = styled(Col)`
  height: 100%;
`
/**
 * Styled Bootstrap Image
 * @type {Image}
 */
export const PageImage = styled(Image)`
  width: fill-available;
`;