/* eslint-disable prettier/prettier */
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    key: schema.string({ trim: true }, [rules.exists({ table: 'user_keys', column: 'key' })]),
    password: schema.string({ trim: true }, [rules.confirmed('passwordConfirmation')])
  })

  public messages = {}
}
