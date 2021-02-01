import './Feed.css'

import { Post } from '../Post/Post'

export function Feed () {
    let infoPosts = {
        posts: [
            {
                id:1,
                nomePessoa:"João",
                textoPost: "Sol quente medoin",
                qtdLikes:112
            },
            {
                id:2,
                nomePessoa:"Evenilson",
                textoPost: "Bom dia",
                qtdLikes:1785
            },
            {
                id:3,
                nomePessoa:"Victor",
                textoPost: "Nova temporada de videos no ar",
                qtdLikes:1154
            },
            {
                id:4,
                nomePessoa:"Maria",
                textoPost: "Sextou",
                qtdLikes:1545
            },
            {
                id:5,
                nomePessoa:"José",
                textoPost: "Pai ta on",
                qtdLikes:1565
            },
        ]
    }

    const posts = infoPosts.posts.map((post) =>
        <Post key={post.id} username={post.nomePessoa} texto={post.textoPost} qtdLikes={post.qtdLikes}></Post>
    );

    return (
        <div className="feed">
            {posts}
        </div>
    )
}