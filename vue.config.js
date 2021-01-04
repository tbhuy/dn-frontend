// const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  runtimeCompiler: true,
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production'
  ? 'http://melodi.irit.fr/datanoos/'
  : '/',

  // baseUrl: IS_PRODUCTION
  // ? 'http://cdn123.com'
  // : '/',
  // For Production, replace set baseUrl to CDN
  // And set the CDN origin to `yourdomain.com/static`
  // Whitenoise will serve once to CDN which will then cache
  // and distribute
  devServer: {
    proxy: {
      'http://melodi.irit.fr/api/*': {
        // Forward frontend dev server request for http://melodi.irit.fr/api/ to django dev server
        target: 'http://localhost:8001/',
      }
    }
  }
}