module.exports = {
  title: 'MSU Denver Systems Engineering',
  tagline: 'Managed resource documentation',
  url: 'https://msudenversystemsengineering.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'MSUDenverSystemsEngineering', // Usually your GitHub org/user name.
  projectName: 'MSUDenverSystemsEngineering.github.io', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '699bca9c36494889a8deba31bb8a2ea6',
      indexName: 'msudenversystemsengineering',
      algoliaOptions: {},
    },
    navbar: {
      title: 'Systems Engineering',
      logo: {
        alt: 'MSU Denver Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/hardware',
          activeBasePath: 'docs',
          label: 'Hardware',
          position: 'left',
        },
        {
          to: 'docs/images',
          activeBasePath: 'docs',
          label: 'Images',
          position: 'left',
        },
        {
          to: 'docs/labs',
          activeBasePath: 'docs',
          label: 'Labs',
          position: 'left',
        },
        {
          to: 'docs/settings',
          activeBasePath: 'docs',
          label: 'Settings',
          position: 'left',
        },{
          to: 'docs/printers',
          activeBasePath: 'docs',
          label: 'Printers',
          position: 'left',
        },
        {
          to: 'docs/software',
          activeBasePath: 'docs',
          label: 'Software',
          position: 'left',
        },
        {
          href: 'https://github.com/msudenversystemsengineering',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sample Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc!',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Teams',
              href: 'https://teams.microsoft.com/l/channel/19%3a7508e64dfbac421fa1e1cd6685900396%40thread.skype/Systems%2520Engineering?groupId=2349d8f0-1f4b-4552-aad9-52b517148713&tenantId=03309ca4-1733-4af9-a73c-f18cc841325c',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MSU Denver. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/msudenversystemsengineering/MSUDenverSystemsEngineering.github.io/edit/source/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
