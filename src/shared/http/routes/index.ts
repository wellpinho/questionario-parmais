import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({
    Message: 'Hello ParMais'
  })
})

export default routes