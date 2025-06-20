<template>
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from './TaskForm.vue';
import TaskList from './TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList
  }
}
</script>
