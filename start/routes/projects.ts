/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

// Route.resource('/projects', 'Projects/Main')
// .apiOnly()
// .middleware({
//     index: ['auth'],
//     store: ['auth'],
//     update: ['auth'],
//     destroy: ['auth'],
//     show: ['auth']
// })

Route.get('/projects', 'Projects/Main.index').middleware('auth')
Route.post('/projects', 'Projects/Main.store').middleware('auth')
Route.put('/projects/:id', 'Projects/Main.update').middleware('auth')
Route.delete('/projects/:id', 'Projects/Main.destroy').middleware('auth')
Route.get('/projects/:id', 'Projects/Main.show').middleware('auth')