import express from 'express'
import { engine } from 'express-handlebars'
import { conn } from './db/connection.js'
import { User } from './modals/User.js'
import router from './Routers/UserRouter.js'


const app = express()


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use('/', router)

conn.sync().then(
    app.listen(3000)
)