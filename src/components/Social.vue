<template>
    <div id="soc">
            <a href="https://www.linkedin.com/in/chris-freeland/" class="icons"><i class="fab fa-linkedin-in fa-lg"></i></a>
            <a href="https://github.com/cruxone" class="icons"><i class="fab fa-github-alt fa-lg"></i></a>
            <a href="https://medium.com/@chris_49442" class="icons"><i class="fab fa-medium-m fa-lg"></i></a>
    </div>
</template>

<script>
export default {
  props: {
    tag: String
  }
};
</script>
<style >
#soc {
    margin-top: 5%;
}
a {
    color: white;
}
.icons {
    margin-left: 1%;
    margin-right: 1%;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>