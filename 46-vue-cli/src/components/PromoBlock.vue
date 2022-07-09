<template>
    <div class="promo" :style="`background-image: url(${require('@/assets/images/'+pic)})`">
        <img :src="require('@/assets/images/'+pic)" :alt="title" />
        <br />
        <h1>{{ title }}</h1>
    </div>
</template>



<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        pic: {
            type: String,
            default: ''
        }
    }    
}
</script>