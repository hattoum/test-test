import React from "react";


function UserPost(props){
	return(
		<section className="post-grid" id={props.id}>
        	<div>
        		<img className="grid" src={props.image} alt={"Image "+props.id} />
        	</div>
        </section>
	)
}

export default UserPost