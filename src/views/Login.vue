<template>
  <div class="row login m-0">
    <div class="bg_area p-2 h-100 col-md-8">
      <div class="bg"></div>
    </div>
    <div class="login_area col-12 col-md-4">
      <form class="login_form">
        <TaskInput label-name="帳號" />
        <TaskInput label-name="密碼" />
        <div class="button_area">
          <TaskButton class="login_button" buttonName="登入" />
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TaskButton from "@/components/TaskButton.vue";
import TaskInput from "@/components/TaskInput.vue";
import type { User } from "@/type/user";
import { ref } from "vue";

const form = ref<User>({
  id: 0,
  userId: "",
  password: "",
  loginTime: "",
});
</script>
