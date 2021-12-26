const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const resolve = (dir) =>{
    return path.join(__dirname, '..', dir)
}
module.exports={
    entry:[
        '@babel/polyfill', resolve('src/index.js')
    ],
    output:{
        path: resolve('dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }

        },{
            test: /\.s?css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader
                },{
                    loader: 'css-loader',
                    options: {
                       SourceMap: true
                    }
                },{
                    loader: "group-css-media-queries-loader",
                    oprions: {
                        SourceMap: true
                    }
                },{
                    loader: "sass-loader",
                    options:{
                        SourceMap:true
                    }
                }]
        },{
           test: /\.(png|svg|jpg|jpeg|gif)$/,
           use:[{
               loader: 'file-loader',
               options:{
                   limit:10000,
                   outputPath: 'images',
                   name:'[name].[hash].[ext]'
               }
           }]
        }]
    },
    resolve:{
        modules:[
            resolve('src'),
            'node_modules'
        ],
        extentionns:['*','.js','.jsx']
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].[contenthash]_[id].css'
        })
    ]

};