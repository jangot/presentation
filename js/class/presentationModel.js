function Model() {
    this._params = {
        selectedPresentation : null,
        selectedSlide : null,
        presentations : null
    };
    this._callbacks = {};
}

Model.prototype = {

    _params : null,

    addPresentation : function(presentation) {
        this._isPresentation(presentation);

        var presentations = this.getParam('presentations');
        presentations = presentations || {};
        presentations[presentation.name] = presentation;
        this._changeParam('presentations', presentations);

        return this;
    },

    selectPresentation : function(id) {
        this._changeParam('selectedPresentation', id);
        this._changeParam('selectedSlide', 0);
        return this;
    },

    selectSlide : function(n) {
        this._changeParam('selectedSlide', n);
        return this;
    },

    getParam : function(name) {
        return this._params[name];
    },

    onChange : function(name, cb, context) {
        if (!context) {
            context = this;
        }
        this._callbacks[name] = this._callbacks[name] || [];
        this._callbacks[name].push(cb.bind(context));

        return this;
    },

    _changeParam : function(name, value) {
        if (this._params[name] !== undefined) {
            this._params[name] = value;
            this._notify(name, value)
        }
        return this;
    },

    _notify : function(name, data) {
        if (!this._callbacks[name]) {
            return;
        }
        for (var i = 0; i < this._callbacks[name].length; i++) {
            this._callbacks[name][i](data);
        }
        return this;
    },

    _isPresentation : function(presentation) {
        if (!presentation) {
            throw Error('There is\'t presentation.');
        }
        if (
            !presentation.title
            || !presentation.name
            || $.type(presentation.photos) !== 'array'
            ) {
            throw Error('Presentation is broken.')
        }
    }

}