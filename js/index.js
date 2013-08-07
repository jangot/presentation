$(function() {
    var model = new Model();
    var app = new Application(model);

    $('.mainNavigation').mainNavigation({
        model : model,
        controller : app
    });
    $('.currentPhoto').currentPhoto({
        model : model
    });
    $('.presentationList').presentationList({
        model : model,
        controller : app
    });

    model.onChange('selectedPresentation', function(name) {
        var presentation = model.getParam('presentations')[name];
        $('h1').html(presentation.title);
    });
    app.run(PRESENTATIONS);
});
