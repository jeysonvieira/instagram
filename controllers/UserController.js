import { User } from '../modals/User.js'
import { conn } from '../db/connection.js'
import { where } from 'sequelize'



const UserController = class {

    static UserView(req, res) {
        res.render('login')
    }

    static async LoginPost(req, res) {
        const user = req.body.user
        const password = req.body.password

        const Dadosdb = await User.findAll({ raw: true })

        const query = await `SELECT COUNT(*) AS total_registros FROM users;`

        const TotalRegistrosQuery = await conn.query(query)

        const TotalRegistrosValue = TotalRegistrosQuery[0][0]["total_registros"]

        var cont = 0

        var id = null


        while (cont < TotalRegistrosValue) {

            if (Dadosdb[cont]["email"] == user || Dadosdb[cont]["nomeuser"] == user) {
                id = Dadosdb[cont]["id"]

                const DadosUser = await User.findOne({ raw: true, where: { id: id } })

                if (DadosUser["senha"] == password) {
                    console.log("tudo certo")
                } else {
                    console.log("Senha errada")
                }

            } else {
                if (cont + 1 === TotalRegistrosValue) {
                    console.log("Email ou usúario não encontrado")
                }
            }


            cont++
        }


        res.redirect('/')



    }


    static SignUpGet(req, res) {
        res.render('signup')
    }


    static async SignUpPost(req, res) {
        const email = req.body.email
        const nomecompleto = req.body.nomecompleto
        const nomeuser = req.body.nomeuser
        const senha = req.body.senha



        await User.create({ email, nomecompleto, nomeuser, senha })

        console.log(req.body)

        res.redirect('/')
    }

}


export default UserController
