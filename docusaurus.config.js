// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'New Age API Documentation',
  tagline: 'Documenting APIs Made Easy',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://stage-api.muda.tech',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'muda',
  projectName: 'New Age-api-doc',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Makes documentation the homepage
          editUrl:
            'https://github.com/your-org/muda-api-doc/tree/main/docs/',
        },
        blog: false, // Disable the blog if it's not needed
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'liquidity',
        path: 'docs-liquidity', // Path to the liquidity docs folder
        routeBasePath: 'liquidity', // URL path for liquidity docs
        sidebarPath: require.resolve('./sidebars-liquidity.js'),
        editUrl:
          'https://github.com/your-org/muda-api-doc/tree/main/docs-liquidity/',
      },
    ],
  ],

  themeConfig: {
    image: 'https://mudagroup.com/images/logo-sm.svg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Documentation Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Muda-Pay API',
        },{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Liquidity API',
          docsPluginId: 'liquidity', // Specify the plugin ID for liquidity docs
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;