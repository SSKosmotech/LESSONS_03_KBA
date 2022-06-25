const App = {
    data(){
        return {
            API_KEY: 'd7be29bf',
            search: "Batman",
            selectedType: 'all',
            movieList: [],
            movieInfo: {},
            showModal: false
        }
    },
    methods: {
        searchMovies() {
            if(this.search !== ''){
                if(this.selectedType === 'all'){
                    this.selectedType = ''
                }
                console.log(this.selectedType);
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.selectedType}`)
                .then(response => {
                    // handle success
                    this.movieList = response.data.Search
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
            }
        },
        showMovieInfo(){
            // showMovieInfo(id){
                // console.log(id);
            this.showModal = true

        },
        getMovieInfo(id){
            axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
            .then(response => {
                // handle success
                this.movieInfo = response.data
                this.showMovieInfo();
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    }
}

Vue.createApp(App).mount('#app')