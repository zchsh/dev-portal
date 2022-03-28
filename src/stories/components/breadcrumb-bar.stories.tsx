import React from 'react'
import { ComponentMeta } from '@storybook/react'
import createLiveComponent from '__swingset-components/live-component'
import Docs from 'components/breadcrumb-bar/docs.mdx'
import BreadcrumbBar from 'components/breadcrumb-bar'

export default {
  title: 'Components/BreadcrumbBar',
  component: BreadcrumbBar,
  parameters: {
    docs: {
      components: {
        BreadcrumbBar,
        LiveComponent: createLiveComponent({ BreadcrumbBar }),
      },
      page: Docs,
    },
  },
} as ComponentMeta<typeof BreadcrumbBar>

export const Playground = (args) => <BreadcrumbBar {...args} />
Playground.args = {
  links: [
    {
      title: 'Vault',
      url: '/vault',
    },
    {
      title: 'Reference Docs',
      url: '/vault/reference-docs',
    },
    {
      title: 'Introduction',
      url: '/vault/reference-docs/introduction',
      isCurrentPage: true,
    },
  ],
}
