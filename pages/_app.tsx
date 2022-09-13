import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layouts';
import { resetStyles } from '../src/commons/styles/reset'
import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil'
import ApolloSetting from '../src/components/commons/apollo';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles = { resetStyles } />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp
