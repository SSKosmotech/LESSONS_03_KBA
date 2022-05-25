//HTML сторінка - кнопка і текст. Тиснемо кнопку і текст пропадає
// Повторно - текст вертається
//Создать html-страницу, на которой будет кнопка и текст. При нажатии на кнопку, текст должен скрываться.
//При повторном нажатии – текст должен снова отображаться.

const text = 'Lorem ipsum dolor sit amet.'

const div = document.createElement('div');
const p = document.createElement('p');
div.append(p);

// div.style.border = '1px solid #999';
// div.style.padding = '10px 20px';

const button = document.createElement('button');
button.setAttribute('type', 'button');

button.innerText = 'Click to toggle text';

button.onclick = function(){
    // if(div.innerText === ''){
    //     div.innerText = text;
    // }else{
    //     div.innerText = '';
    // }
    p.innerText = p.innerText==='' ? text : '';
}

const wrap = document.querySelector('#text_wrap');

wrap.append(div);
wrap.prepend(button);

// document.querySelector('#text_wrap').append(div);
// document.querySelector('#text_wrap').prepend(button);

const style = {
    body: {
        backgroundColor: 'lightblue'
    },
    div: {
        border: '1px solid #999',
        padding: '10px 20px'
    },
    button: {
        // "border-radius": '4px',
        borderRadius: '4px',                //можна і так
        // "background-color": 'blue',
        backgroundColor: 'blue',            //можна і так
        color: '#fff',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '7px'
    },
    bar: {
        border: '1px solid black',
        margin: '20px auto',
        height: '40px',
        width: '80%'
    },
    scale: {
        backgroundColor: 'blue',
        width: '90%',
        height: '38px'
    }
};

function appStyle(styles, elem){
    for(let prop in styles){
        elem.style[prop] = styles[prop];
    }
}

appStyle(style.div, div);
appStyle(style.body, document.body);
appStyle(style.button, button);



//Progress bar
// Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.


const bar = document.createElement('div');
const scale = document.createElement('div');
const buttonForScale = document.createElement('button');
buttonForScale.setAttribute('type', 'button');
buttonForScale.innerText = 'Add 5%'


bar.append(scale);

const progress_wrap = document.querySelector('.progress_wrap');
progress_wrap.append(bar);
progress_wrap.append(buttonForScale);

buttonForScale.onclick = function(){
    if(parseInt(scale.style.width) < 100){
        scale.style.width = (parseInt(scale.style.width) + 5) + '%';
    }else{
        buttonForScale.setAttribute('disabled', 'disabled');
        buttonForScale.style.opacity = '0.2';
    }
}


appStyle(style.bar, bar);
appStyle(style.scale, scale);
appStyle(style.button, buttonForScale);









//Создать html-страницу со вкладками. С левой стороны страницы отображается несколько вкладок, по которым можно переключаться. У каждой вкладки есть свое содержимое, но в один момент времени отображается содержимое только активной вкладки.
