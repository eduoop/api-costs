import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Category } from 'App/Models/'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    const categories = await Category.all()

    return categories
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.only(['name'])
    const category = await Category.create(data)

    return category
  }

  public async update({ request, params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)

    const data = await request.only(['name'])

    category.merge(data)

    await category.save()

    return category
  }

  public async destroy({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)

    await category.delete()
  }
}
