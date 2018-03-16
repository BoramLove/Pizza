<template>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1793187368,2549264960&fm=27&gp=0.jpg">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-primary">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      email:'',
      password:''
    }
  },
  beforeRouteEnter :(to, from, next) => {
    next(vm => vm.$store.dispatch("setUser",null))
  },
  methods:{
    onSubmit(){
      axios.get('/users.json')
          .then(res =>{
            const data = res.data;
            const users = [];
            for(let key in data){
              const user = data[key];
              users.push(user)
            }
            let result = users.filter(user =>{
              return user.email === this.email && user.password === this.password
            })
            if(result != null && result.length > 0){
              this.$store.dispatch('setUser',result[0].email)
              this.$router.push({name:'homeLink'})
            }else{
              alert('账号或密码有误，请重新输入！')
            }
          })

    }
  }
  
}
</script>

<style scoped>
img{
  width: 200px;
}
</style>
