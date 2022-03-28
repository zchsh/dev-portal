import '@hashicorp/platform-util/nprogress/style.css'
import '../src/pages/style.css'
import LiveComponent from '../src/__swingset-components/live-component'
import CoreDevDotLayout from '../src/layouts/core-dev-dot-layout'
import { Button } from '../src/components/button'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story) => (
      <CoreDevDotLayout>
        <Story />
      </CoreDevDotLayout>
    ),
  ],
  docs: {
    components: {
      LiveComponent,
      Button,
    },
  },
}
