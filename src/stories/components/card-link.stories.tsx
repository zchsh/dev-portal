import React from 'react'
import { ComponentMeta } from '@storybook/react'
import createLiveComponent from '__swingset-components/live-component'
import Docs from 'components/card-link/docs.mdx'
import CardLink from 'components/card-link'

export default {
  title: 'Components/CardLink',
  component: CardLink,
  parameters: {
    docs: {
      components: {
        CardLink,
        LiveComponent: createLiveComponent({ CardLink }),
      },
      page: Docs,
    },
  },
} as ComponentMeta<typeof CardLink>

export const Playground = (args) => <CardLink {...args} />
Playground.args = {
  href: '/',
  children: 'I am a default card.',
}
