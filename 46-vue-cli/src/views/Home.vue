<template>
  <div class="home">
    <FeaturesList />
    <WorksList />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>


<script>
import FeaturesList from '@/components/FeaturesList.vue';
import WorksList from '@/components/WorksList.vue';

// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: "Home",
    components: { FeaturesList, WorksList }
}

</script>
