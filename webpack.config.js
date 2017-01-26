
const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './public');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSASS = new ExtractTextPlugin('[name].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');


const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    minChunks: 2,
    name: 'common'
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.NamedModulesPlugin(),

  // Allows error warnings but does not stop compiling.
  new webpack.NoErrorsPlugin(),
  
  //extract all sass into one css file
  extractSASS,

  //only rebuild what has changed
  // new WebpackMd5Hash(),

  new AssetsPlugin({
    filename: 'public/webpack-assets.json',
    prettyPrint: true
  }),

  new ChunkManifestPlugin({
    filename: 'chunk-manifest.json',
    manifestVariable: 'webpackManifest'
  }),

 //generates a new index.html each build
  new HtmlWebpackPlugin({
    template: 'index.template.ejs',
    inject: 'body'
  }),

  // new WriteFilePlugin()

  // new SWPrecacheWebpackPlugin(
  // {
  //   cacheId: "sharewalks",
  //   filename: "sw.js"
  // })
];

if (isProd) {
  //production only plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    })
  );
} else {
  //development only plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = {
  devtool: isProd ? 'source-map' : 'eval',
  context: sourcePath,
  entry: {
    app: ['./entry.js'],
    common: ['react', 'react-dom']
  },
  output: {
    path: staticsPath,
    filename: isProd ? '[name].[hash].js' : '[name]_dev.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name]_dev.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      { 
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract({fallbackLoader:'style-loader', loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap'})
       }
    ]
  },
  resolve: {
    alias: {
      components:  path.resolve(__dirname, 'src', 'components'),
      reducers:    path.resolve(__dirname, 'src', 'reducers'),
      actions:     path.resolve(__dirname, 'src', 'actions'),
      routes:      path.resolve(__dirname, 'src', 'routes'),
      utils:       path.resolve(__dirname, 'src', 'utils'),
      styles:      path.resolve(__dirname, 'src', 'styles')
    },
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins,
  devServer: {
    contentBase: './public/',
    historyApiFallback: true,
    port: 3000,
    compress: isProd,
    inline: !isProd,
    hot: !isProd,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
  }
};


// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     './src/entry.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/,
//         loader: 'babel',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract('css!sass')
//       },
//       { test: /\.(png|cur|jpg)$/,
//         loader: "url-loader?limit=10000&minetype=image/jpg"
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       components:  path.resolve(__dirname, 'src', 'components'),
//       reducers:    path.resolve(__dirname, 'src', 'reducers'),
//       actions:     path.resolve(__dirname, 'src', 'actions'),
//       routes:      path.resolve(__dirname, 'src', 'routes'),
//       utils:       path.resolve(__dirname, 'src', 'utils'),
//       styles:      path.resolve(__dirname, 'src', 'styles'),
//       sw:          path.resolve(__dirname, 'src', 'sw')

//     },
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './public/'
//   },
//   plugins: [
//     new ExtractTextPlugin('/css/style.css', {
//         allChunks: true
//     })
//   ]

// };