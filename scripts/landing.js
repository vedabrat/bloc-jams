var revealPoint = function() {
    $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
}
var points = document.getElementsByClassName('point');
 var animatePoints = function() {
     $.each($('.point'), revealPoint);
};

$(window).load(function() {
     if ($(window).height() > 950) {
         animatePoints();
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
     $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
        }
    });
    animatePoints(points);
};