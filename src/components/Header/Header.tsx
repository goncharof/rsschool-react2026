import { Component } from 'react';
import { Search } from '../Search/Search';

interface HeaderProps {
  onSearch: (term: string) => void;
}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Rick &amp; Morty Search</h1>
        <Search onSearch={this.props.onSearch} />
      </header>
    );
  }
}
