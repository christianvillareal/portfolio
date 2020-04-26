// scroll down animate script
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});


// Type Writing Script
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #969696}";
    document.body.appendChild(css);
};

// scroll top script for side menu
$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.height() + $win.scrollTop() == $(document).height()) {
            // condition kung naa na sa bottom
            $("#social_side_links").fadeOut();
        } else if ($win.scrollTop() + $win.height() < $(document).height() - 200) {
            // condition kung mo scroll padung top
            $("#social_side_links").fadeIn();
        }
    });
});

// this code will add animated spinner on click button
$("#gform").submit(function (e) {
    e.preventDefault();

    var $send = $("#send-button")
    $send.removeClass("fa-paper-plane").addClass("fa-spinner fa-pulse")

    setTimeout(function () {
        for (var i = 0; i < 70000; i++) {
            console.log(i);
        }
        $send.addClass("fa-check").removeClass("fa-spinner fa-pulse fa-spin")
        return true;
    }, 50);
})



// Load Header
$("#header-nav").load("/header.html");

// Load Footer
$("#footer-content").load("/footer.html");

