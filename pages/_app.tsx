import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/base/Layout'
import { Provider } from 'react-redux'
import { store } from '../components/Redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
