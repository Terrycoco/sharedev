const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './public');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);
  const isProd = env.prod ? true : false;

  return {
    /**
     * entry tells webpack where to start looking.
     * In this case we have both an app and vendor file.
     */
    entry: {
      app: 'entry.js',
      vendor: ['react', 'react-dom', 'react-router'],
    },
    /**
     * output tells webpack where to put the files he creates
     * after running all its loaders and plugins.
     *
     * > [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
     * > path.join(__dirname, '../build/') will output into a /build folder in
     *   the root of this prject.
     */
    output: {
      filename: '[name].[hash].js',
      path: publicPath,
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
  },

    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),


      new ExtractTextPlugin('[name].css'),


      /**
      * HtmlWebpackPlugin will make sure out JavaScriot files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        filename: 'index.html',
        inject: 'body',
      }),

    

      // Only running DedupePlugin() and UglifyJsPlugin() in production
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          'screw_ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      })),
    ]),
  };
};