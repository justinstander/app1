import React from "react";

import Alert from "react-bootstrap/Alert";
import FormControl from "react-bootstrap/FormControl";

import Page from "./Page";
import {PageContainer} from "./Page.style";

import {
  SearchForm,
  SearchResults,
  SearchButton
} from "./Search.style";

class Search extends Page {
  constructor() {
    super();

    this.state = {
      search: "",
      searchDisabled: true,
      clearDisabled: true
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchChange(event) {
    const isValueEmpty = event.target.value === "";
    
    this.setState({
      search: event.target.value,
      searchDisabled: isValueEmpty,
      clearDisabled: isValueEmpty && this.state.search === ""
    });
  }

  onClearClick(event) {
    this.props.clear();

    this.setState({
      search: "",
      searchDisabled: true,
      clearDisabled: true
    });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    
    this.props.search({search: this.state.search});
  }

  render() {
    const {
      message,
      searchResults
    } = this.props;

    return (
      <PageContainer>
        <h3>Search</h3>
        {message && 
          <Alert variant="danger">{message}</Alert>
        }
        <SearchForm onSubmit={this.onSearchSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.state.search}
            onChange={this.onSearchChange}
          />
          <SearchButton
            variant="primary"
            disabled={this.state.searchDisabled}
            type="submit"
          >
            Search
          </SearchButton>{" "}
          <SearchButton
            variant="secondary"
            disabled={this.state.clearDisabled}
            onClick={this.onClearClick}
          >
            Clear
          </SearchButton>
        </SearchForm>
        {searchResults && 
          <SearchResults>
            <h4>Search Results</h4>
            {searchResults.map((result, i) => {
              return (<p key={i}>{`${result.AwsRequestId.S}: ${result.Total.S}`}</p>);
            })}
            {searchResults.length === 0 &&
              <p>No results found</p>
            }
          </SearchResults>
        }
      </PageContainer>
    );
  }
}

export default Search;