import './Feed.css'

import { useContext, useEffect, useState } from 'react';

import { Post } from '../Post/Post'
import { authContext } from '../../../../App';
import { getPostsAxios } from '../../../../api/postAPI';

export function Feed () {
    const [posts, setPosts] = useState([]);

    const { auth } = useContext( authContext );


    function getPostsFunction(){
        getPostsAxios(auth.token).then((response) => {
            setPosts(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getPostsFunction(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const postsMake = posts.map((post) =>
        <Post key={post.id} username={post.nome_usuario} id={post.id} texto={post.texto} qtdLikes={0}></Post>
    );

    return (
        <div className="feed">
            {postsMake}
        </div>
    )
}