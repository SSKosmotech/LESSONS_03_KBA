// const btn = document.getElementById('btn');

// btn.onclick = btnHandler;
// // btn.onclick = btnHandler2;

// const list = document.querySelector('.list');


// function btnHandler(e){
//     // alert('Hello');
//     // const list = document.querySelector('.list');
//     console.log(e);
//     e.stopPropagation();
//     const newLi = document.createElement('li');
//     newLi.onclick = liColorChangeHandler; //Приходиться додавати ще раз функцію
//     newLi.innerText = 'Hello World!';
//     list.append(newLi);
// }

// // function btnHandler2(){
// //     alert('World');
// // }
// //////////////////////////////////////


// function liColorChangeHandler(){
//     console.log('clicked');
// }

// // const liElements = document.querySelectorAll(".list li");
// const liElements = document.getElementsByTagName("li");
// console.log(liElements);

// [...liElements].forEach(li =>{
//     li.onclick = liColorChangeHandler;
// })

// document.body.addEventListener('contextmenu', function(e){
//     console.log('contex');
//     e.stopPropagation();
//     e.preventDefault();
//     const div = document.createElement('div');
//     div.className = 'my_context';
//     div.style.left = e.clientX + 'px';
//     div.style.top = e.clientY + 'px';
//     document.body.append(div);
// })

// // const list = document.querySelector('.list');
// // const newLi = document.createElement('li');
// // // newLi.onclick = liColorChangeHandler; //Приходиться додавати ще раз функцію
// // newLi.innerText = 'Hello World!';
// // list.append(newLi);


// // document.body.addEventListener('click', function(){
// //     console.log('click on body');
// // })

// document.body.addEventListener('click', function(event){
//     // console.log(event);
//     if(event.target.nodeName === "LI"){ // або можна Localname використовувати (а nodeName - з великих літер)
//         // liColor(event);
//         liColor(event.target);
//         // btnHandler();
//         // if(event.target.classList.contains("red")){
//         //     event.target.style.color = 'red';
//         // }
//         // if(event.target.classList.contains("blue")){
//         //     event.target.style.color = 'blue';
//         // }
//     }
//     // if(event.target.nodeName === "P"){ // або можна Localname використовувати
//     //     btnHandler();
//     // }
//     // console.log(event);
//     // console.log('click on body');
// });

// list.addEventListener('click', function(){
//     console.log('click on list');
// });

// // function liColor(event){
// //     if(event.target.classList.contains("red")){
// //         event.target.style.color = 'red';
// //     }
// //     if(event.target.classList.contains("blue")){
// //         event.target.style.color = 'blue';
// //     }
// // }

// function liColor(elem){
//     if(elem.classList.contains("red")){
//         elem.style.color = 'red';
//     }
//     if(elem.classList.contains("blue")){
//         elem.style.color = 'blue';
//     }
// }


// document.body.addEventListener('keydown', function(e){
//     if(e.ctrlKey && e.code==="KeyC" || e.code==="F12" || e.ctrlKey && e.code==="KeyU"){
//         e.preventDefault();
//         console.warn("Не можна копіювати");
//         return false
//     }
//     console.log(e);
// });

// // document.body.addEventListener('keyup', function(e){
// //     console.log(e);
// // });

// // document.body.addEventListener('keydown', function(e){
// //     blockCopy(e);
// //     console.log(e);
// // })

// // function blockCopy(e){
// //     if(e.ctrlKey && e.code==="KeyC" || e.code==="F12" || e.ctrlKey && e.code==="KeyU"){
// //         e.preventDefault();
// //         console.warn("Не можна копіювати");
// //         return false
// //     }
// // }

// <<===============================================================>>

// let playList = [

//     {
    
//      author: "LED ZEPPELIN",
    
//      song:"STAIRWAY TO HEAVEN"
    
//     },
    
//     {
    
//      author: "QUEEN",
    
//      song:"BOHEMIAN RHAPSODY"
    
//     },
    
//     {
    
//      author: "LYNYRD SKYNYRD",
    
//      song:"FREE BIRD"
    
//     },
    
//     {
    
//      author: "DEEP PURPLE",
    
//      song:"SMOKE ON THE WATER"
    
//     },
    
//     {
    
//      author: "JIMI HENDRIX",
    
//      song:"ALL ALONG THE WATCHTOWER"
    
//     },
    
//     {
    
//      author: "AC/DC",
    
//      song:"BACK IN BLACK"
    
//     },
    
//     {
    
//      author: "QUEEN",
    
//      song:"WE WILL ROCK YOU"
    
//     },
    
//     {
    
//      author: "METALLICA",
    
//      song:"ENTER SANDMAN"
    
//     }
    
//     ];

// const ol = document.createElement('ol');
// const li = document.createElement('li');
// const b = document.createElement('b');
// const em = document.createElement('em');

// li.append(b);
// li.append(em);

// console.log(li);

// playList.forEach(item=>{
//     const liClone = li.cloneNode(true);
//     liClone.children[0].innerText = item.author+": ";
//     liClone.children[1].innerText = item.song;
//     ol.append(liClone);
//     // console.log(liClone);

//     // list += `<li><b><em></em></b><li>`    
// });

// document.body.prepend(ol);


// document.body.addEventListener('click', function(e){
//     console.log(e);
// })


// <<============================JQuery===================================>>

// $(function(){
//     const val = $("ol").attr("data-foo", "hello");
//     const text = $("ol li:first-child").text('Hello');
//     // const text = $("ol li:first-child").html('<b>Hello</b>');
//     // $("ol li").eq(0);
//     // console.log(val);
    
//     // const text = $("ol li:first-child").text();
//     // console.log(text);
    
//     $("#wrap").find('span').css('color', 'red');
    
//     // $("ol li").click(function(){
//         //     $(this).css('color', 'blue')
//         // })
        
//         // $(document).ready(function)(){  // Застарілий код ініціалізації jquery
//         // }
        
//         $("ol li").on('click', function(){
//             $(this).css('color', 'blue')
//         })
        
//         // $(document).on('click', 'ol li', function(){
            
//             // });
            
//             $("#sq")
//             .css('color', 'blue')
//             .css('border', '2px solid green');
            
//             $("#sq").css({
//                 'color': 'blue',
//                 'border': '2px solid green',
//             marginTop: 20,
//             opacity: .5
//         })
        
        
//         $("#sq").on('click', function() {
//             $(this).animate({left:600, top:600}, 1000)
//         });
        
        
        
//     });
    
    
    // <<============================JQuery===================================>>
    
    
    // <<============================Slick Slider===================================>>
    
    
    $(function(){
        $('.slick_slider').slick({
            // autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            // fade: true
        })
          
        $('#articles_slider').slick({
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 440,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        })
        
      const articlesSlider = $('#articles_light').lightSlider({
            slideMargin: 40,
            slidesToShow: 3,
            loop: true,
            controls: false,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                      }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
        })

        
        $("#articles_prev").on('click', function(){
            articlesSlider.goToPrevSlide();
        })
      
        $("#articles_next").on('click', function(){
            articlesSlider.goToNextSlide();
        })
        
    });

