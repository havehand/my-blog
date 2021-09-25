<template>
  <div class="text-container">
    <Message>
      <template v-slot:header>
        <h1>gdfdsf</h1>
      </template>
      <template v-slot:default>
        <h2>asdads</h2>
      </template>
      <template v-slot:footer>
        <h3>fsdkjhasjk</h3>
      </template>
    </Message>
  </div>
</template>

<script>
import Message from "./index"
export default {
  components:{
    Message
  }
}
</script>

<style scoped>

</style>