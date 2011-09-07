/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'smooth'}, {

    onSetMod : {
        'state' : {
            'opened' : function() {
                var _this = this;
                this.elem('content').slideDown();
                this.afterCurrentEvent(function(){
                    _this.elem('content').css('display', '');
                });
            }
        }
    }

});

})();
