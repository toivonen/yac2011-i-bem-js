/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-post', {

    onSetMod : {
        'js' : function() {
            BEM.blocks['b-link'].liveCtxBind(this.elem('cut-opener'), 'click', this._openCuts, this);
            this.cuts = this.findBlocksInside('b-cut')
        }
    },
    _openCuts : function() {
        $.each(this.cuts, function(){
            this.setMod('state', 'opened');
        })
    }

}, {

    live : function() {
        this.liveInitOnBlockInsideInit('b-link');
    }

});

})();
