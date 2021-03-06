/* eslint-disable prettier/prettier */
import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    budget: schema.number(),
    cost: schema.number.optional(),
    category: schema.string({ trim: true })
  })

  public messages = {}
}
