import CollectionCard, {
  CollectionCardProps,
} from 'views/tutorial-view/components/collection-card'
import s from './featured-in-collections.module.css'

interface FeaturedInCollectionsProps {
  collections: CollectionCardProps[]
}

// This should render the eventual `CollectionCard` component (doesn't exist yet)
// which will be used on many other views
export function FeaturedInCollections({
  collections,
}: FeaturedInCollectionsProps): React.ReactElement {
  if (collections.length === 0) {
    return null
  }

  return (
    <>
      <h2 className={s.heading}>This tutorial also appears in:</h2>
      <ul className={s.listRoot}>
        {collections.map((collection) => {
          const { id, slug, numTutorials, name, description, theme } =
            collection
          return (
            <li key={id} className={s.listItem}>
              <CollectionCard
                // Note: className here necessary because CardLink
                // doesn't automatically behave as expected in grid layouts...
                // It requires height: 100% to be set on the inner <a /> element.
                className={s.listItemCard}
                slug={slug}
                numTutorials={numTutorials}
                name={name}
                description={description}
                theme={theme}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FeaturedInCollections
