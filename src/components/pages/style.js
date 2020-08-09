import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

/**
 * Styled Bootstrap Container
 * @type {Container}
 */
export const PageContainer = styled(Container)`
  padding: 3.5rem 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * [PageRow description]
 * @type {Row}
 */
export const PageRow = styled(Row)`
  flex: 1;
`

/**
 * Styled Bootstrap Image
 * @type {Image}
 */
export const PageImage = styled(Image)`
  width: fill-available;
`;