import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath =
  process.env.GITHUB_PAGES_BASE_PATH ?? '/saas-test';

const nextConfig: NextConfig = isGithubPages
  ? {
      output: 'export',
      basePath: githubPagesBasePath,
      assetPrefix: githubPagesBasePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : { allowedDevOrigins: ['127.0.0.1'] };

export default nextConfig;
