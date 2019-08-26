<template>
		<div>
		<!-- 热门歌单 -->
		<div class="mod_index--hot" >
			<div class="section_inner">
				<div class="index__hd">
					<h2 class="index__tit">歌单推荐</h2>
				</div>

				<div class="mod_playlist ">
					<ul class="slide__list2" style="left:0%;">

						<li class="playlist__item ">
							<div class="playlist__item_box">
								<div class="playlist__cover ">
									<a href="javascript:;" >
										<img  src="../../static/img/300.jpg" @click="musiclist(1)" class="playlist__pic">
									</a>
									
								</div>
								<h4 class="playlist__title">

                                <span class="playlist__title_txt" ><a>愿你平淡的生活能掀起一片波澜</a></span>

                            </h4>
								<div class="playlist__other" >
									播放量：5.0万
								</div>
							</div>
						</li>

						<li class="playlist__item">
							<div class="playlist__item_box">
								<div class="playlist__cover ">
									<a href="" class="js_playlist">
										<img src="../../static/img/301.jpg" @click="musiclist(2)" class="playlist__pic">
									</a>
								</div>
								<h4 class="playlist__title">

                                <span class="playlist__title_txt"><a href="" class="js_playlist" >情侣歌单&#32;&#183;&#32;我爱她藏心里</a></span>

                            </h4>
								<div class="playlist__other">
									播放量：37.1万
								</div>
							</div>
						</li>

						<li class="playlist__item ">
							<div class="playlist__item_box">
								<div class="playlist__cover ">
									<a class="js_playlist">
										<img src="../../static/img/302.jpg" @click="musiclist(3)" class="playlist__pic">
									</a>
								</div>
								<h4 class="playlist__title">
							
								<span class="playlist__title_txt"><a class="js_playlist"  >二字民谣丨每首都有一个故事</a></span>
							
							</h4>
								<div class="playlist__other">
									播放量：47.5万
								</div>
							</div>
						</li>

						<li class="playlist__item ">
							<div class="playlist__item_box">
								<div class="playlist__cover">
									<a class="js_playlist">
										<img src="../../static/img/303.jpg" @click="musiclist(4)" class="playlist__pic">
									</a>
								</div>
								<h4 class="playlist__title">
					
					            <span class="playlist__title_txt"><a class="js_playlist">华语50位作词人:写尽天下人心事</a></span>
					
					        </h4>
								<div class="playlist__other">
									播放量：2105.1万
								</div>
							</div>
						</li>

						<li class="playlist__item">
							<div class="playlist__item_box">
								<div class="playlist__cover">
									<a class="js_playlist">
										<img src="../../static/img/400.jpg" @click="musiclist(5)" class="playlist__pic">
									</a>
								</div>
								<h4 class="playlist__title">

                                <span class="playlist__title_txt"><a class="js_playlist">那些影视歌曲“鱼塘”</a></span>

                            </h4>
								<div class="playlist__other">
									播放量：153.8万
								</div>
							</div>
						</li>

					</ul>
				</div>

			</div>
		</div>

		<!-- 新歌首发 -->
		<div class="mod_index" >
			<div class="section_inner">
				<div class="index__hd">
					<h2 class="index__tit"> 新歌首发</h2>
				</div>

				<!-- 切换 -->
				<div class="mod_index_tab" >

					<a href="javascript:;" class="index_tab__item index_tab__item--current " @click="newmusic" >最新</a>
					<a href="javascript:void(0);" class="index_tab__item" @click="stype(type='内地')">内地</a>
					<a href="javascript:void(0);" class="index_tab__item" @click="stype(type='港台')">港台</a>
					<a href="javascript:;" class="index_tab__item" @click="stype(type='欧美')">欧美</a>
					<a href="javascript:;" class="index_tab__item" @click="stype(type='日韩')">日韩</a>
					
				</div>

				<div class="mod_songlist">
					<div class="slide__list" style="left:0%;">
						<ul class="songlist__list">
							
							<li class="songlist__item"  v-for="FP in FPub">
								<div class="songlist__item_box">
									<a class="songlist__link ">
										<img class="songlist__pic" v-bind:src="FP.mimg"/>
										<!--<img v-bind:src="mvv.mimg" />-->
										
									</a>
									<div class="songlist__cont">
										<h3 class="songlist__song"><a>{{FP.mname}}</a></h3> <br>
										<h3 class="songlist__author">
										<a class="c_tx_thin ">{{FP.singer.sname}}</a>
										</h3>
									</div>
									
								</div>
							</li>

							
						</ul>
					</div>
				</div>

			</div>

		</div>

	</div>

</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				FPub:{
					"mname":'',
     				"sname":'',
     				"mimg":'',
     				'type':'',
     				"mreserve2":''
     				
				},
				ablum:{
					"aname":'',
					"aimg":'',
					"mid":''
				}
			}
		},
		created: function() {
			this.newmusic();
		},
		methods: {
			newmusic:function(){
		  		this.$http.get("http://localhost:8086/list/newlist").then(
		  			function(result){
		  				this.FPub=result.body;
		  				/*alert("qignqiu");
		  				console.log(result);*/
		  			},
		  			function(){
		  				alert("请求失败！");
		  			}
		  		)
		  },
		  indexlist:function(){
		  		this.$http.get("http://localhost:8086/list/indexlist").then(
		  			function(result){
		  				this.ablum=result.body;	
		  			},
		  			function(){
		  				alert("请求失败！");
		  			}
		  		)
		  },
		  stype:function(type){
		  	this.$http.get("http://localhost:8086/list/fpub",{
		  		params:{
		  			type:type
		  		}
		  	}).then(
		  		function(result){
		  			/*alert("成功");*/
		  			this.FPub=result.body;
		  		},
		  		function(){
		  			alert("失败");
		  		}
		  	)
		  },
		  album:function(){
		  	this.$http.get("http://localhost:8086/list/album",{
		  		
		  	}).then(
		  		function(result){
		  			alert("成功");
		  			this.FPub=result.body;
		  		},
		  		function(){
		  			alert("失败");
		  		}
		  	)
		  },
		  	musiclist:function(mreserve2){
		  		this.$router.push({
		  			path:"/musiclist",
		  			query:{
		  				mreserve2:mreserve2
		  			}
		  		})
		  }


		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../static/css/index0000.css");

h4{
	font-size: 14px;
}
.playlist__other{
	float: left;
}
h2{
font-weight: 300;
}
</style>