const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './public');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
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




// config
module.exports = env => {
  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const ifDev = plugin => env.dev ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);


  return {
    /**
     * entry tells webpack where to start looking.
     * In this case we have both an app and vendor file.
     */
    cache: false,
    entry: {
      app: sourcePath + '/entry.js',
      vendor: [
      'react', 'react-dom',
      'redux', 'react-redux',
      'redux-thunk',
      'axios',
      ]

    },
    /**
     * output tells webpack where to put the files it creates
     * after running all its loaders and plugins.
     *
     * > [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
     * > path.join(__dirname, '../build/') will output into a /build folder in
     *   the root of this prject.
     */
    output: {
      path: './public',  //where to store the bundled files
      filename: '[name].[chunkhash].bundle.js',//chunkhash -- only when file changes
      publicPath: './', //other path where to find other resources
      chunkFilename: '[name].[chunkhash].js' 
    },

    module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader',  //loader for one, 'use' for array
        options: {  
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        //exclude: /node_modules/ omitted here
        loader: 'babel-loader'

      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',  //must use "loader" if have query
        options: {
          limit: 25000,
        },
      },
      
       {
        test: /(\.scss|\.css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", 
          use: "css-loader!sass-loader?sourceMap"
        })
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


    plugins: removeEmpty([ //array of plugins
      
      //css files into one
      new ExtractTextPlugin({
          filename:  "shared.css",
          allChunks: true
        }),
    
      // Take out process env checks
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),

      //separate app from lib code
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'], //libs and extracted manifest
        minChunks: Infinity
      }),


      //keeps track of generated file names
      new WebpackManifestPlugin(),

      //extract manifest to separate JSON file
      //DOESN'T WORK
      // new ChunkManifestPlugin({
      //   filename: 'chunk-manifest.json',
      //   manifestVariable: 'webpackManifest'  //global var
      // }),

      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: 'index.template.ejs'  //,  will inline it instead to save trip
        // filename: 'index.html',
        // inject: 'body',
      }),

      //put it inline in html
      new InlineManifestWebpackPlugin({
        name: 'webpackManifest'
      })


  ]) //end array of plugins
}
}