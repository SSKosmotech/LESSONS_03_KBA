const movieItem = {
    props: ["movie"],

    methods: {
        getMovieInfo(id) {
            // this.$parent.getMovieInfo(id)
            this.$emit("getMovie", id)
        },
        setFavorites(id, title) {
            // this.$parent.setFavorites(id, title)
            this.$emit("setFavorit", id, title)
        }
    },
    
    template: "#movieItem"
}

const App = {
    data(){
        return {
            API_KEY: 'd7be29bf',
            search: "Batman",
            selectedType: "",
            year: "",
            movieList: [],
            movieInfo: {},
            showModal: false,
            myFavorite: [],
            showFavoritesModal: false,
            totalPages: 0,
            page: 1,
            perPage: 10
        }
    },
    components: {
        movieItem
    },
    methods: {
        searchMovies() {
            if(this.search !== ''){
                if(this.selectedType === 'all'){
                    this.selectedType = ''
                }
                console.log(this.selectedType);
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.selectedType}&page=${this.page}&y=${this.year}`)
                .then(response => {
                    // handle success
                    this.movieList = response.data.Search
                    console.log(response);
                    this.totalPages = Math.ceil(response.data.totalResults / 10)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
                // this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
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
        },
        setFavorites(id, title){
            this.myFavorite = JSON.parse(localStorage.getItem('myFavorite')) || [];
            // this.myFavorite = id
            console.log(id, title)
            if(this.myFavorite.find(el => el.id===id) === undefined){
                this.myFavorite.push({
                    id: id,
                    title: title
                });
                // console.log(this.myFavorite);
                // localStorage.setItem('myFavorite', JSON.stringify(this.myFavorite));
            //     localStorage.removeItem('myFavorite', JSON.stringify(this.myFavorite));
            }
            else{
                // localStorage.removeItem(this.myFavorite);
                // localStorage.removeItem('myFavorite', JSON.stringify(this.myFavorite));
                const delFavoriteIndex = this.myFavorite.findIndex(el => el.id===id);
                console.log(`delFavoriteIndex= ${delFavoriteIndex}`);

                this.myFavorite.splice(delFavoriteIndex, 1);

            }
            localStorage.setItem('myFavorite', JSON.stringify(this.myFavorite));
            console.log(this.myFavorite);
        },
        created() {
            this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
        },
        showFavorites(){
            this.showFavoritesModal = true
            this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
            console.log(`Check: ${this.myFavorite}`);
        },
        // 02 Work
        movieListWithFavorite(){
            const arr = []
            
            this.movieList.forEach(el => {
                const findFav = this.myFavorite.find(item => {
                    // return el.imdbID === item.imdbID
                    return el.imdbID === item.id
                })

                el.inFav = findFav !== undefined ? true : false
                arr.push(el)
                
                // if (findFav !== undefined){
                //     el.inFav = tru
                // }else{
                //     el.inFav = false
                // }

            })
            console.log(arr);
            return arr
        },
        goToPage(pageNum) {
            this.page = pageNum
            this.searchMovies()
        }
    }
}

Vue.createApp(App).mount('#app')