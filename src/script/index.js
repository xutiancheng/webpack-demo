require('../style/reset.scss');
require('../style/swiper-3.4.2.min.css');
require('../style/main.scss');
require('../script/lib-flexible.min');
import $ from 'jquery'

// var attachFastClick = require('fastclick');  
// attachFastClick(document.body);  

 var mySwiper = new Swiper ('.swiper-container', {
    loop: true,    
    // 如果需要分页器
    pagination: '.swiper-pagination',
  }); 

$(window).resize(function(){
 mySwiper.destroy(false)
 setTimeout(function(){
 	 mySwiper = new Swiper ('.swiper-container', {
    loop: true,    
    // 如果需要分页器
    pagination: '.swiper-pagination',
  }); 
 },300);

});