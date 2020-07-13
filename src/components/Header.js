import React from 'react';
import SearchForm from './SearchForm';

const Header = (props) => {
  return (
    <header>
      <div className="container text-center">
        <h1 className="display-4 text-dark mt-5">{ props.title }</h1>
        <p className="lead mb-5">{ props.lead }</p>
        <SearchForm handleSubmit={ props.handleSubmit } />
      </div>
    </header>
  );
}

export default Header;