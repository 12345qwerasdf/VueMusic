<template>
	<div class="sd-main">
			<div class="sd-top">
				<div class="sd-top-img">
					<img v-bind:src="singer.simg"/>
				</div>
				<div class="sd-top-right">
					<h1><a href="#">{{singer.sname}}</a></h1>
					<h4>{{singer.detail}}</h4>
					<h3><a @click="selectSingerBySid(singer.sid)" >单曲{{musicCount}}</a>&nbsp;&nbsp;<a @click="selectAlbumBySid(singer.sid)">专辑{{albumCount}}</a>&nbsp;&nbsp;</h3>
					<!--<button class="sd-top-right-button">▷播放歌手热门歌曲</button>-->
				</div>
			</div>
			
			<div class="sa-center">
				<h3>专辑&nbsp;{{albumCount}}</h3>
				<ul>
					<li v-for="(album,index) in albums">
						<a @click="selectAlbumByAid(album.aid)"><img style="border-radius: 2px;" v-bind:src="album.aimg" /></a>
						<h4><a @click="selectAlbumByAid(album.aid)">{{album.aname}}</a></h4>
						<p>{{album.areserve2}}</p>
					</li>
					
				</ul>
			</div>
		</div>
		</div>
</template>

<script>
export default {
  name: 'singerDetail',
  data () {
    return {
      singer:{},
      musicCount:{},
      albumCount:{},
      mvCount:{},
      musics:{},
      albums:{}
    }
  },
  created:function(){
//	this.loadsinger();
//	this.singerD(sid);
//	alert(this.sid);
	this.singerD(this.$route.query.sid);
	this.musicm(this.$route.query.sid);
	this.selectAlbumBySid(this.$route.query.sid);
  },
  methods:{
		singerD:function(sid){
			this.$http.post("http://127.0.0.1:8086/singerd",{
					sid:sid
			}).then(function(result){
					this.singer=result.body.singer;
					this.musicCount=result.body.musicCount;
					this.albumCount=result.body.albumCount;
					this.mvCount=result.body.mvCount;
//					this.musics=result.body.list;				
			},function(error){
				alert("错误");
			})
		},
		musicm:function(sid){
			this.$http.post("http://127.0.0.1:8086/musicm",{
					sid:sid
			}).then(function(result){
					this.musics=result.body				
			},function(error){
				alert("错误");
				
			})
		},
		selectAlbumBySid:function(sid){
			this.$http.post("http://127.0.0.1:8086/singerAlbum",{
					mid:sid
			}).then(function(result){
					console.log(result.body)
					this.albums=result.body				
			},function(error){
				alert("错误");
			})
		},
		selectAlbumByAid:function(aid){
			this.$router.push({path:'/albumDetail',query:{aid:aid}}).then(
				function(){
//					alert(sid);
				}
			)
		},
		selectSingerBySid:function(sid){
			this.$router.push({path:'/singerDetail',query:{sid:sid}}).then(
				function(){
//					alert(sid);
				}
			)
		}
  }
}
</script>

<style>
</style>