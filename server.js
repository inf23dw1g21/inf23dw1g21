const mysql = require("mysql")
const clienteService = require("./service/ClienteService")
const pagamentoService = require("./service/PagamentoService")
const planoService = require("./service/PlanoService")
const dominioService = require("./service/DominioService")

const app = express()
const port = 8080

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "secret",
  database: "webhoster",
})

connection.connect((err) => {
    if (err) {
      console.log("Erro na conexão com a base de dados")
      throw err
    }
    console.log("Conexão com a base de dados bem sucedida!!")
  })
