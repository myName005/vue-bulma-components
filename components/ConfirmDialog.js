if(window.components == null)
	window.components = {}


window.components.ConfirmDialog = {
	template:`
		<div v-bind:class="{modal:true,'is-active':show}">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							{{title}}
						</p>
					</header>
					<div class="card-content">
						<div class="content">
							<slot>
						</div>
					</div>
					<footer class="card-footer">
						<a class="card-footer-item" @click="emitOnConfirm">Confirm</a>
						<a class="card-footer-item" @click="emitOnCancel">Cancel</a>
					</footer>
				</div>
			</div>
		</div>
	`,
	props:['show','title','slot'],
	methods:
	{
		emitOnConfirm(){
			this.$emit('confirm');
		},
		emitOnCancel()
		{
			this.$emit('cancel')
		}
	}
}