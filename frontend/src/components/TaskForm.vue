<!-- components/TaskForm.vue -->
<template>
  <form @submit.prevent="handleSubmit" style="margin-top: 20px; display: flex; gap: 12px; align-items: center;">
    <input v-model="title" placeholder="New task" style="padding: 10px; flex: 1; border: 1px solid #d1d5db; border-radius: 8px;" />
    <button type="submit" style="background: #22c55e; color: white; padding: 10px 16px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Add</button>
  </form>
</template>

<script>
import { addTask } from '../api';

export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.title) return alert("Please enter a task");
      await addTask({ title: this.title });
      this.title = '';
      window.location.reload();
    }
  }
};
</script>
