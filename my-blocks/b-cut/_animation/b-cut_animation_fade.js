/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'fade'}, {

    onSetMod : {
        'state' : {
            'opened' : function() {
                this.elem('content').fadeIn();
            }
        }
    }

});

})();
