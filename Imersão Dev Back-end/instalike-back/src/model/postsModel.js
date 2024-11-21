import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados utilizando a string de conexão fornecida como variável
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}