'use strict';

const path = require('path');
const fs = require('fs');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const _externals = require('externals-dependencies');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'production',
  // Don't attempt to continue if there are any errors.
  bail: true,
  // devtool: 'source-map',
  entry: resolveApp('src/index.ts'),
  output: {
    path: resolveApp('build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    // plugins: [
    // Tapable.plugin is deprecated. Use new API on `.hooks` instead
    // https://github.com/dividab/tsconfig-paths-webpack-plugin/tree/webpack4
    //   new TsconfigPathsPlugin({ configFile: resolveApp('tsconfig.json') })
    // ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('source-map-loader'),
        enforce: 'pre'
      },

      {
        test: /\.ts$/,
        exclude: /node_modulss/,
        include: resolveApp('src'),
        use: [
          {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
              useBabel: true,
              babelOptions: {
                babelrc: false,
                presets: [
                  ['env', { targets: { node: '8.9' }, 'modules': false }]
                ]
              }
              // babelCore: '@babel/core' // need for babelv7
            }
          }
        ]
      }
    ]
  },
  target: 'node',
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    __dirname: true,
    __filename: true
  },
  externals: _externals()
}