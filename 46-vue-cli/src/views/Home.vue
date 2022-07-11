<template>
  <div class="home">
    <LastNews />
    <!-- <PromoBlock title="Hello Vue" pic="banner.jpg" /> -->
    <PromoBlock title="Hello Vue" pic="work-1.jpg" />
    <FeaturesList />
    <WorksList />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>


<script>
import FeaturesList from '@/components/FeaturesList.vue';
import WorksList from '@/components/WorksList.vue';
import PromoBlock from '@/components/PromoBlock.vue';
import LastNews from '@/components/LastNews.vue';

// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: "Home",
    // components: { FeaturesList, WorksList, LastNews }
    components: { FeaturesList, WorksList, PromoBlock, LastNews }
}

</script>
