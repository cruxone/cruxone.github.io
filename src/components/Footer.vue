<template>
  <div>
    <h3 class="center-text">
      <i class="fa fa-envelope"></i>
      <a :href="`mailto:${email}`">
        {{ email }}
      </a>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    email: String
  }
};
</script>