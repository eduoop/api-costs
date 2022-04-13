import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './projects'
import './categories'

Route.get('/user-register', async ({ view }) => {
  return view.render('emails/register')
})
