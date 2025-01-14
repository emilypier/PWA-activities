module.exports = {
  entry: './src/app.js',        // where our app starts
  output: {                     // where to output when we run the command
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development'           //
};