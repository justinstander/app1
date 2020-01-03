import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const SettingsRow = styled(Row)`
	width: 100%;
`;

export const SettingsCol = styled(Col)`
	font-size: .93em;
`;

export const SettingsLabelCol = styled(SettingsCol)`
	text-align: right;
`;

export const SettingsValueCol = styled(SettingsCol)`
	text-align: left;
`;