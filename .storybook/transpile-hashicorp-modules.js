const defaultRuleRegex = /\.(mjs|tsx?|jsx?)$/

const transpileList = [
	'@hashicorp/flight-icons',
	'@hashicorp/platform-analytics',
	'@hashicorp/platform-cms',
	'@hashicorp/platform-code-highlighting',
	'@hashicorp/platform-docs-mdx',
	'@hashicorp/platform-edge-utils',
	'@hashicorp/platform-markdown-utils',
	'@hashicorp/platform-packer-plugins',
	'@hashicorp/platform-product-meta',
	'@hashicorp/platform-util',
	'@hashicorp/flight-icons',
	'@hashicorp/react-alert-banner',
	'@hashicorp/react-button',
	'@hashicorp/react-call-to-action',
	'@hashicorp/react-checkbox-input',
	'@hashicorp/react-code-block',
	'@hashicorp/react-command-line-terminal',
	'@hashicorp/react-consent-manager',
	'@hashicorp/react-docs-page',
	'@hashicorp/react-docs-sidenav',
	'@hashicorp/react-enterprise-alert',
	'@hashicorp/react-error-view',
	'@hashicorp/react-featured-slider',
	'@hashicorp/react-hashi-stack-menu',
	'@hashicorp/react-head',
	'@hashicorp/react-hero',
	'@hashicorp/react-inline-svg',
	'@hashicorp/react-learn-callout',
	'@hashicorp/react-markdown-page',
	'@hashicorp/react-min-100-layout',
	'@hashicorp/react-next-steps',
	'@hashicorp/react-open-api-page',
	'@hashicorp/react-product-downloads-page',
	'@hashicorp/react-product-features-list',
	'@hashicorp/react-search',
	'@hashicorp/react-section-header',
	'@hashicorp/react-sentinel-embedded',
	'@hashicorp/react-subnav',
	'@hashicorp/react-tabs',
	'@hashicorp/react-text-input',
	'@hashicorp/react-text-split-with-image',
	'@hashicorp/react-text-split-with-logo-grid',
	'@hashicorp/react-text-splits',
	'@hashicorp/react-toggle',
	'@hashicorp/react-use-cases',
	'@hashicorp/react-vertical-text-block-list',
]

module.exports = {
	webpackFinal(config = {}, options = {}) {
		const defaultRule = config.module.rules.find(
			(rule) => rule.test.toString() === defaultRuleRegex.toString()
		)

		return {
			...config,
			module: {
				...config.module,
				rules: [
					...config.module.rules.filter(
						(rule) => rule.test.toString() !== defaultRuleRegex
					),
					{
						// Transpile HashiCorp modules by
						// overriding default simple exclusion of node_modules
						...defaultRule,
						exclude: new RegExp(
							`node_modules${transpileList.map((p) => `(?!/${p})`).join('')}`
						),
					},
				],
			},
		}
	},
}
