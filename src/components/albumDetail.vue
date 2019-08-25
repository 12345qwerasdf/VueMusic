<template>
	<div class="ad-main">
			<div class="ad-top">
				<div class="ad-top-img">
					<img src="static/img/T002R300x300M000001CnPE31iJ899.jpg"/>
				</div>
				<div class="ad-top-right">
					<h2>{{album.aname}}</h2>
					<a @click="toSinger(singer.sid)">{{singer.sname}}</a>
					<p class="ad-top-right-p1">简介：{{album.adetail}}</p>
					<p class="ad-top-right-p2">唱片公司：{{album.areserve2}}</p>
				</div>
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
											歌手
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
											<a @click="toSinger(singer.sid)">{{singer.sname}}</a>
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
  name: 'albumDetail',
  data () {
  	return {
      musics:{},
      album:{},
      singer:{}
    }
  },
  created:function(){
  	this.selectMusicByAid(this.$route.query.aid);
  	this.selectAlbumByAid(this.$route.query.aid);
  	this.selectSingerByAid(this.$route.query.aid);
  },
  methods:{
  	selectMusicByAid:function(aid){
  		this.$http.post("http://127.0.0.1:8086/albumMusic",{
					aid:aid
			}).then(function(result){
					console.log(result.body)
					this.musics=result.body				
			},function(error){
				alert("错误");
			})
  	},
  	selectAlbumByAid:function(aid){
  		this.$http.post("http://127.0.0.1:8086/album",{
					aid:aid
			}).then(function(result){
					console.log(result.body)
					this.album=result.body				
			},function(error){
				alert("错误");
			})
  	},
  	selectSingerByAid:function(aid){
  		this.$http.post("http://127.0.0.1:8086/albumSinger",{
					aid:aid
			}).then(function(result){
					console.log(result.body)
					this.singer=result.body	
					
			},function(error){
				alert("错误");
			})
  	},
  	toSinger:function(sid){
  		this.$router.push({path:'/singerDetail',query:{sid:sid}}).then(
				function(){
					
				}
			)
  	}
  }
}
</script>

<style>
	/*@import url("../../static/css/hjrstyle.css");
	@import url("../../static/css/bootstrap.min.css");
	@import url("../../static/css/header.css");*/
	
</style>