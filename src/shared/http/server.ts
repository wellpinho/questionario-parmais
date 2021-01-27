import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(4000, () => {
  console.log('Running on port 4000')
})