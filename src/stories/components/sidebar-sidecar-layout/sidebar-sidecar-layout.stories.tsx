import React from 'react'
import { ComponentMeta } from '@storybook/react'
import SidebarSidecarLayout from 'layouts/sidebar-sidecar/components/demo-composable-layout'
import SidebarSidecarLayoutProposed from 'layouts/sidebar-sidecar/components/demo-composable-layout-proposed'

export default {
	title: 'Layouts/SidebarSidecarLayout',
	component: SidebarSidecarLayout,
	args: {
		tallSidebar: true,
		tallSidecar: true,
		showVersionAlert: false,
	},
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof SidebarSidecarLayout>

export const Current = (args) => <SidebarSidecarLayout {...args} />
export const Proposed = (args) => <SidebarSidecarLayoutProposed {...args} />
