<template>

    <div class="container">
        <h1>News</h1>
        <div class="news-list">
            <div v-for="(item, index) in list" :key="index" class="person">
                <router-link :to="{name: 'MyOneNews', params:{title: item.title}}">
                    <div class="news_pic">
                        <img :src="item.urlToImage" :alt="item.title" class="img-responsive">
                    </div>
                    <div class="person-content">
                        <h4>{{ item.title }}</h4>
                        <h5 class="role">{{ item.publishedAt }}</h5>
                        <p>{{ item.description }}</p>
                    </div>
                </router-link>
            </div><!-- person -->
        <pagination :page="page" :total="totalPages" @to-page="goToPageMovies"/>

        </div>
    </div>
</template>


<script>
import axios from 'axios'
import Pagination from '@/components/Pagination.vue'

export default {
  components: { Pagination },
    data() {
        return {
            list: [],
            page: 1,
            totalPages: 0
        }
    },
    computed: {
        nowDateFormated() {
            const d = new Date()
            let month = d.getMonth()+1
            let day = d.getDate()-1
            return d.getFullYear()+'-'+(month<10 ? '0'+month : month)+'-'+(day<10 ? '0'+day : day)
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            let url = 'https://newsapi.org/v2/everything?q=apple&apiKey=0f2c050cee0c4c6e9ab00d26b1f56c1a'
            url += '&from='+this.nowDateFormated
            url += '&to='+this.nowDateFormated
            url += '&language=en'
            url += '&pageSize=20'
            url += '&page='+this.page
            axios
                .get(url)
                .then(resp=>{
                    this.list = resp.data.articles
                    this.totalPages = Math.ceil(resp.data.totalResults / 20)
                })
        },
        goToPageMovies(new_page){
            this.page = new_page
            this.fetchData()
        }
    }
}
</script>

<style lang="scss" scoped>
    .news-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px
    }

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

        };

    }

</style>
