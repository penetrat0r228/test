import React, {FC} from "react";
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    posts: IPostModel[];
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post: IPostModel) => (<li key={post.id}>{post.title}<br/></li>))
            }
        </div>
    );
};

export default PostsComponent;
