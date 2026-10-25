<template>
  <div class="login">
    <div class="login_area">
      
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