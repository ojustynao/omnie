$(function(){
$(window).on("load",function(pager){
  let eventElemArray = [];
  let _count = 0;
  let _countFix = 0;
  $(window).on('load scroll resize',function(){
    eventElemArray = [];
    _count = 0;
    $('[data-nav]').each(function(i,pager){
      eventElemArray.push( $(pager).offset().top );
    });
    for(let _i = 0;_i < eventElemArray.length; _i++){
      if( $(window).scrollTop() + ($(window).height() * 0.5) > eventElemArray[_i] ){
        _count++;
      }
    }
    if(_count !== _countFix){
      _countFix = _count;
      $('.nav__dot li').removeClass('current');
      $('.nav__dot li').eq(_count-1).addClass('current');
    }
  });

  $('.nav__dot li').on('click', function() {
    let speed = 700;
    let href = $(this).attr('data-nav-href');
    let offset = $(this).attr('data-nav-offset')|0;
    let target = $(href == '' ? 'html' : href);
    let position = target.offset().top + offset
    $('body,html').animate({scrollTop:position}, speed);
    return false;
  });
});
});