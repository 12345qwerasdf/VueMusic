<template>
  <div class="main">
			<div class="left">
				<div class="left-main">
					<div class="all">
						<h3>全部榜单</h3>
						<hr align="center" width="100%"  size="2">
					</div>
					<div class="hot">
						<h4>热门榜单</h4>
					
						<ul>
							<li>
								<div class="hot-list-one">
									<div class="hot-list-left">
										<img src="static/img/187.jpg" />&nbsp;&nbsp;<!--(type='hot')-->
										<a style="text-decoration: none;" href="javascript:void(0);" @click="loadlist"> 热歌排行榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										<img src="static/img/1871.jpg" />&nbsp;&nbsp;
										<a style="text-decoration: none;" href="javascript:void(0);" @click="newmusic"> 新歌排行榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-three">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a style="text-decoration: none;" href="javascript:void(0);" @click="popmusic"> 流行排行榜</a>
									</div>
								</div>
							</li>
						</ul>
						<hr align="center" width="90%"  size="2">
					</div>
					<div class="classify">
						<h4>分类榜单</h4>
						<ul>
							<li>
								<div class="hot-list-one">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a style="text-decoration: none;" href="javascript:void(0);" @click="mainload"> 华语内地榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a style="text-decoration: none;" href="javascript:void(0);" @click="rthk"> 华语港台榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-three">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a style="text-decoration: none;" href="javascript:void(0);" @click="eurusa"> 欧美榜&nbsp;&nbsp;</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="m-top">
				<div class="m-top-1" style="margin-top: 25px;">
					<h3 style="display: inline; margin-right: 20px;margin-left: -570px;">排行榜</h3>
					<button type="button" class="btn btn-warning">播放歌单</button>
				</div>
			</div>
			<div class="m-line">
				<hr align="center" width="78%" color="aqua" size="2">
			</div>
			
			<div class="m-center">
				
						<div class="col-md-12 column">
							<table class="table">
								<thead >
									<tr >
										<th>
											排名
										</th>
										<th>
											歌曲名称
										</th>
										<th>
											歌手
										</th>
										<th>
											时长
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(mu,index) in music">
										<td>{{index+1}}</td>
										<td>{{mu.mname}}</td>
										<td>{{mu.singer.sname}}</td>
										<td>{{mu.duration}}</td>
									</tr>
								
								</tbody>
							</table>
						</div>
					</div>
				
		</div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    parentMessage: 'Parent',
     music:{
     	"mname":'',
     	"sname":'',
     	"duration":''
     }
    }
  },
  created:function(){
  	this.loadlist();
  },
  methods:{
  	loadlist:function(){
  		this.$http.get("http://localhost:8086/list/hotlist").then(
  			function(result){
  				console.log(result);
  				
  				this.music=result.body;
  			},
  			function(error){
  				alert("请求失败！");
  			}
  		)
  	},
  	newmusic:function(){
  		
  		this.$http.get("http://localhost:8086/list/newlist").then(
  			function(result){
  				this.music=result.body;
  			},
  			function(){
  				alert("请求失败！");
  			}
  		)
  	},
  	popmusic:function(){
  		
  		this.$http.get("http://localhost:8086/list/popmusic").then(
  			function(result){
  				this.music=result.body;
  			},
  			function(){
  				alert("请求失败！");
  			}
  		)
  	},
  	mainload:function(){
  		
  		this.$http.get("http://localhost:8086/list/mainload").then(
  			function(result){
  				this.music=result.body;
  			},
  			function(){
  				alert("请求失败！");
  			}
  		)
  	},
  	rthk:function(){
  		
  		this.$http.get("http://localhost:8086/list/rthk").then(
  			function(result){
  				this.music=result.body;
  			},
  			function(){
  				alert("请求失败！");
  			}
  		)
  	},
  	eurusa:function(){
  		
  		this.$http.get("http://localhost:8086/list/eurusa").then(
  			function(result){
  				this.music=result.body;
  			},
  			function(){
  				alert("请求失败！");
  			}
  		)
  	},
  	
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-main h3{
	  margin-right: 65px;
}
a:visited{
		text-decoration: none;
}
h4{
	margin-right: 65px;
}
hr{
	margin-left: 12px;
}
th{
	text-align: center;
}
body{
	background-color:#FAFAFA
}

</style>
<style type="text/css">
	@import url("../../static/css/ltxstyle.css");
</style>
