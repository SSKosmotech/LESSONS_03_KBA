// <<==============================TAB========================>>
$(function(){
  
  $(".tab_list a").on('click', function(){
    if(!$(this).hasClass("active")){
      $(".tab_list a.active, .tab_content.active").removeClass("active");
      $(this).addClass("active");
      $(".tab_content[data-id='"+$(this).attr("id")+"']").addClass("active");
      }
    });



})
