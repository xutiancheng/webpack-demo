var px2rem = require('postcss-px2rem');
module.exports = {
  plugins: [
    require('autoprefixer')({browsers:'ios >= 8'}),px2rem({remUnit:75})
  ]
}