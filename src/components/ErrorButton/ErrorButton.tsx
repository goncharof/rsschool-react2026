import { Component } from 'react';

interface ErrorButtonState {
  shouldThrow: boolean;
}

export class ErrorButton extends Component<object, ErrorButtonState> {
  state: ErrorButtonState = { shouldThrow: false };

  handleClick = (): void => {
    this.setState({ shouldThrow: true });
  };

  render() {
    if (this.state.shouldThrow) {
      throw new Error('ErrorButton: simulated error for boundary test');
    }
    return (
      <button className="error-button" type="button" onClick={this.handleClick}>
        Throw error
      </button>
    );
  }
}
