import { Component } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { fetchCharacters } from './api/client';
import { loadSearchTerm, saveSearchTerm } from './utils/storage';
import type { Character } from './types/api';
import './App.css';

interface AppState {
  items: Character[];
  isLoading: boolean;
  error: string | null;
  lastTerm: string;
}

export class App extends Component<object, AppState> {
  private abortController: AbortController | null = null;

  state: AppState = {
    items: [],
    isLoading: false,
    error: null,
    lastTerm: '',
  };

  componentDidMount(): void {
    const initialTerm = loadSearchTerm();
    this.setState({ lastTerm: initialTerm });
    void this.fetchPage(initialTerm);
  }

  componentWillUnmount(): void {
    this.abortController?.abort();
  }

  handleSearch = (rawTerm: string): void => {
    const term = rawTerm.trim();
    if (term === this.state.lastTerm && !this.state.error) return;
    saveSearchTerm(term);
    this.setState({ lastTerm: term });
    void this.fetchPage(term);
  };

  private async fetchPage(term: string): Promise<void> {
    this.abortController?.abort();
    const controller = new AbortController();
    this.abortController = controller;

    this.setState({ isLoading: true, error: null });

    try {
      const response = await fetchCharacters(term, 1, controller.signal);
      if (controller.signal.aborted) return;
      this.setState({ items: response.results, isLoading: false });
    } catch (error) {
      if (controller.signal.aborted) return;
      const message = error instanceof Error ? error.message : 'Unknown error';
      this.setState({ items: [], error: message, isLoading: false });
    }
  }

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
