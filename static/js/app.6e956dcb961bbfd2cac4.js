webpackJsonp([1],{"3rQL":function(t,s){},"5zm1":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"py-2",attrs:{href:"#"}},[e("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),e("line",{attrs:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}}),e("line",{attrs:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}}),e("line",{attrs:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}}),e("line",{attrs:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}}),e("line",{attrs:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}}),e("line",{attrs:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"}})])]),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Pizza点餐系统")]),t._v(" "),e("ul",{staticClass:"navbar-nav"},[e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"homeLink"}}},[t._v("主页")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"menu"}},[t._v("菜单")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"admin"}},[t._v("管理")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"about"}},[t._v("关于我们")])],1)]),t._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link",attrs:{to:"login"}},[t._v("登录")])],1),t._v(" "),e("li",{staticClass:"nav-link"},[t._v(t._s(t.currentUser))]),t._v(" "),e("li",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link",attrs:{to:"register"}},[t._v("注册")])],1),t._v(" "),e("li",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"nav-link",attrs:{to:"login"}},[t._v("[退出]")])],1)])])])},staticRenderFns:[]},i=e("VU/8")({data:function(){return{}},computed:{isLogin:function(){return this.$store.getters.isLogin},currentUser:function(){return this.$store.getters.currentUser}}},n,!1,null,null,null).exports,r={components:{appHeader:i}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("app-header")],1),this._v(" "),s("div",{staticClass:"container"},[s("router-view")],1),this._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-4"},[s("router-view",{attrs:{name:"history"}})],1),this._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("router-view",{attrs:{name:"orderingGuide"}})],1),this._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("router-view",{attrs:{name:"delivery"}})],1)])])])},staticRenderFns:[]};var l=e("VU/8")(r,o,!1,function(t){e("3rQL")},null,null).exports,c=e("/ocq"),u=e("mtWM"),m=e.n(u),v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"row home mb-2 mt-2"},[s("div",{staticClass:"wrap"},[s("h1",[this._v("My Beautiful BoRam!")]),this._v(" "),s("h3",[this._v("💗LOVE YOU!!!💗")]),this._v(" "),s("button",{staticClass:"btn btn-success mb-2",on:{click:this.goToMenu}},[this._v("\n        Let's order!\n      ")])])])])},staticRenderFns:[]};var d=e("VU/8")({methods:{goToMenu:function(){this.$router.push("/menu")}}},v,!1,function(t){e("h8ci")},"data-v-78be9508",null).exports,p={data:function(){return{baskets:[],basketsText:"您还没有添加任何产品"}},created:function(){this.fetchData()},computed:{getMenuItems:function(){return this.$store.getters.getMenuItems},totalPrice:function(){var t=0;for(var s in this.baskets){var e=this.baskets[s];t+=e.price*e.quantity}return t}},methods:{fetchData:function(){var t=this;this.http.get("menu.json").then(function(s){return t.$store.commit("setMenuItems",s.data)})},addToBasket:function(t,s){var e={name:t.name,size:s.size,price:s.price,quantity:1};if(this.baskets.length>0){var a=this.baskets.filter(function(e){return e.name===t.name&&e.price===s.price});null!=a&&a.length>0?a[0].quantity++:this.baskets.push(e)}else this.baskets.push(e)},add:function(t,s){t.quantity++,console.log(s)},sub:function(t){t.quantity>1?t.quantity--:this.baskets.splice(this.baskets.indexOf(t),1)}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-8"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.getMenuItems,function(s,a){return e("tbody",{key:a},[e("tr",[e("td",[t._v(t._s(s.name))])]),t._v(" "),t._l(s.options,function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(a.size))]),t._v(" "),e("td",[t._v(t._s(a.price))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(e){t.addToBasket(s,a)}}},[t._v("+")])])])})],2)})],2)]),t._v(" "),e("div",{staticClass:"col-md-4"},[t.baskets.length>0?e("div",[e("table",{staticClass:"table"},[t._m(1),t._v(" "),t._l(t.baskets,function(s,a){return e("tbody",{key:a},[e("tr",[e("td",[e("button",{staticClass:"btn btn-sm btn-default",on:{click:function(e){t.sub(s)}}},[t._v("-")]),t._v(" "),e("span",[t._v(t._s(s.quantity))]),t._v(" "),e("button",{staticClass:"btn btn-sm",on:{click:function(e){t.add(s,a)}}},[t._v("+")])]),t._v(" "),e("td",[t._v(t._s(s.name)+t._s(s.size))]),t._v(" "),e("td",[t._v(t._s(s.price*s.quantity))])])])})],2),t._v(" "),e("p",[t._v("总价:"+t._s(t.totalPrice))]),t._v(" "),e("button",{staticClass:"btn btn-success btn-block"},[t._v("提交")])]):e("div",{staticClass:"mt-2"},[t._v("\n      "+t._s(t.basketsText)+"\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"thead-default"},[s("tr",[s("th",[this._v("尺寸")]),this._v(" "),s("th",[this._v("价格")]),this._v(" "),s("th",[this._v("加入")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"thead-default"},[s("tr",[s("th",[this._v("数量")]),this._v(" "),s("th",[this._v("种类")]),this._v(" "),s("th",[this._v("价格")])])])}]},_=e("VU/8")(p,h,!1,null,null,null).exports,f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",[e("h3",{staticClass:"text-muted my-5 row"},[t._v("添加Pizza")]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label",attrs:{for:"variety"}},[t._v("品种")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.name,expression:"newPizza.name"}],staticClass:"form-control",attrs:{type:"text",id:"variety"},domProps:{value:t.newPizza.name},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"name",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label",attrs:{for:"description"}},[t._v("描述")]),t._v(" "),e("div",{staticClass:"col-sm-11"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.decription,expression:"newPizza.decription"}],staticClass:"form-control",attrs:{id:"",rows:"5"},domProps:{value:t.newPizza.decription},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"decription",s.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label"},[t._v("尺寸")]),t._v(" "),e("div",{staticClass:"col-sm-11 col-md-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size1,expression:"newPizza.size1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size1},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"size1",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label"},[t._v("价格")]),t._v(" "),e("div",{staticClass:"col-sm-11 col-md-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price1,expression:"newPizza.price1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price1},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"price1",s.target.value)}}})])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label"},[t._v("尺寸")]),t._v(" "),e("div",{staticClass:"col-sm-11 col-md-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size2,expression:"newPizza.size2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size2},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"size2",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-form-label"},[t._v("价格")]),t._v(" "),e("div",{staticClass:"col-sm-11 col-md-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price2,expression:"newPizza.price2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price2},on:{input:function(s){s.target.composing||t.$set(t.newPizza,"price2",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("button",{staticClass:"btn btn-success btn-block",attrs:{type:"button"},on:{click:t.addMenuItem}},[t._v("添加")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"form-group row"},[s("strong",[this._v("选项1")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"form-group row"},[s("strong",[this._v("选项2")])])}]};var b={data:function(){return{}},components:{appNewPizza:e("VU/8")({data:function(){return{newPizza:{}}},methods:{addMenuItem:function(){var t={name:this.newPizza.name,decription:this.newPizza.decription,options:[{size:this.newPizza.size1,price:this.newPizza.price1},{size:this.newPizza.size2,price:this.newPizza.price2}]};this.http.post("menu.json",t).then(this.$store.commit("createMenuItems",t))}}},f,!1,function(t){e("bWm0")},null,null).exports},computed:{getMenuItems:{get:function(){return this.$store.state.menuItems},set:function(){}}},methods:{deleteData:function(t){var s=this;fetch("https://wd5918871153mxkjnh.wilddogio.com/menu/"+t.id+"/.json",{method:"DELETE",headers:{"Content-type":"application/json"}}).then(function(t){return t.json()}).then(function(e){s.$store.commit("deleteMenuItems",t)}).catch(function(t){return console.log(t)})}},created:function(){var t=this;fetch("https://wd5918871153mxkjnh.wilddogio.com/menu.json").then(function(t){return t.json()}).then(function(s){var e=[];for(var a in s)s[a].id=a,e.push(s[a]);t.$store.commit("setMenuItems",e)}).catch(function(t){return console.log(t)})}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-8"},[e("appNewPizza")],1),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("h3",{staticClass:"text-muted my-5"},[t._v("菜单")]),t._v(" "),e("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.getMenuItems,function(s,a){return e("tbody",{key:a},[e("tr",[e("td",[t._v(t._s(s.name))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.deleteData(s)}}},[t._v("×")])])])])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",{staticClass:"table table-default"},[s("tr",[s("th",[this._v("品种")]),this._v(" "),s("th",[this._v("删除")])])])}]},C=e("VU/8")(b,g,!1,null,null,null).exports,w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"list-group mb-5"},[e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"historyLink"}}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("历史订单")])]),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"contactLink"}}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("联系我们")])]),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"orderingGuideLink"}}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("点餐文档")])]),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/about/delivery"}},[e("a",{staticClass:"list-group-item list-group-item-action"},[t._v("快递信息")])])],1)]),t._v(" "),e("div",{staticClass:"col-8 mt-2"},[e("router-view")],1)])])},staticRenderFns:[]},k=e("VU/8")(null,w,!1,null,null,null).exports,z={data:function(){return{email:"",password:""}},beforeRouteEnter:function(t,s,e){e(function(t){return t.$store.dispatch("setUser",null)})},methods:{onSubmit:function(){var t=this;m.a.get("/users.json").then(function(s){var e=s.data,a=[];for(var n in e){var i=e[n];a.push(i)}var r=a.filter(function(s){return s.email===t.email&&s.password===t.password});null!=r&&r.length>0?(t.$store.dispatch("setUser",r[0].email),t.$router.push({name:"homeLink"})):alert("账号或密码有误，请重新输入！")})}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("img",{staticClass:"mx-auto d-block",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1793187368,2549264960&fm=27&gp=0.jpg"}}),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("邮箱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v("登录")])])])])])])},staticRenderFns:[]};var y=e("VU/8")(z,x,!1,function(t){e("5zm1")},"data-v-1e6b35e2",null).exports,P={data:function(){return{email:"",password:"",confirmPassword:""}},methods:{onSubmit:function(){var t=this;if(this.password===this.confirmPassword){var s={email:this.email,password:this.password,confirmPassword:this.confirmPassword};m.a.post("/users.json",s).then(function(s){return t.$router.push({name:"loginLink"})})}else alert("两次密码不一致!")}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("img",{staticClass:"mx-auto d-block",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1793187368,2549264960&fm=27&gp=0.jpg"}}),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("邮箱")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"confirm-password"}},[t._v("确认密码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.confirmPassword},on:{input:function(s){s.target.composing||(t.confirmPassword=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v("注册")])])])])])])},staticRenderFns:[]};var L=e("VU/8")(P,$,!1,function(t){e("eb78")},"data-v-0a65dad5",null).exports,E={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-head"},[t._v("联系我们")]),t._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("联系我们")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("1833131160@qq.com")]),t._v(" "),e("router-link",{attrs:{to:{name:"personNameLink"}}},[t._v("联系人")]),t._v(" "),e("router-link",{attrs:{to:{name:"phoneLink"}}},[t._v("手机号码")]),t._v(" "),e("router-view")],1)])},staticRenderFns:[]},U=e("VU/8")(null,E,!1,null,null,null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-head"},[this._v("快递信息")]),this._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[this._v("快递信息")]),this._v(" "),s("p",{staticClass:"card-text"},[this._v("1833131160@qq.com")])])])}]},I=e("VU/8")(null,N,!1,null,null,null).exports,M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-head"},[this._v("历史订单")]),this._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[this._v("历史订单")]),this._v(" "),s("p",{staticClass:"card-text"},[this._v("1833131160@qq.com")])])])}]},F=e("VU/8")(null,M,!1,null,null,null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card text-dark bg-light mb-3"},[s("div",{staticClass:"card-head"},[this._v("点餐文档")]),this._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[this._v("点餐文档")]),this._v(" "),s("p",{staticClass:"card-text"},[this._v("1833131160@qq.com")])])])}]},q=e("VU/8")(null,R,!1,null,null,null).exports,j={render:function(){var t=this.$createElement;return(this._self._c||t)("h3",[this._v("\n  BoramLove\n")])},staticRenderFns:[]},V={render:function(){var t=this.$createElement;return(this._self._c||t)("h3",[this._v("\n  1234567890\n")])},staticRenderFns:[]},S=[{path:"/",name:"homeLink",components:{default:d,history:F,orderingGuide:q,delivery:I}},{path:"/menu",name:"menuLink",component:_},{path:"/admin",name:"adminLink",component:C},{path:"/header",name:"headerLink",component:i},{path:"/about",name:"aboutLink",redirect:"/about/contact",component:k,children:[{path:"/about/contact",name:"contactLink",component:U,redirect:"/about/contact/personName",children:[{path:"/about/contact/personName",name:"personNameLink",component:e("VU/8")(null,j,!1,null,null,null).exports},{path:"/about/contact/phone",name:"phoneLink",component:e("VU/8")(null,V,!1,null,null,null).exports}]},{path:"/about/delivery",name:"deliveryLink",component:I},{path:"/about/history",name:"historyLink",component:F},{path:"/about/orderingGuide",name:"orderingGuideLink",component:q}]},{path:"/login",name:"loginLink",component:y},{path:"/register",name:"registerLink",component:L},{path:"*",redirect:"/"}],D=e("NYxO");a.a.use(D.a);var G=new D.a.Store({state:{menuItems:{},isLogin:!1,currentUser:null},getters:{getMenuItems:function(t){return t.menuItems},isLogin:function(t){return t.isLogin},currentUser:function(t){return t.currentUser}},mutations:{setMenuItems:function(t,s){t.menuItems=s},createMenuItems:function(t,s){t.menuItems.push(s)},deleteMenuItems:function(t,s){t.menuItems.forEach(function(e,a){s==e&&t.menuItems.splice(a,1)})},userStatus:function(t,s){s?(t.currentUser=s,t.isLogin=!0):(t.currentUser=null,t.isLogin=!1)}},actions:{setUser:function(t,s){(0,t.commit)("userStatus",s)}}});a.a.use(c.a),m.a.defaults.baseURL="https://wd5918871153mxkjnh.wilddogio.com/",a.a.prototype.http=m.a;var H=new c.a({routes:S,mode:"history"});new a.a({el:"#app",router:H,store:G,render:function(t){return t(l)}})},bWm0:function(t,s){},eb78:function(t,s){},h8ci:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6e956dcb961bbfd2cac4.js.map