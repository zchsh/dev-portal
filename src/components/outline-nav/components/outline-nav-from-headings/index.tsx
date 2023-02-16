import { filterTableOfContentsHeadings } from 'lib/hash-links/filter-table-of-contents-headings'
import { OutlineHeading, OutlineLinkItem } from 'components/outline-nav/types'
import { OutlineNavWithActive } from 'components/outline-nav/components'

/**
 * Given a flat array of headings,
 * Return an array of outline items, for use with OutlineNav components.
 */
function buildOutlineItems(headings: OutlineHeading[]): OutlineLinkItem[] {
	return headings.map((heading: OutlineHeading) => {
		return {
			title: heading.title,
			url: `#${heading.slug}`,
		}
	})
}

/**
 * Given a flat array of headings in a document,
 * render an outline nav, and automatically highlight the active heading.
 *
 * Note that not all provided headings will be included:
 * - Only level 2 headings are included
 * - Heading items flagged as within tabs will be excluded
 */
function OutlineNavFromHeadings({ headings }: { headings: OutlineHeading[] }) {
	const filteredHeadings = filterTableOfContentsHeadings(headings)
	const items = buildOutlineItems(filteredHeadings)

	return <OutlineNavWithActive items={items} />
}

export { OutlineNavFromHeadings }
