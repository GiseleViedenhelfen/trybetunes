import { Component } from 'react';
// import { getUser } from '../services/userAPI';

const React = require('react');

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loading: false,
  //   };
  //   this.callFunction = this.callFunction.bind(this);
  // }

  // async callFunction() {
  //   this.setState({ loading: true });
  //   await getUser();
  //   this.setState({ loading: false });
  // }

  render() {
    // const { loading } = this.state;
    return (
    // <header data-testid="header-component">
    //   {loading
    //     ? <h3 data-testid="header-user-name">
    //       { this.callFunction }
    //     </h3>
    //     : <p>Carregando...</p>}

      // </header>
      <h1> Header</h1>
    );
  }
}
export default Header;
