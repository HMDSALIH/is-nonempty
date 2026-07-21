/**
 * Returns true if a value is considered empty.
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === "object") {
    const isPlainObject =
      Object.prototype.toString.call(value) === "[object Object]";

    if (isPlainObject) {
      return Object.keys(value as Record<string, unknown>).length === 0;
    }
  }

  return false;
}

/**
 * Returns true if a value is not considered empty.
 */
export function isNonEmpty<T>(value: T | null | undefined): value is T {
  return !isEmpty(value);
}
