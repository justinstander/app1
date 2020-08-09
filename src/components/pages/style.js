import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

/**
 * Styled Bootstrap Container
 * @type {Container}
 */
export const PageContainer = styled(Container)`
  padding: 4.5rem 1rem 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Styled Bootstrap Image
 * @type {Image}
 */
export const PageImage = styled(Image)`
  width: fill-available;
`;