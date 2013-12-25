$(function() {
	$("#settings").button({
		icons: {
			primary: "ui-icon-gear",
			secondary: "ui-icon-triangle-1-s"
		},
		text: false
	});

	$("#settings").click(function() {
		$("#menu").dialog("open");
	});

	$("#menu").dialog({
		title: "Settings",
		resizable: false,
		autoOpen: true,
		modal: true,
		height:180,
		show: {
			effect: "fold",
			duration: 500
		},
		hide: {
			effect: "fold",
			duration: 500
		},
		buttons: {
			"Start new game": function() {
				startNewGame();
				$(this).dialog("close");
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});
});

function createGamePlayButtons(){
	$("#gamePlayRadio").buttonset();
	$("#play").append($("<label></label>").attr("for","play").text("play"));
//	$("#play").button({
//		icons: {
//			primary: "ui-icon-play"
//		},
//		text: false
//	});
//
//	$("#pause").button({
//		icons: {
//			primary: "ui-icon-pause"
//		},
//		text: false
//	});
//
//	$("#next").button({
//		icons: {
//			primary: "ui-icon-next"
//		},
//		text: false
//	});
}
