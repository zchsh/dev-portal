import { TableOfContentsHeading } from 'layouts/sidebar-sidecar/components/table-of-contents'
import SidebarSidecarLayout, {
	SidebarSidecarLayoutProps,
} from 'layouts/sidebar-sidecar'
import { OutlineNavFromHeadings } from 'components/outline-nav/components'

export type SidebarSidecarWithTocProps = SidebarSidecarLayoutProps & {
	headings: TableOfContentsHeading[]
}

/**
 * Renders a SidebarSidecarLayout with a preset `<TableOfContents />`
 * component in the sidecarSlot.
 */
const SidebarSidecarWithToc = ({
	headings,
	...restProps
}: SidebarSidecarLayoutProps & { headings: TableOfContentsHeading[] }) => {
	return (
		<SidebarSidecarLayout
			{...restProps}
			sidecarSlot={<OutlineNavFromHeadings headings={headings} />}
		/>
	)
}

export default SidebarSidecarWithToc
