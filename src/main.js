// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
<<<<<<< HEAD
import VideoPlayer from 'vue-video-player'
=======

Vue.use(resource)

Vue.use(resource)
Vue.config.productionTip = false
Vue.http.options.emulateJSON=true;
>>>>>>> 5504df7c010218784ae82701d223c297c7f17887

import {vueBaberrage} from 'vue-baberrage';
Vue.use(vueBaberrage);

Vue.component('danmu-component', require('./components/danmu.vue').default);
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
/*import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'*/
//此处是根据你建Identify.vue的路径
/*import Identify from './components/code/identify' //验证码
import "./assets/validate.js"
Vue.use(Identify)*/
//验证插件
Vue.use(resource)
Vue.http.options.withCredentials = true;
/*Vue.prototype.$bus = new Vue();
Vue.http.options.emulateJSON=true;*/
/*Vue.config.productionTip = false
Vue.http.options.withCredentials=true;*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
