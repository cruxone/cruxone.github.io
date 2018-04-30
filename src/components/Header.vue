<template>
  <div>
      <h1>{{ tag }}</h1>
      <h3>I go by Crux online</h3>
  </div>
</template>

<script>
export default {
  props: { 
    tag: String
  }
};
</script>
<style scoped>
h1 {
  font-weight: bold;
}
</style>