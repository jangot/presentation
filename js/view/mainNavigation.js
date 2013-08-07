$.fn.mainNavigation = function(options) {
    var params = {
        element : $('body'),
        model : null,
        controller : null
    };
    for (var name in params) {
        if (options[name]) {
            params[name] = options[name];
        }
    }

    var self = this;

    this.delegate('.next', 'click', function() {
        params.controller.nextSlide();
    });
    this.delegate('.prev', 'click', function() {
        params.controller.prevSlide();
    });
    this.delegate('.number', 'click', function() {
        var n = $(this).attr('data-number');
        params.controller.selectSlide(n);
    });

    params.model.onChange('selectedSlide', function(n) {
        this.find('.number').removeClass('selected');
        this.find('[data-number="' + n + '"]').addClass('selected');
    }, this);

    params.model.onChange('selectedPresentation', function(name) {
        var presentation = params.model.getParam('presentations')[name];

        var newNumbers = '';
        for (var i = 0; i < presentation.photos.length; i++) {
            newNumbers += '<span class="number" data-number="'+ i +'">' + i + '</span>';
        }
        this.find('.numberContainer').html(newNumbers);
    }, this);
};