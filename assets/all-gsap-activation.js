// menu Scrool
const menuItems = document.querySelectorAll('.menu-item');
gsap.registerPlugin(ScrollTrigger);


// Screen Width
var screen_width = window.screen.width;

// Active GSAP
if (document.querySelector("#smooth-animate").classList.contains("smooth-scrool-animate")) {
    const smoother = ScrollSmoother.create({
        effects: screen_width < 1025 ? false : true,
        smooth: 1.35,
        ignoreMobileResize: true,
        normalizeScroll: false,
        smoothTouch: 0.1,
    });
}


// simpleParallax activation

var image = document.getElementsByClassName('imageParallax');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});


var image = document.getElementsByClassName('imageParallax2');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'right'
});
var image = document.getElementsByClassName('imageParallax3');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'left'
});
var image = document.getElementsByClassName('imageParallax4');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'down'
});


$(window).on('load', function () {
    splitText();
});


/*------------------------------------------
 My ch-site-split text
-------------------------------------------*/
function splitText() {
    $(".site-split-text").each(function (index, el) {
        if (!el) return;

        gsap.registerPlugin(SplitText);
        var splitConfig = {
            type: "lines,words,chars",
            linesClass: "split-line"
        };
        el.split = new SplitText(el, splitConfig);
        gsap.set(el, { perspective: 100 });

        var splitClasses = ['ch-split-in-fade', 'ch-split-in-right', 'ch-split-in-left', 'ch-split-in-up', 'ch-split-in-down', 'ch-split-in-rotate', 'ch-split-in-scale'];
        splitClasses.forEach(function(className) {
            if ($(el).hasClass(className)) {
                var splitSettings = { opacity: 0 };
                switch (className) {
                    case 'ch-split-in-right':
                        splitSettings.x = "70";
                        break;
                    case 'ch-split-in-left':
                        splitSettings.x = "-50";
                        splitSettings.ease = "circ.out";
                        break;
                    case 'ch-split-in-up':
                        splitSettings.y = "80";
                        splitSettings.ease = "circ.out";
                        break;
                    case 'ch-split-in-down':
                        splitSettings.y = "-80";
                        splitSettings.ease = "circ.out";
                        break;
                    default:
                        splitSettings.ease = "Back.easeOut";
                }
                gsap.set(el.split.chars, splitSettings);
            }
        });

        el.anim = gsap.to(el.split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 100%"
            },
            x: "0",
            y: "0",
            rotateX: "0",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06
        });
    });
}
