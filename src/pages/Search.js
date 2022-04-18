import { Component } from 'react/cjs/react.production.min';
import Header from '../Components/Header';

const React = require('react');

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Pagina Search</h1>
      </div>
    );
  }
}
export default Search;
