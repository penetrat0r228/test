import React, {useState} from "react";
import './App.css';
import PostsComponent from "./components/posts/PostsComponent";
import {getAllPostsOfSingleUser} from "./services/postService/post.api.service";
import {IPostModel} from "./models/IPostModel";
import UsersComponent from "./components/users/UsersComponent";


const App = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    const lift = (userId: number) => {
        getAllPostsOfSingleUser(userId).then((data) => {

            // @ts-ignore
            setPosts(data.posts);
        })
    }

    return (
        <div className='App'>
            <div className={"users"}><UsersComponent lift={lift}/></div>
            <div className={"posts"}><PostsComponent posts={posts}/></div>
        </div>
    );
};


export default App;