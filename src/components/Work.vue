<template>
    <div style="margin-top:5%;">
        <h3>Freelance Work</h3>
        <ul class="things">
          <!-- <li v-for="(image,i) in images" :key="i">
            <img :src="image.src" class="port-img"/>
          </li> -->
          <li><a href="http://songtub.com"><b>Songtub</b> - Royalty Free Music Platform</a></li>
          <li><a href="https://nglrmls.com"><b>Nglrmls</b> - Northern Great Lakes Realestate</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  // data () {
  //   return { 
  //     images: [
  //       {
  //         src: require('../assets/songtub.jpg')
  //       },
  //       {
  //         src: require('../assets/nglrmls.jpg')
  //       }
  //     ]
  //   }
  // }
};
</script>
<style scoped>
/* .port-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
} */
a {
  text-decoration: none;
  color: white;
}
</style>