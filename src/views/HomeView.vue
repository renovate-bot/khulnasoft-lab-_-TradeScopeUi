<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <BotList />
    </div>
    <hr />
    <!-- <img alt="Chaindrift logo" src="../assets/chaindrift-logo.png" width="450px" class="my-5" /> -->
    <div title="Chaindrift logo" class="logo-svg my-5 mx-auto" />
    <div>
      <h1>Welcome to the Chaindrift UI</h1>
    </div>
    <div>This page allows you to control your trading bot.</div>
    <br />
    <p>
      If you need any help, please refer to the
      <a href="https://www.chaindrift.io/en/latest/">Chaindrift Documentation</a>.
    </p>

    <p>Have fun - <i>wishes you the Chaindrift team</i></p>
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin-top: 1.5em;
}
.logo-svg {
  -webkit-mask: url(../assets/chaindrift-logo-mask.png) no-repeat center;
  -webkit-mask-size: 240px 240px;
  mask: url(../assets/chaindrift-logo-mask.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
