import _ from "lodash";

import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux";

import Alert from "react-bootstrap/Alert";
import FormControl from "react-bootstrap/FormControl";

import { PageContainer } from "../Page.style";
import { clear } from "../../../actions/Search";
import Api from "../../../api"
import {
  SearchForm,
  SearchResults,
  SearchButton
} from "./Search.style";

const PROPS_SEARCH_RESULTS_DATA = "searchResults.data";

export default (props) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [searchDisabled, setSearchDisabled] = useState(true)

  /**
   * Handles change in search field value
   * 
   * @param  {Object}     event 
   * @return {undefined}
   */
  const onSearchChange = (event) => {
    setSearch(event.target.value)
    setSearchDisabled(event.target.value === "")
  }

  /**
   * Handles clear button click
   * 
   * @param  {Object}     event 
   * @return {undefined}
   */
  const onClearClick = (event) => {
    dispatch(clear())
    setSearch("")
    setSearchDisabled(true)
  }

  /**
   * Handles search form submission
   *  
   * @param  {Object}     event 
   * @return {undefined}
   */
  const onSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(Api.search({search}))
  }

  const {
    message,
    searching
  } = useSelector((state) => ({
    message: state.error.message,
    ...state.search
  }));

  const data = useSelector((state) => _.get(state.search, PROPS_SEARCH_RESULTS_DATA))
  const disabled = searching || searchDisabled;

  return (
    <PageContainer>
      <h3>Search</h3>
      {message && 
        <Alert variant="danger">{message}</Alert>
      }
      <SearchForm onSubmit={onSearchSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchChange}
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
          onClick={onClearClick}
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
};