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




