$(document).ready(function(){
    // v_p_content
    $(".premium_slider").slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $('.premium_p'), //이전 화살표
        nextArrow: $('.premium_n'), //다음 화살표
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 800,
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수   
        fade: true,
    });
      function slickActive_p() {

        if ($('.premium01').hasClass('slick-active')) {
            $('.desc.Pr_01').addClass('active');
        } else if ($('.premium02').hasClass('slick-active')) {
            $('.desc.Pr_03').addClass('active');
        } else if ($('.premium03').hasClass('slick-active')) {
            $('.desc.Pr_03').addClass('active');
        } else if ($('.premium04').hasClass('slick-active')) {
            $('.desc.Pr_04').addClass('active');
        } else if ($('.premium05').hasClass('slick-active')) {
            $('.desc.Pr_05').addClass('active');
        } else if ($('.premium06').hasClass('slick-active')) {
            $('.desc.Pr_06').addClass('active');
      }
    }
  
    $('.premium_slider').on({
        init: function (event, slick) {
  
        },
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $('.desc').removeClass('active');
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
            slickActive_p();
        }
    });

    // location
    $(".lo_items .item").mouseenter(function () {
        let changImage = $(this).attr("data-image");
        $(".lo_change_background").css(
          "background-image",
          "url(" + changImage + ")"
        );
      });
    
      $(".lo_items .item").mouseleave(function () {
        $(".lo_change_background").css("background-image", "");
      });

      
      let visualSlide = $('.lan_slider');

      visualSlide.slick({
         dots: false,
         infinite: true,
         arrows: true,
         prevArrow: $('.arrow-prev'), //이전 화살표
         nextArrow: $('.arrow-next'), //다음 화살표
         autoplay: true,
         autoplaySpeed: 4500,
         speed: 1000,
         slidesToShow: 1,
         slidesToScroll: 1,
         fade: true,
      });
    
    
          //ticking machine
      var percentTime;
      var tick;
      var time = 1;
      var progressBarIndex = 0;
    
      $('.progressBarContainer .progressBar').each(function(index) {
          var progress = "<div class='inProgress inProgress" + index + "'></div>";
          $(this).html(progress);
      });
    
      function startProgressbar() {
          resetProgressbar();
          percentTime = 0;
          tick = setInterval(interval, 10);
      }
    
      function interval() {
          if (($('.lan_slider div.item[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
              progressBarIndex = $('.lan_slider div.item[aria-hidden="false"]').data("slickIndex");
              startProgressbar();
          } else {
              percentTime += 1 / (time + 3.8);
              $('.inProgress' + progressBarIndex).css({
                  width: percentTime + "%"
              });
              if (percentTime >= 100) {
                  $('.single-item').slick('slickNext');
                  progressBarIndex++;
                  if (progressBarIndex > 2) {
                      progressBarIndex = 0;
                  }
                  startProgressbar();
              }
          }
      }
    
      function resetProgressbar() {
          $('.inProgress').css({
              width: 0 + '%'
          });
          clearInterval(tick);
      }
      startProgressbar();
      // End ticking machine
    
      $('.progressBarContainer div').click(function () {
          clearInterval(tick);
          var goToThisIndex = $(this).find("span").data("slickIndex");
          $('.lan_slider').slick('slickGoTo', goToThisIndex, false);
          startProgressbar();
      });

});
