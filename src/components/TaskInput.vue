<template>
  <div class="input_area">
    <p class="inputTitle">{{ labelName }} ：</p>
    <input class="input p-1" />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  labelName: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.input_area {
  width: 80%;
  margin: 0 auto;
  display: grid;
  justify-items: start;
}
.input_area .inputTitle {
  font-size: 10px;
  margin: 0px 0px 3px 0px;
}

.input_area input {
  width: 100%;
  border: 1px solid rgb(103, 102, 102);
  border-radius: 13px;
  height: 25px;
}
</style>
