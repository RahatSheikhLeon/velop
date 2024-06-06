$("#toggle").click(function () {
   $(this).toggleClass("on");
   $("#menu").slideToggle();
   $('.navigation').toggle();
});


// featured-slider
$('.slider').slick({
   infinite: true,
   slidesToShow: 5,
   slidesToScroll: 1,
   dots: false,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 1000,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 4,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 2,
            autoplay: true,
            slidesToScroll: 1
         }
      }
   ]
});

// prodect-slider
$('.prodect-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: false,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 1000,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1
         }
      }
   ]
});

// prodect-slider
$('.innovation-slider').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   dots: false,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 1000,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 2,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1
         }
      }
   ]
});


// experience-slider
$('.experience-slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: false,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 1000,

});


// experience-slider
$('.upcoming-slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: false,
   arrows: true,
   autoplay: false,
   autoplaySpeed: 1000,

});
//blog-slider
$('.blog-slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: true,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1000
});

//number-counting
$('.stat-number').each(function () {
   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 2000,
      step: function (func) {
         $(this).text(parseFloat(func).toFixed(size));
      }
   });
});

//accordion
{
   const accordionItems = document.querySelectorAll('.accordion-item');

   accordionItems.forEach((item, index) => {
      const title = item.querySelector('.accordion-title');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon')

      title.addEventListener('click', () => {
         // Toggle active class on content
         content.classList.toggle('active');
         icon.classList.toggle('rotate');
         item.classList.toggle('border');
         // Close other accordion items
         for (let i = 0; i < accordionItems.length; i++) {
            if (i !== index) {
               accordionItems[i].querySelector('.accordion-content').classList.remove('active');
               accordionItems[i].querySelector('.accordion-icon').classList.remove('rotate');
               accordionItems[i].classList.remove('border');
            }
         }
      });
   });

}
