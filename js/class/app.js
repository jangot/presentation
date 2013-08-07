function Application(model) {
    this._model = model;
}

Application.prototype = {

    _model : null,

    run : function(presentations) {
        for (var i = 0; i < presentations.length; i++) {
            this._model.addPresentation(presentations[i]);
        }
        this._model.selectPresentation(presentations[0].name);
    },

    showPresentation : function(name) {
        this._model.selectPresentation(name)
    },

    nextSlide : function() {
        var currentSlide = this._model.getParam('selectedSlide');
        var presentationName = this._model.getParam('selectedPresentation');
        var numSlides = this._model.getParam('presentations')[presentationName].photos.length;

        if (currentSlide < (--numSlides)) {
            this._model.selectSlide(++currentSlide)
        }
    },

    prevSlide : function() {
        var currentSlide = this._model.getParam('selectedSlide');

        if (currentSlide > 0) {
            this._model.selectSlide(--currentSlide);
        }
    },

    selectSlide : function(n) {
        this._model.selectSlide(n);
    }

}