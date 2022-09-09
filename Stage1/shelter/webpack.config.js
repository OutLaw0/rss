const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    stats: {
        errorDetails: true
    },
    entry: {
        index: './src/pages/main/index.js',
        'js/slider': './src/js/slider.js',
        'js/pagination': './src/js/pagination.js',
        'js/utilities': './src/js/utilities.js',
    },
    output: {
        filename: '[name].js', // '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
       // chunkFilename: 'js/[name].js',
        assetModuleFilename: "assets/[name][ext][query]", // "assets/[hash][ext][query]",
        clean: true
    },
    devtool: 'eval-source-map',

    devServer: {
        open: true,
        hot: true,
        port: 'auto',
        static: {
            directory: './src',
            watch: true,
        },
    },
    /*optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },*/

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css' //'[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/main/index.html',
           chunks: ['index','js/utilities','js/slider']
        }),
        new HtmlWebpackPlugin({
            filename: 'pets.html',
            template: './src/pages/pets/index.html',
          chunks: ['index','js/utilities','js/pagination']
        }),
        new ESLintPlugin()
    ],
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    /*MiniCssExtractPlugin.loader,*/ (mode === 'development') ?  'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                /*generator: {
                    
                    filename: 'assets/images/[path][name][ext][query]'
                  },*/
                  generator: {
                    filename: (name) => {
                        /**
                         * @description Remove first & last item from ${path} array.
                         * @example
                         *      Orginal Path: 'src/images/avatar/image.jpg'
                         *      Changed To: 'images/avatar'
                         */
                        const path = name.filename.split("/").slice(1, -1).join("/");
                        return `${path}/[name][ext][query]`;
                    },
                },
            
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                      maxSize: 8 * 1024 // 8kb
                    }
                  },
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                  }

            },


            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }


                }
            }

        ]
    },
    /* stats: {
         children: true,
       },*/
};