import React from 'react'
import Docs from '../../components/card/docs.mdx'
import Card from '../../components/card'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof Card>

export const Playground = (args) => <Card {...args} />
Playground.args = {
  children: 'I am a default card.',
}
