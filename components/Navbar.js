if(window.components == null)
	window.components ={}

window.components.Navbar = {
	template:`
	<nav class="navbar">
		<div class="navbar-brand">
			<a class="navbar-item" >
				<h2>{{brandname}}</h2>
			</a>
			<div :class="{'navbar-burger':true , 'is-active':menuActive }" @click="toggleMenu">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div :class="{'navbar-menu':true , 'is-active':menuActive }">
		</div>
	</nav>
	`,
	props:['brandname'],
	methods:{
		toggleMenu(){
			this.menuActive = !this.menuActive;
		}
	},
	data(){
		return{
			menuActive:false
		}
	}

}