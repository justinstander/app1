import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import Page from "./Page";
import { Container } from "./Page.style";

class Search extends Page {
	render() {
		return(
			<Container>
				<h3>Search</h3>
				<Form inline>
      				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
      				<Button variant="outline-success">Search</Button>
    			</Form>
			</Container>
		)
	}
}

export default Search;