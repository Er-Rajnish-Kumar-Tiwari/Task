<!-- components/TaskList.vue -->
<template>
  <div style="padding: 16px;">
    <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 16px; color: #7f1d1d;">Your Tasks</h2>
    <ul style="list-style: disc; padding-left: 20px;">
      <li v-for="task in tasks" :key="task._id" style="margin-bottom: 8px;">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchTasks } from '../api';

export default {
  data() {
    return {
      tasks: []
    };
  },
  async mounted() {
    try {
      const res = await fetchTasks();
      this.tasks = res.data;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>
