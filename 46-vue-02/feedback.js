const App = {
    data() {
        return {
            API_BOT_ID: '5339742012:AAFVS4C4_rDpQZ_1UEzICsjDJxSltd5Jii4',
            CHAT_ID: '-1001780131978',
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            errors: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            },
            answer: {
                success: null,
                text: ''
            }
        }
    },
    methods: {
        checkAndSend(){
            let valid = true

            if(this.name === ''){
                this.errors.name = 'Enter your name'
                valid = false
            }
            // else{
            //     this.errors.name = ''
            // }
            if(this.name.length === 1){
                this.errors.name = 'Minimal name length is two chars'
                valid = false
            }

            if(this.email === ''){
                this.errors.email = 'Enter your email adress'
                valid = false
            }else{
                if(this.isValidEmail(this.email) === false){
                    this.errors.email = 'Enter valid email adress'
                    valid = false
                }
            }

            if(this.phone === ''){
                this.errors.phone = 'Enter phone number'
                valid = false
            }

            if(this.subject === ''){
                this.errors.subject = 'Enter subject text'
                valid = false
            }

            if(this.message === ''){
                this.errors.message = 'Enter your message'
                valid = false
            }

            if(valid){
                //TODO: send data
                const message_text = "<i>Feedback data</i>"+
                "%0a<b>Name: </b>"+this.name+
                "%0a<b>Email: </b>"+this.email+
                "%0a<b>Phone number: </b>"+this.phone+
                "%0a<b>Subject: </b>"+this.subject+
                "%0a<b>Message: </b>"+this.message
                fetch(`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`)
                .then(resp=>{
                    return resp.json()
                })
                .then(resp=>{
                    if(resp.ok){
                        this.answer.success = true
                        this.answer.text = 'Messege succesfully send'
                        this.name = this.email = this.phone = this.subject = this.message = ''
                        // this.email = ''
                    }else{
                        this.answer.success = false
                        this.answer.text = resp.description
                    }
                    setTimeout(()=>{
                        this.answer.success = null
                        this.answer.text = ''
                    }, 3000)
                })
                .catch(()=>{
                    this.answer.success = false
                    this.answer.text = 'AJAX error. Please try again later'
                })
            }
        },
        resetError(fld){
            this.errors[fld] = '';
        },
        isValidEmail(email){
            return Boolean(email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              ));
        }
    }
}

Vue.createApp(App).mount('#app')