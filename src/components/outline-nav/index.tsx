import { OutlineItems } from './components'
import type { OutlineNavProps } from './types'
import s from './outline-nav.module.css'

function OutlineNav({ items }: OutlineNavProps) {
	return (
		<>
			<div className={s.onThisPage}>On this page:</div>
			<OutlineItems items={items} />
		</>
	)
}

export type { OutlineNavProps }
export default OutlineNav
