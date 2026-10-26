<template>
  <div class="login">
    <div class="login_area">

      <!-- 輸入區域 -->
      <TaskInput label-name="帳號" />
      <TaskInput label-name="密碼" />

      <!-- 登入按鈕 -->
      <div class="button_area">
        <el-button>登入</el-button>
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
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
