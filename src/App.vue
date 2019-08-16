<template>
  <div id="app">
    
    
    
  <!--<div  class="mainPage" > 
    <div class="header">
        <div class="logo">
        	<img src="assets/logo.png" >
        </div>
        <div class="search_wrapper top_search">
            <div class="search_input"><input type="text"></div>
            <div class="search_recommend top_search_recommend">
                
            </div>
            <div class="search_histroy top_search_histroy">
               
            </div>
        </div>
        <div class="topNav fr">
            <ul>
                <li><a target="_blank" href="#">客服中心</a></li>
                <li><a target="_blank" href="#">招贤纳士</a></li>
                <li><a target="_blank" href="#">会员中心 </a></li>
            </ul>
            <div class="login_area">
                <div id="login_in" class="clearfix"><a class="login_btn" id="login_btn">登录</a><a target="_blank" href="" class="regin_btn" id="regin_btn">注册</a></div>
                <div id="login_out" class="clearfix">
                    <img class="user_img" src="">
                    <span class="user_name">退出</span>
                </div>
                <div id="user_menu" class="user_menu">
                    <div class="topArrow1"></div>
                    <div class="topArrow2"></div>
                    <ul>
                        <li><a target="_blank" href="#"><span class="user_icon1"></span>个人帐号</a></li>
                        <li><a href="#"><span class="user_icon2"></span>退出登录</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="navWrap">
        <div class="nav">
            <ul class="homeNav">
                <li><a class="normal active" href="">首页</a></li>
                <li><a class="normal"  href=" ">榜单</a></li>
                <li><a class="normal"  id="productCenter" href="">我的音乐</a></li>
                <li class="more" id="more"><a href="" class="iconMore" id="showMore" >更多</a>
                </li>
            </ul> 
        </div>
    </div>

    
    <router-view/>
  </div> -->
  
  <div class="container">
		<div class="row clearfix">
			<div class="col-md-12 column">
				<nav class="navbar navbar-default navbar-inverse" role="navigation">
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
								 <a href="#">歌手</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">标签</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">歌单</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">专辑</a>
							</li>
							<li style="margin-right: 20px;">
								 <a href="#">MV</a>
							</li>
							<!--<li class="dropdown">
								 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
								<ul class="dropdown-menu">
									<li>
										 <a href="#">Action</a>
									</li>
									<li>
										 <a href="#">Another action</a>
									</li>
									<li>
										 <a href="#">Something else here</a>
									</li>
									<li class="divider">
									</li>
									<li>
										 <a href="#">Separated link</a>
									</li>
									<li class="divider">
									</li>
									<li>
										 <a href="#">One more separated link</a>
									</li>
								</ul>
							</li>-->
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
							<!--<li class="dropdown">
								 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
								<ul class="dropdown-menu">
									<li>
										 <a href="#">Action</a>
									</li>
									<li>
										 <a href="#">Another action</a>
									</li>
									<li>
										 <a href="#">Something else here</a>
									</li>
									<li class="divider">
									</li>
									<li>
										 <a href="#">Separated link</a>
									</li>
								</ul>
							</li>-->
						</ul>
					</div>
					
				</nav>
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
}
</style>
