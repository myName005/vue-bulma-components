if(window.components == null)
	window.components = {}

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
		image, // optional
		date
	}
	*/
	computed:{
		fullname()
		{
			return this.postdata.user.firstName + " "+this.postdata.user.lastName
		}

	}

}