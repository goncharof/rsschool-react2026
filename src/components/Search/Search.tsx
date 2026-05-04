import { Component } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { loadSearchTerm } from '../../utils/storage';

interface SearchProps {
  onSearch: (term: string) => void;
}

interface SearchState {
  term: string;
}

export class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { term: loadSearchTerm() };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.onSearch(this.state.term.trim());
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit} role="search">
        <input
          className="search__input"
          type="search"
          name="search"
          placeholder="Search characters…"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
