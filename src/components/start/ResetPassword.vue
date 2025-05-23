<template>
  <div class="reset-password-container">
    <h2>重置密码</h2>
    <form @submit.prevent="handleSubmit" class="reset-password-form">
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
        <label for="oldPassword">当前密码</label>
        <input
          type="password"
          id="oldPassword"
          v-model="form.oldPassword"
          required
          placeholder="请输入当前密码"
        />
      </div>
      <div class="form-group">
        <label for="newPassword">新密码</label>
        <input
          type="password"
          id="newPassword"
          v-model="form.newPassword"
          required
          placeholder="请输入新密码"
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认新密码</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
          required
          placeholder="请再次输入新密码"
        />
      </div>
      <div class="form-actions">
        <button type="submit" :disabled="loading || !isFormValid">
          {{ loading ? '提交中...' : '重置密码' }}
        </button>
        <div class="links">
          <router-link to="/login">返回登录</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { ResetPasswordForm } from './types';
import { resetPassword } from './api';

const router = useRouter();
const loading = ref(false);
const form = ref<ResetPasswordForm>({
  email: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
});

const isFormValid = computed(() => {
  return (
    form.value.email.includes('@') &&
    form.value.oldPassword.length >= 6 &&
    form.value.newPassword.length >= 6 &&
    form.value.newPassword === form.value.confirmPassword &&
    form.value.newPassword !== form.value.oldPassword
  );
});

const handleSubmit = async () => {
  if (!isFormValid.value) return;

  try {
    loading.value = true;
    const response = await resetPassword(form.value);
    if (response.code === 0) {
      alert('密码重置成功！');
      router.push('/login');
    } else {
      alert(response.message);
    }
  } catch (error) {
    console.error('密码重置失败:', error);
    alert('密码重置失败，请稍后重试');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.reset-password-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.reset-password-form {
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
  justify-content: center;
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