import s from './style.module.css'
import classNames from 'classnames'
import { IconAward16 } from '@hashicorp/flight-icons/svg-react/award-16'
import { IconHandshake16 } from '@hashicorp/flight-icons/svg-react/handshake-16'
import { ProductSlug } from 'types/products'
import { Tier } from 'lib/integrations-api-client/integration'

interface TierBadgeStyles extends React.CSSProperties {
	'--badge-color': string
}

interface TierBadgeProps {
	tier: Tier
	productSlug: ProductSlug
	size: 'small' | 'large'
	className?: string
}

export default function TierBadge({
	tier,
	productSlug,
	size,
	className,
}: TierBadgeProps) {
	const styles: TierBadgeStyles = {
		'--badge-color': `var(--token-color-${productSlug}-surface)`,
	}
	return (
		<span
			className={classNames(s.tierBadge, className, {
				[s.large]: size === 'large',
			})}
			style={styles}
		>
			{tier === Tier.OFFICIAL && (
				<>
					<IconAward16 /> Official
				</>
			)}
			{tier === Tier.PARTNER && (
				<>
					<IconHandshake16 /> Partner
				</>
			)}
			{tier === Tier.COMMUNITY && <>Community</>}
		</span>
	)
}
