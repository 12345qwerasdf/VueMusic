<template>
	<div id="app">

		<div class="container">
			<div class="row clearfix">
				<div class="col-md-12 column">
					<nav class="navbar navbar-default navbar-inverse" role="navigation">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
							<a class="navbar-brand" href="#"><img src="../build/logo.png" style="background:cover;width: 60px;height: 40px;vertical-align: middle;" /></a>
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
									<a href="#">歌手</a>
								</li>
								<!--<li style="margin-right: 20px;">
									<a href="#">标签</a>
								</li>
								<li style="margin-right: 20px;">
									<a href="#">歌单</a>
								</li>-->
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

								<li v-if="this.show" class="active">
									<a href="#"><span class="glyphicon glyphicon-user"></span> {{seuser.username}}</a>
								</li>
								<li v-if="this.show">
									<a href="javascript:void(0)" @click="logout"><span class="glyphicon glyphicon-log-out"></span> 退出</a>
								</li>
								<li v-show="!this.show">
									<a data-toggle="modal" data-target="#register" href=""><span class="glyphicon glyphicon-user"></span> 注册</a>
								</li>
								<li v-if="!show">
									<a data-toggle="modal" data-target="#login" href=""><span class="glyphicon glyphicon-log-in"></span> 登录</a>
								</li>

							</ul>
						</div>

					</nav>
				</div>
			</div>
		</div>

		<!-- 注册窗口 -->
		<div id="register" data-backdrop="static" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
					</div>
					<div class="modal-title">
						<h1 class="text-center">注册</h1>
					</div>
					<div class="modal-body">
						<form class="form-group" @submit.prevent="zonSubmit">
							<div class="form-group has-feedback">
								<label for="username" style="margin-left: 0;">用户名</label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
									<input class="form-control" v-model="zuser.username" v-validate="'required|min:2|max:10'" name="zusername" autocomplete="off" placeholder="请输入您的用户名">
								</div>

								<p id="zusername" style="color: red;" class="p_error" v-show="errors.has('zusername')">{{errors.first('zusername')}}</p>
							</div>

							<div class="form-group has-feedback">
								<label for="password">密码</label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>

									<input type="password" class="form-control" placeholder="请输入新密码" v-validate="'required|min:6'" name="newPassword" v-model="zuser.newPassword" />

								</div>

								<p id="zpassword" style="color: red;" class="p_error" v-show="errors.first('newPassword')">{{errors.first('newPassword')}}</p>

							</div>
							<div id="repasswordDiv" class="form-group has-feedback">
								<label for="repassword">确认密码</label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
									<input type="password" class="form-control" autocomplete="off" placeholder="请再次输入新密码" v-validate="{is:zuser.newPassword}" name="repassword" v-model="zuser.confirmPassword" />

								</div>
								<p id="zrepassword" style="color: red;" class="p_error" v-show="errors.first('repassword')">{{errors.first('repassword')}}</p>

							</div>

							<div class="form-group has-feedback">

								<label for="email">邮箱</label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
									<input v-validate="'required|email'" v-model="zuser.email" class="form-control" type="text" id="email" name="email">

								</div>
								<span id="email" style="color: red;" v-show="errors.has('email')">{{ errors.first('email')}}</span>

							</div>

							<div style="text-align: center;" class="text-right">
								<button class="btn btn-primary" type="submit">提交</button>
								<button class="btn btn-danger" id="zquit" data-dismiss="modal">取消</button>
							</div>
							<a href="" data-toggle="modal" data-dismiss="modal" data-target="#login">已有账号？点我登录</a>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- 登录窗口 -->
		<div id="login" data-backdrop="static" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
					</div>
					<div class="modal-title">
						<h1 class="text-center">登录</h1>
					</div>
					<div class="modal-body">
						<form class="form-group" @submit.prevent="onSubmit">
							<div class="form-group has-feedback">
								<label for="username" style="margin-left: 0;"></label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
									<input class="form-control" v-model="user.username" v-validate="'required|min:2|max:10'" name="dusername" autocomplete="off" placeholder="请输入您的用户名">

									<!--<input id="dusername" class="form-control" type="text" name="username" required autocomplete="off" maxlength="20" placeholder="请输入您的用户名">			    -->
								</div>
								<p id="cusername" style="color: red;" class="p_error" v-show="errors.has('dusername')">{{errors.first('dusername')}}</p>

							</div>
							<br/>
							<div class="form-group has-feedback">
								<label for="password"></label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
									<!--	<input id="dpassword" class="form-control" name="password" required placeholder="请输入密码" maxlength="20" type="password">-->
									<input class="form-control" v-model="user.passWord" v-validate="'required|min:6'" name="dpassword" autocomplete="off" type="password" placeholder="请输入您的密码">
								</div>
								<p id="cpassword" style="color: red;" class="p_error" v-show="errors.has('dpassword')">{{errors.first('dpassword')}}</p>
								<br />
							</div>

							<div class="form-group has-feedback">
								<label for="yanzheng"></label>
								<div class=" input-group" style="width: 320px;">

									<span class="input-group-addon"><span class="glyphicon glyphicon-qrcode"></span></span>

									<input type="text" v-on:blur="validateCode" id="code" style="width: 300px;" autocomplete="off" class="form-control" v-model="user.code" v-validate="'required'" placeholder="请输入验证码">

								</div>

								<div id="card" class="form-inline row" style="float: right; margin-top: -40px;">
									<div class="code" @click="refreshCode">
										<SIdentify :identifyCode="identifyCode">{{identifyCode}}</SIdentify>
									</div>
								</div>
								<p style="color: red;" id="codemess"></p>

							</div>

							<div class="form-group ">
								<div class="col-sm-offset-2 col-sm-10">
									<div class="checkbox">
										<label>
												          <input v-model="user.remember" id="check" type="checkbox">记住密码
												        </label>
									</div>
								</div>
							</div>

							<br /><br /><br />

							<div class="text-center">
								<button class="btn btn-primary" type="submit">登录</button>
								<button class="btn btn-danger" id="quit" data-dismiss="modal">取消</button>
							</div>
							<a href="" data-toggle="modal" data-dismiss="modal" data-target="#register">还没有账号？点我注册</a>
						</form>
					</div>
				</div>
			</div>
		</div>
	<router-view/>
	</div>
</template>

<script>
	import { Validator } from 'vee-validate';
	const validator = new Validator();

	validator.attach('email', 'required|email'); // attach field.
	validator.attach('name', 'required|alpha', 'Full Name'); // attach field with display name for error generation.

	validator.detach('email'); // you can also detach fields.

	import SIdentify from '@/components/code/identify.vue'
	export default {
		/*inject: ['reload'], // 引入方法*/
		name: 'App',
	
   
  provide (){
     return {
       reload:this.reload
     }
  },
		data() {
			return {
				show:false,
				isRouterAlive:true,
				seuser: {
					uid: '',
					username: "",
					email: ""

				},

				checked: '',
				code: '1234',
				identifyCode: '',
				zuser: {
					username: '',
					newPassword: '',
					confirmPassword: '',
					email: ''

				},
				user: {
					username: '',
					passWord: '',
					remember: '',
					code: '',
				},
				sendAuthCode: true,
				/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
				auth_time: 0,
				/*倒计时 计数器*/
				code: '',
				identifyCodes: "1234567890",
				identifyCode: ""
			}
		},
		components: {
			SIdentify
		},

		// 当刷新页面时候获取一下localStorage里存的值

		created: function() {
			let userinfo = localStorage.getItem('userinfo')
		       if (userinfo) {
		      userinfo = JSON.parse(localStorage.getItem('userinfo'))
		      console.log(userinfo)
		      this.user.username = userinfo.username
		      this.user.passWord = userinfo.password
		      this.user.remember = true
		     }

			/*this.getinfo();*/
		},
		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
			/*this.getlocalStorage();*/
		},
		methods: {
			 reload() {
			 	alert("reload")
      this.isRouterAlive = false
      this.$nextTick(function() {
      	alert("next");
        this.isRouterAlive = true
      })
    },

			logout: function() {
				this.$http.get('http://localhost:8086/logout').then(function(res) {
					if(res.bodyText == 'success') {
					alert('成功退出');
					this.identifyCode = "";
			        this.makeCode(this.identifyCodes, 4);
					this.show=false;
					this.user.username = "";
					this.user.passWord = "";
					this.user.code = "";
					
						
					}
				}, function(error) {
					alert("请求失败");
				})
			},

			getinfo: function() {
				this.$http.get('http://localhost:8086/info').then(function(res) {
					console.log(res);
					  
					this.seuser = res.body;

				}, function(error) {
					alert("加载数据失败");
				});

			},
			validateCode: function() {
				var msg = '';
				var inputCode = document.getElementById("code").value;
				if(this.user.code == "") {

					document.getElementById("codemess").innerText = "请输入验证码";
				} else {
					if(this.user.code == this.identifyCode) {

						document.getElementById("codemess").innerText = "";

					} else {

						document.getElementById("codemess").innerText = "验证码错误";

					}
				}

			},
			onSubmit: function() {
				var code1 = document.getElementById("codemess").innerText;

				var username1 = document.getElementById("cusername").innerText;

				var password1 = document.getElementById("cpassword").innerText;
				if(username1 == "" && password1 == "" && code1 == "") {

					this.$http.get('http://localhost:8086/login', {
						params: {
							username: this.user.username,
							password: this.user.passWord,

						}

					}).then(function(res) {
						var ret = res.bodyText;
						if(ret == "登陆成功") {
							alert(res.bodyText);
							this.show=true;
							this.getinfo();
							$("#quit").click();
							this.identifyCode = "";
			                this.makeCode(this.identifyCodes, 4);
							  // 记住密码
          if (typeof (Storage) !== 'undefined') {
            console.log('支持web存储')
            if (document.getElementById('check').checked) {
              // alert('checkbox is checked')
              console.log('记住密码')
              let userinfo = { username: this.user.username, password: this.user.passWord, checked: true }
              localStorage.setItem('userinfo', JSON.stringify(userinfo))
              console.log(localStorage.getItem('userinfo'))
            } else {
              localStorage.removeItem('userinfo')
              localStorage.removeItem('check')
              console.log('移除localStorage')
            }
          } else {
            console.log(' 抱歉! 不支持 web 存储。')
          }
        
					
							/*this.user.username = "";
							this.user.passWord = "";
							this.user.code = "";*/
						} else {
							alert(res.bodyText);
						}
					}, function() {
						console.log('请求失败处理');
					});

				} else {

					return false;
				}
			},
			zonSubmit: function() {

				var zusername = document.getElementById("zusername").innerText;

				var zpassword = document.getElementById("zpassword").innerText;

				var zrepassword = document.getElementById("zrepassword").innerText;
				var email = document.getElementById("email").innerText;
				if(zusername == "" && zpassword == "" && zrepassword == "" && email == "") {

					this.$http.get('http://localhost:8086/register', {
						params: {
							username: this.zuser.username,
							password: this.zuser.newPassword,
							email: this.zuser.email

						}

					}).then(function(res) {
						var ret = res.bodyText;
						if(ret == "注册成功,请前去激活") {
							alert(res.bodyText);
							$("#zquit").click();
							this.zuser.username = "";
							this.zuser.newPassword = "";
							this.zuser.confirmPassword = "";
							this.zuser.email = "";
						}
					}, function() {
						console.log('请求失败处理');
						alert("请求处理失败")
					});

				} else {

					return false;
				}
			},
			backMy: function() {
				this.$router.push("/my");
			},
			getAuthCode: function() {
				this.sendAuthCode = false;
				this.auth_time = 20;
				var auth_timetimer = setInterval(() => {
					this.auth_time--;
					if(this.auth_time <= 0) {
						this.sendAuthCode = true;
						clearInterval(auth_timetimer);
					}
				}, 1000);
			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for(let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 10px;
	}
	
	.code {
		margin: auto;
		width: 114px;
		height: 40px;
		border: 1px solid whitesmoke;
	}
	
	label {
		display: block;
		margin-left: 0;
		width: 100px;
		text-align: right;
	}
	/*span{
	display: inline-block;
 line-height:18px; 
	text-align:left;
}*/
</style>