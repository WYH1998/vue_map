// // cesium webpack 配置
// // https://cesiumjs.org/tutorials/cesium-and-webpack/
// const webpack = require('webpack');
// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// // The path to the Cesium source code
// const cesiumSource = 'node_modules/cesium/Source';
// const cesiumWorkers = '../Build/Cesium/Workers';

// module.exports = {
//   output: {
//     // Needed to compile multiline strings in Cesium
//     sourcePrefix: '',
//   },
//   amd: {
//     // Enable webpack-friendly use of require in Cesium
//     toUrlUndefined: true,
//   },
//   node: {
//     // Resolve node module use of fs
//     fs: 'empty',
//   },
//   resolve: {
//     alias: {
//       // Cesium module name
//       cesium: path.resolve(cesiumSource),
//     },
//   },
//   module: {
//     // 解决：Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
//     unknownContextCritical: false,
//   },
//   plugins: [
//     // Copy Cesium Assets, Widgets, and Workers to a static directory
//     new CopyWebpackPlugin([
//       { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
//     ]),
//     new CopyWebpackPlugin([
//       { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
//     ]),
//     new CopyWebpackPlugin([
//       { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
//     ]),
//     // 解决：Unable to determine Cesium base URL automatically,…efining a global variable called CESIUM_BASE_URL.
//     new webpack.DefinePlugin({
//       // Define relative base path in cesium for loading assets
//       CESIUM_BASE_URL: JSON.stringify(''),
//     }),
//   ],
// };

