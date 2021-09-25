<template>
  <div>
    <Paper :current="current" :total="total" @pageChange="handlePageChange"></Paper>
  </div>
</template>

<script>
import Paper from "./index"
export default{
  components:{
    Paper
  },
  data(){
    return{
      current: 1,
      total: 365
    }
  },
  methods:{
    handlePageChange(newPage){
      this.current = newPage;
    }
  }
}
</script>

<style scoped="scoped">

</style>
