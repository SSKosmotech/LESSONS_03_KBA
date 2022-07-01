<template>
    <header id="header" :class="{'fixed': isFixed}">
            <div class="header-content clearfix">
                <!-- <a class="logo" href="#"><img src="../assets/images/logo.png" alt=""></a> -->
                <!-- Замість <a> робимио <router-link to="/"> щоб при кліці на лого - перекидало на головну сторінку -->
                <router-link to="/"><img src="../assets/images/logo.png" alt=""></router-link> 
                <nav class="navigation" role="navigation">
                    <ul class="primary-nav">
                        <li><router-link to="/works">Works</router-link></li>
                            <li><router-link to="/features">Features</router-link></li>
                            <li><router-link to="/ourteam">Our Team</router-link></li>
                            <!-- <li><router-link to="/">Home</router-link> </li>| -->
                            <!-- <li><router-link to="/about">About</router-link></li> -->
                            <!-- <li><a href="#features">Features</a></li>
                            <li><a href="#works">Works</a></li>
                            <li><a href="#teams">Our Team</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#download">Download</a></li> -->
                    </ul>
                </nav>
                <a href="#" class="nav-toggle" :class="{'close-nav': isOpenMobileMenu}" @click="toggleMobileMenu">Menu<span></span></a>
            </div><!-- header content -->
    </header><!-- header -->
</template>

<script>
export default {
    data () {
        return {
            isFixed: false,
            isOpenMobileMenu: false
        }
    },
    created() {
        window.addEventListener('scroll', this.toggleFixedScroll)
    },
    methods: {
        toggleFixedScroll(){
            this.isFixed = window.scrollY > 50
        },
        toggleMobileMenu() {
            this.isOpenMobileMenu = !this.isOpenMobileMenu
        }
    }
}
</script>
