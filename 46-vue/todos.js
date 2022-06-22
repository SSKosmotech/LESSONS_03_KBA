// Компоненти:
// const MyItemFromList = {
const TodoItem = {
    name: 'TodoItem',
    
    // props: ['text'],
    props: ['item', "index"],

    methods: {
        markDone(ind){
            this.$parent.markDone(ind)
        }
    },

    template: '#todo_item'
    // template: `
    //     <li class="d-flex justify-content-between align-items-center mb-2">{{ text }}</li>
    // `
}


const App = {
    data() {
        return {
            todoList: [
                {
                    text: 'Buy a milk',
                    isDone: true
                },
                {
                    text: 'Learn Vue.JS',
                    isDone: false
                },
                {
                    text: 'Wash a car',
                    isDone: false
                }
            ],
            taskText: ''
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addTodo(){
            if(this.taskText != ''){
                this.todoList.push({
                    text: this.taskText,
                    isDone: false
                });
                this.taskText = ''
            }
            
        },
        markDone(ind){
            this.todoList[ind].isDone = true
        }
    }
}

Vue.createApp(App).mount('#app');
