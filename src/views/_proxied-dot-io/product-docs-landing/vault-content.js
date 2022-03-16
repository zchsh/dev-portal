const vaultContent = {
  pageTitle: 'Documentation',
  pageSubtitle:
    'Welcome to Vault documentation! Vault is an identity-based secret and encryption management system. This documentation covers the main concepts of Vault, what problems it can solve, and contains a quick start for using Vault.',
  featuredCard: {
    heading: 'Get Started',
    image: {
      src: require('./vault-get-started-diagram.png'),
      alt: '' /* note: image is presentational in this specific case */,
    },
    body:
      'Use Vault to securely store, access, and manage secrets and other sensitive data.',
    links: [
      {
        title: 'CLI Quick Start',
        url: 'https://learn.hashicorp.com/collections/vault/getting-started',
      },
      {
        title: 'Developer Quick Start',
        url: 'https://learn.hashicorp.com/collections/vault/cloud',
      },
    ],
  },
  useCaseCards: [
    {
      heading: 'Secrets Management',
      body:
        'Centrally store, access, and deploy secrets across applications, systems, and infrastructure.',
      links: [
        {
          title: 'Key/Value',
          url: '/docs/secrets/kv',
        },
        {
          title: 'Database Credentials',
          url: '/docs/secrets/databases',
        },
        {
          title: 'Kubernetes Secrets',
          url: 'https://learn.hashicorp.com/collections/vault/kubernetes',
        },
      ],
    },
    {
      heading: 'Encryption Services',
      body:
        'Securely handle data such as social security numbers, credit card numbers, and other types of compliance-regulated information.',
      links: [
        {
          title: 'Transit Secrets Engine',
          url: '/docs/secrets/transit',
        },
        {
          title: 'Transform Secrets Engine',
          url: '/docs/secrets/transform',
        },
        {
          title: 'Tokenization',
          url: '/docs/secrets/transform/tokenization',
        },
      ],
    },
    {
      heading: 'Key Management',
      body:
        'Use a standardized workflow for distribution and lifecycle management of cryptographic keys in various KMS providers.',
      links: [
        {
          title: 'KMIP Secrets Engine',
          url: '/docs/secrets/kmip',
        },
        {
          title: 'Key Management Secrets Engine',
          url: '/docs/secrets/key-management',
        },
        {
          title: 'PKI',
          url: '/docs/secrets/pki',
        },
      ],
    },
  ],
  developerCards: [
    {
      title: 'Client Libraries',
      url: '/api-docs/libraries',
    },
    {
      title: 'API Reference',
      url: '/api-docs/index',
    },
    {
      title: 'Sample Integrations',
      url: 'https://github.com/hashicorp/hello-vault-go',
    },
    {
      title: 'GitHub Samples',
      url: 'https://github.com/hashicorp/vault-examples',
    },
  ],
}

export default vaultContent
