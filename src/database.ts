import knexPkg from 'knex'

export const config: knexPkg.Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
export const knex = knexPkg(config)
