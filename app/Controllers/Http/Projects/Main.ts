import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Project } from 'App/Models'
import StoreValidator from 'App/Validators/User/Project/Main/StoreValidator'
import UpdateValidator from 'App/Validators/User/Project/Main/UpdateValidator'

export default class ProjectsController {
  public async index({ auth }: HttpContextContract) {
    const user = auth.user!

    await user.load('projects', (query) => {
      query.orderBy('id', 'desc')
      query.select(['id', 'name', 'budget', 'category'])
    })

    return user.projects
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const project = await auth.user!.related('projects').create(data)

    return project
  }

  public async update({ request, response, auth, params }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const project = await Project.findOrFail(params.id)

    if (auth.user!.id !== project.userId) {
      return response.unauthorized()
    }

    await project.merge(data).save()

    return project
  }

  public async destroy({ response, params, auth }: HttpContextContract) {
    const project = await Project.findOrFail(params.id)

    if (auth.user!.id !== project.userId) {
      return response.unauthorized()
    }

    await project.delete()
  }
}