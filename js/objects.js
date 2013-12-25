Container = function(i,j){
	return $("<div>")
		.addClass("container")
		.attr('id', 'container_'+i+'-'+j)
		.width(25)
		.height(25)
		.css({
			"left": ((j-1) * (CEL_WIDTH + CEL_MARGIN) + (MARGIN_V / 2)),
			"top": ((i-1) * (CEL_HEIGHT + CEL_MARGIN) + (MARGIN_H / 2))
		});
};

Cel = function(healthy,i,j){
	return $("<div>")
		.addClass("cel")
		.addClass(healthy)
		.attr('id', 'cel_'+i+'-'+j)
		.width(20)
		.height(20)
		.css({
			"margin-left": "auto",
			"margin-right": "auto"
    });
};

Connectors = function(){
	this.hl =  $('<div>')
		.addClass('connector_h')
		.width(CEL_MARGIN/2)
		.height(1)
		.css({
			"margin-top": (CEL_HEIGHT/2)+"px",
			"float": "left"
		});

	this.hr = $('<div>')
		.addClass('connector_h')
		.width(CEL_MARGIN/2)
		.height(1)
		.css({
			"margin-top": -(CEL_HEIGHT/2)+"px",
			"float": "right"
		});

	this.vt = $('<div>')
		.addClass('connector_v')
		.height(CEL_MARGIN/2)
		.width(1)
		.css({
			"margin-left": "auto",
			"margin-right": "auto"
		});

	this.vb = $('<div>')
		.addClass('connector_v')
		.height(CEL_MARGIN/2)
		.width(1)
		.css({
			"margin-left": "auto",
			"margin-right": "auto"
		});
};