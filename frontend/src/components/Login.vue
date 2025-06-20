<template>
  <form @submit.prevent="handleSubmit" style="max-width: 400px; margin: 40px auto; padding: 32px; border: 1px solid #ccc; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); background-color: #c7d2fe;">
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 24px;">Login</h2>
    <input v-model="form.username" placeholder="Username" style="margin-bottom: 16px; padding: 10px; width: 100%; border-radius: 8px; border: none; background-color: #f3f4f6;" />
    <input v-model="form.password" type="password" placeholder="Password" style="margin-bottom: 16px; padding: 10px; width: 100%; border-radius: 8px; border: none; background-color: #f3f4f6;" />
    <button type="submit" style="padding: 10px 20px; cursor: pointer; background: #16a34a; color: white; border: none; border-radius: 10px; font-weight: 600;">Login</button>
  </form>
</template>

<script>
import { login } from '../api';

export default {
  data() {
    return {
      form: { username: '', password: '' }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await login(this.form);
        localStorage.setItem('token', res.data.token);
        this.$emit('loginSuccess');
        this.$router.push('/');
      } catch {
        alert('Invalid credentials');
      }
    }
  }
};
</script>
