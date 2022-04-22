/* eslint-disable prettier/prettier */
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    cost: schema.number(),
    description: schema.string.optional({ trim: true }),
    projectId: schema.number([rules.exists({ table: 'projects', column: 'id' })])
  })

  public messages = {}
}
