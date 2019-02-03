/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Steve',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo.svg',
    infoLink: 'https://webapp.msudenver.edu/directory/profile.php?uName=spatte30',
    pinned: true,
  },
  {
    caption: 'Jordan',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo.svg',
    infoLink: 'https://webapp.msudenver.edu/directory/profile.php?uName=jhamil50',
    pinned: true,
  },
  {
    caption: 'Truong',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo.svg',
    infoLink: 'https://webapp.msudenver.edu/directory/profile.php?uName=tnguy189',
    pinned: true,
  }
];

const siteConfig = {
  title: 'Systems Engineering Wiki', // Title for your website.
  tagline: 'Our internal garbage',
  url: 'https://msudenversystemsengineering.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'MSUDenverSystemsEngineering.github.io',
  organizationName: 'MSUDenverSystemsEngineering',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: '699bca9c36494889a8deba31bb8a2ea6',
    indexName: 'msudenversystemsengineering',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'images', label: 'Images'},
    {doc: 'labs', label: 'Labs'},
    {doc: 'packages', label: 'Packages'},
    {doc: 'printers', label: 'Printers'},
    {page: 'help', label: 'Help'}
  ],

  docsSideNavCollapsible: true,

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#00447c',
    secondaryColor: '#d11242',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} MSU Denver`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitter: 'false',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
