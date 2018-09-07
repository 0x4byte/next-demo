import path from 'path'
import next from 'next'
import '../env/init'
import conf from './next.config'

const env = process.env.NODE_ENV
const dev = env !== 'production'
const dir = path.join(process.cwd(), './client')

const app = next({
  dev,
  dir,
  conf
})

export default app
