(function ($, window, document, undefined) {

    'use strict';

    (function() {

        //Change word

        var items = $(".wordlistitem");
        var delay = 2500;

        function checkPositions() {


            $(items).each(function() {

                var current = $(".wordlistitem.current");
                var next = null;
                var prev = null;

                if((current).is(':first-child')) {
                  next = current.next();
                  prev = $(".wordlistitem").last();
                } else if((current).is(':last-child')) {
                  next = $(".wordlistitem").first();
                  prev = current.prev();
                } else {
                  next = current.next();
                  prev = current.prev();
                }

                next.removeClass('current prev next').addClass('next');
                prev.removeClass('current prev next').addClass('prev');

            });

        };


        function changeCurrent() {

            if(($(window).width() > 544)) {

                var current = $('.wordlistitem.current');
                var prev = $('.wordlistitem.prev');
                var next = $('.wordlistitem.next');

                var bar = $('.bar');

                current.removeClass('current').addClass('prev');
                prev.removeClass('prev');
                next.removeClass('next').addClass('current');
                bar.removeClass('anim-bar').addClass('anim-bar');
            }

            checkPositions();

            setTimeout(changeCurrent,delay);

        };


        if ( (items.length > 0) ) {
            setTimeout(changeCurrent);
        }

    })();

    var johnny = $('.johnny-text');
    var ambroise = $('.ambroise-text');
    var crea = $('.bar-crea');
    var methode = $('.bar-methode');
    var ambition = $('.bar-ambition');
    var raison = $('.bar-raison');
    var appetit = $('.bar-appetit');

    $('.johnny-text').on({
        'click': function(){

            $('.portrait-img').attr('src','assets/img/johnny.jpg');
            ambroise.removeClass('perso-active');
            johnny.addClass('perso-active');

            crea.removeClass('bar-crea-ambroise').addClass('bar-crea-johnny');
            methode.removeClass('bar-methode-ambroise').addClass('bar-methode-johnny');
            ambition.removeClass('bar-ambition-ambroise').addClass('bar-ambition-johnny');
            raison.removeClass('bar-raison-ambroise').addClass('bar-raison-johnny');
            appetit.removeClass('bar-appetit-ambroise').addClass('bar-appetit-johnny');
        }
    });

    $('.ambroise-text').on({
        'click': function(){
            $('.portrait-img').attr('src','assets/img/ambroise.jpg');
            johnny.removeClass('perso-active');
            ambroise.addClass('perso-active');

            crea.removeClass('bar-crea-johnny').addClass('bar-crea-ambroise');
            methode.removeClass('bar-methode-johnny').addClass('bar-methode-ambroise');
            ambition.removeClass('bar-ambition-johnny').addClass('bar-ambition-ambroise');
            raison.removeClass('bar-raison-johnny').addClass('bar-raison-ambroise');
            appetit.removeClass('bar-appetit-johnny').addClass('bar-appetit-ambroise');
        }
    });

  $(function() {

    $('.burger').click(function(e){
      e.preventDefault();
      $('html').toggleClass('menu-active');
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      $('html').removeClass('menu-active');
    });

    window.sr = ScrollReveal();

    sr.reveal($('.intro').find('.intro-title'), {
            viewFactor: 0.4,
            scale: 1,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.intro').find('.intro__el'), {
            viewFactor: 0.4,
            scale: 1,
            delay: 300,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.introduction').find('.socials-intro'), {
            viewFactor: 0.4,
            scale: 1,
            delay: 800,
            duration: 600,
            opacity: 0
        }
    );

    sr.reveal($('.work').find('.bigtitle-project'), {
            viewFactor: 1,
            scale: 1,
            duration: 700,
            opacity: 0
        }
    );

    sr.reveal($('.work').find('.work-text'), {
            viewFactor: 1,
            scale: 1,
            delay: 400,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.work').find('.project'), {
            viewFactor: 0.3,
            scale: 1,
            delay: 400,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.services').find('.title-services'), {
            viewFactor: 1,
            scale: 1,
            duration: 700,
            opacity: 0
        }
    );

    sr.reveal($('.services').find('.secrets'), {
            viewFactor: 0.1,
            scale: 1,
            delay: 400,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.about').find('.bigtitle-about'), {
            viewFactor: 0.2,
            scale: 1,
            duration: 700,
            opacity: 0
        }
    );

    sr.reveal($('.about').find('.text-about'), {
            viewFactor: 0.2,
            scale: 1,
            delay: 400,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.about').find('.skills'), {
            viewFactor: 0.2,
            scale: 1,
            delay: 400,
            duration: 800,
            opacity: 0
        }
    );

    sr.reveal($('.about').find('.portrait'), {
            viewFactor: 0.1,
            scale: 1,
            delay: 700,
            duration: 1100,
            opacity: 0
        }
    );

    sr.reveal($('.contact').find('.content'), {
            viewFactor: 0.4,
            scale: 1,
            delay: 300,
            duration: 600,
            opacity: 0
        }
    );

    sr.reveal($('.intro-projet').find('p'), {
            viewFactor: 0.4,
            scale: 1,
            duration: 600,
            opacity: 0
        }
    );

    sr.reveal($('.intro-projet').find('h1'), {
            viewFactor: 0.4,
            scale: 1,
            delay: 300,
            duration: 700,
            opacity: 0
        }
    );

    sr.reveal($('.intro-projet').find('img'), {
            viewFactor: 0.4,
            scale: 1,
            delay: 800,
            duration: 1000,
            opacity: 0
        }
    );

    sr.reveal($('.etape').find('.text-etape'), {
            viewFactor: 0.4,
            scale: 1,
            duration: 700,
            opacity: 0
        }
    );

    sr.reveal($('.sponsors').find('.container-sponsors'), {
            viewFactor: 0.4,
            scale: 1,
            delay: 200,
            duration: 900,
            opacity: 0
        }
    );

  });

})(jQuery, window, document);