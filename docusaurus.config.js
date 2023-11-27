/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lido Docs',
  tagline: 'Documentation for the Lido staking protocol',
  url: 'https://lidofinance.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'lidofinance', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    prism: {
      additionalLanguages: ['solidity'],
    },
    navbar: {
      title: 'Lido Docs',
      logo: {
        alt: 'Lido Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/lidofinance',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lidofinance/docs/blob/main/',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { indexBlog: false, docsRouteBasePath: '/', indexPages: true },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /guides/steth-integration-guide -> /guides/lido-tokens-integration-guide
          {
            to: '/guides/lido-tokens-integration-guide',
            from: '/guides/steth-integration-guide',
          }
        ],
      },
    ],
  ],
}
