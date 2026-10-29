/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** True for links that leave the site (open in a new tab). */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
