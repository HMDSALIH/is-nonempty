# is-nonempty

A tiny, zero-dependency TypeScript utility to safely check if a value is non-empty.

It treats the following as empty:

- `null`
- `undefined`
- `""`
- `[]`
- `{}`
- empty `Map`
- empty `Set`

## Why this exists

Many codebases re-implement simple "is empty" checks slightly differently. This package provides one small, documented, reusable helper with predictable behavior.

## Planned API

```ts
isEmpty(value)
isNonEmpty(value)
