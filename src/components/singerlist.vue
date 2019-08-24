<template>
  <div>
    <div class="main">
			<div class="heade">
				
			</div>
			<div class="left">
				<div class="left-main">
					<div class="all">
						<h3>全部歌手</h3>
						<hr align="center" width="90%"  size="2">
					</div>
					<div class="hot">
						<h4>华语歌手</h4>
					
						<ul>
							<li>
								<div class="hot-list-one">
									<div class="hot-list-left">
										 
										<a @click="selectByType('华语男')"> 华语男歌手</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										 
										<a @click="selectByType('华语女')"> 华语女歌手</a>
									</div>
								</div>
							</li>
							<li>
								<!--<div class="hot-list-three">
									<div class="hot-list-left">
										 
										<a @click="selectByType('华语组合')"> 华语组合</a>
									</div>
								</div>-->
							</li>
						</ul>
						<hr align="center" width="90%"  size="2">
					</div>
					<div class="classify">
						<h4>欧美歌手</h4>
						<ul>
							<li>
								<div class="hot-list-one">
									<div class="hot-list-left">
										 
										<a @click="selectByType('欧美男')"> 欧美男歌手</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										 
										<a @click="selectByType('欧美女')"> 欧美女歌手</a>
									</div>
								</div>
							</li>
							<li>
								<!--<div class="hot-list-three">
									<div class="hot-list-left">
										 
										<a @click="selectByType('欧美组合')"> 欧美组合</a>
									</div>
								</div>-->
							</li>
						</ul>
					</div>
					<div class="classify">
						<h4>日韩歌手</h4>
						<ul>
							<li>
								<div class="hot-list-one">
									<div class="hot-list-left">
										 
										<a @click="selectByType('日韩男')"> 日韩男歌手</a>
									</div>
								</div>
							</li>
							<li>
								<div class="hot-list-two">
									<div class="hot-list-left">
										 
										<a @click="selectByType('日韩女')"> 日韩女歌手</a>
									</div>
								</div>
							</li>
							<li>
								<!--<div class="hot-list-three">
									<div class="hot-list-left">
										 
										<a @click="selectByType('日韩组合')"> 日韩组合</a>
									</div>
								</div>-->
							</li>
						</ul>
					</div>
					<!--<div class="classify">
						<h4>其他歌手</h4>
						<ul>
							<li>
								<div class="hot-list-one">
									<div  class="hot-list-left">
										 
										<a @click="selectByType('其他歌手')"> 其他歌手</a>
									</div>
								</div>
							</li>
							
						</ul>
					</div>-->
				</div>
			</div>
			<div class="right">
				<div class="s-top">
					<div class="s-b">
						<button type="button" @click="loadsinger()" class="btn btn-warning" >全部</button>
					</div>
					<div class="s-list">
						<ul id="s-li1">
							<li v-for="sli in slis" ><a @click="selectByFw(sli)">{{sli}}</a></li>
						</ul>
						
					</div>
					<div class="s-list">
						
						<ul id="s-li2"></ul>
					</div>
				</div>
				<div class="right-bottom">
					<!--<div class="s-img-a">
						<img src="../../static/img/T001.jpg" />
						<h4>周杰伦</h4>
					</div>-->
					<ul>
						
						<li v-for="(singer,index) in singers" class="s-img-a">
							
							<a @click="selectById(singer.sid)"><img v-bind:src="singer.simg"/></a>
							
						<!--	<router-link to="{path:'singerDetail',query:{id:singer.sid}}" > {{singer.sname}} </router-link>-->
							<a @click="selectById(singer.sid)">{{singer.sname}}</a>
							
						</li>
					</ul>
				</div>
				
				
			</div>
			<div class="pagination1">
				<ul  class="pagination">
					<li><a href="#">&laquo;</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">&raquo;</a></li>
				</ul>
				</div>
		</div>
    
  </div>
</template>

<script>
export default {
  name: 'singerlist',
  data () {
    return {
      singers:[],
      slis:[]
    }
  },
  created:function(){
  	this.addli();
  	this.loadsinger();
  	
  },
  methods:{
  	addli:function(){
  		
		    for(var i=65;i<91;i++){
		        var str =String.fromCharCode(i);
		       this.slis.push(str);
		    }
		
  	},
		loadsinger:function(){
			this.$http.get("http://127.0.0.1:8086/singer").then(
				function(result){
					this.singers=result.body;
				},function(error){
					alert("加载失败，请稍后重试！");
				}
			)
		},
		selectByFw:function(sreserve){
			this.$http.post("http://127.0.0.1:8086/singerf",{
					fw:sreserve
			}).then(function(result){
					this.singers=result.body;
			},function(error){
				alert("失败");
			})
		},
		selectByType:function(type){
			this.$http.post("http://127.0.0.1:8086/singert",{
					type1:type
			}).then(function(result){
					this.singers=result.body;
			},function(error){
				alert(type);
			})
		},
		selectById:function(sid){
			this.$router.push({path:'/singerDetail',query:{sid:sid}}).then(
				function(){
//					alert(sid);
				}
			)
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
