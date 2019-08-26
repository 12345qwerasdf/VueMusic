<template>
  <div>
			<div class="right-mv">
				<div class="right-mv-title">
					<h3>精选MV:</h3>
				</div>
				<div class="s-mv-top">
					<div class="s-mv-b" >
						<ul>
							<li>地区：</li>
							<li><a href="javascript:void(0);" @click="allmv">全部</a></li>
							<li><a href="javascript:void(0);" @click="local(type='内地')">华语</a></li>
							<li><a href="javascript:void(0);" @click="local(type='欧美')">欧美</a></li>
							<li><a href="javascript:void(0);" @click="local(type='日韩')">日本</a></li>
						</ul>
					</div>
					<div class="s-mv-b">
						<ul>
							<li>类型：</li>
							<li><a href="javascript:void(0);" @click="allmv">全部</a></li>
							<li><a href="javascript:void(0);" @click="stype(mvreserve='影视')">影视</a></li>
							<li><a href="javascript:void(0);" @click="stype(mvreserve='动漫')">动漫</a></li>
							<li><a href="javascript:void(0);" @click="stype(mvreserve='古风')">古风</a></li>
							<li><a href="javascript:void(0);" @click="stype(mvreserve='舞曲')">舞曲</a></li>
							<li><a >广告</a></li>
						</ul>
					</div>
					<!--<div class="s-mv-b">
						<ul>
							<li>年代 ：</li>
							<li><a>全部</a></li>
							<li><a>2019</a></li>
							<li><a>2018</a></li>
							<li><a>2017</a></li>
						</ul>
					</div>-->
					
					
				</div>
				<div class="s-mv">
					
					<div class="s-mv-a"  v-for="mvv in mvs">
						<img v-bind:src="mvv.mimg" />
						<h6>{{mvv.mvname}}</h6>
						<h6>&nbsp;</h6><!--2019-08-20-->
						<div class="over">
							<div class="play">
								<div class="sj"></div>
							</div>
						</div>	
					</div>
					
					
				
			
				</div>
			</div>
		
		</div>
</template>

<script>
export default {
  name: 'mv',
  data () {
    return {
      mvs:{
      	"mimg":'',
      	"mvname":'',
      	"singer":'',
      	"mlocation":'',
      	"type":'',
      	"mtype":'',
      	"mvreserve":''
      	
      }
    }
  },
  created:function(){
  	this.allmv();
  },
  methods:{
  	allmv:function(){
  		this.$http.get("http://localhost:8086/mv/allmv").then(
  			function(result){
  				this.mvs=result.body;
  				console.log(result);
  			},
  			function(){
  				alert("请求失败！");
  			}
  		)
  	},
  	local:function(type){
  		this.$http.get("http://localhost:8086/mv/local",{
  			params:{
  				type:type
  				

  			}
  		}).then(
  			function(result){
  				this.mvs=result.body;
  			},
  			function(){
  				
  			}
  		)
  	},
  	stype:function(mvreserve){
  		this.$http.get("http://localhost:8086/mv/mtype",{
  			params:{
  				mvreserve:mvreserve
  			}
  		}).then(
  			function(result){
  				this.mvs=result.body;
  			},
  			function(){
  				
  			}
  		)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s-mv-b a{
	text-decoration: none;
	color:#2c3e50;
	cursor: pointer;
	
}

.s-mv-b a:visited{
		color:#31c27c;
}

.s-mv-b a:hover{
	color:#31c27c;
}

</style>
