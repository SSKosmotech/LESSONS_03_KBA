"use strict";$(function(){$(".slick_slider").slick({autoplaySpeed:3e3,dots:!0}),$(".articles_slick").slick({slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:440,settings:{slidesToShow:1,slidesToScroll:1}}]});var i=$("#articles_light").lightSlider({slideMargin:40,slidesToShow:3,loop:!0,responsive:[{breakpoint:992,settings:{item:2,slideMargin:40}},{breakpoint:480,settings:{item:1}}]});$("#articles_prev").on("click",function(){i.goToPrevSlide()}),$("#articles_next").on("click",function(){i.goToNextSlide()}),$(".tab_list a").on("click",function(){$(this).hasClass("active")||($(".tab_list a.active").removeClass("active"),$(this).addClass("active"),$(".").removeClass("active"))}),-1!==window.location.href.indexOf("#reviews")&&$("#reviews, .tab_content[data-id='reviews']")}),$(".tab_list a").on("click",function(){$(this).hasClass("active")||($(".tab_list a.active, .tab_content.active").removeClass("active"),$(this).addClass("active"),$(".tab_content[data-id='"+$(this).attr("id")+"']").addClass("active"))});