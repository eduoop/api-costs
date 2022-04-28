import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
  protected tableName = 'services'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unique()
      table.integer('cost')
      table.text('description', 'longtext')
      table
        .integer('project_id')
        .unsigned()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
