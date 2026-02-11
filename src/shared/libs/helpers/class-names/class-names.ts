type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => [
  cls,
  ...additional.filter(Boolean),
  Object.entries(mods)
    .filter(([cls, value]) => Boolean(value))
    .map(([cls, value]) => cls).join(' ')
    .trim(),
].join(' ').trim();
