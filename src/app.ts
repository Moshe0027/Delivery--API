import express from 'express'
import config from 'config'
import logger from './utils/logger'
import routes from './routes'
import cors from 'cors'
import connect from './utils/connect'


const port = config.get<number>('port')
const host = config.get<string>('host')
const app = express()

app.use(
  cors({
    origin: '*'
  })
)
app.use(express.json())

app.listen(port, async () => {
  logger.info(`App is running at http://${host}:${port}`);
  await connect()
  routes(app);
})