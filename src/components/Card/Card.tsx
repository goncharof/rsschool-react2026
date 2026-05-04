import { Component } from 'react';
import type { Character } from '../../types/api';

interface CardProps {
  character: Character;
}

export class Card extends Component<CardProps> {
  render() {
    const { character } = this.props;
    const description = `${character.species} • ${character.status} • from ${character.origin.name}`;
    return (
      <article className="card">
        <img className="card__image" src={character.image} alt={character.name} />
        <div className="card__body">
          <h3 className="card__title">{character.name}</h3>
          <p className="card__description">{description}</p>
        </div>
      </article>
    );
  }
}
