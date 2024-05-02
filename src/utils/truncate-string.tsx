const LENGTH_LIMIT = 10;

const truncateString = (string: string, limit: number = LENGTH_LIMIT): string =>
  `${string.slice(0, limit)}${string.length > limit ? '...' : ''}`;

export default truncateString;
