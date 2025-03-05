$(function() {

    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset =  $(window).scrollTop();

    // Header -> fixed header
    cheakScroll(scrollOffset);

    $(window).on("scroll", function() {
        // console.log(introHeight);
        // console.log(scrollOffset);
        
        scrollOffset = $(this).scrollTop();
        
        cheakScroll(scrollOffset);
        
    });
    
    function cheakScroll(scrollOffset) {
        if(scrollOffset >= introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };



    // Header -> smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Header -> Menu nav toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    // We Do -> Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
        // $(blockId).slideToggle();
    });



    // Reviews -> slider
    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});



// Header -> active link

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".sect");
    const menuLinks = document.querySelectorAll(".nav__link");
  
    const observerOptions = {
        root: null,
        threshold: 0.5, // 50% секции в видимой области
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                menuLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);
  
    sections.forEach((section) => observer.observe(section));
  
    console.log("Секции найдены:", sections);
  });
  
  