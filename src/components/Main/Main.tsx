import { Component } from 'react';
import type { Character } from '../../types/api';
import { CardList } from '../CardList/CardList';
import { Loader } from '../Loader/Loader';

interface MainProps {
  items: Character[];
  isLoading: boolean;
  error: string | null;
}

export class Main extends Component<MainProps> {
  render() {
    const { items, isLoading, error } = this.props;
    return (
      <main className="main">
        {isLoading && <Loader />}
        {!isLoading && error && <p className="main__error" role="alert">{error}</p>}
        {!isLoading && !error && <CardList items={items} />}
      </main>
    );
  }
}
