import { IconPlay16 } from '@hashicorp/flight-icons/svg-react/play-16'
import { IconTerminalScreen16 } from '@hashicorp/flight-icons/svg-react/terminal-screen-16'
import { EditionOption, ProductUsed } from 'lib/learn-client/types'
import Badge from 'components/badge'
import ProductIcon from 'components/product-icon'

const editionDisplayOptions: { [K in EditionOption]: string } = {
	[EditionOption.openSource]: 'Open Source',
	[EditionOption.enterprise]: 'Enterprise',
	[EditionOption.hcp]: 'HCP',
	[EditionOption.tfcStandard]: 'Standard',
	[EditionOption.tfcPlus]: 'Plus',
	/**
	 * Deprecated pricing tiers as of March '23
	 * To be removed after all content is updated
	 */
	[EditionOption.tfcFree]: 'Terraform Cloud',
	[EditionOption.tfcTeam]: 'Team',
	[EditionOption.tfcGov]: 'Team & Governance',
	[EditionOption.tfcBiz]: 'Business',
	/* --------------------------------------*/
}

/**
 * Calculates whether a tutorial is 'beta' based on productsUsed data.
 */
export function getIsBeta(productsUsed: ProductUsed[]): boolean {
	return productsUsed.some(({ isBeta }: ProductUsed) => isBeta)
}

/**
 * Builds the array of <Badge /> components to render.
 */
export const generateBadges = ({
	edition,
	hasVideo,
	isBeta,
	isInteractive,
	products,
}) => {
	const badges = []

	if (isBeta) {
		badges.push(<Badge color="highlight" text="Beta" />)
	}

	// Edu team wants to hide the open source badge
	const showEditionBadge = edition !== 'open_source'
	if (showEditionBadge) {
		badges.push(<Badge text={editionDisplayOptions[edition]} />)
	}

	const showProductBadges = Array.isArray(products) && products.length > 0
	if (showProductBadges) {
		products.forEach((product) => {
			badges.push(
				<Badge
					key={product.slug}
					icon={<ProductIcon productSlug={product.slug} />}
					text={product.name}
				/>
			)
		})
	}

	if (hasVideo) {
		badges.push(<Badge icon={<IconPlay16 />} text="Video" />)
	}

	if (isInteractive) {
		badges.push(<Badge icon={<IconTerminalScreen16 />} text="Interactive" />)
	}

	return badges
}

/**
 * Creates a readable string for presentation only based on the number of
 * minutes provided.
 *
 * For example: 831 => 13hr 51min
 */
export default function getReadableTime(minutes: number): string {
	const hours = Math.floor(minutes / 60)
	const min = minutes % 60
	if (hours && min > 0) {
		return `${hours}hr ${min}min`
	}
	if (hours) {
		return `${hours}hr`
	}
	return `${minutes}min`
}
