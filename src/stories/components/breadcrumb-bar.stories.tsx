import React from 'react'
import Docs from 'components/breadcrumb-bar/docs.mdx'
import BreadcrumbBar from 'components/breadcrumb-bar'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/BreadcrumbBar',
  component: BreadcrumbBar,
  parameters: { docs: { page: Docs } },
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
