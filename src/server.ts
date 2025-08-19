import fastify from 'fastify'

const app = fastify()

// http://localhost:3000/hello
app.get('/hello', () => {
  return 'Hello World'
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on http://localhost:3333')
})
