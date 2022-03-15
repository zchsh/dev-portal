import { ReleasesAPIResponse } from 'lib/fetch-release-data'
import { VersionContextSwitcherProps } from 'components/version-context-switcher'
import { SidecarMarketingCardProps } from './components/sidecar-marketing-card'

export interface FeaturedTutorial {
  description: string
  href: string
  title: string
}

export interface GroupedPackageManagers {
  [os: string]: PackageManager[]
}

export interface PackageManager {
  label: string
  commands: string[]
  os: string
}

export interface ProductDownloadsViewContentProps {
  pageContent: ProductDownloadsViewProps['pageContent']
  releases: ProductDownloadsViewProps['releases']
  versionSwitcherOptions: VersionContextSwitcherProps['options']
}

export interface ProductDownloadsViewProps {
  latestVersion: string
  pageContent: {
    doesNotHavePackageManagers?: boolean
    featuredTutorials?: FeaturedTutorial[]
    packageManagerOverrides?: PackageManager[]
    sidecarMarketingCard: SidecarMarketingCardProps
  }
  releases: ReleasesAPIResponse
}

export interface SortedReleases {
  [os: string]: {
    [arch: string]: string
  }
}
