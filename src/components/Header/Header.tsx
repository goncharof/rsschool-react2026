import { Component } from 'react';
import { Search } from '../Search/Search';
import { ErrorButton } from '../ErrorButton/ErrorButton';

interface HeaderProps {
  onSearch: (term: string) => void;
}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <div className="header__top">
          <h1 className="header__title">Rick &amp; Morty Search</h1>
          <ErrorButton />
        </div>
        <Search onSearch={this.props.onSearch} />
      </header>
    );
  }
}
