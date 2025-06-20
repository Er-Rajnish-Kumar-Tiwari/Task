<!-- components/Navbar.vue -->
<template>
  <nav style="padding: 16px; background: #2563eb; color: white; display: flex; justify-content: space-between; align-items: center;">
    <router-link to="/" style="font-weight: bold; font-size: 20px; color: white; text-decoration: none;">Task Manager</router-link>
    <div>
      <button v-if="isLoggedIn" @click="$emit('logout')" style="background: none; border: none; color: white; cursor: pointer; font-weight: 500;">Logout</button>
      <template v-else>
        <router-link to="/login" style="margin-right: 20px; color: white; font-weight: 500; text-decoration: none;">Login</router-link>
        <router-link to="/signup" style="color: white; font-weight: 500; text-decoration: none;">Signup</router-link>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isLoggedIn']
};
</script>
