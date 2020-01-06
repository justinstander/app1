import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {PageContainer} from "./Page.style";

export const SettingsRow = styled(Row)`
	align-items: center;
`;

export const SettingsCol = styled(Col)`
`;

export const SettingsLabelCol = styled(SettingsCol)`
	text-align: right;
`;

export const SettingsValueCol = styled(SettingsCol)`
	text-align: left;
`;

export const SettingsContainer = styled(PageContainer)`
	text-align: center;
`;