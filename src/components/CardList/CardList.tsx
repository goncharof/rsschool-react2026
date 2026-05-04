import { Component } from 'react';
import type { Character } from '../../types/api';
import { Card } from '../Card/Card';

interface CardListProps {
  items: Character[];
}

export class CardList extends Component<CardListProps> {
  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return <p className="card-list__empty">No results.</p>;
    }
    return (
      <ul className="card-list">
        {items.map((item) => (
          <li key={item.id} className="card-list__item">
            <Card character={item} />
          </li>
        ))}
      </ul>
    );
  }
}
