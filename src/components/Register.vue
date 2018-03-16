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
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>
            <button type="submit" class="btn btn-block btn-primary">注册</button>
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
      password:'',
      confirmPassword:''
    }
  },
  methods:{
    onSubmit(){
      if(this.password === this.confirmPassword){
        const formData = {
          email:this.email,
          password:this.password,
          confirmPassword:this.confirmPassword
        }
        axios.post('/users.json',formData)
            .then(res => this.$router.push({name:'loginLink'}))
      }else{
        alert('两次密码不一致!')
      }
    }
  }
  
}
</script>

<style scoped>
img{
  width: 200px;
}
</style>
