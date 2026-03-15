/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextWebpackConfig = {
  webpack: config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    prefixIds: false
                  },
                  {
                    removeViewBox: false
                  },
                  {
                    cleanupIDs: false
                  }
                ]
              }
            }
          }
        ]
      }
    ]
    return config
  }
  // assetPrefix: 'https://cdn.ctxos.github.io'
}

const imagesConfig = {
  images: {
    disableStaticImages: false,
    unoptimized: true
  }
}

const plugins = [
  [
    optimizedImages(imagesConfig),
    {
      handleImages: ['jpeg', 'png']
    }
  ],
  {
    trailingSlash: true
  },
  nextWebpackConfig
]

const baseConfig = {
  output: 'export',
  distDir: '_build'
}

module.exports = withPlugins(plugins, baseConfig)
