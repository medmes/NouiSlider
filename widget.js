WAF.define('NouiSlider', ['waf-core/widget'], function(widget) {
    var connectt = ['lower', true];

    var NouiSlider = widget.create('NouiSlider', {
     
     
        min: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        max: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        isSingle: widget.property({
            type: 'boolean',
            defaultValue: true
        }),
        Couleur: widget.property({
            type: 'string',
            defaultValue: '#3FB8AF'
            
        })
        ,
        init: function() {
            //           
            this.node.innerHTML = "<div></div>"
            this.render();
            this.min.onChange(this.render);
            this.max.onChange(this.render);
            this.isSingle.onChange(this.render);
            this.Couleur.onChange(this.changeColor)
        },
        render: function() {
            if (this.isSingle()) {
                this.renderSingle();
            }
    	   else {this.renderRange();}

        },
        renderSingle: function() {

            $(this.node).noUiSlider({
                range: [0, 100],
                start: this.max(),
                handles: 1,
                connect: "lower",
                orientation: 'vertical'
            }, true);
          

        },

        renderRange: function() {

            $(this.node).noUiSlider({
				 range: [0, 100]
				,start: [this.min(), this.max()]
				,connect: true,
				orientation: 'vertical'
				});

        },
        changeColor:function(){
        			$(this.node).find('.noUi-base').css("background-color",this.Couleur());        			
        }


        //        
    });

  //  var Noui2 = widget.create('Moui2', NouiSlider, {})
    //    
    return NouiSlider;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */