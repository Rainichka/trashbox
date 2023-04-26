// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// navbar toggle on scroll
$(window).scroll(function(e){
    $el = $('.navbar');
    $el.toggleClass('affix', $(this).scrollTop() > 0); 
}); 