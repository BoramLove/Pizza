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
  background: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=705172301,517581716&fm=27&gp=0.jpg') no-repeat ;
  background-size:100%;
}
.wrap{
  margin: 200px auto;
  text-align:center;
  background-color: #eee;
  opacity:0.8;
  width:450px;
  height: 250px;
  padding: 20px;
}
button{
  margin-top: 39px;
}
</style>
