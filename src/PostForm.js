//hellow! I am your post foarm!

import React from 'react';

const PostForm = (props) => {
    console.log(props.posts);
    return (
        <div className='post-maker'>
            <form onSubmit={props.submit}>
                <input
                    type="text"
                    name="title"
                    value={props.post.title}
                    placeholder="title your inane babbling"
                    onChange={props.change}
                />
                <input
                    type="text"
                    name="content"
                    value={props.post.content}
                    placeholder="what words have you for the masses"
                    onChange={props.change}
                />
                <input type="submit" value="Submit your post!" />
            </form>
            {props.posts.map((post, idx) => (
                <div className='post-reader' key={idx}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default PostForm;