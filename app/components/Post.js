import React from 'react';
import {Link} from 'react-router-dom'
import Capitalize from 'react-capitalize'

function Post(props) {
    const post = props.post
    const date = new Date(post.createdDate)
    const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    return (
    <Link onClick={props.onClick} to={`/post/${post._id}`} className="list-group-item list-group-item-action">
        <img className="avatar-tiny" src={post.author.avatar} /> <strong><Capitalize>{post.title}</Capitalize></strong> <span className="text-muted small"> 
        {!props.noAuthor && <>posted by <Capitalize>{post.author.username}</Capitalize></>} post was created on {dateFormatted} </span>
    </Link>
    )
}

export default Post;