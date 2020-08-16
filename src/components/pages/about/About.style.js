import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {PageContainer} from "../style";

/**
 * About Section Row
 * <p>Styled Bootstrap Row</p>
 * @type {Row}
 */
export const AboutRow = styled(Row)`
	align-items: center;
`;

/**
 * About Section Column
 * <p>Styled Bootstrap Column</p>
 * @type {Col}
 */
export const AboutCol = styled(Col)`
`;

/**
 * About Section Label Column
 * 
 * @type {AboutCol}
 */
export const AboutLabelCol = styled(AboutCol)`
	text-align: right;
`;

/**
 * About Section Value Column
 * 
 * @type {AboutCol}
 */
export const AboutValueCol = styled(AboutCol)`
	text-align: left;
`;

/**
 * About Page Container
 *
 * @type {PageContainer}
 */
export const AboutContainer = styled(PageContainer)`
	text-align: center;
`;