<template>
	<div id="">
		<div class="container">
			<br /><br /><br />
			<br /><br /><br />
			<h2 style="text-align:center">用户注册</h2>
			<div class="col-md-10 col-md-offset-3">
        <form   role="form " autocomplete="off "  >	       
        	<div class="row ">
                <div class="col-md-8 ">
                    <div id="usernameDiv" class="form-group has-feedback ">
                        <label for="username ">用户名</label>
                        <div class="input-group ">
                           <span class="input-group-addon "><span class="glyphicon glyphicon-user "></span></span>                         
                            <input v-model="user.username" name="username" @blur="checkusername" type="text " class="form-control " id="username" required="required "  autocomplete="off "  placeholder="请输入用户名 " />                         
                            <span id="usernameSuccess" style="display: none; " class="glyphicon glyphicon-ok form-control-feedback "></span>
               		        <span id="usernameError" style="display: none; " class="glyphicon glyphicon-remove form-control-feedback "></span>
                        </div>              
                    </div>
                </div>
                <div class="col-md-4 " style="padding-top: 30px ">
                	 <span id="usernameMsg" style="color:red;" class="tips"></span>                  
                </div>
            </div>
        	
        	
        	<div class="row ">
                <div class="col-md-8 ">
                    <div id="passwordDiv" class="form-group has-feedback ">
                        <label for="password">密码</label>
                        <div class="input-group ">
                            <span class="input-group-addon "><span class="glyphicon glyphicon-lock "></span></span>                         
                            <input v-model="user.password" type="password" @blur="checkpassword" class="form-control " id="password" required="required "  placeholder="请输入密码 "  />                         
                            <span id="passwordSuccess" style="display: none; " class="glyphicon glyphicon-ok form-control-feedback "></span>
               		        <span id="passwordError" style="display: none; " class="glyphicon glyphicon-remove form-control-feedback "></span>
                        </div>              
                    </div>
                </div>
                <div class="col-md-4 " style="padding-top: 25px " >
                	 <span id="passwordMsg " style="color:blue; " class="tips ">提示：密码长度6~18位，必须包含字母,数字或下划线</span>                  
                </div>
            </div>
            
            
            <div class="row ">
                <div class="col-md-8 ">
                    <div id="repasswordDiv" class="form-group has-feedback">
                        <label for="password">确认密码</label>
                        <div class="input-group ">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>                         
                            <input v-model="user.repassword" name="repassword" type="password" class="form-control " id="repassword" required="required " placeholder="请再次输入密码 " @blur="checkrepassword" />                         
                            <span id="repasswordSuccess" style="display: none; " class="glyphicon glyphicon-ok form-control-feedback "></span>
               		        <span id="repasswordError" style="display: none; " class="glyphicon glyphicon-remove form-control-feedback "></span>
                        </div>              
                    </div>
                </div>
                <div class="col-md-4 " style="padding-top: 30px " >
                	 <span id="repasswordMsg" style="color:red; " class="tips"></span>                  
                </div>
            </div>
            
            
            <div class="row ">
                <div class="col-md-8 ">
                    <div id="emailDiv" class="form-group has-feedback ">
                        <label for="email">邮箱</label>
                        <div class="input-group">
                            <span class="input-group-addon "><span class="glyphicon glyphicon-envelope "></span></span>                         
                            <input  v-model="user.email" name="email" id="email" type="text " class="form-control " required="required " placeholder="请输入邮箱 " @blur="checkemail" />                         
                            <span id="emailSuccess" style="display: none; " class="glyphicon glyphicon-ok form-control-feedback "></span>
               		        <span id="emailError" style="display: none; " class="glyphicon glyphicon-remove form-control-feedback "></span>
                        </div>              
                    </div>
                </div>
                <div class="col-md-4 " style="padding-top: 30px " >
                	 <span id="emailMsg" style="color:red; " class="tips "></span>                  
                </div>
            </div>
            
   
   
   			 <div class="row ">
                <div class="col-md-8 ">
                    <div  class="form-group has-feedback ">
                          <input class="form-control btn btn-primary " id="submit" @click="register" value="立即注册 " type="submit ">          
                    </div>
                </div>              
            </div>
   			
   			 <div class="row ">
                <div class="col-md-8 ">
                    <div  class="form-group has-feedback ">
                         <input value="返回登录界面 "  class="form-control btn btn-danger " type="button " @click="gologin " >         
                    </div>
                </div>              
            </div>
   
             
        </form>
    </div>
</div>
	</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    	user: {
					username: '',
					password: '',
					repassword: '',
					email: ''

				},
     
    }
  },
  methods:{
  	gologin:function(){
  		this.$router.push("/login");
  	},
  	checkusername:function(){
  		
  		var username = $("[id='username']").val().trim();
  		if(username.length==0){
  			
		   $("#usernameMsg").html("用户名不能为空！");
			$("#usernameDiv").attr("class","form-group has-error has-feedback");
			$("#usernameError").css("display","block");
			$('#submit').prop('disabled', true);	
			return false;
		}else{
			
			this.$http.get('http://localhost:8086/checkuser',{
		  		params: {
									username: this.user.username,
									
								}
		  	}).then(function(res){
		  			if(res.body.username!=null){
		  				$("#usernameMsg").html("用户名已存在");			
						$("#usernameDiv").attr("class","form-group has-error has-feedback");
			            $("#usernameError").css("display","block");
			            $('#submit').prop('disabled', true);	
		  			}
		  			else{
		  				 $("#usernameMsg").html("");
						 $("#usernameDiv").attr("class","form-group has-success has-feedback")
						 $("#usernameError").css("display","none")
						 $("#usernameSuccess").css("display","block")
						 $('#submit').prop('disabled', false);
		  			}
		  		},function(error){
		  			console.log(error)
		  		})
		   
		}
			
			
			
			
			
			
			},
		  
		
  	
  	checkpassword:function(){
  		var password = $("#password").val().trim();
    	 if(password.length>18 || password.length<6 ){   		
    		 $("#passwordMsg").html("<font style='color:red'>密码长度不合法,请换个密码！</font>");
    		 $("#passwordDiv").attr("class","form-group has-error has-feedback")
			 $("#passwordError").css("display","block")
			 $('#submit').prop('disabled', true);	
    		 return false;
    	 }
    	  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
    	  if(!reg.test(password)){   		 
    		  $("#passwordMsg").html("<font style='color:red'>必须包含字母,数字或下划线</font>");
    		  $("#passwordDiv").attr("class","form-group has-error has-feedback")
			  $("#passwordError").css("display","block")
			  $('#submit').prop('disabled', true);	
    		  return false;
    	  }
    	      $("#passwordMsg").html("");
			  $("#passwordDiv").attr("class","form-group has-success has-feedback")
			  $("#passwordError").css("display","none")
			  $("#passwordSuccess").css("display","block")
			  $('#submit').prop('disabled', false);
    	      return true; 
  	},
  	checkrepassword:function(){
  		
  		if(this.checkpassword()){ 
  			
    		 var repassword=$("[id='repassword']").val();
    		 
    		  
    		  if(repassword!=""){
    		  	
    			    var password = $("#password").val();			    	
			    	 if(password != repassword){
			    	 	
			    		 $("#repasswordMsg").html("两次密码输入不一致,请检查！")
			    		 $("#repasswordDiv").attr("class","form-group has-error has-feedback")
			             $("#repasswordError").css("display","block")
			             $('#submit').prop('disabled', true);	
			    		 return false;
			    		 /*alert("两次密码输入不一致");*/
			    	 }else{
			    	 	 $("#repasswordMsg").html("")
			    		 $("#repasswordDiv").attr("class","form-group has-success has-feedback")
						 $("#repasswordError").css("display","none")
						 $("#repasswordSuccess").css("display","block")
						 $('#submit').prop('disabled', false);
			   		  	return true;
			    	 }
			    	  return true; 
    		  }else{
    			  $("#repasswordMsg").html("请再次输入密码！")
    			   $("#repasswordDiv").attr("class","form-group has-error has-feedback")
			       $("#repasswordError").css("display","block")
			       $('#submit').prop('disabled', true);	
    			  return false;
    			  alert("请再次输入密码");
    		  }
			    	 
    	 }else{
    	 	
    	 	  $("#passwordDiv").attr("class","form-group has-error has-feedback")
			  $("#passwordError").css("display","block")
			  $('#submit').prop('disabled', true);	
    		 return false;
    	 } 	 
  	},
  	checkemail:function(){
  		
  		
  		var email=$("[id='email']").val().trim();
  		
	   if(email.length==0){
		   $("#emailMsg").html("请输入邮箱！")
		   $("#emailDiv").attr("class","form-group has-error has-feedback")
		   $("#emailError").css("display","block")
		   $('#submit').prop('disabled', true);	
		   return false;
	   }
	   var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	   if(!reg.test(email)){
			$("#emailMsg").html("邮箱格式，请检查！") 
			$("#emailDiv").attr("class","form-group has-error has-feedback")
		    $("#emailError").css("display","block")
		    $('#submit').prop('disabled', true);	
			return false;
	   }else{
		    $("#emailMsg").html("")
			 $("#emailDiv").attr("class","form-group has-success has-feedback")
			 $("#emailError").css("display","none")
			 $("#emailSuccess").css("display","block")
			 $('#submit').prop('disabled', false);
			return true
	   }
  		
  	},
  	register:function(){
  		this.$http.get('http://localhost:8086/register', {
						params: {
							username: this.user.username,
							password: this.user.password,
							email: this.user.email

						}

					}).then(function(res) {
						var ret = res.bodyText;
						if(ret == "注册成功,请前去激活") {
							alert(res.bodyText);
							this.$router.push("/");
							this.user.username = "";
							this.user.password = "";
							this.user.repassword = "";
							this.user.email = "";
						}
					}, function() {
						console.log('请求失败处理');
						alert("请求处理失败")
					});

				},
  	
  	
  	
  	
  }
}
</script>

<style scoped>
</style>