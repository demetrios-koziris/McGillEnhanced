function applyToolTipsy() {
    applyToolTipsyForClass('tooltip');
    applyToolTipsyForClass('tooltipError');
}

function applyToolTipsyForClass(className) {

	const style = {
		tooltip: {
			backgroundColor: '#eceff1',
			boxShadow: '4px 4px 10px #888888',
			fontWeight: 'inherit'
		},
		tooltipError: {
			backgroundColor: '#FFF0F0',
			boxShadow: '2px 2px 10px #E54944',
			fontWeight: 'bold'
		}
	};

	$('.' + className).tooltipsy( {
		hide: function (e, $el) {
			$el.slideUp(50);
		},
		delay: 400,
		offset: [0, -8],
		css: {
			fontFamily: 'CartoGothicStdBook',
			padding: '6px 12px',
			color: '#444444',
			fontSize: '.8em',
			borderRadius: '8px',
			textAlign: 'center',
			backgroundColor: style[className].backgroundColor,
			boxShadow: style[className].boxShadow
		}
	});
}