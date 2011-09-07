/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'smooth'}, {

    onSetMod : {
        'state' : {
            'opened' : function() {
                this.elem('content').slideDown();
            }
        }
    }

});

})();
