# RSSchool React 2026 — Class Components

Search application built with React class components, TypeScript, and Vite for the
[RSSchool class-components task](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md).

## API

This project uses the **[Rick and Morty API](https://rickandmortyapi.com/)**.

- Base URL: `https://rickandmortyapi.com/api`
- Search endpoint: `GET /character/?name={query}&page={n}`
- Public, no auth, supports search + pagination — fits the task requirements.

A successful response returns:

```json
{
  "info": { "count": 826, "pages": 42, "next": "...", "prev": null },
  "results": [{ "id": 1, "name": "Rick Sanchez", "species": "Human", "status": "Alive", "...": "..." }]
}
```

Each card renders the character's `name` and a description composed from `species`, `status`, and `origin.name`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and produce a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Stack

- Vite + `react-ts` template
- React 19 (class components only — no hooks)
- TypeScript (strict, no `any` allowed)
- ESLint with `@typescript-eslint/no-explicit-any: error`

## Implementation plan

See [PLAN.md](./PLAN.md).
