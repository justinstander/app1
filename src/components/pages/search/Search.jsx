import _ from "lodash";

import React from "react";

import Alert from "react-bootstrap/Alert";
import FormControl from "react-bootstrap/FormControl";

import Page from "../Page";
import { PageContainer } from "../Page.style";

import {
  SearchForm,
  SearchResults,
  SearchButton
} from "./Search.style";

/**
 * path to the search results in props
 * 
 * @type {String}
 */
const PROPS_SEARCH_RESULTS_DATA = "searchResults.data";

/**
 * Search Page
 */
class Search extends Page {
  /**
   * @constructor
   * @return {[type]} [description]
   */
  constructor() {
    super();

    this.state = {
      search: "",
      searchDisabled: true
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  /**
   * Handles change in search field value
   * 
   * @param  {Object}     event 
   * @return {undefined}
   */
  onSearchChange(event) {
    this.setState({
      search: event.target.value,
      searchDisabled: event.target.value === ""
    });
  }

  /**
   * Handles clear button click
   * 
   * @param  {Object}     event 
   * @return {undefined}
   */
  onClearClick(event) {
    this.props.clear();

    this.setState({
      search: "",
      searchDisabled: true
    });
  }

  /**
   * Handles search form submission
   *  
   * @param  {Object}     event 
   * @return {undefined}
   */
  onSearchSubmit(event) {
    event.preventDefault();
    
    this.props.search({search: this.state.search});
  }

  /**
   * @inheritDoc
   */
  render() {
    const {
      message,
      searching
    } = this.props;
    const {
      search,
      searchDisabled
    } = this.state;
    const data = _.get(this.props, PROPS_SEARCH_RESULTS_DATA);

    const disabled = searching || searchDisabled;

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
            value={search}
            onChange={this.onSearchChange}
          />
          <SearchButton
            variant="primary"
            disabled={disabled}
            type="submit"
          >
            Search
          </SearchButton>{" "}
          <SearchButton
            variant="secondary"
            disabled={disabled}
            onClick={this.onClearClick}
          >
            Clear
          </SearchButton>
        </SearchForm>
        {data && 
          <SearchResults>
            <h4>Search Results</h4>
            {data.map((result, i) => {
              return (
                <p key={i}>
                  {`${result.AwsRequestId.S}: ${result.Total.S}`}
                </p>
              );
            })}
            {data.length === 0 &&
              <p>No results found</p>
            }
          </SearchResults>
        }
      </PageContainer>
    );
  }
}

export default Search;