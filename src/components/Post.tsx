import React from "react";
import './../css/Post.css'
import {Post as PostModel} from './../../models/Post'

interface Props {
    selectPost: Function;
    post: PostModel;
}

export default function Post({ post, selectPost }: Props) {
    function onClick() {
        selectPost(post);
    }

    return (
        <div
            onClick={(e) => {onClick()}}
            className="post-container"
        >
            <div className="post">
                <a href="#" style={{backgroundImage: `url(${post.url})`}} className="post-image"></a>
                <div className="post-overlay">
                    <span>{post.title}</span>
                </div>
            </div>
        </div>
    )
};

