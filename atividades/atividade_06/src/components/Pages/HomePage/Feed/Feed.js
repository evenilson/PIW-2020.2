import './Feed.css'

import { useContext, useEffect, useState } from 'react';

import { Post } from '../Post/Post'
import { authContext } from '../../../../App';
import { getPostsAxios } from '../../../../api/postAPI';

export function Feed () {
    const [posts, setPosts] = useState([]);

    const { auth } = useContext( authContext );


    useEffect(() => {
        getPostsAxios(auth.token).then((response) => {
            setPosts(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const postsMake = posts.map((post) =>
        <Post key={post.id} username={post.nome_usuario} texto={post.texto} qtdLikes={0}></Post>
    );

    return (
        <div className="feed">
            {postsMake}
        </div>
    )
}