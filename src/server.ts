import fastify from 'fastify'
import { knex } from './database.js'

const app = fastify()

// http://localhost:3000/hello
app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333')
})
