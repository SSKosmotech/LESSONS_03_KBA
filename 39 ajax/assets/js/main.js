// //<<============XMLHttpRequest js native==============>>
// const xhr = new XMLHttpRequest();
// xhr.overrideMimeType('application/json');
// xhr.open('get', 'assets/data/cart.json');
// xhr.send();

// // console.log(xhr);
// xhr.onreadystatechange = function(){
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             console.log(xhr.response);
//             const response = JSON.parse(xhr.response);
//             viewCart(response);
//         }else{
//             alert(xhr.statusText) //top-panel "Error"
//         }
//     }
// }


//<<=====================fetch js native=================>>

// fetch('assets/data/cart.json')
//     // .then(resp=>{
//     //     // console.log(resp);
//     //     // if(resp.status===200){
//     //         return resp.json();
//     //     // }else{
//     //     //     alert(resp.statusText);
//     //     //     return false
//     //     // }
//     // })
//     .then(resp=>{                   // теж саме що вище, тільки короче
//         return resp.json();
//     })
//     .then(resp=>{
//         console.log(resp);
//         viewCart(resp);
//     })
//     // .catch(err=>{
//     //     console.log(err);
//     //     return false;
//     // });

// try {
//     fetch('assets/data/cart.json')
//     .then(resp=>{                   
//         return resp.json();
//     })
//     .then(resp=>{
//         console.log(resp);
//         viewCart(resp);
//     })
// }catch(err){
//     alert(err);
// }


// <<=====================axios library=================>>
// axios('assets/data/cart.json')
//     .then(resp=>{
//         console.log(resp);
//         viewCart(resp.data)
//     })
//     .catch(err=>{
//         console.log(err);
//         alert(err.message);
//     })

// <<=====================Jquery library=================>>
// $.ajax({
//     url: 'assets/data/cart.json',
//     type: 'get',
//     dataType: 'json',
//     success: function(resp){
//         console.log(resp);
//         viewCart(resp);
//     },
//     error: function(err){
//         console.log(err);
//         alert(err.statusText)
//     }
// });

// // те що зверху, тільки короче
// $.ajax('assets/data/cart.json')
//     .done(function(resp){
//         console.log(resp);
//         viewCart(resp);
//     })
//     .fail(function(err){
//         console.log(err);
//         alert(err.statusText)
// });

//те що зверху, тільки ще ще короче
// $.get('assets/data/cart.json', (resp)=>{console.log(resp);});
// $.get('assets/data/cart.json', (resp)=>{viewCart(resp);});





// function viewCart(cart) {
//     let html = '<ul>';
//     cart.forEach(item=>{
//         html += `
//         <li>
//             <b>${item.name}</b> ${item.qty} - ${item.price}
//         </li>
//         `;
//     });
//     html += '</ul>';
//     document.body.insertAdjacentHTML('afterbegin', html);
// }


function loadPage(page){
    $.get('pages/'+page+'.html', (html)=>{
        $("#page_content").html(html);
    })
}

// це теж саме html = resp
// function loadPage(page){
//     $.get('pages/'+page+'.html', (resp)=>{
//         $("#page_content").html(resp);
//     })
// }

loadPage('main');  //main - це назва сторінки (документу) без html (в цьому випадку - це сторінка - main.html)

$(function(){
    $(".nav-masthead a").on('click', function(e){
        e.preventDefault();
        loadPage($(this).attr("href"));
        $(".nav-link active").removeClass("active");
        $(this).addClass("active");
    });
});



//<<=======================Cookie==============================>>

setCookie('my-js-cookie', 'some value here');

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// const CART = [
//     {
//         "name": "Milk",
//         "qty": 2,
//         "price": 12.34,
//         "isBuy": false
//     },
//     {
//         "name": "Water",
//         "qty": 3,
//         "price": 10.34,
//         "isBuy": false
//     },
//     {
//         "name": "Bread",
//         "qty": 1,
//         "price": 17.34,
//         "isBuy": false
//     }
// ]

let CART = [];

//Встановити значення у localStorage
// localStorage.setItem('CART', JSON.stringify(CART))

// (JSON.stringify(CART));  // щоб передати масив, переводимо його в строку шляхом JSON.stringify() - бо в localStorage можна вписувати лише строки
// JSON.parse(JSON.stringify(CART)); //переводить строку в об'єкт

// отримати дані з localStorage
// const CART_FROM_STORAGE = localStorage.getItem('CART');
// const CART_FROM_STORAGE = localStorage.getItem('CART2');

// console.log('CART2:', CART_FROM_STORAGE); // CART2: null (не повинно дорівнювати null)


const CART_FROM_STORAGE = JSON.parse(localStorage.getItem('CART'));
if(CART_FROM_STORAGE !== null){
    CART = CART_FROM_STORAGE;
    // localStorage.removeItem('CART');
}

CART.push({
    name: 'New prod',
    qty: 123,
    price: 12.32,
    isBuy: false
});

localStorage.setItem('CART', JSON.stringify(CART));

// console.log('CART', JSON.stringify(CART));
// const CART_FROM_STORAGE = JSON.parse(localStorage.getItem('CART'));

console.log('CART', CART);