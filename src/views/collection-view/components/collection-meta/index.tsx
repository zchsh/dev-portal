import { IconCollections24 } from '@hashicorp/flight-icons/svg-react/collections-24'
import useAuthentication from 'hooks/use-authentication'
import Heading from 'components/heading'
import IconTile from 'components/icon-tile'
import InlineLink from 'components/inline-link'
import Text from 'components/text'
import { Collection } from 'lib/learn-client/types'
import CollectionProgressGroup from 'components/collection-progress-group'
import s from './collection-meta.module.css'

interface CollectionMetaProps {
	collection: Collection
	heading: {
		text: string
		id: string
	}
	description: string
}

export default function CollectionMeta({
	heading,
	description,
	collection,
}: CollectionMetaProps) {
	/**
	 * We only need to show the Create Account CTA if auth is enabled and there is
	 * not already a user authenticated.
	 */
	const { isAuthenticated, isLoading } = useAuthentication()
	const showCreateAccountCta = !isLoading && !isAuthenticated

	return (
		<>
			<IconTile>
				<IconCollections24 className={s.icon} />
			</IconTile>
			<Heading
				level={1}
				size={600}
				weight="bold"
				id={heading.id}
				className={s.heading}
			>
				{heading.text}
			</Heading>
			<p
				className={s.description}
				dangerouslySetInnerHTML={{
					__html: description,
				}}
			/>
			{showCreateAccountCta ? (
				<Text className={s.createAccountCta} size={200}>
					<InlineLink href="/sign-up" textSize={200}>
						Create an account
					</InlineLink>{' '}
					to track your progress.
				</Text>
			) : null}
			<div className={s.cta}>
				<CollectionProgressGroup collection={collection} />
			</div>
		</>
	)
}
