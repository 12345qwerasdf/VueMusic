<template>
	<div class="sd-main">
			<div class="sd-top">
				<div class="sd-top-img">
					<img v-bind:src="singer.simg"/>
				</div>
				<div class="sd-top-right">
					<h1><a href="#">{{singer.sname}}</a></h1>
					<h4>{{singer.detail}}</h4>
					<h3><a @click="selectSingerBySid(music.sid)" >单曲{{musicCount}}</a>&nbsp;&nbsp;<a @click="selectAlbumBySid(singer.sid)">专辑{{albumCount}}</a>&nbsp;&nbsp;</h3>
					<!--<button class="sd-top-right-button">▷播放歌手热门歌曲</button>-->
				</div>
			</div>
			<div class="sd-center">
				<h3>热门歌曲</h3>
			</div>
			<div class="sd-footer">
				<div style="width: 970px;" class="container">
					<div class="row clearfix">
						<div class="col-md-12 column">
							<table style="background-color: white;" class="table">
								<thead>
									<tr>
										
										<th style="">
											歌曲
										</th>
										<th  style="">
											专辑
										</th>
										<th style="">
											时长
										</th>
									</tr>
								</thead>
								<tbody  style="background-color: white;">
									
									<tr v-for="(music,index) in musics"   class="warning">
										
										<td  style="background-color: white;border: none;text-align: left;">
											<a>{{music.mname}}</a>
											<button><a>MV</a></button>
										</td>
										<td style="background-color: white;border: none;text-align: left;">
											<a @click="selectAlbumByAid(music.mid)">{{music.mreserve2}}</a>
										</td>
										<td style="background-color: white;border: none;text-align: left;">
											{{music.mreserve1}}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
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
      musics:{}
    }
  },
  created:function(){
//	this.loadsinger();
//	this.singerD(sid);
//	alert(this.sid);
	this.singerD(this.$route.query.sid);
	this.musicm(this.$route.query.sid);
	
//	this.selectAlubumBySid(this.$route.query.sid);
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
			this.$router.push({path:'/singerAlbum',query:{sid:this.$route.query.sid}}).then(
				function(){
//					alert(sid);
				}
			)
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