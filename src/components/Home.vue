<template>
  <div>
    <div class="row home mb-2 mt-2">
      <div class="wrap">
        <h1>My Beautiful BoRam!</h1>
        <h3>💗LOVE YOU!!!💗</h3>
        <button @click='goToMenu' class="btn btn-success mb-2">
          Let's order!
        </button>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
    methods:{
      goToMenu(){
        this.$router.push('/menu')
      }
    }
}
</script>

<style scoped>
.home{
  height: 100vh;
  background: url('@/assets/sexlove-boram.jpg') no-repeat 55% 100%
}
.wrap{
  margin: 200px auto;
  text-align:center;
  background-color: #eee;
  opacity:0.8;
  max-width: 70vw;
  max-height: 30vh;
  padding: 20px;
}
button{
  margin-top: 39px;
}
</style>
