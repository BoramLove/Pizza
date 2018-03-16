<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" :key="index">
          <tr>
            <td>{{item.name}}</td>
          </tr>
          <tr v-for="(option,index) in item.options" :key="index">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-danger">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4">
       <div v-if="baskets.length>0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>种类</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in baskets" :key="index">
            <tr>
              <td>
                <button @click="sub(item)" class="btn btn-sm btn-default">-</button>
                <span>{{item.quantity}}</span>
                <button @click="add(item,index)" class="btn btn-sm">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{totalPrice}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else class="mt-2">
        {{basketsText}}
      </div>
    </div>
    
  </div>


</template>

<script>
  export default {
    data() {
      return {
        baskets: [],
        basketsText:"您还没有添加任何产品",
        // getMenuItems: {}
      }
    },
    created(){
      this.fetchData()
    },
    computed:{
      getMenuItems(){
        return this.$store.getters.getMenuItems
      },
      totalPrice(){
        let total = 0;
        for(let key in this.baskets){
          let totalNumber = this.baskets[key];
          total += totalNumber.price * totalNumber.quantity
      }
      return total;
      }
      
    },
    methods: {
      fetchData(){
        // fetch("https://wd5918871153mxkjnh.wilddogio.com/menu.json")
        // .then(res =>{
        //   return res.json()
        // })
        // .then(data =>{
        //   // this.getMenuItems = data
        //   this.$store.commit("setMenuItems",data)
        // })
        //axios全局引用
        // this.http.get("menu.json")
        //     .then(res=> this.getMenuItems = res.data)
        this.http.get("menu.json")
            .then(res => this.$store.commit("setMenuItems",res.data))
      },
      addToBasket(item, option) {
        let basket = {
          name: item.name,
          size: option.size,
          price: option.price,
          quantity:1
        }
        if(this.baskets.length>0){
          let result = this.baskets.filter(basket =>{
            return(basket.name === item.name && basket.price === option.price)
            })
          if(result != null && result.length>0){
              result[0].quantity ++;
            }else{
              this.baskets.push(basket)
            }
        }else{
          this.baskets.push(basket) 
        }
      },
      add(item,index){
        item.quantity++;
        console.log(index)
      },
      sub(item){
        if(item.quantity>1){
          item.quantity--;
        }else{
          this.baskets.splice(this.baskets.indexOf(item),1)
        }
      }
    }
  };

</script>
