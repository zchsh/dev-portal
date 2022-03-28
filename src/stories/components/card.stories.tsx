import React from 'react'
import { ComponentMeta } from '@storybook/react'
import createLiveComponent from '__swingset-components/live-component'
import Docs from 'components/card/docs.mdx'
import Card from 'components/card'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      components: {
        Card,
        LiveComponent: createLiveComponent({ Card }),
      },
      page: Docs,
    },
  },
} as ComponentMeta<typeof Card>

export const Playground = (args) => <Card {...args} />
Playground.args = {
  children: 'I am a default card.',
}
