import classNames from 'classnames'
import type { OutlineLinkBasic } from '../../types'
import s from './outline-link.module.css'

/**
 * TODO: colocate in index.tsx file?
 */
function OutlineLink({ title, url, isActive }: OutlineLinkBasic) {
	return (
		<a className={classNames(s.root, { [s.isActive]: isActive })} href={url}>
			{title}
		</a>
	)
}

export { OutlineLink }
