<template>
 <div class="main">

			<div class="mod_data" v-for="list in lists">
				<!-- 自建歌单用a标签 -->
				<span class="data__cover" id="logo">
               <img v-bind:src="list.musiclist.limg"  class="data__photo"/>
                
          		<!--<img v-bind:src="mvv.mimg"  static/img/400.jpg/>-->
            </span>

				<div class="data__cont">
					<div class="data__name">
						<!--<h1 class="data__name_txt" >如果快乐太难&#32;那我祝你平安</h1>-->
						<h1 class="data__name_txt" >{{list.musiclist.lintro}}</h1>
					</div>
					<div class="data__singer">
						<a href="javascript:;" class="data__singer_txt" >{{list.musiclist.lname}} </a>
					</div>
					<ul class="data__info">
						<li class="data_info__item" style="display:;">
							<div class="data_tag_box">
								标签：<span id="choosebox1">快乐</span>
							</div>

						</li>
						<!--li class="data_info__item">创建时间：2019-08-23</li-->
						<li class="data_info__item">播放量：7078</li>
					</ul>

				</div>
			</div>

			<div class="detail_layout">
				<div class="detail_layout__main">

					<div class="mod_songlist">
						<ul class="songlist__header">
							<li class="songlist__header_name" style="text-align: left;">歌曲</li>
							<li class="songlist__header_author">歌手</li>
							<li class="songlist__header_album">专辑</li>
							<li class="songlist__header_time">时长</li>
						</ul>

						<ul class="songlist__list">

							<li>
								<div class="songlist__item" v-for="(mu,index) in music">
									
									<div class="songlist__number">{{index+1}}</div>
									<div class="songlist__songname">
										<span class="songlist__songname_txt"><a href="javascript:;">{{mu.mname}}</a></span>
										
									</div>
									<div class="songlist__artist">

										<a href="javascript:;" class="singer_name">{{mu.singer.sname}}</a>

									</div>
									<div class="songlist__album">
										<a href="javascript:;">The&#32;Deram&#32;Anthology&#32;1966&#32;&#45;&#32;1968</a>
									</div>
									<div class="songlist__time">{{mu.duration}}</div>
									
									
								</div>
							</li>
							
							<li>
								<div class="songlist__item" >
									
									<div class="songlist__number">1</div>
									<div class="songlist__songname">
										<span class="songlist__songname_txt"><a href="javascript:;">Space&#32;Oddity</a></span>
										
									</div>
									<div class="songlist__artist">

										<a href="javascript:;" class="singer_name">David&#32;Bowie</a>

									</div>
									<div class="songlist__album">
										<a href="javascript:;">The&#32;Deram&#32;Anthology&#32;1966&#32;&#45;&#32;1968</a>
									</div>
									<div class="songlist__time">03&#58;46</div>
									
								</div>
							</li>

							<li>
								<div class="songlist__item">
									
									<div class="songlist__number">2</div>
									<div class="songlist__songname">

										<span class="songlist__songname_txt"><a href="javascript:;" title="呼吸">呼吸</a></span>

									</div>
									<div class="songlist__artist">

										<a href="javascript:;" title="蔡健雅" class="singer_name">蔡健雅</a>

									</div>
									<div class="songlist__album">
										<a href="javascript:;" title="呼吸">呼吸</a>
									</div>
									<div class="songlist__time">04&#58;54</div>
									<div class="songlist__other">
									</div>
								</div>
							</li>

							<li>
								<div class="songlist__item">
									
									<div class="songlist__number">3</div>
									<div class="songlist__songname">

										<i class="songlist__icon songlist__icon_exclusive" title="独家"></i>

										<a href="//y.qq.com/n/yqq/mv/v/e0031rgejsc.html" class="songlist__icon songlist__icon_mv" rel="noopener" target="_blank" title="MV"><span class="icon_txt">MV</span></a>

										<span class="songlist__songname_txt"><a href="javascript:;" title="如果当时">如果当时</a></span>
										<div class="mod_list_menu">
											<a href="javascript:;" class="list_menu__item list_menu__play" title="播放">
												<i class="list_menu__icon_play"></i>
												<span class="icon_txt">播放</span>
											</a>
											<a href="javascript:;" class="list_menu__item list_menu__add" title="添加到歌单" aria-haspopup="true" data-target="menu_add">
												<i class="list_menu__icon_add"></i>
												<span class="icon_txt">添加到歌单</span>
											</a>
											<a href="javascript:;" class="list_menu__item list_menu__down" title="下载" aria-haspopup="true" data-target="menu_down">
												<i class="list_menu__icon_down"></i>
												<span class="icon_txt">下载</span>
											</a>
											<a href="javascript:;" class="list_menu__item list_menu__share" title="分享" aria-haspopup="true" data-aria="menu_share">
												<i class="list_menu__icon_share"></i>
												<span class="icon_txt">分享</span>
											</a>
										</div>
									</div>
									<div class="songlist__artist">

										<a href="javascript:;" title="胡夏" class="singer_name">胡夏</a>

									</div>
									<div class="songlist__album">
										<a href="javascript:;" title="如果当时">如果当时</a>
									</div>
									<div class="songlist__time">03&#58;59</div>
									<div class="songlist__other">
									</div>
								</div>
							</li>

							<li>
								<div class="songlist__item songlist__item--even ">
									
									<div class="songlist__number">4</div>
									<div class="songlist__songname">

										<i class="songlist__icon songlist__icon_exclusive" title="独家"></i>

										<span class="songlist__songname_txt"><a href="javascript:;" title="Let&#32;Me&#32;Down&#32;Slowly">Let&#32;Me&#32;Down&#32;Slowly</a></span>
										<div class="mod_list_menu">
											<a href="javascript:;" class="list_menu__item list_menu__play" title="播放">
												<i class="list_menu__icon_play"></i>
												<span class="icon_txt">播放</span>
											</a>
											<a href="javascript:;" class="list_menu__item list_menu__add" title="添加到歌单" aria-haspopup="true" data-target="menu_add">
												<i class="list_menu__icon_add"></i>
												<span class="icon_txt">添加到歌单</span>
											</a>
											<a href="javascript:;" class="list_menu__item list_menu__down" title="下载" aria-haspopup="true" data-target="menu_down">
												<i class="list_menu__icon_down"></i>
												<span class="icon_txt">下载</span>
											</a>
											<a href="javascript:;" class="list_menu__item list_menu__share" title="分享" aria-haspopup="true" data-aria="menu_share">
												<i class="list_menu__icon_share"></i>
												<span class="icon_txt">分享</span>
											</a>
										</div>
									</div>
									<div class="songlist__artist">

										<a href="javascript:;" title="Alec&#32;Benjamin" class="singer_name">Alec&#32;Benjamin</a>

										/
										<a href="javascript:;" title="Alessia&#32;Cara" class="singer_name">Alessia&#32;Cara</a>

									</div>
									<div class="songlist__album">
										<a href="javascript:;" title="Let&#32;Me&#32;Down&#32;Slowly">Let&#32;Me&#32;Down&#32;Slowly</a>
									</div>
									<div class="songlist__time">02&#58;49</div>
									<div class="songlist__other">
									</div>
								</div>
							</li>
	
						</ul>
					</div>
					
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: 'musiclist',
  data () {
    return {
      music:{
      	"mname":'',
     	"sname":'',
     	"duration":'',
     	"mreserve2":0
     	
      },
      lists:{
      	"limg":'',
     	"lname":'',
     	"lintro":''
      }
    }
  },
  created:function(){
  	this.musiclist();
  	this.musiclist2();
  },
  methods:{
  	 musiclist:function(mreserve2){
  	 	var mreserve2 = this.$route.query.mreserve2;
		  	this.$http.get("http://localhost:8086/list/musiclist",{
		  			params:{
		  				mreserve2:mreserve2
		  			}
		  		
		  	}).then(
		  		function(result){
		  			console.log(result);
		  			this.music=result.body;
		  		},
		  		function(){
		  			alert("失败");
		  		}
		  	)
		  },
	   musiclist2:function(mreserve2){
	 	var mreserve2 = this.$route.query.mreserve2;
		  	this.$http.get("http://localhost:8086/list/musiclist2",{
		  			params:{
		  				mreserve2:mreserve2
		  			}
		  		
		  	}).then(
		  		function(result){
		  			console.log(result);
		  			this.lists=result.body;
		  		},
		  		function(){
		  			alert("失败");
		  		}
		  	)
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../static/css/layout_04121.css");
@import url("../../static/css/playlist.css");

</style>
