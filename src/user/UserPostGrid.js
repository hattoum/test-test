import React from "react";
import UserPost from "./UserPost.js"

function UsersPostGrid(props){
    return props.posts.map(post => {
      return (
      	<div>
        	<UserPost id={post.id} image={post.image} />
        </div>
      )
    })
}

export default UsersPostGrid;