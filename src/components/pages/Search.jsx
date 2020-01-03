import React from "react";

import FormControl from "react-bootstrap/FormControl";

import Page from "./Page";
import {PageContainer} from "./Page.style";

import {
	SearchForm,
	SearchButton
} from "./Search.style";

class Search extends Page {
	render() {
		return(
			<PageContainer>
				<SearchForm>
      				<FormControl type="text" placeholder="Search" />
      				<SearchButton variant="outline-success">Search</SearchButton>
    			</SearchForm>
			</PageContainer>
		)
	}
}

export default Search;