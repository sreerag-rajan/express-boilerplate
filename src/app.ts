
import express from 'express'
import { CONFIG } from './config'
import { Logger } from './infra/logger';
import { MainDatabase } from './config/db';

const port = CONFIG.PORT;

const app = express()

const appLevelLogger = new Logger('app')

const db = new MainDatabase()

app.listen(port, async () => {
  await db.connect();
  appLevelLogger.log(`Example app listening on port ${port}`)
})