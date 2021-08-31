import React from "react";
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

export default ({ homePage, setSearchTerm }) => (
  <Form className={`main-sidebar__search border-right d-sm-flex ${ !homePage ? 'd-md-none d-lg-none w-100' : ''}`} style={{ display: "flex", minHeight: "45px", width: `${homePage && '100%'}`, maxWidth: `${homePage && '400px'}`}}>
    <InputGroup seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
        <FormInput
          className="navbar-search"
          placeholder={!homePage ? "Search for something..." : 'Search company name'}
          aria-label="Search"
          onChange = {({ target }) => setSearchTerm(target.value)}
        />
      </InputGroupAddon>
    </InputGroup>
  </Form>
);
