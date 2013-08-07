$.fn.presentationList = function(options) {
    var params = {
        model : null,
        controller : null
    };
    for (var name in params) {
        if (options[name]) {
            params[name] = options[name];
        }
    }

    this.delegate('li', 'click', function() {
       var presentationName = $(this).attr('data-presentation');

        params.controller.showPresentation(presentationName);
    });

    params.model.onChange('presentations', function() {
        var presentations = params.model.getParam('presentations');

        var newList = '';
        for (var name in presentations) {
            newList += ('<li data-presentation="' + name + '">' + presentations[name].title + '</li>');
        }

        this.html(newList);
    }, this);

    params.model.onChange('selectedPresentation', function(name) {
        this.find('.selected').removeClass('selected');
        this.find('[data-presentation="' + name + '"]').addClass('selected');
    }, this);
};
