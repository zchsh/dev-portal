import React from 'react'
import SwingsetTestIcon from '../../__swingset-components/swingset-test-icon'
// import Docs from './button-custom-docs.mdx'
import Docs from '../../components/button/docs.mdx'
import { Button, ButtonProps } from '../../components/button'
import { ComponentMeta } from '@storybook/react'
import ExamplesContainer from '../../__swingset-components/examples-container'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof Button>

export const Playground = (args: ButtonProps) => <Button {...args} />
Playground.args = { text: 'My button', color: 'primary' }

export const Colors = () => {
  return (
    <ExamplesContainer>
      <Button text="Primary" color="primary" />
      <Button text="Secondary" color="secondary" />
      <Button text="Tertiary" color="tertiary" />
      <Button text="Critical" color="critical" />
    </ExamplesContainer>
  )
}

export const Disabled = () => {
  return (
    <ExamplesContainer>
      <Button text="Primary" color="primary" disabled={true} />
      <Button text="Secondary" color="secondary" disabled={true} />
      <Button text="Tertiary" color="tertiary" disabled={true} />
      <Button text="Critical" color="critical" disabled={true} />
    </ExamplesContainer>
  )
}

export const IconAndText = () => {
  return (
    <ExamplesContainer>
      <Button
        icon={<SwingsetTestIcon name="plus" />}
        iconPosition="leading"
        size="small"
        text="Small"
      />
      <Button
        icon={<SwingsetTestIcon name="plus" />}
        iconPosition="trailing"
        size="small"
        text="Small"
      />
      <Button
        icon={<SwingsetTestIcon name="plus" />}
        iconPosition="leading"
        size="medium"
        text="Medium"
      />
      <Button
        icon={<SwingsetTestIcon name="plus" />}
        iconPosition="trailing"
        size="medium"
        text="Medium"
      />
      <Button
        icon={<SwingsetTestIcon name="plus" size={24} />}
        iconPosition="leading"
        size="large"
        text="Large"
      />
      <Button
        icon={<SwingsetTestIcon name="plus" size={24} />}
        iconPosition="trailing"
        size="large"
        text="Large"
      />
    </ExamplesContainer>
  )
}

export const AriaLabel = () => (
  <Button
    ariaLabel="Copy"
    icon={<SwingsetTestIcon name="copy" />}
    size="small"
  />
)

export const AriaLabelledBy = () => (
  <>
    <p
      aria-hidden
      id="button-label"
      style={{ display: 'none', visibility: 'hidden' }}
    >
      Add
    </p>
    <Button
      ariaLabelledBy="button-label"
      icon={<SwingsetTestIcon name="plus" />}
      size="medium"
    />
  </>
)

export const AriaDescribedBy = () => (
  <>
    <p
      aria-hidden
      id="button-description"
      style={{ display: 'none', visibility: 'hidden' }}
    >
      Next
    </p>
    <Button
      ariaDescribedBy="button-description"
      icon={<SwingsetTestIcon name="arrow-right" size={24} />}
      size="large"
    />
  </>
)
