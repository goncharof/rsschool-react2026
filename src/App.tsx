import { Component } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import type { Character } from './types/api';
import './App.css';

interface AppState {
  items: Character[];
  isLoading: boolean;
  error: string | null;
}

export class App extends Component<object, AppState> {
  state: AppState = {
    items: [],
    isLoading: false,
    error: null,
  };

  handleSearch = (term: string): void => {
    void term;
  };

  render() {
    return (
      <div className="app">
        <Header onSearch={this.handleSearch} />
        <Main
          items={this.state.items}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
      </div>
    );
  }
}
