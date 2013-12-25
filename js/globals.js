CEL_HEIGHT = 20;
CEL_WIDTH = 20;
CEL_MARGIN = 5;
CEL_OFF = 3;
CELS_V = Math.floor($(window).width() / (CEL_WIDTH + CEL_MARGIN));
MARGIN_V = $(window).width() - (CELS_V * (CEL_WIDTH + CEL_MARGIN)) + CEL_MARGIN;
CELS_H = Math.floor($(window).height() / (CEL_HEIGHT + CEL_MARGIN));
MARGIN_H = $(window).height() - (CELS_H * (CEL_HEIGHT + CEL_MARGIN)) + CEL_MARGIN;