<template>
  <div class="task">
    <header>
      <nav>
        <h2>任務小幫手</h2>
        <div class="login_area">
          <h4 class="user_display">你好，{{ userData.userId }}</h4>
          <div>|</div>
          <h4 class="login_status">登出</h4>
        </div>
      </nav>
    </header>
  </div>
</template>
<script setup lang="ts">
import type { User } from "@/type/user";
import { ref } from "vue";

const userData = ref<User>({
  id: 0,
  userId: "銘軒",
  password: "",
  loginTime: "",
});

</script>
