if(window.components == null)
	window.components = {}


window.components.ProgressDonuts = {
	template:`
	<canvas height="200" width="200" v-draw="draw">	
	`,
	directives:{
		draw:{
			bind:function (elm,drawCall) {
				var ctx = elm.getContext('2d')

				//settings
				ctx.lineCap = "round"
				ctx.strokeStyle = "hsl(171, 100%, 41%)"
				ctx.fillStyle = "hsl(171, 100%, 41%)"
				ctx.font = '50px  "Ubuntu" ,"Helvetica Neue", "Arial"';
				ctx.textAlign = "center"

				drawCall.value(ctx)
			},

			update:function (elm,drawCall) {
				var ctx = elm.getContext('2d')
				drawCall.value(ctx)
			},
		}
	},

	methods:{
		draw(ctx){
			var w = ctx.canvas.width;
			var h = ctx.canvas.height;
			var tau = 2*Math.PI

			var startAngle = -tau/4
			var endAngle = startAngle + tau*this.progress/100

			ctx.clearRect(0,0,w,h)

			ctx.lineWidth = 1
			ctx.beginPath()
			ctx.arc(w/2,h/2,w/2-20,0,tau)
			ctx.stroke()

			ctx.lineWidth = 10
			ctx.beginPath()
			ctx.arc(w/2,h/2,w/2-20,startAngle,endAngle)
			ctx.stroke()

			

			ctx.fillText(Math.round(this.progress)+"%",w/2,h/2+20) 
		}
	},
	props:['progress']


}