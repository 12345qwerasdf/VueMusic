<template>
  <div id="app">
  <div class="container">
		<div class="row clearfix">
			<div class="col-md-12 column">
				<nav style="margin-top: -10px;" class="navbar navbar-default navbar-inverse" role="navigation">
					<div class="navbar-header">
						 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="#"><img src="../build/logo.png" style="background:cover;width: 60px;height: 40px;vertical-align: middle;"/></a>
					</div>
					
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active" style="margin-right: 20px;">
								 <a href="#">首页</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">榜单</a>
							</li>
							<li style="margin-right: 20px;">
								 <router-link to='/singerlist' >歌手</router-link>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">标签</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">歌单</a>
							</li>
							<li style="margin-right: 20px;">
								 <router-link to='/allAlbum' >专辑</router-link>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">MV</a>
							</li>
						</ul>
						<form class="navbar-form navbar-left" role="search">
							<div class="form-group">
								<input type="text" class="form-control" />
							</div> <button type="submit" class="btn btn-default">Submit</button>
						</form>
						<ul class="nav navbar-nav navbar-right">
							
							<li style="margin-right: 20px;">
								 <a href="#">登录</a>
							</li>
						</ul>
					</div>
					
				</nav>
				<router-view/>
				
			</div>
		</div>
	</div>
  
  
  
  
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
