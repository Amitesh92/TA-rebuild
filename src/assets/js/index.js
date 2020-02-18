
import '../js/hello.js';
import $ from 'jquery';
import 'owl.carousel';
import 'jquery-scrollify';

import '../css/global.scss';
import '../css/reset.scss';
import  '../css/colorVariable.scss';
import '../css/page.scss';
import '../css/style.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';


  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      nav:true,
      autoplay:true,
      navText: ['&#x27;next&#x27','&#x27;prev&#x27']
    });
    $.scrollify({
      section : ".example-classname",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      touchScroll:true,
      before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      after:function() {},
      afterResize:function() {},
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".example-classname").each(function(i) {
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
  
        pagination += "</ul>";
  
        $(".home").append(pagination);
    
        $(".pagination a").on("click",$.scrollify.move);
      }
    });
});
