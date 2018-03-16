<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <appNewPizza></appNewPizza>
      </div>
      <div class="col-sm-12 col-md-4">
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table">
          <thead class="table table-default">
            <tr>
              <th>品种</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in getMenuItems" :key="index">
            <tr>
              <td>{{item.name}}</td>
              <td>
                <button @click="deleteData(item)" type="button" class="btn btn-outline-danger btn-sm">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>

import newPizza from './newPizza'

export default {
  data(){
    return {
      // getMenuItems:[]
    }
  },
  components:{
    appNewPizza:newPizza
  },
  computed:{
    getMenuItems:{
      get(){
        return this.$store.state.menuItems
      },
      set(){

      }  
    }
  },
  methods:{
    deleteData(item){
      fetch("https://wd5918871153mxkjnh.wilddogio.com/menu/"+item.id+"/.json",{
        method:"DELETE",
        headers:{
          'Content-type':'application/json'
        }
    })
    .then(res =>res.json())
    .then(data =>{
      // this.getMenuItems.splice(this.getMenuItems.indexOf(item),1)
      // this.$router.push({name:'menuLink'})
      this.$store.commit('deleteMenuItems',item)
    })
    .catch(err =>console.log(err))
    }
  },
  created(){
    fetch("https://wd5918871153mxkjnh.wilddogio.com/menu.json")
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      let menuArr = [];
      for(let key in data){   
        data[key].id = key;
        menuArr.push(data[key]);
      }
      // this.getMenuItems = menuArr;
      this.$store.commit('setMenuItems',menuArr)
    })
    .catch(err =>console.log(err))
  }
}
</script>

