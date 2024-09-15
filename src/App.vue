<template>
  <div class="content">
    <h3>Vue3 app</h3>
    <div>
      <router-link
        to="/"
        class="self-remote3-home-link"
      >Home</router-link>
      <span> | </span>
      <router-link
        to="/about"
        class="self-remote3-detail-link"
      >About</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}
</style>