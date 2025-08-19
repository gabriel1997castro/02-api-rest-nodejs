import knexPkg from 'knex'
import { env } from './env'

export const config: knexPkg.Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
export const knex = knexPkg(config)
