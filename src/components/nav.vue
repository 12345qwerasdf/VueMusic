<template>
	<div id="">
		<div class="row clearfix">
			<div class="col-md-12 column">
				<nav class="navbar navbar-default navbar-inverse" role="navigation">
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
								 <a href="/singer">歌手</a>
							</li>
						
							<li style="margin-right: 20px;">
								 <a href="#">专辑</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="/mv">MV</a>
							</li>
							
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
						
						</ul>
					</div>
					
				</nav>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
  name: 'nav',
  methods:{
  	
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
