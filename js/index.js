TweenMax.from(".header", 0.8, {opacity: 0, x: 30, delay: 0.6});
TweenMax.from(".preheader", 1, {opacity: 0, x: -30, delay: 0.2});
TweenMax.from(".paragraph", 1, {opacity: 0, delay: 1, y: 20});

$(document).ready(function(){
    $(".show").click(function(){
        $(".hide").show(3000);
        $(".show").hide(3000);
    });
});

// Scroll to the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}