import React from 'react'
import App from 'next/app'
import * as ReactIntl from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import withRedux from 'next-redux-wrapper'

import { Provider } from 'react-redux'
import store from '../stores/store'

import Layout from 'modules/layout/'
import { localData } from 'modules/app/constants/locale'

ReactIntl.addLocaleData([...zh, ...en])

class Body extends App {
  static async getInitialProps({ Component, ctx }) {
    const queryLocale = ctx.query.locale || localData.en.locale
    const data = localData[queryLocale]
    const props = {}

    props.appProps = {
      locale: queryLocale,
      messages: data,
    }

    props.pageProps = {}
    if (Component.getInitialProps) {
      props.pageProps = await Component.getInitialProps(ctx)
    }

    return props
  }

  render() {
    const { Component, pageProps, appProps, store } = this.props
    const { locale, messages } = appProps

    return (
      <Provider store={store}>
        <ReactIntl.IntlProvider locale={locale} messages={messages}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReactIntl.IntlProvider>
      </Provider>
    )
  }
}

export default withRedux(store)(Body)
