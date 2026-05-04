import type { CharactersResponse } from '../types/api';

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(
  name: string,
  page: number,
  signal?: AbortSignal,
): Promise<CharactersResponse> {
  const url = new URL(`${BASE_URL}/character`);
  if (name) url.searchParams.set('name', name);
  url.searchParams.set('page', String(page));

  const response = await fetch(url.toString(), { signal });

  if (!response.ok) {
    if (response.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    }
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as CharactersResponse;
}
