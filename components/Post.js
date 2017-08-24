if(window.components == null)
	window.components = {}
if(window.components.LikeDislikeButton == null )
	throw "this component require LikeDislikeButton component"
window.components.Post = {
	template:`
<div class="card">
	<header class="card-header">
	<div class="card-header-title">
		<div class="media">
			<div class="media-left">
			<figure class="image is-48x48">
				<img :src="postdata.user.profileImageUrl" alt="Image">
			</figure>
			</div>
			<div class="media-content">
				<p class="title is-4">{{fullname}}</p>
				<p class="subtitle is-6">@{{postdata.user.username}}</p>
			</div>
		</div>
	</div>
	</header>
	<div v-if="postdata.image" class="card-image">
	<figure class="image is-4by3">
		<img :src="postdata.image" alt="Image">
	</figure> 
	</div>
	<div class="card-content">
	<div class="content" >
		<p v-html="postdata.content"></p>
		<small>{{postdata.date}}</small>
	</div>
	</div>
	<footer class="card-footer">
	<span class="card-footer-item">
		<like-dislike-button :init="postdata.like.state" :score="postdata.like.score"
		@click="likeDislikeClick"></like-dislike-button>
	</span>	
	</footer>
</div>
	`,
	props:['postdata'],
	/*
	postdata {
		content,
		user:{
			id, username, firstName,
			lastName , profileImageUrl
		},
		like:{
			state, // wheather the curent user like/disliked this post before
			score
		}
		image, // optional
		date
	}
	*/
	components:{
		'like-dislike-button':window.components.LikeDislikeButton
	},
	computed:{
		fullname(){
			return this.postdata.user.firstName + " "+this.postdata.user.lastName
		}
	},
	methods:
	{
		likeDislikeClick(state){
			throw('implement me')

		}
	}

}