jQuery(document).ready(function($) {


	$('.wrapper-dropdown-5').click(function(event) {
   		 $(this).toggleClass('active');
     });

	$('.close-button').click(function(event) {
   		 $('.details-container').removeClass('show');
     });



	var index = 1;
    var testNum =1;
    var slideLen = $('.slide-container').length;
    

    $('.slide-thumb').click(function(event) {
        var slideNum = $(this).attr('data-slide');
        var el = $('.slide-container[data-slide='+ slideNum +']');
        index = slideNum;

        $(el).addClass('show-slide');
        $(el).siblings('.slide-container').removeClass('show-slide');
        $(this).siblings('.slide-thumb').removeClass('show-slide-thumb');
        $(this).addClass('show-slide-thumb');
    });

       function autoSlide(){
        timer = setInterval(function(){ 
   
            if(index >= slideLen){
                index = 0;
            }
            $('.slide-thumb[data-slide='+ ++index +']').click();
            testNum++;
 
        }, 6000);
    }
    autoSlide();

    $('.option').click(function(event) {
       var select =  $(this).parents('.wrapper-dropdown-5');
       var tabindex =  $(select).attr('tabindex');
       var link = $(this).find('a');
       var val = $(link).html();
       $(select).find('.placeholder').html(val);

         $('.wrapper-dropdown-5[tabindex=2]').removeClass('inactive');
       
    });











});
function showDetails () {
		 $('.details-container').addClass('show');
		// body...
	}
