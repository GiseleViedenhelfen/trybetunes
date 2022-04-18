import { Component } from 'react/cjs/react.production.min';
import { createUser } from '../services/userAPI';

const React = require('react');

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isButtonDisable: true,
      inputValue: '',
    };
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

  handleClick() {
    <p>carregando...</p>;
    createUser();
  }

  render() {
    const { isButtonDisable, inputValue } = this.state;
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
            type="submit"
            data-testid="login-submit-button"
            disabled={ isButtonDisable }
            onClick={ createUser }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
