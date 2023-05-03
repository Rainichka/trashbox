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

console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#container", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#container",
    markers: {
      startColor: "yellow",
      endColor: "#42a6e0",
      fontSize: "14px"
    },
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});
