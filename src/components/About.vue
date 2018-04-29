<template>
  <div>
    <h1>{{ tag }}</h1>
    <h3>My handles are some form of Crux.</h3>
    <br />
    <p>I love systems and programming.<br>Whether its frontend or back, I find it amazing and thought provoking.<br>
    Currently working as a DevOps Engineer</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    tag: String
  }
}
</script>
<style scoped>
h1 {
  font-weight: bold;
}
</style>