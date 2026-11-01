<template>
  <button>{{ buttonName }}</button>
</template>
<script lang="ts" setup>
defineProps({
  buttonName: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
button {
  width: 80%;
  border-radius: 13px;
  font-size: 10px;
  border: 1px solid black;
  height: 25px;
}
</style>
