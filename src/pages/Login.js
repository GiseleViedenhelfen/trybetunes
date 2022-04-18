import { Redirect } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import { createUser } from '../services/userAPI';

const React = require('react');

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isButtonDisable: true,
      inputValue: '',
      chamaApi: false,
      logado: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue(e) {
    const { value } = e.target;
    this.setState({ inputValue: value }, () => {
      const valueLength = e.target.value.length;
      const minInputLength = 3;
      if (valueLength >= minInputLength) {
        this.setState({ isButtonDisable: false });
      } else {
        this.setState({ isButtonDisable: true });
      }
    });
  }

  async handleClick() {
    const { inputValue } = this.state;
    this.setState({ chamaApi: true });
    await createUser({ name: inputValue });
    this.setState({ chamaApi: false }, () => {
      this.setState({ logado: true });
    });
    this.setState({ chamaApi: true, logado: true });
  }

  render() {
    const { isButtonDisable, inputValue, chamaApi, logado } = this.state;
    console.log(inputValue);
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="input-name">
            Nome:
            <input
              type="text"
              id="input-name"
              placeholder="nome"
              data-testid="login-name-input"
              onChange={ this.handleInputValue }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isButtonDisable }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
        {chamaApi && <p>Carregando...</p>}
        {logado ? <Redirect to="/search" /> : null}
      </div>
    );
  }
}

export default Login;
