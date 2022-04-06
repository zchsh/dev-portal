import React from 'react'
import { ComponentMeta } from '@storybook/react'
import createLiveComponent from '__swingset-components/live-component'
import InteractiveLabCallout from 'views/tutorial-view/components/interactive-lab-callout'
import InstruqtProvider from 'contexts/instruqt-lab'

export default {
  title: 'Components/InteractiveLabCallout',
  component: InteractiveLabCallout,
  parameters: {
    docs: {
      components: {
        InteractiveLabCallout,
        LiveComponent: createLiveComponent({ InteractiveLabCallout }),
      },
    },
  },
} as ComponentMeta<typeof InteractiveLabCallout>

export const Playground = (args) => (
  <InstruqtProvider
    labId={String(args.labId)}
    // eslint-disable-next-line react/no-children-prop
    children={<InteractiveLabCallout />}
  />
)
Playground.args = { labId: 'some-instruqt-lab-id' }
