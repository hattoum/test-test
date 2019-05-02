import React from "react"
import User from "../user/User.js"
import axios from "axios";
import MyAccountPostGrid from "./MyAccountPostGrid.js"

//Reusing User page components
import UserHeader from "../user/UserHeader.js"



class MyAccount extends React.Component{
	state={
		user: [],
		posts: []
	}

	componentDidMount(){
		//GET request to get all user data
		axios.get("https://makinahgram-api.herokuapp.com/users/").then(response => {
      		this.setState({user: response.data.filter(u => u.id == 2)[0]})

    	})

		axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
			this.setState({posts: response.data.filter(p => p.user.id == 2)})
    	})
	}

	render(){
		// axios.post("https://makinahgram-api.herokuapp.com/posts",{user_id: 2, image: "https://i.imgur.com/Doloveb.jpg"})
		return(
			<div>
				<UserHeader user={this.state.user} posts={this.state.posts}/>
				<div className="post-grid">
					<MyAccountPostGrid posts={this.state.posts}/>
				</div>
			</div>
		)
	}
}

export default MyAccount