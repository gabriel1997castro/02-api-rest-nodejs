import fastify from 'fastify'
import { knex } from './database.js'
import crypto from 'node:crypto'

const app = fastify()

// http://localhost:3000/hello
app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')
  return transactions
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333')
})
