$(document).ready(function(){
    $("#over").each(function(){
      var percentage = parseInt($(this).html());
      if(percentage > 0){
        $(this).animate({'width':''+percentage+'px'}, 63000);
      }else{
        $(this).css({'color':'black', 'background':'none'}, 800);
      }
    })
    $(".bar").each(function(){
      var percentage = parseInt($(this).html());
      if(percentage > 0){
        $(this).animate({'width':''+percentage+'px'}, 60000);
      }else{
        $(this).css({'color':'black', 'background':'none'}, 800);
      }
    })
   
  })