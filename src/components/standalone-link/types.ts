import { ReactElement } from 'react'
import { LinkProps } from 'components/link'

type InheritedLinkProps = Pick<
	LinkProps,
	'className' | 'download' | 'href' | 'onClick' | 'opensInNewTab'
>

export interface StandaloneLinkProps extends InheritedLinkProps {
	/**
	 * A non-visible label presented by screen readers. Passed directly to the
	 * internal link element as the `aria-label` prop.
	 *
	 * ref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
	 */
	ariaLabel?: LinkProps['aria-label']

	/**
	 * Determines the set of colors to use for various states of the component.
	 */
	color?: 'primary' | 'secondary'

	/**
	 * A data-heap-track string to add to the <a /> element.
	 */
	'data-heap-track'?: string

	/**
	 * An icon from `@hashicorp/flight-icons` to render.
	 *
	 * Example:
	 *
	 * ```jsx
	 * import { IconArrowRight16 } from '@hashicorp/flight-icons/svg-react/arrow-right-16'
	 *
	 * const MyComponent = () => {
	 *  return (
	 *    <StandaloneLink
	 *      href="/"
	 *      icon={<IconArrowRight16 />}
	 *      iconPosition="trailing"
	 *      text="Get Started"
	 *    />
	 *  )
	 * }
	 * ```
	 */
	icon: ReactElement

	/**
	 * Where the icon should be rendered within the link.
	 */
	iconPosition: 'leading' | 'trailing'

	/**
	 * The size of the rendered link, which mainly affects the font-size and
	 * line-height CSS properties.
	 */
	size?: 'small' | 'medium' | 'large'

	/**
	 * The text rendered within the `<a>` element.
	 */
	text: string

	/**
	 * Optional className to apply to `text`'s wrapper element.
	 */
	textClassName?: string
}
