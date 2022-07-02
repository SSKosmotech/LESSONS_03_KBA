import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// import { faFacebook, faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'




/* add icons to the library */
library.add(faUserSecret)

// library.add(faFacebook, faTwitter, faLinkedin, faDribbble)
library.add(fab)



import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import '@/assets/css/responsive.css'


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
