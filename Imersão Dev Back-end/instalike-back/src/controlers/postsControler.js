import getTodosPosts from "../model/postsModel.js";

export async function listarPosts (req, res) {
    // Chama a função para buscar os posts
    const posts = await getTodosPosts();
    // Envia um resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}