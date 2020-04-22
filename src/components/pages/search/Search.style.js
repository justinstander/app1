import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

/**
 * Search Input Form
 * <p>Styled Bootstrap Form</p>
 * @type {Form}
 */
export const SearchForm = styled(Form)`
	width: 100%;
	margin-bottom: 1rem;
`;

/**
 * Search Results Container
 * <p>Styled Bootstrap Container</p>
 * @type {Container}
 */
export const SearchResults = styled(Container)`
`;

/**
 * Search Button Component
 * <p>Styled Bootstrap Button</p>
 * @type {Button}
 */
export const SearchButton = styled(Button)`
	margin-top: 1rem;
`;