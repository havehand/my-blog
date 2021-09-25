<template>
  <div>
    <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
                 placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
                 :duration="1000"
                 @load="handleLoaded"></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "./index"
export default {
  components:{
    ImageLoader
  },
  methods:{
    handleLoaded(){
      console.log(1);
    }
  }
}
</script>

<style scoped>
div{
  width: 500px;
  height: 400px;
  border: 1px solid black;
}
</style>