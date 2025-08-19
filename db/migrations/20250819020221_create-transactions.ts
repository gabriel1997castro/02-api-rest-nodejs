import type { Knex } from 'knex'

// What the migrations is going to do on the database
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// When there is a problem it should undo the changes
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
