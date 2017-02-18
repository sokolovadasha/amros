/***************************************************************************/
/********       Scroll Top        ********/
/***************************************************************************/
$(document).on('click', '#scrollTop', function () {
 $("body:not(:animated)").animate({ scrollTop: 0 }, 500);
 $("html").animate({ scrollTop: 0 }, 500);
 return false;
});

$(window).scroll(function(){    
    if ($(this).scrollTop()>400 && true ){
        $("#scrollTop").css({"display":"block"});
    } else {
  $("#scrollTop").css({"display":"none"});
    }
});


/***************************************************************************/
/********       Bigpig        ********/
/***************************************************************************/
if($('.bigpic').length){
  $('.bigpic').each(function(){
	$(this).parent().css('-o-transition','all 0s ease 0s');
	$(this).parent().css('-moz-transition','all 0s ease 0s');
	$(this).parent().css('-webkit-transition','all 0s ease 0s');
	$(this).parent().css('transition','all 0s ease 0s');
	$(this).parent().on('click', function(){
    return hs.expand(this);
   })
  })
 }


/***************************************************************************/
/********        Tabs plagin init       ********/
/***************************************************************************/
$('.tabs').not('.customTabUsed').customTabs();


/***************************************************************************/
/*******      Images to backgound       ********/
/***************************************************************************/
if(document.getElementById('js-service_menu')){
 $('#js-service_menu .parent-menu > li .image ').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  // Дополнительно в стилях для .image:
  // background-position: center center;
  // background-size: cover;
  $(this).find('img').css('opacity', '0' );
 });
};

if($('.bestsellers-content')){
 $('.bestsellers-content .image ').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  $(this).css('background-position', 'left top' );
  $(this).css('background-size', 'cover' );
  $(this).find('img').css('opacity', '0' );
 });
};

if(document.getElementById('js-article-content')){
 $('#js-article-content ul li .image a').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  $(this).find('img').css('opacity', '0' );

 });
};

if(document.getElementById('js-album')){
 $('#js-album ul li .image ').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  $(this).find('img').css('opacity', '0' );

 });
};

if(document.getElementById('js-publictions')){
 $('#js-publictions .image a').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  $(this).find('img').css('opacity', '0' );

 });
};


 $('.inner-content .reviews .reviews-item .reviews-content .post-image ul li a').each(function(){
  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
  $(this).find('img').css('opacity', '0' );

 });

 if($('.reviews-content .tab_name')){
    $('.reviews-content .tab_name').each(function(index){
        $('.reviews-content .tab_name').eq(index).find('img').css('display', 'none' );
        var new_div = document.createElement('div');
        new_div.className = "image";
        //console.log(index);
        $('.reviews-content .tab_name').eq(index).append(new_div,null);

        $('.reviews-content .tab_name').eq(index).find('.image').css('background-image', 'url(' +  $('.reviews-content .tab_name').eq(index).find('img').attr('src') + ')' );
 });
};


/***************************************************************************/
/*******      Slider      ********/
/***************************************************************************/
/* Header slider */
$('.header__slider .owl-carousel').owlCarousel({
	animateOut: 'fadeOut',
	animateIn: 'fadepIn',
	items:1,
	nav: true,
	loop: true,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	onInitialize : function(event) {
		$('.header__slider .item img').each(function(){
			$(this).parent().css({
				'background':'url(' + $(this).attr('src') +  ') center center no-repeat',
				'background-size':'cover'
			});
			$(this).css({'opacity':'0'});
		});
	}
});


/* Product slider */
// if( $('.product_list .owl-carousel').size() > 0 ){
// 	$('.product_list .owl-carousel').owlCarousel({
// 	    margin:20,
// 	    loop:true,
// 	    autoWidth:true,
// 	    dots: false,
// 	    nav : true
// 	});
// }

/***************************************************************************/
/*********************       OwlCarousel Sync       *************************/
/***************************************************************************/
if( $('#sync1 .item').length > 1 ){
/*  Product page */
var sync1 = $('#sync1'),  // Main photo
    sync2 = $('#sync2');  // Thumbs

    // Sync nav
    sync1.on('click', '.owl-next', function () {
        sync2.trigger('next.owl.carousel')
    });
    sync1.on('click', '.owl-prev', function () {
        sync2.trigger('prev.owl.carousel')
    });

    sync2.on('click', '.owl-next', function () {
        sync1.trigger('next.owl.carousel')
    });
    sync2.on('click', '.owl-prev', function () {
        sync1.trigger('prev.owl.carousel')
    });

    // Start Carousel
    sync1.owlCarousel({
        center : true,
        loop : true,
        items : 1,
        margin:0,
        nav : true,
        dot: false,
    });

    sync2.owlCarousel({
        
        loop : true,
        items : 6,
        margin:4,
        nav : true,
        slideBy : 1,
        autoWidth:true
    }).on('click', '.owl-item', function() {
	    var i = $(this).find('.item').attr('data-sync'); 
	    //- 1;
	    sync2.trigger('to.owl.carousel', [i, 500]);
	    sync1.trigger('to.owl.carousel', [i, 500]);
	    //console.log(i);
	});
} else {
	$('#sync1.owl-carousel').show();
}
/***************************************************************************/
/*******      Resize map     ********/
/***************************************************************************/
resize();
window.onresize = resize;

function resize(){
 windowWidth = window.innerWidth;
 $('footer .map iframe').css({'width': $('footer .map').width() + ((windowWidth - 960)/2) });
}


/***************************************************************************/
/*******       Full Width       *******/
/***************************************************************************/
// contacts page - map

function fullWidthElem(width){
 windowWidth = width; // ширина окна
 containerWidth = $('.inner-content').width();  // ширина контента

 $('.contacts .map').css('marginLeft', (windowWidth-containerWidth)*-1/2);
 $('.contacts .map').css('marginRight', (windowWidth-containerWidth)*-1/2);
 $('.contacts .map').css('width', windowWidth);


}

/***************************************************************************/
/******      Window Resize       ********/
/***************************************************************************/

var lastResolution = 0;
resize();
window.onresize = resize;

function resize(){
 windowWidth = window.innerWidth;

 fullWidthElem(windowWidth);

 lastResolution = windowWidth;
}



/***************************************************************************/
/*******      Select filter     ********/
/***************************************************************************/
$('.form_pole_select').each( function(){
	var curr_num = $(this).attr('data-id');
	//console.log(curr_num);
	$('.form_pole_select[data-id="'+curr_num+'"] .current_value img').attr('src', $('.form_pole_select[data-id="'+curr_num+'"] .list_value .item_wrap input:checked').next().find('img').attr('src'));
	$('.form_pole_select[data-id="'+curr_num+'"] .current_value .text').text( $('.form_pole_select[data-id="'+curr_num+'"] .list_value .item_wrap input:checked').next().find('.text').html() );
});

/* обрабатываем выбор значения */
$('.form_pole_select').each( function(){
	var curr_num = $(this).attr('data-id');
	$('.form_pole_select[data-id="'+curr_num+'"] input[type="radio"]').on('change', function(){
		$('.form_pole_select[data-id="'+curr_num+'"] .current_value img').attr('src', $(this).next().find('img').attr('src'));
		$('.form_pole_select[data-id="'+curr_num+'"] .current_value .text').text( $(this).next().find('.text').text() );
		$('.list_value').removeClass('active');

	});
});

/* прячем всплывашку после клика  */
$('body').on('click', '.form_pole_select input[type="radio"]:checked', function(){
	$('.list_value').removeClass('active'); 
});


$(document).click(function(event) {
	
	//Если родитель элемента по которому кликнули - current_value ,
	if($(event.target).parents('.current_value').length>0 ){
		//console.log("current_value");
		//и на данный момент нет раскрытых селекторов, 
		if(!$('.list_value').hasClass('active')){
			//то раскрываем селектор для текущего элемента
			$(event.target).parents('.form_pole_select').find('.list_value').addClass('active');
		}
		//и на данный момент уже есть раскрытые селекторы, то
		else{
			//если раскрыт список селекторов текущего элемента,
			if($(event.target).parents('.form_pole_select').find('.list_value').hasClass('active')){
				// то скрываем список текущего элемента
				$(event.target).parents('.form_pole_select').find('.list_value').removeClass('active');
			}
			//если раскрыт список не текущего элемента
			else{
				//скрывыем списки для всех элементов
				$('.list_value').removeClass('active'); 
				//раскрываем список селекторов текущего элемента.
				$(event.target).parents('.form_pole_select').find('.list_value').addClass('active');
				
			}
			
		};
		
	}
	//Если кликнули по любому элементу кроме того, чей родитель - current_value,
	else{
		//то скрываем списки селекторов.
		$('.list_value').removeClass('active'); 
	};

});

/***************************************************************************/
/*******      Выбор диапазона цен     ********/
/***************************************************************************/

function price_range(){
    //Возможные значения цены
    var min_absolut = $('.price-range').attr('data-min-price');
    var max_absolut = $('.price-range').attr('data-max-price');

    var min_current = $( ".min-amount" ).val();
    var max_current = $( ".max-amount" ).val(); 

    //Проверка соответсвия допустимым значениям
    if (min_current < min_absolut){
        min_current = min_absolut;
        $(".min-amount").val(min_current);
        //console.log(min_current);
    };

    if (min_current > max_current){
        min_current = max_current;
        $(".min-amount").val(min_current);
        //console.log(min_current);
    };

    if (max_current > max_absolut){
        max_current = max_absolut;
        $(".max-amount").val(max_current);
    };

    if (max_current < min_current){
        max_current = min_current;
        $(".max-amount").val(max_current);
    };


	//console.log('data-min-price ' + $('.price-range').attr('data-min-price'));
	//console.log('data-max-price ' + $('.price-range').attr('data-max-price'));
    $( "#slider-range" ).slider({
      range: true,
      min: parseInt(min_absolut),
      max: parseInt(max_absolut),
      values: [min_current, max_current],
      slide: function( event, ui ) {
        $( ".min-amount" ).val(ui.values[ 0 ]);
        $( ".max-amount" ).val(ui.values[ 1 ]);
      }
    });
  } ;

$(function() {price_range()});


$(".price-range input[type='text']").change(function() { 
    price_range();
});

/***************************************************************************/
/********       Hide and show by click        ********/
/***************************************************************************/
// Hide details-item
$(document).on('click', '#hide_details-item',function () {
	$(".hide_and_show_parametr").each(function(){
  $(this).css({"display":"none"});});
	$('.inner-content .order-form').css({"display":"block"});
	return false;
});

// Show details-item
$(document).on('click', '#show_details-item',function () {
	$(".hide_and_show_parametr").each(function(){
  		$(this).css({"display":"block"});
  	});
	$('.inner-content .order-form').css({"display":"none"});
	return false;
});

// Show/hide search_results
/*$(document).on('click', '.search_results .show_all',function () {

    if($(this).parents('.item').find('.list a.hidden').size()>0){

        $(this).parents('.item').find('.list a').each(function(){
            $(this).removeClass('hidden');
            // console.log(this);
        });
        $(this).text('Скрыть');

        // console.log('show');
    }
    else{
       $(this).parents('.item').find('.list a').each(function(index){
            if (index>=3) {
            $(this).addClass('hidden');
            // console.log(this);
            };
        });
        $(this).text('Показать все');
       // console.log('hide');
    }
   return false;
});*/

/***************************************************************************/
/*********************       Upload image       ****************************/
/***************************************************************************/
if('.upload-image-item'){
    $('.upload-item_container').each(function(index){
        $(this).addClass('hidden');
    });
};

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $(input).parents('.upload-item_container').find('.preview').attr('src', e.target.result);
            $(input).parents('.upload-item_container').addClass('uploaded');
            $(input).parents('.upload-item_container').removeClass('empty');
        }

        reader.readAsDataURL(input.files[0]);
        add_upload_item($(input)); 
    }
}
// Открытие нового элемента для добавления изображения
function add_upload_item(input){
    // Во всем массиве элементов upload-item_container находится первый элемент с классом hidden
    //console.log(input);
    $(input).parents('.upload-image-item').find('.upload-item_container').each(function(index){
         //console.log("Цикл");  
        if($(input).parents('.upload-image-item').find('.upload-item_container')[index].classList.contains('hidden')){
            // console.log('contains');
            $(this).removeClass('hidden');
			//$(this).css('display', 'inline-block');
            $(this).addClass('empty');
            $(this).parents('.upload-image-item').append(this,null)
            return false;
        }
    });
}


$(".upload-item input[type='file']").change(function () {
    readURL(this);
    //console.log(this);    
});

// Открытие первого upload-item_container и удаление всех загруженных изображений
$(document).on('click', '.form-item.block-item.upload-image-item .button',function () {
    var button = $(this);
    var current_form_item = $(this).parents('.upload-image-item');
    console.log(current_form_item);
    // Проверяем наличие пустых или загруженных изображений
    if (current_form_item.find('.upload-item_container.empty').size()>0 || current_form_item.find('.upload-item_container.uploaded').size()>0) {
        // Если есть пустые или загруженные, то проходимся по каждому элементу и  
        current_form_item.find('.upload-item_container').each(function(index){
            //console.log('true');
            // скрываем все элементы,
            console.log("Удаление");
            console.log(this);
            $(this).removeClass('empty');
            $(this).removeClass('uploaded');
            $(this).addClass('hidden');
            // очищаем содиржимое input,
            $(this).find('input[type="file"]').val('').change();
            //  очищаем preview,
            $(this).find('.upload-item_container .preview').attr('src', '');
            // меняем текст кнопки.
            if ($(current_form_item).find('.upload-item_container').hasClass('avatar')){
                button.text('Добавить аватар');
            }
            else{
            button.text('Прикрепить фото');
            }
        });
    }
    // Если нет пустых или загруженных, то
    else{
    // добавляем пустой элемент и
    current_form_item.find('.upload-item_container').eq(0).removeClass('hidden');
    current_form_item.find('.upload-item_container').eq(0).addClass('empty');
    // меняем текст кнопки
     if ($(current_form_item).hasClass('avatar')){
                button.text('Удалить аватар');
            }
            else{
            button.text('Удалить все фото');
            }
    console.log('add');
    }
});

// Удаление загруженных изображений
$("body").on('click', ".close_cross", function(){

    $(this).parents('.upload-item_container').find('input[type="file"]').val('').change();
    $(this).parents('.upload-item_container').find('.preview').attr('src', '');
    $(this).parents('.upload-item_container').removeClass('uploaded');

    var current_upload_item = $(this).parents('.upload-item_container');
    //console.log(current_upload_item);

    if($('.upload-item_container.empty').size()>0){
        $(this).parents('.upload-item_container').addClass('hidden');
        //console.log( $(this).parents('.upload-item_container'));
    }
    else{
        $(this).parents('.upload-item_container').addClass('empty');
    }
    //console.log(this);
});


// Изменение цвета блока при наведении на кнопку удаления
$(".close_cross").hover(function(){

    $(this).parents('.upload-item').css("background-color", "rgba(85,85,85,0.3)");
    }, function(){
    $(this).parents('.upload-item').css("background-color", "rgba(255,255,255,0)");
});



/***************************************************************************/
/***************       подчёркивание в верхнем меню        *****************/
/***************************************************************************/
function hover_slide( el ){
	if(typeof el != 'undefined'){
		console.log($(window).width());
		console.log(el.width());
		console.log(el.offset().left);
		console.log($('.menu_navigation').width());
		$('#catalog_menu_hover').css({'left': el.offset().left - (($(window).width()-(955 + parseInt($('.menu_navigation li a').css('padding-left').replace("px", "")) + parseInt($('.menu_navigation li a').css('padding-right').replace("px", ""))))/2)});
		//$('#catalog_menu_hover').css({'left': el.offset().left - ($(window).width()-991)/2});
		$('#catalog_menu_hover').css({'width': el.width()});
		$('#catalog_menu_hover').css({'opacity': '1'});
			
	}
} 
/* добавляем подчеркивание при наведение */
$('.menu_navigation>ul>li>a').hover(function() { hover_slide($(this)); });
/* добавляем подчеркивание активного пункта при загрузке странцы */
$(window).load(function(){
	if ($('.menu_navigation>ul>li.active a').length > 0) {  hover_slide($('.menu_navigation>ul>li.active a')); } 

});


/***************************************************************************/
/************************       преимущества        ************************/
/***************************************************************************/
var $animation_elements = $('.content .advantages-container .advantages-content ul li');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
  		$element.addClass('fadeInUp');
  		$element.addClass('animated');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

/***************************************************************************/
/***********************       Схема работы        *************************/
/***************************************************************************/

$(window).scroll(function(){  
	if( $('.scheme-work-content').length > 0){
		if ($(this).scrollTop()>($('.scheme-work-content ul').offset().top - $(window).height() ) && true ){
			
			delay = 0.1;
			
			$('.scheme-work-content .icon-container').each( function(){
				//console.log(delay);
				
				$(this).css('opacity', '1');
				$(this).css('animationDelay', delay+'s');
				delay += 0.1;

			});
			$('.scheme-work-content .icon-container').each( function(){
				$(this).addClass('fadeInUp');
				$(this).addClass('animated');
				
			});
			
			setTimeout(function(){
			  $('.scheme-work-content ul li').addClass('show');
			}, 1000 );
		} 
	}
});

/***************************************************************************/
/******************       Всплывашка Напишите нам        *******************/
/***************************************************************************/
$('#js-feedback_form_right_switcher').on('click', function(){
	$('.feedback_form_right .form_container').addClass('active');
});


//Клик по пустой ссылке в slider
$('.feedback_form_right').on('click', function(){
	$('.feedback_form_right .form_container').addClass('active');
});

$('body').on('click', '#js-feedback_form_right_close', function(){
	$('.feedback_form_right .form_container').removeClass('active');
});
