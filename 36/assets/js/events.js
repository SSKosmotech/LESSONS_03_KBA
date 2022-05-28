const btn = document.getElementById('btn');

btn.onclick = btnHandler;
// btn.onclick = btnHandler2;

const list = document.querySelector('.list');


function btnHandler(e){
    // alert('Hello');
    // const list = document.querySelector('.list');
    console.log(e);
    e.stopPropagation();
    const newLi = document.createElement('li');
    newLi.onclick = liColorChangeHandler; //Приходиться додавати ще раз функцію
    newLi.innerText = 'Hello World!';
    list.append(newLi);
}

// function btnHandler2(){
//     alert('World');
// }
//////////////////////////////////////


function liColorChangeHandler(){
    console.log('clicked');
}

// const liElements = document.querySelectorAll(".list li");
const liElements = document.getElementsByTagName("li");
console.log(liElements);

[...liElements].forEach(li =>{
    li.onclick = liColorChangeHandler;
})

document.body.addEventListener('contextmenu', function(e){
    // console.log('contex');
    // e.stopPropagation();
    // e.preventDefault();
    // const div = document.createElement('div');
    // div.className = 'my_context';
    // div.style.left = e.clientX + 'px';
    // div.style.top = e.clientY + 'px';
    // document.body.append(div);
})

// const list = document.querySelector('.list');
// const newLi = document.createElement('li');
// // newLi.onclick = liColorChangeHandler; //Приходиться додавати ще раз функцію
// newLi.innerText = 'Hello World!';
// list.append(newLi);


// document.body.addEventListener('click', function(){
//     console.log('click on body');
// })

document.body.addEventListener('click', function(event){
    // console.log(event);
    if(event.target.nodeName === "LI"){ // або можна Localname використовувати (а nodeName - з великих літер)
        // liColor(event);
        liColor(event.target);
        // btnHandler();
        // if(event.target.classList.contains("red")){
        //     event.target.style.color = 'red';
        // }
        // if(event.target.classList.contains("blue")){
        //     event.target.style.color = 'blue';
        // }
    }
    // if(event.target.nodeName === "P"){ // або можна Localname використовувати
    //     btnHandler();
    // }
    // console.log(event);
    // console.log('click on body');
});

list.addEventListener('click', function(){
    console.log('click on list');
});

// function liColor(event){
//     if(event.target.classList.contains("red")){
//         event.target.style.color = 'red';
//     }
//     if(event.target.classList.contains("blue")){
//         event.target.style.color = 'blue';
//     }
// }

function liColor(elem){
    if(elem.classList.contains("red")){
        elem.style.color = 'red';
    }
    if(elem.classList.contains("blue")){
        elem.style.color = 'blue';
    }
}


document.body.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.code==="KeyC" || e.code==="F12" || e.ctrlKey && e.code==="KeyU"){
        e.preventDefault();
        console.warn("Не можна копіювати");
        return false
    }
    console.log(e);
});

// document.body.addEventListener('keyup', function(e){
//     console.log(e);
// });

// document.body.addEventListener('keydown', function(e){
//     blockCopy(e);
//     console.log(e);
// })

// function blockCopy(e){
//     if(e.ctrlKey && e.code==="KeyC" || e.code==="F12" || e.ctrlKey && e.code==="KeyU"){
//         e.preventDefault();
//         console.warn("Не можна копіювати");
//         return false
//     }
// }
