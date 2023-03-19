$(function() {
    var p = new Popup({
        popup: '.popup',
        content: '.popup-content',
        overlay: '.overlay',
    });

    // setTimeout(function() {
    //     p.open('Write me a message: shark@sharkcoder.com');
    // }, 3000);

    $('.call').click(function() {
        var form = $('.for-call-popup');
        p.open(form.html());
    });

    $('.write').click(function() {
        p.open('Write me a message: shark@sharkcoder.com');
    });

    $('.popup-close-btn').click(function() {
        p.close();
    });
});

function Popup(Obj) {
    this.popup = $(Obj.popup);
    this.content = $(Obj.content);
    this.overlay = $(Obj.overlay);

    var pop = this;

    this.open = (function(content) {
        pop.content.html(content);
        pop.popup.addClass('open').fadeIn(1000);
        pop.overlay.addClass('open');
    });

    this.close = (function() {
        pop.popup.removeClass('open');
        pop.overlay.removeClass('open');
    });

    this.overlay.click(function(e) {
        if (!pop.popup.is(e.target) && pop.popup.has(e.target).length === 0) {
            pop.close();
        }
    });
}