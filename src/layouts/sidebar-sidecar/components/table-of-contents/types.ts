export interface TableOfContentsHeading {
	title: string
	slug: string
	level: 1 | 2 | 3 | 4 | 5 | 6
	// TODO: make not optional?
	tabbedSectionDepth?: number
}

export interface TableOfContentsProps {
	headings: TableOfContentsHeading[]
}
