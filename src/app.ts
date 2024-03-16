
import express from 'express'
import { CONFIG } from './config'

const port = CONFIG.PORT;

const app = express()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})