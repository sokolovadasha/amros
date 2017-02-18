/***************************************************************************/
/*******      Images to backgound       ********/
/***************************************************************************/
if($('main .menu')){
 $('main .menu .image ').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  $(this).css('background-position', 'left top' );
  $(this).css('background-repeat', 'no-repeat' );
  $(this).css('background-size', 'cover' );
  $(this).find('img').css('opacity', '0' );
 });
};



/***************************************************************************/
/*******      Resize map     ********/
/***************************************************************************/
resize();
window.onresize = resize;

function resize(){
 windowWidth = window.innerWidth;
 $('footer .map iframe').css({'width': $('footer .map').width() + ((windowWidth - 960)/2) });
}