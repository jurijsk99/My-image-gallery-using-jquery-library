"use strict"
$(document).ready(function () {
$('.small a').click(function(e){
    if($('#big-img-gallery').attr('src')!==$(this).attr('href')){$('#big-img-gallery').hide().attr('src',$(this).attr('href')).fadeIn(1000);}

    e.preventDefault();
});


$('.button').click(function(){
$('.gallery').slideToggle(505);

});
$('.small a img').click(function(){
    $('.small a img').fadeTo(400,1).css({
        'border':'none'
    });
    $(this).fadeTo(400,0.5).css({
        'border':'1px dotted red'
    });
})
});
