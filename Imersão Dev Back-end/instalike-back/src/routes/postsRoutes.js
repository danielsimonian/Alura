import express from "express"
import { listarPosts } from "../controlers/postsControler.js";

const routes = (app) => {
    app.use(express.json()); //express devolva json
    //Rota para buscas todos os posts
    app.get('/posts', listarPosts);
}

export default routes;