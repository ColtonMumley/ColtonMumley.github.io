window.sr = ScrollReveal();
sr.reveal('.navbar-default', {
	duration: 2000,
	origin: 'bottom',
});

sr.reveal('.landing-text', {
	duration: 2000,
	origin: 'bottom',
});

sr.reveal('.about-left', {
    duration: 2000,
    origin: 'top',
    distance: '200px',
});

sr.reveal('.about-right', {
    duration: 2000,
    origin: 'right',
    distance: '150px',
});

sr.reveal('#activities h1', {
    duration: 2000,
    origin: 'top',
});

sr.reveal('.rocketry-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
});

sr.reveal('.rocketry-right', {
    duration: 2000,
    origin: 'right',
    distance: '150px',
});

sr.reveal('.behance-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 500,
});


sr.reveal('.behance-right', {
    duration: 2000,
    origin: 'right',
    distance: '150px',
    delay: 500,
});


//reveals navbar background
$(document).ready(function() {
        $(window).scroll(function(event) {
            let scroll = $(this).scrollTop();
            let opacity = 1 - (scroll / 1000);
            if (scroll >= document.getElementById('home').offsetHeight - 50) {
                $('.navbar-default').css('background', '#333333');
            }
            else {
            	$('.navbar-default').css('background-color', 'transparent');
            }
        });
    });

//closes navbar on click
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});