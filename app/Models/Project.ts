import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'

//       table.string('service_name')
//       table.string('service_cost')
//       table.string('service_description')

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public budget: number

  @column()
  public category: string

  @column()
  public serviceName: string

  @column()
  public serviceCost: 2000

  @column()
  public serviceDescription: string

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
