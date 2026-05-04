const SEARCH_TERM_KEY = 'searchTerm';

export function loadSearchTerm(): string {
  return localStorage.getItem(SEARCH_TERM_KEY) ?? '';
}

export function saveSearchTerm(term: string): void {
  if (localStorage.getItem(SEARCH_TERM_KEY) === term) return;
  localStorage.setItem(SEARCH_TERM_KEY, term);
}
