<template>
  <div class="task_input">
    <h4>{{ labelName }}</h4>
    <input />
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  labelName: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.task_input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h4 {
  letter-spacing: 5px;
  font-weight: 400;
}
input {
  border: none;
  border-bottom: 0.5px black solid;
  background: rgb(222, 217, 217);
  border-radius: 20px;
  width: 250px;
  height: 30px;
}

input:focus {
  border-color: rgb(0, 0, 0);
}
</style>
