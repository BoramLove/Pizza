<template>
  <form>
    <h3 class="text-muted my-5 row">添加Pizza</h3>
    <div class="form-group row">
      <label for="variety" class="col-form-label">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" id="variety" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label for="description" class="col-form-label">描述</label>
      <div class="col-sm-11">
        <textarea id="" class="form-control" rows="5" v-model="newPizza.decription"></textarea>
      </div>
    </div>
    <p class="form-group row"><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-form-label">尺寸</label>
      <div class="col-sm-11 col-md-11">
       <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-form-label">价格</label>
      <div class="col-sm-11 col-md-11">
       <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p class="form-group row"><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-form-label">尺寸</label>
      <div class="col-sm-11 col-md-11">
       <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-form-label">价格</label>
      <div class="col-sm-11 col-md-11">
       <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group row">
      <button type="button" @click="addMenuItem" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return {
      newPizza:{

      }
    }
  },
  methods:{
    addMenuItem(){
      let data={
        name:this.newPizza.name,
        decription:this.newPizza.decription,
        options:[
          {
            size:this.newPizza.size1,
            price:this.newPizza.price1
          },
          {
            size:this.newPizza.size2,
            price:this.newPizza.price2
          }
        ]
      }
      // fetch("https://wd5918871153mxkjnh.wilddogio.com/menu.json",{
      //   method:"POST",
      //   headers:{
      //     "Content-type":'application/json'
      //   },
      //   body:JSON.stringify(data)
      // })
      // .then(res => res.json())
      // .then(data =>this.$store.commit('createMenuItems',data))
      // .catch(err =>console.log(err))
      this.http.post('menu.json',data)
          .then(this.$store.commit("createMenuItems",data))
    }
  }
}
</script>

<style>

</style>
