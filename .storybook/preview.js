import '@hashicorp/platform-util/nprogress/style.css'
import '../src/pages/style.css'
import CoreDevDotLayout from '../src/layouts/core-dev-dot-layout'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: {
			order: ['Introduction', 'Components'],
		},
	},
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
}
