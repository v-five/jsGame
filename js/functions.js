function startNewGame(){
	$('.container').remove();
	appendCels();
//	createGamePlayMenu();
	$('.cel.healthy').click(function(){
		$('.cel.healthy').unbind('click');
//		$("#menu").dialog("open");
		sick($(this));
	});
}

function appendCels(){
	var random, cel, i, j;
	for(i=1; i<=CELS_H; i++){
		for(j=1; j<=CELS_V; j++){
			if(i <= CEL_OFF || j <= CEL_OFF || i > (CELS_H - CEL_OFF) || j > (CELS_V - CEL_OFF))
				cel = "nature rock";
			else{
				random = Math.floor(Math.random()*30);
				if(random == 0)
					cel = "nature rock";
				else if(random == 1)
					cel = "nature tree";
				else
					cel = "healthy";
			}

			var $container = Container(i,j);
			var $cel = Cel(cel,i,j);
			var $con = new Connectors();

			$container.append($con.vt).append($con.hl).append($cel).append($con.hr).append($con.vb);

			$("body").append($container);
		}
	}
}

function sick($this){
	$this.removeClass('infected');
	$this.addClass('ill');
	detectInfected($this);
}

function detectInfected($ill){
	var id, i, j, $infected = $();

	$ill.each(function(index, el){
		id = $(el).attr('id').replace('cel_', '').split("-");
		i = parseInt(id[0]); j = parseInt(id[1]);

		$hl = $('#cel_'+i+"-"+(j-1));
		$hr = $('#cel_'+i+"-"+(j+1));
		$vt = $('#cel_'+(i-1)+"-"+j);
		$vb = $('#cel_'+(i+1)+"-"+j);

		if($hl.hasClass('healthy') && !$hl.hasClass('ill') && !$hl.hasClass('imun'))
			$infected = $infected.add($hl);
		if($hr.hasClass('healthy') && !$hr.hasClass('ill') && !$hr.hasClass('imun'))
			$infected = $infected.add($hr);
		if($vt.hasClass('healthy') && !$vt.hasClass('ill') && !$vt.hasClass('imun'))
			$infected = $infected.add($vt);
		if($vb.hasClass('healthy') && !$vb.hasClass('ill') && !$vb.hasClass('imun'))
			$infected = $infected.add($vb);
	});

	$infected.addClass('infected');

//	if($infected.length != 0 && confirm("?"))
//		sick($infected);
//	if($infected.length != 0)
//		setTimeout(function(){sick($infected)}, 1000);
	vaccin($infected);
}

function createStartMenu(){
	var $div, $p;

	$("<button></button>")
		.text("test")
		.attr("id", "settings")
		.css({
			"z-index": 100
		})
		.appendTo('body');


	$div = $("<div></div>")
		.attr('id', "menu")
		.appendTo("body");

	$p = $("<p></p>")
		.text("Do you want to start new game?")
		.appendTo($div);
	$("<img>")
		.addClass("loader")
		.attr("src", "img/loader.gif")
		.css({
			"float": "right",
			"display": "none"
		})
		.prependTo($p);
	$("<span></span>")
		.addClass("ui-icon ui-icon-alert")
		.css({
			"float": "left",
			"margin": "0 7px 20px 0"
		})
		.prependTo($p);
}

function createGamePlayMenu(){
	var $div, $menu = $("#menu");
	$div = $("<div></div>").attr("id","gamePlayRadio");
	$menu.empty();
	$("<input>")
		.attr("id","play")
		.attr("type","radio")
		.attr("value","play")
		.attr("name","gamePlayRadio")
		.appendTo($div);
	$("<input>")
		.attr("id","pause")
		.attr("type","radio")
		.attr("value","pause")
		.attr("name","gamePlayRadio")
		.appendTo($div);
	$("<input>")
		.attr("id","next")
		.attr("type","radio")
		.attr("value","next")
		.attr("name","gamePlayRadio")
		.appendTo($div);
	$div.appendTo($menu);
	createGamePlayButtons();
}

function vaccin($infected){
	var flag = false;
	$('.cel.healthy').click(function(){
		$(this).css({'background-color': 'red'}).addClass('imun');
		$('.cel.healthy').unbind('click');
		if($infected.length != 0)
			sick($infected);
		else
			alert('You win!!!');
	});
}
