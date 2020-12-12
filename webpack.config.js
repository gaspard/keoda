const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const git = new GitRevisionPlugin({ gitWorkTree: '.' })
const COMMIT_COUNT = require('child_process')
  .execSync('git rev-list HEAD --count')
  .toString()
  .trim()
const APP_VERSION = `v${parseInt(COMMIT_COUNT)}`
console.log(`\n*****************************`)
console.log(`******** BUILD: ${APP_VERSION} *******`)
console.log(`*****************************\n\n`)

function root(path) {
  return join(__dirname, path)
}

const env = process.env.NODE_ENV || 'development'

module.exports = {
  entry: {
    boot: root('src/boot.tsx'),
  },

  // devtool: 'inline-source-map',

  output: {
    publicPath: '/',
    path: root('public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    // This setting is required for web workers to not use 'window'
    globalObject: 'this',
  },

  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        modules: {
          test: /node_modules/,
          name: 'modules',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        // Look behind assertion
        test: /(?<!\.css)\.tsx?$/,
        include: root('src'),
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: root(`setup/tsconfig.${env}.json`),
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|mp3|aac|ogg)$/,
        loader: 'file',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {},
  },

  plugins: [
    // new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: ['boot'],
      template: root('src/index.html'),
    }),
    new CopyWebpackPlugin({ patterns: [{ from: root('assets') }] }),
    new webpack.DefinePlugin({
      // New way to do things
      BUILD_ENV: JSON.stringify({
        APP_ENV: process.env.APP_ENV || env,
        BROWSER: true,
        NODE_ENV: env,
        APP_VERSION,
        RELEASE_DATE: new Date().toISOString(),
        COMMITHASH: git.commithash().slice(0, 7),
      }),
      // For legacy and external code
      process: JSON.stringify({
        env: {
          NODE_ENV: env,
        },
      }),
    }),
    /*
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: root('setup/bundle-report.html'),
      openAnalyzer: false,
    }),
    */
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],

  devServer: {
    contentBase: root('public'),
  },

  resolveLoader: {
    modules: ['node_modules', root('setup/loaders')],
  },
}
