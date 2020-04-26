// Animated Tabs
$("#tile-1 .nav-tabs a").click(function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#tile-1 .slider").css({ "left": +position.left, "width": width });
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({ "left": +actPosition.left, "width": actWidth });


// script for flipping text
(function () {
    var Flip;

    Flip = class Flip {
        constructor(el) {
            this.el = el;
            this.el = $(this.el);
            this.currentStep = 0;
            console.log("Created new Flip");
            $('.next').on('click', $.proxy(this.next, this));
        }

        next(event) {
            var currentStepEl, nextStepEl, nextStepNum;
            if (event) {
                event.preventDefault();
            }
            nextStepNum = this.currentStep + 1;
            currentStepEl = this.el.find(`.step${this.currentStep}`);
            nextStepEl = this.el.find(`.step${nextStepNum}`);
            if (nextStepEl.length) {
                console.log('we found the next step', nextStepEl);
                currentStepEl.prev().removeClass('down');
                currentStepEl.removeClass('set');
                currentStepEl.addClass('down');
                nextStepEl.addClass('set');
                nextStepEl.removeClass('down');
                nextStepEl.next().removeClass('down');
                return this.currentStep++;
            } else {
                // reset to 0
                this.el.find(".step").removeClass('set');
                this.el.find(`.step${this.currentStep}`).addClass('down');
                this.el.find(".step").not(`.step${this.currentStep}`).removeClass('down');
                this.currentStep = -1;
                return this.next();
            }
        }
    };



    $(function () {
        var f;
        f = new Flip(document.getElementById('flipper'));
        return setInterval(function () {
            return f.next();
        }, 1500);
    });

}).call(this);


// Animated skills bar
$("#profile-tab").click(function () {
    $(".skills").fadeIn();
});


$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function () {
    $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
    }, 1000);
    $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function () {
    $(".skills .skill .skill-bar span b").animate({ "opacity": "1" }, 1000);
}, 2000);

// Flaslight Animated script
const gradient = document.querySelector(".sec-1");

function onMouseMove(event) {
    gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(0, 144, 236, 0.7) 0, rgba(20, 65, 111, 0.95) 50%)';
}
document.addEventListener("mousemove", onMouseMove);
