<template>

	<div id="">
		<div class="container">
			<br /><br /><br />
			<br /><br /><br />
			<h2 style="text-align:center">登录</h2>
			<div class="col-md-6 col-md-offset-3">
				<form >

					<div class="form-group has-feedback">
						<label for="username">用户名</label>
						<div class="input-group">
							<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
							<input v-model="user.username" id="username" @blur="checkusername" class="form-control" type="text" name="username" required autocomplete="off" maxlength="20" placeholder="请输入您的用户名">			    
						</div>
						    <span id="usernameMsg" style="color:red;" class="tips"></span>
							<span id="usernameOk" style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>

					</div>

					<div class="form-group has-feedback">
						<label for="password">密码</label>
						<div class="input-group">
							<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
							<input v-model="user.password" id="password" @blur="checkpassword" class="form-control" name="password" required placeholder="请输入密码" maxlength="20" type="password">
						    
						</div>
						<span id="passwordMsg" style="color:red;" class="tips"></span>
						<span id="passwordOk" style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
						<br />
						
					</div>

					<div class="row">
						<div class="col-xs-7">
							<div class="form-group has-feedback">
								<label for="idcode-btn">验证码</label>
								<div class="input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-qrcode"></span></span>
									<input id="code" v-model="user.code" name="Code" type="text" @blur="checkcode" class="form-control" placeholder="请输入验证码" maxlength="6">
								</div>
								<span id="codeMsg" style="color:red;" class="tips"></span>
								<span id="codeOk" style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
							</div>
						</div>
						<div class="col-xs-5" style="padding-top: 30px">
							<br/>
							<div style="float: right; margin-top: -25px;" class="code" @click="refreshCode">
										<SIdentify :identifyCode="identifyCode">{{identifyCode}}</SIdentify>
							</div>
						</div>
					</div>
					
					<div class="form-group">
						<input id="remember" name="remember" value="true" type="checkbox" checked="checked" />记住密码
					</div>
					<div class="form-group">
						<input type="button" @click="onSubmit" class="form-control btn btn-primary" id="submit" value="登录">
					</div>

					<div class="form-group">
						
						<input type="button" value="立即注册" class="form-control btn btn-warning" @click="goreg()"/>
					</div>
            
        </form>
             </div>
        </div>
    </div>
</template>
<script>

import SIdentify from '../components/pages/identify'
export default {
  name: 'login',
  components:{
  	SIdentify
  },
  data () {
    return {
     identifyCodes: "1234567890",
      identifyCode: "",
      user: {
					username: '',
					password: '',
					remember: '',
					code: '',
				},
	sessionUser: {  id:'',
					username: '',
					
					
				},
				sendAuthCode: true,
    }
  },
   mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  created:function(){
  	let userinfo = localStorage.getItem('userinfo')
		       if (userinfo) {
		      userinfo = JSON.parse(localStorage.getItem('userinfo'))
		      console.log(userinfo)
		      this.user.username = userinfo.username
		      this.user.password = userinfo.password
		      this.user.remember = true
		     }
  	
  },
 
  methods:{
  	 randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
 
  	goreg:function(){
  		this.$router.push("/register");
  	},
  	checkusername:function(){
  		var username=$("[id='username']").val().trim();
  		if(username.length==0){
		   $("#usernameMsg").html("用户名不能为空");			
		   $('#submit').prop('disabled', true);	
		   $("#usernameOk").css("display","none")
		}else{
			  $("#usernameMsg").html("");			
			 $('#submit').prop('disabled', false);	
		   $("#usernameOk").css("display","block")
		   
		}
  	},
  	checkpassword:function(){
  		var password=$("[id='password']").val().trim();
  		if(password.length==0){
		   $("#passwordMsg").html("密码不能为空");
		   $('#submit').prop('disabled', true);	
		   $("#passwordOk").css("display","none")
		}else{
		   $("#passwordMsg").html("");
		   $('#submit').prop('disabled', false);
		   $("#passwordOk").css("display","block")
		}
  	},
  	checkcode:function(){
  			
				var inputCode = document.getElementById("code").value;
				if(this.user.code == "") {
				$("#codeMsg").html("验证码不能为空");
			   $('#submit').prop('disabled', true);	
			   $("#codeOk").css("display","none")
				} else {
					if(this.user.code == this.identifyCode) {
					$("#codeMsg").html("");
					 $('#submit').prop('disabled', false);	
					$("#codeOk").css("display","block")

					} else {
						$('#submit').prop('disabled', true);	
							$("#codeMsg").html("验证码错误");
						

					}
				}
				
				
				
  	},
  	tiaozhan:function(){
  		this.$router.push({
			path:"/index"
			});
  	},
  	getSessionUser:function(){
  		this.$http.get('http://localhost:8086/getsessionuser').then(function(res){
  			this.sessionUser.id=res.body.id;
  			this.sessionUser.username=res.body.username;
  		},function(error){
  			console.log(error)
  		})
  	},
  		onSubmit: function() {
					this.$http.get('http://localhost:8086/login', {
						params: {
							username: this.user.username,
							password: this.user.password,

						}

					}).then(function(res) {
					var ret = res.bodyText;
						if(ret == "登陆成功") {
							alert(res.bodyText);
							this.$router.push("/index");
							
							  // 记住密码
				          if (typeof (Storage) !== 'undefined') {
				            console.log('支持web存储')
				            if (document.getElementById('remember').checked) {
				              // alert('checkbox is checked')
				              console.log('记住密码')
				              let userinfo = { username: this.user.username, password: this.user.password, checked: true }
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

	
  },

}
 }
</script>

<style scoped>
.code {
	
		margin: auto;
		margin-bottom: 20px;
		width: 114px;
		height: 40px;
		border: 1px solid whitesmoke;
	}
</style>