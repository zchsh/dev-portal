import React from 'react'
import Docs from '../../components/card-link/docs.mdx'
import CardLink from '../../components/card-link'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/CardLink',
  component: CardLink,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof CardLink>

export const Playground = (args) => <CardLink {...args} />
Playground.args = {
  href: '/',
  children: 'I am a default card.',
}
