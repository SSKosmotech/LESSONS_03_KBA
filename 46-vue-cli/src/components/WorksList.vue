<template>
    <section id="works" class="works section no-padding">
        <div class="container-fluid">
            <div class="row no-gutter">
                <!-- <div v-for="index in 8" :key="index" class="col-lg-3 col-md-6 col-sm-6 work animated"> -->
                <div v-for="(work, index) in worksListData" :key="index" class="col-lg-3 col-md-6 col-sm-6 work ">
                    <!-- <a :href="`../assets/images/${work.image}`" class="work-box"> -->
                    <!-- <a :href="`../assets/images/work-${{index}}.jpg`" class="work-box"> -->
                    <!-- <a :href="require(`@/assets/images/${work.image}`)" class="work-box" @click="showImage"> -->
                    <a :href="require(`@/assets/images/`+work.image)" class="work-box" @click="showImage">
                        <!-- <img :src="require(`@/assets/images/${work.image}`)" :alt="work.title"> -->
                        <!-- <img :src="work.image" alt=""> -->
                        <img :src="require(`@/assets/images/`+work.image)" :alt="work.title">
                        <div class="overlay">
                            <div class="overlay-caption">
                                <h5>{{ work.title }}</h5>
                                <p>{{ work.text }}</p>
                            </div>
                        </div><!-- overlay -->
                    </a>
                </div>
            </div>
        </div>
        <modal-window v-if="showModal" @close="showModal = false" >
            <!-- <template v-slot:header></template> -->
            <template #header><div></div></template>
            <template #body>
                <img :src="previewImage" alt="">
            </template>
        </modal-window>
    </section><!-- works -->
    <!-- <font-awesome-icon icon="fa-solid fa-user" /> -->
    <font-awesome-icon icon="fa-brands fa-facebook" />
    <font-awesome-icon icon="fa-brands fa-twitter" />
</template>

<script>
import axios from 'axios'
// import ModalWindow from '@/components/ModalWindow'

export default {
    name: 'WorksList',
    components: {
        // ModalWindow
    },
    data () {
        return {
            worksListData: []
        }
    },
    created() {
        axios
            // .get('../data/works.json')
            .get('data/works.json')
            .then(resp=>{
                this.worksListData = resp.data
            })
    },
    methods: {
        showImage(){

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/works.scss';

// .work {
//   -moz-box-shadow: 0 0 0 1px #fff;
//   -webkit-box-shadow: 0 0 0 1px #fff;
//   box-shadow: 0 0 0 1px #fff;
//   min-height: 350px;
//   overflow: hidden;
//   position: relative;
//   //visibility: hidden; 
// }
//   .work .overlay {
//     background: rgba(232, 69, 69, 0.9);
//     height: 100%;
//     left: 0;
//     opacity: 0;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     -moz-transition: opacity, 0.3s;
//     -o-transition: opacity, 0.3s;
//     -webkit-transition: opacity, 0.3s;
//     transition: opacity, 0.3s; }
//   .work .overlay-caption {
//     position: absolute;
//     text-align: center;
//     top: 50%;
//     width: 100%;
//     -moz-transform: translateY(-50%);
//     -ms-transform: translateY(-50%);
//     -webkit-transform: translateY(-50%);
//     transform: translateY(-50%); }
//   .work h5, .work p, .work img {
//     -moz-transition: all, 0.5s;
//     -o-transition: all, 0.5s;
//     -webkit-transition: all, 0.5s;
//     transition: all, 0.5s; }
//   .work h5, .work p {
//     color: #fff;
//     margin: 0;
//     opacity: 0; }
//   .work h5 {
//     margin-bottom: 5px;
//     -moz-transform: translate3d(0, -200%, 0);
//     -ms-transform: translate3d(0, -200%, 0);
//     -webkit-transform: translate3d(0, -200%, 0);
//     transform: translate3d(0, -200%, 0); }
//   .work p {
//     -moz-transform: translate3d(0, 200%, 0);
//     -ms-transform: translate3d(0, 200%, 0);
//     -webkit-transform: translate3d(0, 200%, 0);
//     transform: translate3d(0, 200%, 0); }

// .work-box:hover img {
//   -moz-transform: scale(1.2);
//   -ms-transform: scale(1.2);
//   -webkit-transform: scale(1.2);
//   transform: scale(1.2); }
// .work-box:hover .overlay {
//   opacity: 1; }
//   .work-box:hover .overlay h5, .work-box:hover .overlay p {
//     opacity: 1;
//     -moz-transform: translate3d(0, 0, 0);
//     -ms-transform: translate3d(0, 0, 0);
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0); }
     
</style>