import React from 'react'
import { ComponentMeta } from '@storybook/react'
import OutlineNav, { OutlineNavProps } from 'components/outline-nav'

export default {
	title: 'Components/OutlineNav',
	component: OutlineNav,
} as ComponentMeta<typeof OutlineNav>

const SAMPLE_ITEMS: OutlineNavProps['items'] = [
	{ title: 'Hello 1', url: '#hello1' },
	{ title: 'Hello 2', url: '#hello2' },
	{
		title: 'Section',
		url: '#section',
		isActive: true,
		items: [
			{ title: 'Nested 1', url: '#nested1' },
			{ title: 'Nested 2', url: '#nested2', isActive: true },
			{ title: 'Nested 3', url: '#nested3' },
		],
	},
	{ title: 'Hello 3', url: '#hello3' },
	{ title: 'Hello 4', url: '#hello4' },
]

export const Default = (args) => <OutlineNav {...args} />
Default.args = {
	items: SAMPLE_ITEMS,
}
