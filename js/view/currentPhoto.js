$.fn.currentPhoto = function(options) {
    options.model.onChange('selectedSlide', function(n) {
        var selectedPresentation = options.model.getParam('selectedPresentation');
        var photoPath = options.model.getParam('presentations')[selectedPresentation].photos[n];
        var image = '<img src="' + photoPath + '" />';
        this.html(image);
    }, this);
}
