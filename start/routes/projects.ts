/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/projects', 'Projects/Main')
.apiOnly()
.except(['show'])
.middleware({
    index: ['auth'],
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
})