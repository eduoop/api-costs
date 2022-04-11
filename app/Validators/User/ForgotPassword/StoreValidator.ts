import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.normalizeEmail({ allLowercase: true }),
      rules.exists({ table: 'users', column: 'email' })
    ]),
    redirectUrl: schema.string({ trim: true })
  })

  public messages = {}
}
