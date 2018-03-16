import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{//设置属性
    menuItems:{},
    isLogin:false,
    currentUser:null
  },
  getters:{//获取属性状态
    getMenuItems(state){
      return state.menuItems
    },
    isLogin(state){
      return state.isLogin
    },
    currentUser(state){
      return state.currentUser
    }
  },
  mutations:{//改变属性状态
    setMenuItems(state,data){
      state.menuItems = data
    },
    createMenuItems(state,data){
      state.menuItems.push(data)
    },
    deleteMenuItems(state,data){
      state.menuItems.forEach((item,index)=>{
        if(data == item){
          state.menuItems.splice(index,1)
        }
      })
    },
    userStatus(state,user){
      if(user){
        state.currentUser = user
        state.isLogin = true
      }else{
        state.currentUser = null
        state.isLogin = false
      }
    }
  },
  actions:{
    setUser({commit},user){
      commit("userStatus",user)
    }
  }
})