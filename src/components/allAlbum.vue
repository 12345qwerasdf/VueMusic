<template>
	<div  class="container">
	<div style="margin: auto;" class="row clearfix">
		<div class="col-md-12 column">
			<div class="carousel slide" id="carousel-437499">
				<ol class="carousel-indicators">
					<li class="active" style="height:30px;width: 30px;" data-slide-to="0" data-target="#carousel-437499">
					</li>
					<li data-slide-to="1" style="height:30px;width: 30px;" data-target="#carousel-437499">
					</li>
					<li data-slide-to="2" style="height:30px;width: 30px;" data-target="#carousel-437499">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img alt="" src="http://y.gtimg.cn/music/common//upload/t_musicmall_focus/1663529.jpg?max_age=2592000" />
						
					</div>
					<div class="item">
						<img alt="" src="http://y.gtimg.cn/music/common//upload/t_musicmall_focus/1631416.jpg?max_age=2592000" />
						
					</div>
					<div class="item">
						<img alt="" src="http://y.gtimg.cn/music/common//upload/t_musicmall_focus/1675031.jpg?max_age=2592000" />
					</div>
				</div> 
			</div>
		</div>
	</div>
		<div class="sa-center">
				<h3 style="color: orange;">热门专辑&nbsp;</h3>
				<ul>
					<li v-for="(album,index) in albums">
						<a style="cursor: pointer;" @click="selectAlbumByAid(album.aid)"><img style="border-radius: 2px;" v-bind:src="album.aimg" /></a>
						<h4><a style="cursor: pointer;" @click="selectAlbumByAid(album.aid)">{{album.aname}}</a></h4>
						
					</li>
					
				</ul>
		</div>
</div>
</template>

<script>
export default {
  name: 'allAlbum',
  data () {
  	return {
      albums:{}
    }
  },
  created:function(){
//	this.loadsinger();
//	this.singerD(sid);
//	alert(this.sid);
//	this.singerD(this.$route.query.sid);
	this.selectAllbums();
  },
  methods:{
  	selectAllbums:function(){
			this.$http.get("http://127.0.0.1:8086/allAlbums").then(
				function(result){
					this.albums=result.body;
				},function(error){
					alert("加载失败，请稍后重试！");
				}
			)
		},
	selectAlbumByAid:function(aid){
		this.$router.push({path:'/albumDetail',query:{aid:aid}}).then(
				function(){
//					alert(sid);
				}
			)
	}
  }	
  	
}
</script>

<style scoped>
	/*.carousel-control.left {
    background-image:none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)
}
 
.carousel-control.right {
    left: auto; right: 0;
    background-image:none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)
}*/
</style>
<style >
	@import url("../../static/css/hjrstyle.css");
	</style>