const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },

    entry: [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index.jsx')
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    }

    module: {
        rules: [
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: { 
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              use: 'file-loader'
            },
            {
              test: /\.(woff|woff2)$/,
              use: 'url-loader?prefix=font/&limit=5000'
            },
            {
              test: /\.tff(\?v=\d+\.\d+\.\d+)?$/,
              use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              use: 'url-loader?limit=10000&mimetype=iamge/svg+xml'
            }
        ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'React App Name',
        template: path.join(__dirname, 'src', 'index.html'),
        filename: 'index.html'
      })
    ],

    devServer: {
      hot: true,
      port: 3000,
      inline: true,
      contentBase: path.join(__dirname, 'src'),
      historyApiFallBack: true
    }
}