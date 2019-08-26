<template>
<div class="main000">
	
	<div class="danmu">
		
		<div class="video-box">
					    <video-player  class="video-player vjs-custom-skin"
							  ref="videoPlayer" 
							  :playsinline="true" 
							  :options="playerOptions"
					></video-player>
	
		</div>
	        <div class="stage">
	            <vue-baberrage
	                    :isShow = "barrageIsShow"
	                    :barrageList = "barrageList"
	                    :loop = "barrageLoop"
	                    :maxWordCount = "60"
	            >
	            </vue-baberrage>
	        </div>
	        
	        <div class="danmu-control">
	            <div>
	                <select v-model="position">
	                    <option value="top">从上</option>
	                    <option value="abc">从右</option>
	                </select>
	                <input type="text" style="float:left"  v-model="msg"/>
	                <button type="button" style="float:left" @click="addToList">发送</button>
	            </div>
	        </div>
	 </div>
</div>
</template>

<script>
	import { MESSAGE_TYPE } from 'vue-baberrage'
export default{
	
	name:'playMV',
	data() {
         return {
         	 	msg: '你好，学院君！',
                position: 'top',
                barrageIsShow: true,
                currentId: 0,
                barrageLoop: false,
                barrageList: [],
                
						playerOptions : {
						    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
						    autoplay: false, //如果true,浏览器准备好时开始回放。
						    muted: false, // 默认情况下将会消除任何音频。
						    loop: false, // 导致视频一结束就重新开始。
						    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
						    language: 'zh-CN',
						    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
						    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
						    sources: [{
						      type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
						      src: "http://localhost:8086/mv/G.E.M.邓紫棋-光年之外.mp4" //url地址
						    }],
						    poster: "", //你的封面地址
						    // width: document.documentElement.clientWidth, //播放器宽度
						    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
						    controlBar: {
						      timeDivider: true,
						      durationDisplay: true,
						      remainingTimeDisplay: false,
						      fullscreenToggle: true  //全屏按钮
						    }
						}
        }
    },
    created:function(){
    	this.playMV()
    },
    methods: {
            removeList () {
                this.barrageList = []
            },
            addToList () {
                if (this.position === 'top') {
                    this.barrageList.push({
                        id: ++this.currentId,
                        avatar: 'https://laravelacademy.org/assets/avatars/numxwdxf8lrtrsol.jpg',
                        msg: this.msg + this.currentId,
                        barrageStyle: 'top',
                        time: 8,
                        type: MESSAGE_TYPE.FROM_TOP,
                        position: 'top'
                    })
                } else {
                    this.barrageList.push({
                        id: ++this.currentId,
                        avatar: 'https://laravelacademy.org/assets/avatars/numxwdxf8lrtrsol.jpg',
                        msg: this.msg,
                        time: 15,
                        type: MESSAGE_TYPE.NORMAL
                    })
                }
            },
            playMV:function(){
            	var a=document.srcElement
            	console.log(a)
            }
        }
}
</script>
<style>
	.video-box{
		width: 100%;
		height: 550px;
		position:absolute;
		top: 0px;
		left: 0px;
		
		
		
	}
	.main000{
		width: 86%;
		height: 700px;
		position:absolute;
		top:150px;
		left: 100px;
		
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .danmu {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        position:absolute;
				top: 0px;
				left:0px;
        float: left;
        width: 100%;
        height: 600px;
        
    }
    .stage {
        height: 300px;
        width: 100%;
        
        margin: 0;
        position:absolute;
        top: 0;
        overflow: hidden;
    }

    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .baberrage-stage {
        z-index: 0;
    }

    .baberrage-stage .baberrage-item.normal{
        color:#FFF;
    }
    .top{
        border:1px solid #66aabb;
    }
    .danmu-control{
        position: absolute;
        margin: 0 auto;
        width: 100%;
        bottom: 300px;
        top: 137%;
        height: 69px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        justify-content: center;
        div {
            width: 500px;
            background: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 5px;
            border: 2px solid #8ad9ff;
        }
        input,button,select{
            height:35px;
            padding:0;
            float:left;
            background:#027fbb;
            border:1px solid #CCC;
            color:#FFF;
            border-radius:0;
            width:18%;
            box-sizing: border-box;
        }
        select{
            height:33px;
            margin-top:1px;
            border: 0px;
            outline: 1px solid rgb(204,204,204);
        }
        input{
            width:64%;
            height:35px;
            background:rgba(0,0,0,.7);
            border:1px solid #8ad9ff;
            padding-left:5px;
            color:#FFF;
        }
    }
</style>
