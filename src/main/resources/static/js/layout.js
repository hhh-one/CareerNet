


function gnbEvent(){
    $('.depth1').mouseenter(function(){
        $(this).css('color', "yellow");
    }).mouseleave(function(){
        $(this).css('color', "white");
    })
    
    $('.submenu-list').children().children().mouseenter(function(){
        $(this).css('color', "red");
    }).mouseleave(function(){
        $(this).css('color', "black");
    })
    
var header = $('#headerR'),
gnbWrap = $('.gnb'),
oneDept = gnbWrap.find('> ul > li > a, .depth1')

oneDept.focus(function(){
    var _this = $(this),
    _thisLi = _this.parents('li');
header.addClass('open').stop().animate({
    'height' : '345px' 
}, 400);

gnbWrap.stop().animate({
    'height' : '245px' 
}, 400);

_thisLi.addClass('on').siblings().removeClass('on');
}).hover(function() {
var _this = $(this),
    _thisLi = _this.parents('li');
header.addClass('open').stop().animate({
    'height' : '345px' 
}, 400);
$(this).next().removeClass('submenu').addClass('submenuHide');
gnbWrap.stop().animate({
    'height' : '245px' 
}, 400);
// dim.addClass('on');
_thisLi.addClass('on').siblings().removeClass('on');
});

header.mouseleave(function() {
header.stop().animate({
    'height' : '132px' 
}, 500, function(){
    // dim.removeClass('on');
    header.removeClass('open');
    gnbWrap.find('> ul > li').removeClass('on');
});
gnbWrap.stop().animate({
    'height' : '50px' 
}, 400);

$('.depth1').next().removeClass('submenuHide').addClass('submenu');
});

}

$(document).ready(function(){
gnbEvent();
}); 