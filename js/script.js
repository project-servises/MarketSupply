$(document).ready(function(){
	
	$('.menu-header__burger').on('click', function () {
		$(this).toggleClass('active');
		$('.menu-header__list').toggleClass('active');
		$('.top-header__cart').toggleClass('active');
	});
	

	let width = $('body').innerWidth();
	if(width < 767){
		$('.menu-header__remove').remove();
	}
	if(width == 768){
		$(".footer-main__item h2 div").addClass("arrow-bottom");
		$(".footer-main__item h2 div").css({'margin-left':10})
		$("#hide1").fadeOut(0);
		$("#hide2").fadeOut(0);
		$("#hide3").fadeOut(0);
		$(".footer-main__item h2 div").on('click', function(){
			let hide = $(this).attr('data-id')
			if(hide == "hide1"){
				$("#hide1").fadeToggle(0);
			}
			else if(hide == "hide2"){
				$("#hide2").fadeToggle(0);
			}else{
				$("#hide3").fadeToggle(0);
			}
		})
	}

});




// const requestURL = 'http://localhost:3000';

// const xhr = new XMLHttpRequest()

// xhr.open('GET', requestURL);

// xhr.responseType = 'json'

// xhr.onload = () => {
// 	console.log(xhr.response)
// }

// xhr.send()


