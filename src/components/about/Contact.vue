<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-head">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">1833131160@qq.com</p>

      <router-link :to="{name:'personNameLink'}">联系人</router-link>
      <router-link :to="{name:'phoneLink'}">手机号码</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>
