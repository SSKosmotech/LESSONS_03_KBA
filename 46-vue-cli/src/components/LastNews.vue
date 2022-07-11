<template>
    <section id="teams" class="section teams">
        <div class="container">
        <!-- <carousel :items-to-show="1.5" :settings="sliderSettings"> -->
            <carousel :settings="sliderSettings" :breakpoints="breakpoints">
                <slide v-for="(item, index) in line" :key="index">
                    <router-link :to="{name: 'MyOneNews', params:{title: item.title}}" class="news-line-item">
                        <div class="news-pic">
                            <img :src="item.urlToImage" :alt="item.title" class="img-responsive">
                        </div>
                        <div class="person-content">
                            <h4>{{ item.title }}</h4>
                            <h5 class="role">{{ item.publishedAt }}</h5>
                            <p>{{ item.description }}</p>
                        </div>
                    </router-link>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel> 
        </div>
    </section><!-- teams -->
</template>



<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'NewsLine',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
        return {
            line: [],
            sliderSettings: {
                itemsToShow: 4,
                itemsToScroll: 4,
                snapAlign: 'start',
                wrapAround: true
            },
            breakpoints: {
                350: {
                    itemsToShow: 1,
                    // snapAlign: 'center',
                },
                // 700px and up
                700: {
                    itemsToShow: 3,
                    // snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    // snapAlign: 'start',
                },
            }
        }
    },
    created() {
    let url = 'https://newsapi.org/v2/everything?q=apple&apiKey=0f2c050cee0c4c6e9ab00d26b1f56c1a'
            url += '&from='+this.nowDateFormated
            url += '&language=en'
            url += '&pageSize=10'
            url += '&page='+this.page
            axios
                .get(url)
                .then(resp=>{
                    this.line = resp.data.articles
                })
   }
}
</script>

<style lang="scss">

    .news-pic{
        position: relative;
        padding-top: 53%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    .carousel__track {
        align-items: flex-start;

    }

    .news-line-item {
        display: block;
        padding: 0 10px;
    }

    .carousel__prev {
        // position: relative;
        background-color: transparent;
        border-radius: 0;
        svg {
            display: none;
        }
        &:before {
            content: '';
            border-bottom: 2px solid #F00;
            border-left: 2px solid #F00;
            // background: url();
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 4px;
            top: 5px;
            transform: rotate(45deg);
        }
    }
</style>