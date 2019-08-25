<template>
  <div class="main">
			<div class="left">
				<div class="left-main">
					<div class="all">
						<h3>全部榜单</h3>
						<hr align="center" width="90%"  size="2">
					</div>
					<div class="hot">
						<h4>热门榜单</h4>
					
						<ul>
							<li>
								<div class="hot-list-one">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a> 热歌排行榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a> 热歌排行榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-three">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a> 热歌排行榜</a>
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
										<a> 热歌排行榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a> 热歌排行榜</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-three">
									<div class="hot-list-left">
										<img src="static/img/18696.jpg" />&nbsp;&nbsp;
										<a> 热歌排行榜</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="s-top">
					<div class="s-b">
						<button type="button" class="btn btn-warning" >热门</button>
					</div>
					<div class="s-list">
						<ul id="s-li"></ul>
					</div>
				</div>
				<div class="s-img">
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					<div class="s-img-a">
						<img src="static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>
					
				</div>
				
			</div>
		
		</div>
</template>

<script>
export default {
  name: 'singer',
  data () {
    return {
      /*msg: 'Welcome to Your Vue.js App'*/
    }
  },
  created:function(){
  	this.addli();
  },
  methods:{
  	addli:function(){
  		$(function(){
		    for(var i=65;i<91;i++){
		        var str =String.fromCharCode(i);
		        $("#s-li").append("<li><a>"+str+"</a></li>")
		    }
		    
			
			
		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
