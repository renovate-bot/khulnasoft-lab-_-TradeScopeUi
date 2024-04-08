<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <bot-list />
    </div>
    <hr />
    <!-- <img alt="Tradescope logo" src="../assets/tradescope-logo.png" width="450px" class="my-5" /> -->
    <div title="Tradescope logo" class="logo-svg my-5 mx-auto" />
    <div>
      <h1>Welcome to the Tradescope UI</h1>
    </div>
    <div>This page allows you to control your trading bot.</div>
    <br />
    <p>
      If you need any help, please refer to the
      <a href="https://www.tradescope.khulnasoft.com/en/latest/">Tradescope Documentation</a>.
    </p>

    <p>Have fun - <i>wishes you the Tradescope team</i></p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
  margin-top: 1.5em;
}
.logo-svg {
  -webkit-mask: url(../assets/tradescope-logo-mask.png) no-repeat center;
  -webkit-mask-size: 240px 240px;
  mask: url(../assets/tradescope-logo-mask.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
