<template>
  <TaskInput labelName="帳號" />
</template>
<script setup lang="ts">
import TaskInput from "@/components/TaskInput.vue";
import { ref } from "vue";

const name = ref("帳號");
</script>
<style scoped></style>
