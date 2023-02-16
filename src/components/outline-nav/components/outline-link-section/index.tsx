import { OutlineItems, OutlineLink } from '../'
import type { OutlineLinkWithNesting } from '../../types'
import s from './outline-link-section.module.css'

/**
 * TODO: colocate in index.tsx file?
 * TODO: rename to OutlineLinkWithNesting? Rethink type naming?
 */
function OutlineLinkSection({
	title,
	url,
	isActive,
	items,
}: OutlineLinkWithNesting) {
	return (
		<>
			<OutlineLink title={title} url={url} isActive={isActive} />
			<div className={s.nested}>
				<OutlineItems items={items} />
			</div>
		</>
	)
}

export { OutlineLinkSection }
