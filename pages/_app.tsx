import { AppProps } from 'next/app';
import Layout from '../src/components/commons/layouts';
import { resetStyles } from '../src/commons/styles/reset'
import { Global } from '@emotion/react';


function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Global styles = { resetStyles } />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
