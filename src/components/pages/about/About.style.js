import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {PageContainer} from "../Page.style";

export const AboutRow = styled(Row)`
	align-items: center;
`;

export const AboutCol = styled(Col)`
`;

export const AboutLabelCol = styled(AboutCol)`
	text-align: right;
`;

export const AboutValueCol = styled(AboutCol)`
	text-align: left;
`;

export const AboutContainer = styled(PageContainer)`
	text-align: center;
`;