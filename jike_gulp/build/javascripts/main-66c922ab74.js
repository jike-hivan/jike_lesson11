jQuery(document).ready(function(e){new Swiper(".swiper-container",{pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",loop:!0});e('.search_box input[type="text"]').focus(function(){e(".search_hot_tag").hide(),e('.search_box input[type="button"]').addClass("search-btn2")}),e(".search_box input").focusout(function(){e(".search_hot_tag").show(),e('.search_box input[type="button"]').removeClass("search-btn2")}),e(".lesson-list li").hover(function(){e(this).children(".lesson-infor").css("height","175px"),e(this).find("p").css({display:"block",opacity:"1",height:"52px"})},function(){e(this).children(".lesson-infor").css("height","88px"),e(this).find("p").hide(200)}),e(".hot-lesson ul li").hover(function(){var s=e(this).index(),o=e(".hot-lesson-box").children("div");e(".hot-lesson li").removeClass("on"),e(this).addClass("on"),o.hide(),o.eq(s).show()}),e(".lesson-card").hover(function(){var s=e(this).children(".describe");console.log("describe"),console.log(s),e(this).children(".desired").css({opacity:1,visibility:"collapse",border:"1px solid green"})})});