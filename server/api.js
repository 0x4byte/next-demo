const fetch = require('isomorphic-fetch')
const vm = require('vm')

export const fetchI18nResource = async (locale = 'en') => {
  const url = `https://www.binance.com/resources/js/i18n/${locale}.js`
  const resp = await fetch(url)
  const text = await resp.text()
  const sanbox = {}

  try {
    vm.createContext(sanbox)
    vm.runInContext(text, sanbox)
  } catch (e) {
    console.error(
      `fetch language error: ${e.message}, url => ${url}, response => `,
      text
    )
  }

  return Promise.resolve(sanbox[`mm${locale}`] || {})
}
