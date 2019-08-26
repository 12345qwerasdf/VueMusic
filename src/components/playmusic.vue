<template>
  <div class="playtest"> 
   <button @click="playmusic('梦回还')">0.0</button>
  </div>
</template>

<script>
export default {
  name: 'playmusic',
  data () {
    return {
      music:{
      	mid:0,
      	title:'',
      	artist:'',
      	src:'',
      	pic:'',
      	lrc:''
      },
      
    }
  },
  methods:{
  	playmusic:function(mname){
  		this.$parent.playmusic(mname);
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.playtest{
		width: 100px;
		height: 100px;
		
		margin: auto;
	}
</style>
