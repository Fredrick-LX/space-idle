<template>
  <div class="game-container">
    <h1>游戏页面</h1>
    <p>欢迎来到 Space Idle！</p>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem('user');
  router.push('/login');
};
</script>

<style scoped>
.game-container {
  padding: 2rem;
  text-align: center;
}

button {
  padding: 0.75rem 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #45a049;
}
</style> 