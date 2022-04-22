/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/services', 'Services/Main').apiOnly().except(['show', 'index']).middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
})