
import '../styles/globals.css'
import '../styles/ArbreTableau.css'

// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  )
}

export default MyApp
