const path = require('path')

module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    path.resolve('./.storybook/transpile-hashicorp-modules'),
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
