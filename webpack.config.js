const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './public');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//for the code shared amongst modules
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'shared',
  filename: 'shared.js'
});

const routes = {
  home: sourcePath + '/routes/Home',
  search: sourcePath + '/routes/Search',
  create: sourcePath + '/routes/Create',
  results: sourcePath + '/routes/Results',
  details: sourcePath + '/routes/Details',
  myWalks: sourcePath + '/routes/MyWalks',
  about: sourcePath + '/routes/About',
  signin: sourcePath + '/components/Auth/Signin',
  signup: sourcePath + '/components/Auth/Signup'
};

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);
  const isProd = env.prod ? true : false;
  const IS_PRODUCTION = env.prod ? true : false;
  return {
    /**
     * entry tells webpack where to start looking.
     * In this case we have both an app and vendor file.
     */
    entry: {
      app: 'entry.js',
      home: routes.home,
      search: routes.search,
      create: routes.create,
      results: routes.results,
      details: routes.details,
      myWalks: routes.myWalks,
      about: routes.about,
      signin: routes.signin,
      signup: routes.signup
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
      path: publicPath
    },

     module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader'
        ],
      },
      
      { 
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract({fallback:'style-loader', loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap'})
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
      styles:      path.resolve(__dirname, 'src', 'styles'),


      //production versions of react and redux
      // 'react$': path.join(__dirname, 'node_modules', 'react','dist',
      //   (IS_PRODUCTION ? 'react.min.js' : 'react.js')),
      // 'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist',
      //   (IS_PRODUCTION ? 'react-dom.min.js' : 'react-dom.js')),
      // 'redux$': path.join(__dirname, 'node_modules', 'redux','dist',
      //   (IS_PRODUCTION ? 'redux.min.js' : 'redux.js')),
      // 'react-redux$': path.join(__dirname, 'node_modules', 'react-redux','dist',
      //   (IS_PRODUCTION ? 'react-redux.min.js' : 'react-redux.js'))
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
      headers: {"Access-Control-Allow-Origin": "*"},
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

    plugins: removeEmpty([ //array of plugins
      
      extractCommons,

      //css files
      new ExtractTextPlugin('[name].css'),


      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        filename: 'index.html',
        inject: 'body',
      }),

    

      // Only running DedupePlugin() and UglifyJsPlugin() in production
      ifProd(new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }))
  ]) //end array of plugins
}
}
