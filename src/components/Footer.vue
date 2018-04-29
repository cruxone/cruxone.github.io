<template>
  <div>
    <h4 class="center-text">
      <i class="fa fa-envelope"></i>
      <a :href="`mailto:${email}`">
        {{ email }}
      </a>
    </h4>
    <h4>{{ tag }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    tag: String,
    email: String
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>