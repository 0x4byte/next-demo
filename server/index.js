require('@babel/register')({
  presets: ['@babel/preset-env', 'next/babel'],
})
require('./server')
