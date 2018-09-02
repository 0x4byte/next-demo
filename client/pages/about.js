import React from 'react'
import Button from 'modules/app/components/Button'
import fetch from 'isomorphic-fetch'
import { FormattedMessage } from 'react-intl'
// import Router from 'next/router'
import Link from 'next/link'

const fetchExchange = () => {
  return fetch('/exchange/public/product')
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
}

const About = ({ locale }) => {
  return (
    <div>
      <span>
        <FormattedMessage
          id="Account activated"
          defaultMessage="default Account."
        />
      </span>
      <Button theme="primary">primary</Button>
      <Button onClick={fetchExchange}>red</Button>

      <Link href={`/about?locale=${locale === 'en' ? 'zh' : 'en'}`}>
        <a>toggle lang</a>
      </Link>
    </div>
  )
}

About.getInitialProps = ({ query }) => {
  console.log('about getInitialProps => ', query)

  return { locale: query.locale }
}

export default About
