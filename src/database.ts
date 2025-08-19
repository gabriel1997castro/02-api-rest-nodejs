import knexPkg from 'knex'

export const knex = knexPkg({
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
})
