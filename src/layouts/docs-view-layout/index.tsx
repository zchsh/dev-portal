import SidebarSidecarWithToc, {
	SidebarSidecarWithTocProps,
} from 'layouts/sidebar-sidecar/components/sidebar-sidecar-with-toc'

/**
 * Lightweight wrapper around SidebarSidecarLayout which passes along some docs
 * specific props.
 */
const DocsViewLayout = (props: SidebarSidecarWithTocProps) => {
	return <SidebarSidecarWithToc {...props} />
}

export default DocsViewLayout
