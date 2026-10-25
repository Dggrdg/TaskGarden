<template>
  <div class="box">
    <div style="background-color: aqua;">A</div>
    <div style="background-color: bisque;">B</div>
    <div style="background-color: blueviolet;">C</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  background-color: brown;
  height: 500px;
}

.box div {
  width: 400px;
}
</style>
