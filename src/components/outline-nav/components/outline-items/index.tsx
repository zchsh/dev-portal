import { OutlineLink, OutlineLinkSection } from '../'
import type { OutlineLinkItem } from 'components/outline-nav/types'

/**
 * TODO: colocate in index.tsx file?
 */
function OutlineItems({ items }: { items: OutlineLinkItem[] }) {
	return (
		<>
			{items.map((item: OutlineLinkItem) => {
				const uniqueKey = `${item.title}${item.url}`
				if ('items' in item) {
					return <OutlineLinkSection key={uniqueKey} {...item} />
				} else {
					return <OutlineLink key={uniqueKey} {...item} />
				}
			})}
		</>
	)
}

export { OutlineItems }
