/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'type', modVal: 'inline'}, {

    onSetMod : {
        'state' : {
            'opened' : function() {
                this.__base.apply(this, arguments);
                this.setMod(this.elem('opener'), 'visibility', 'invisible');
            },
            '' : function() {
                this.__base.apply(this, arguments);
                this.setMod(this.elem('opener'), 'visibility', '');
            }
        }
    }

});

})();
