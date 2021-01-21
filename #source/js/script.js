
$('.wrapper').addClass('loaded');


let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		body.classList.toggle("lock");
	});
}


function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

// weird stuff... was having problems with <a href="" class="brands__item item"> - thought I fixed it by changing ibg code -- but then tried prev one and it works... 
// the problem that I had with with <a href="" class="brands__item item">: the link with the transparent greenish background wasn't shown properly on hover - it was only starting to work properly for some reason only if we hover from the height of the image in the second column! And above that it wasn't working! solved it with this:

// Other versions of ibg that I tried (all working):

// 1. Zheka's:
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// }
// ibg();


// 2. From the comments at https://www.patreon.com/posts/materialy-32467238:
// Oleg
// Люди, отзовитесь, пожалуйста у кого ibg работает, как настроили, может какие то подводные камни есть? в js не очень понимаю. И можно ли этот скрипт применять в теге picture? в slick slider?

// Mike Chekov
// я написал НА ЧИСТОМ JS (ES6), если кому нужен Ibg, чтобы Jquery можно было не подключать. Работает просто - ищет все элементы с классом ibg. В них первым тегом, на первом уровне вложенности должен лежать тег img с src (src первым атрибутом должен идти). Далее он подключает к элементу с классом ibg фоном картинку нашу. Ну и должен быть .ibg img{display: none } в стилях чтобы скрыть тег img.
// (function(){
//     let ibgs = document.getElementsByClassName('ibg');
//     if(ibgs.length){
//         for (let item of ibgs) {
//             let imgSrc = item.children[0].attributes[0].value;
//             item.style = `background-image: url("${imgSrc}");`;
//         }
//     }
// }());
// ibg();

// Oleg
// Я в итоге пользуюсь object-fit, всё прекрасно работает -- so mb if using ibg will be causing errors - мб реально можно просто использовать везде object-fit - тк IE с каждыйм годом тановится все more and more irrelevant! And just object-fit everywhere might be enough!

