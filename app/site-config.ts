const defaultPublicSiteUrl = 'https://writeup-inc.github.io/saas/mcp-guide/';

export const publicSiteUrl = `${(
  process.env.NEXT_PUBLIC_SITE_URL ?? defaultPublicSiteUrl
).replace(/\/$/, '')}/`;

export function absoluteSiteUrl(path = '') {
  return new URL(path.replace(/^\//, ''), publicSiteUrl).toString();
}
