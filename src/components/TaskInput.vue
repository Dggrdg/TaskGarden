<template>
  <Transition name="slide" mode="out-in" @after-enter="focusNameInput">
    <!-- 第一頁 -->
    <div v-if="step === 1" class="login_content" key="login">
      <div class="button_area">
        <button class="glass_button" @click="step = 2">請輸入{{labelName}}</button>
      </div>
    </div>

    <!-- 第二頁 -->
    <div v-else class="login_content" key="register">
      <input
        ref="nameInput"
        class="glass_input"
        type="text"
        :placeholder=labelName
        @blur="step = 1"
      />
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { ref, nextTick, watch } from "vue";

const props = defineProps({
  labelName: {
    type: String,
    required: true,
  },
});

const step = ref<number>(1);
const nameInput = ref<HTMLInputElement | null>(null);

watch(step, async (value) => {
  if (value === 2) {
    await nextTick();
  }
});

function focusNameInput() {
  nameInput.value?.focus();
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chiron+GoRound+TC:wght@200..900&display=swap");

/* 登入內容 */
.login_content {
  width: min(400px, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Button 區域 */
.button_area {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Button 和 Input 共用樣式 */
.glass_button,
.glass_input {
  width: 70%;
  height: 52px;
  padding: 0 20px;
  display: flex;
  align-items: center;

  box-sizing: border-box;

  /* 毛玻璃效果 */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  /* 邊框 */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;

  /* 文字 */
  color: #ffffff;
  font-family: "Chiron GoRound TC", sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;

  /* 動畫 */
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

/* Button */
.glass_button {
  cursor: pointer;
  text-align: center;
}

/* 滑鼠移入 Button */
.glass_button:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.5);

  transform: translateY(-2px);
}

/* Input */
.glass_input {
  outline: none;
  text-align: left;
}

/* Placeholder */
.glass_input::placeholder {
  color: rgba(255, 255, 255, 0.65);
  font-size: 12px;
  letter-spacing: 2px;
  opacity: 1;
}

/* Input 取得焦點 */
.glass_input:focus {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);

  box-shadow:
    0 0 0 3px rgba(255, 255, 255, 0.06);
}

/* 切換動畫 */
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* 進場 */
.slide-enter-from {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}

/* 離場 */
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

/* 手機版 */
@media (max-width: 768px) {
  .login_content {
    width: 90%;
  }

  .glass_button,
  .glass_input {
    width: 100%;
    height: 50px;
    font-size: 13px;
  }
}

/* 尊重使用者減少動畫的設定 */
@media (prefers-reduced-motion: reduce) {
  .slide-enter-active,
  .slide-leave-active,
  .glass_button,
  .glass_input {
    transition: none;
  }
}
</style>
