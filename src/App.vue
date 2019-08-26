<template>
  <div id="app">
<<<<<<< HEAD
    

  
=======
>>>>>>> 5504df7c010218784ae82701d223c297c7f17887
  <div class="container">
		<div class="row clearfix">
			<div class="col-md-12 column">
				<nav style="margin-top: -10px;" class="navbar navbar-default navbar-inverse" role="navigation">
					<div class="navbar-header">
						 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="#"><img src="../build/logo.png" style="background:cover;width: 60px;height: 40px;vertical-align: middle; margin-top: -7px;"/></a>
					</div>
					
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active" style="margin-right: 20px;">
								 <a href="/index">首页</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="/list">榜单</a>
							</li>
							<li style="margin-right: 20px;">

								 <router-link to='/singerlist' >歌手</router-link>

							</li>
						
							<li style="margin-right: 20px;">
								 <router-link to='/allAlbum' >专辑</router-link>
							</li>
							<li style="margin-right: 20px;">
								 <a href="/mv">MV</a>
							</li>
<<<<<<< HEAD
							
=======
>>>>>>> 5504df7c010218784ae82701d223c297c7f17887
						</ul>
						<form class="navbar-form navbar-left" role="search">
							<div class="form-group">
								<input type="text" class="form-control" />
							</div> <button type="submit" class="btn btn-default">Submit</button>
						</form>
						<ul class="nav navbar-nav navbar-right">
							<li v-if="this.sessionuser.username!=null" class="active">
									<a href="#"><span class="glyphicon glyphicon-user"></span> {{sessionuser.username}}</a>
								</li>
								<li v-if="this.sessionuser.username!=null">
									<a href="javascript:void(0)" @click="logout" ><span class="glyphicon glyphicon-log-out"></span> 退出</a>
								</li>
							<li v-if="this.sessionuser.username==null" style="margin-right: 20px;">
								 <a href="/login">登录</a>
							</li>
<<<<<<< HEAD
						
=======
>>>>>>> 5504df7c010218784ae82701d223c297c7f17887
						</ul>
					</div>
					
				</nav>
				<router-view/>
				
			</div>
		</div>
<<<<<<< HEAD
		
		<div  v-bind:class="playclass" @mouseleave="leave()">
  	  	<aplayer         	         	
         	                 	
         	:music='list3[0]'
         	show-lrc 
        	:list='list3'
        	listMaxHeight=200px
         	></aplayer>
         	
         	
  	  </div>
  	  <div class="display1" @mouseenter="enter" >
         	
      </div>
		
		<router-view/>
=======
		<!--<router-view/>-->
>>>>>>> 5504df7c010218784ae82701d223c297c7f17887
	</div>
  
  
  
  
  </div>
</template>

<script>
		import aplayer from 'vue-aplayer'
export default {

  name: 'App',
  components: {
		      aplayer
		    },
  data() {
    return {
      headerShow: false,
      sessionuser: {  id:'',
					username: '',
						
				},
				   music:{
		      	mid:0,
		      	title:'',
		      	artist:'',
		      	src:'',
		      	pic:'',
		      	lrc:''
      		},
       		playclass:'music-aplay1',
       	 	music3: null,
        	list3: [
          {
            title: '梦回还',
            artist: '呦猫UNEKO',
            src: 'http://localhost:8086/music/呦猫UNEKO - 梦回还.mp3',
            pic: 'http://localhost:8086/img/梦回还.jpg',
            lrc: 'http://localhost:8086/lrc/梦回还.lrc',
          },
          {
            title: '想太多',
            artist: '李玖哲',
            src: 'http://localhost:8080/static/music/李玖哲 - 想太多.mp3',
            pic: 'http://localhost:8080/static/img/梦回还.jpg',
            lrc: 'http://localhost:8080/static/lrc/梦回还.lrc',
          },
          {
            title: 'βios',
            artist: '小林未郁',
            src: 'http://localhost:8080/static/music/小林未郁 - βios.mp3',
            pic: 'http://localhost:8080/static/img/梦回还.jpg',
            lrc: 'http://localhost:8080/static/lrc/梦回还.lrc',
          },
          {
            title: '少年情',
            artist: '心然',
            src: 'http://localhost:8080/static/music/心然 - 命起涟漪·少年情.mp3',
            pic: 'http://localhost:8080/static/img/梦回还.jpg',
            lrc: 'http://localhost:8080/static/lrc/梦回还.lrc',
          }
        ]
        }
   
   
  },
  created:function(){
  	this.getSessionUser();
  },
  watch: {
		// 方法1
		'$route' (to, from) { //监听路由是否变化
			// console.log(999)
			if(to.path == "/index"){ //跳转到哪个页面
				location.reload()
			}
		},
	},
  methods:{
  	getSessionUser:function(){
  		this.$http.get('http://localhost:8086/getsessionuser').then(function(res){
  			this.sessionuser.id=res.body.id;
  			this.sessionuser.username=res.body.username;
  		},function(error){
  			console.log(error)
  		})
  	},
  	logout: function() {
				this.$http.get('http://localhost:8086/logout').then(function(res) {
					if(res.bodyText == 'success') {
					alert('成功退出');
					
					this.sessionuser.id = "";
					this.sessionuser.username = "";
					
					this.$router.go(0);
					this.$router.push("/index");
					
						
					}
				}, function(error) {
					alert("请求失败");
				})
			},
			enter:function(){
     		this.playclass='music-aplay2'
     	},
     	leave:function(){
     		this.playclass='music-aplay1'
     	},
     	playmusic:function(mname){
	  		this.$http.get("http://127.0.0.1:8086/playmusic",{
	  			params:{
	  				mname:mname
	  			}
	  		}).
	  		then(function(result){
	  			this.music.title=result.body.mname;
	  			this.music.artist=result.body.singer.sname;
	  			this.music.src=result.body.location;
	  			this.music.pic=result.body.mimg;
	  			this.music.lrc=result.body.mreserve1;
	  			this.list3.push(this.music)
	  		
	  			console.log(this.music)
	   		},function(){
	   			alert("添加失败");
	   		})
	  		}
  	
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  width: 100%;
}
*{
				padding: 0;
				margin: 0;
		}
		
		.display1{
			width: 100%;
			height: 5px;
			position: fixed;
			top: 6px;
			
		}
  .music-aplay1{
  		width: 80%;
			height: 300px;
			
			margin: 80px auto;			
			overflow: hidden;		
			position:fixed;
			top:-80px;
			left:150px;
			display: none;
  }
  .music-aplay2{
  		width: 80%;
			height: 300px;			
			margin: 80px auto;			
			overflow: hidden;		
			position:fixed;
			top:-80px;
			left:150px;
  }
 
  .aplayer-list {   
    opacity:0.7
	}
	.aplayer-body{
		opacity:0.7
	}
	.playtest{
		width: 100px;
		height: 100px;	
		margin: auto;
	}
/*<link rel="stylesheet" type="text/css" href="static/bootstrap-3.3.7/css/bootstrap.css"/>
   	<script src="static/js/jquery-1.11.2.min.js" type="text/javascript" charset="utf-8"></script>
   	<script src="static/bootstrap-3.3.7/js/bootstrap.js" type="text/javascript" charset="utf-8"></script>*/
   /*	@import url("../static/bootstrap-3.3.7/css/bootstrap.css");*/
</style>
