import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreValidator from 'App/Validators/User/Project/Service/StoreValidator'
import { Project, Service } from 'App/Models'

export default class ServicesController {
  public async index({ params, auth, response }: HttpContextContract) {
    const projectId = await params.id
    const projeto = Project.findOrFail(projectId)
    const projectUSerId = (await projeto).userId

    if (auth.user!.id !== projectUSerId) {
      return response.unauthorized()
    }

    const services = (await projeto).related('services').query()

    return services
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const { name, cost, description, projectId } = await request.validate(StoreValidator)

    const project = Project.findOrFail(projectId)

    if (auth.user!.id !== (await project).userId) {
      return response.unauthorized()
    }

    const service = (await project)
      .related('services')
      .create({ name, cost, description, userId: auth.user!.id })

    return service
  }

  public async show({ params, auth, response }: HttpContextContract) {
    const serviceId = await params.id
    const service = Service.findOrFail(serviceId)

    const projectUSerId = (await service).userId

    if (auth.user!.id !== projectUSerId) {
      response.unauthorized()
    }

    return service
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const service = Service.findOrFail(params.id)

    if (auth.user!.id !== (await service).userId) {
      return response.unauthorized()
    }

    ;(await service).delete()
  }
}
