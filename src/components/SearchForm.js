import React from 'react';

const SearchForm = (props) => {
  return (
    <form className="mb-5" >
      <input
        type="text"
        className="form-control mx-auto shadow-sm"
        id="bookSearch"
        placeholder="Search by title, author, published date etc..."
        aria-label="Search by title, author, published date etc..."
        aria-describedby="basic-addon1"
        onKeyUp={ props.handleSubmit }
        autoFocus
      />
    </form>
  );
}

export default SearchForm;