import Unsplash from 'unsplash-js'

const unsplashAPI = new Unsplash({
  accessKey: '6a66bec6ac24889a3ef125bc9fa17d0e023041739192ba2d9f76db2493eadacc',
  secret: 'ef2303203b4eaa6169553c3404367189bbeddc77ca717bb3bae6c34d39e55c14'
  // callbackUrl: "{CALLBACK_URL}"
})

export default unsplashAPI

// const unsplash = new Unsplash({
//   accessKey: "{APP_ACCESS_KEY}",
//   // Optionally you can also configure a custom header to be sent with every request
//   headers: {
//     "X-Custom-Header": "foo"
//   },
//   // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
//   timeout: 500 // values set in ms
// });
