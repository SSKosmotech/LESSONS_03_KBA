<template>
    <template v-if="$route.path === '/'">
        <section class="banner" role="banner">
            <site-header />
            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="banner-text text-center">
                        <h1>Your Favorite One Page Multi Purpose Template</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.</p>
                        <a href="#" class="btn btn-large">Find out more</a>
                    </div><!-- banner text -->
                </div>
            </div>
        </section><!-- banner -->
        <router-view/>
    </template>

    <template v-else>
        <site-header :stay-fixed="true" />
        <main class="main">
            <router-view/>
        </main>
    </template>

	<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div> -->

	<!-- <router-view/> -->

    <site-footer /> 

</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
	components: {
		SiteHeader,
        SiteFooter
	}
}
</script>


