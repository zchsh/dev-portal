import React from 'react'
import Docs from './docs.mdx'
import { Button, ButtonProps } from '../../../components/button'
import { ComponentMeta, ReactFramework } from '@storybook/react'
import CoreDevDotLayout from '../../../layouts/core-dev-dot-layout'
import { PartialStoryFn } from '@storybook/csf'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story: PartialStoryFn<ReactFramework, ButtonProps>) => (
      <CoreDevDotLayout>
        <Story />
      </CoreDevDotLayout>
    ),
  ],
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> =

export const Playground = (args: ButtonProps) => <Button {...args} />
Playground.args = { text: 'My button', color: 'primary' }

export const Colors = () => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button text="Primary" color="primary" />
      <Button text="Secondary" color="secondary" />
      <Button text="Tertiary" color="tertiary" />
      <Button text="Critical" color="critical" />
    </div>
  )
}

export const Disabled = () => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button text="Primary" color="primary" disabled={true} />
      <Button text="Secondary" color="secondary" disabled={true} />
      <Button text="Tertiary" color="tertiary" disabled={true} />
      <Button text="Critical" color="critical" disabled={true} />
    </div>
  )
}
