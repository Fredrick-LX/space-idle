<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="请输入邮箱"
        />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
          placeholder="请输入密码"
        />
      </div>
      <div class="form-actions">
        <button type="submit" :disabled="loading">
          {{ loading ? '登录中...' : '登录' }}
        </button>
        <div class="links">
          <router-link to="/register">注册账号</router-link>
          <router-link to="/reset-password">忘记密码？</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { LoginForm } from '../common/types';
import { login } from '../common/api';

const router = useRouter();
const loading = ref(false);
const form = ref<LoginForm>({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  try {
    loading.value = true;
    const response = await login(form.value);
    if (response.code === 0) {
      // 登录成功，存储用户信息
      localStorage.setItem('user', JSON.stringify(response.data));
      router.push('/game');
    } else {
      alert(response.message);
    }
  } catch (error) {
    console.error('登录失败:', error);
    alert('登录失败，请稍后重试');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  color: #666;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-actions button {
  padding: 0.75rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.form-actions button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.form-actions button:hover:not(:disabled) {
  background: #45a049;
}

.links {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.links a {
  color: #4CAF50;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style> 