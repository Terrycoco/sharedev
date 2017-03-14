const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './public')
const distPath = path.join(__dirname, './public/dist/');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//for the code shared amongst modules
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest'], //specify the common bundle's name
  minChunks: function (module) {  //accept only vendor libraries 
       // this assumes your vendor imports exist in the node_modules directory
       return module.context && module.context.indexOf('node_modules') !== -1;
    }
});

// const routes = {
//   home: sourcePath + '/routes/Home',
//   search: sourcePath + '/routes/Search',
//   create: sourcePath + '/routes/Create',
//   results: sourcePath + '/routes/Results',
//   summary: sourcePath + '/routes/Summary',
//   mywalks: sourcePath + '/routes/MyWalks',
//   about: sourcePath + '/routes/About',
//   signin: sourcePath + '/components/Auth/Signin',
//   signup: sourcePath + '/components/Auth/Signup',
//   stops: sourcePath + '/routes/Stops',
//   test: sourcePath + '/routes/Test',
//   coming: sourcePath + '/routes/Coming',
//   walking: sourcePath + '/routes/Walking'
// };

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const ifDev = plugin => env.dev ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);
  const isProd = env.prod ? true : false;

  return {
    /**
     * entry tells webpack where to start looking.
     * In this case we have both an app and vendor file.
     */
    cache: false,
    entry: {
      app: sourcePath + '/entry.js',
      vendor: ["react", "react-dom"]
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
      filename: '[name].js',  //don't use hash in dev
      path: publicPath,  //where to store the bundled files
      publicPath: '/'
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
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
      navigation:  path.resolve(__dirname, 'src', 'navigation'),
      reducers:    path.resolve(__dirname, 'src', 'reducers'),
      actions:     path.resolve(__dirname, 'src', 'actions'),
      routes:      path.resolve(__dirname, 'src', 'routes'),
      utils:       path.resolve(__dirname, 'src', 'utils'),
      styles:      path.resolve(__dirname, 'src', 'styles'),
    },
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  devServer: {
      contentBase: './public',
      historyApiFallback: true,
      headers: {"Access-Control-Allow-Origin": "*"},
      port: 3000,
      compress: false,
      inline: true,
      hot: true,
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
      new ExtractTextPlugin('shared.css'),
      new webpack.HotModuleReplacementPlugin(),

      // *
      // * HtmlWebpackPlugin will make sure out JavaScript files are being called
      // * from within our index.html
      // //dynamically imported files will not be included
      
      new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        inject: 'body',
      })
   


  ]) //end array of plugins
}
}