/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.post('/services', 'Services/Main.store').middleware('auth')
Route.get('/services/:id', 'Services/Main.index').middleware('auth')
Route.delete('/services/:id', 'Services/Main.destroy').middleware('auth')