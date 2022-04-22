import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreValidator from 'App/Validators/User/Project/Service/StoreValidator'
import { Project } from 'App/Models'

export default class ServicesController {
  public async store({ request, auth }: HttpContextContract) {
    const { name, cost, description, projectId } = await request.validate(StoreValidator)

    const project = Project.findOrFail(projectId)

    const service = (await project)
      .related('services')
      .create({ name, cost, description, userId: auth.user!.id })

    return service
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
