import s from './demo-tall-content.module.css'

function DemoTallContent({ title }: { title: string }) {
	return (
		<div className={s.root}>
			<span>{title}</span>
			<span>
				This is demo content with a forced height larger than the viewport
				height.
			</span>
			<span>More content in this area should be shown.</span>
			<span>
				This content should scroll vertically if taller than viewport.
			</span>
			<span>End of tall demo content.</span>
		</div>
	)
}

export { DemoTallContent }
