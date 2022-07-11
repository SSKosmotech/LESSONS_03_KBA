<template>
    <nav class="pagination-wrap" >
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{disabled: ifDisabledFirst}">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click="goToPage(page-1)">Previous</a>
            </li>

        <template v-if="showFirst">
            <li class="page-item" aria-current="page">
                <a class="page-link" href="#" @click="goToPage(1)">1</a>
            </li>
            <li class="page-item" aria-current="page">
                <span>...</span>
            </li>
        </template>

        <template v-for="p in pagesRange" :key="p">
            <li class="page-item" :class="{active: p === page}" aria-current="page">
                <a class="page-link" href="#" @click="goToPage(p)">{{ p }}</a>
            </li>
        </template>

    
        <template v-if="showLast">
            <li class="page-item" aria-current="page">
                <span>...</span>
            </li>
            <li class="page-item" aria-current="page">
                <a class="page-link" href="#" @click="goToPage(total)">{{ total }}</a>
            </li>
        </template>

            <li class="page-item" :class="{disabled: ifDisabledLast}">
            <a class="page-link" href="#" @click="goToPage(page+1)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        page: {
            type: Number,
            default: 1,
            required: true
        },
        total: {
            type: Number,
            default: 0,
            required: true
        },
    },
    computed: {
        ifDisabledFirst(){
            return this.page === 1
        },
        ifDisabledLast(){
            return this.page === this.total
        },
        showFirst(){
            return this.page > 4 && this.total > 6
        },
        showLast(){
            return this.page < this.total - 3 && this.total > 6
        },
        pagesRange(){
            let from = this.page - 2
            let to = this.page + 2

            if(this.page < 5){
                from = 1
                to = 5
            }

            if(this.page > this.total - 4){
                from = this.total - 4
                to = this.total
            }

            if(from < 1){
                from = 1
            }

            if(to > this.total){
                to = this.total
            }

            if(this.total === 6){
                from = 1
            }

            return Array(to - from + 1).fill().map((_, idx) => from + idx)
        },
    },
    methods: {
        goToPage(new_page) {
            this.$emit('toPage', new_page)
        }
    },
}
</script>

<style lang="scss" scoped>
    .pagination-wrap {
        text-align: center;
    }
</style>