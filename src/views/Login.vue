<template>
  <div class="login">
    <div class="login_area">
      <div>Task Garden</div>
      <el-card>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <el-form-item label="帳號">
            <el-input v-model="form.userId" />
          </el-form-item>
          <el-form-item label="密碼">
            <el-input type="password" v-model="form.password" />
          </el-form-item>
          <el-form-item class="button_area">
            <el-button type="primary" class="login_button">登入</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { User } from "@/type/user";
import { ref } from "vue";

const form = ref<User>({
  id: 0,
  userId: "",
  password: "",
  loginTime: "",
});
</script>
<style scoped>
.login .login_area :deep(.el-card) {
  width: 80%;
}

.login .login_area .button_area :deep(.el-form-item__content) {
  justify-content: center;
}

.login {
  overflow: hidden;
}

.login .login_area {
  animation: slide-in-right 0.8s ease-out both;
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
