function createFootballVideoIframe( videoId, videoParent, index ) {
	if ( typeof videoId !== 'object' ) {
		videoId = [videoId];
	}
	var validVideoIds = [];
	if ( typeof videoId === 'object' && videoId !== null && videoId.constructor === Array && videoId.length > 0 ) {
		for ( var i = 0, iMax = videoId.length; i < iMax; i++ ) {
			if ( typeof videoId[i] === 'number' ) {
				videoId[i] = Math.round( videoId[i] );
				if ( videoId[i] > 0 ) {
					validVideoIds.push( videoId[i] );
				}
			}
		}
	}
	if ( validVideoIds.length < 1 ) {
		return false;
	}
	if ( typeof videoParent === 'string' && videoParent.length > 0 ) {
		videoParent = document.getElementById( videoParent );
	}
	if ( !( typeof videoParent === 'object' && videoParent && videoParent.nodeType === 1 ) ) {
		return false;
	}
	var iframe = document.createElement( 'iframe' );
	var width = videoParent.clientWidth;
	var height = videoParent.clientHeight;
	if ( width === 0 ) {
		width = videoParent.offsetWidth;
	}
	if ( height === 0 ) {
		height = videoParent.offsetHeight;
	}
	iframe.width = width;
	iframe.height = height;
	iframe.setAttribute( 'frameBorder', '0' );
	iframe.setAttribute( 'scrolling', 'no' );
	iframe.src = 'http://fotball.vgtv.no/fapi/?do=iframe&id=' + validVideoIds.toString() + '&width=' + width + '&height=' + height;
	if ( 'adbefore' in window && typeof adbefore === 'number' ) {
		iframe.src += '&videobefore=' + adbefore;
	}
	if ( 'adafter' in window && typeof adafter === 'number' ) {
		iframe.src += '&videoafter=' + adafter;
	}
	if ( 'NettTv_overlay' in window && typeof NettTv_overlay === 'number' ) {
		iframe.src += '&overlay=' + NettTv_overlay;
	}
	if ( typeof index === 'number' && index > 0 ) {
		iframe.src += '&index='	+ index;
	}
	iframe.style.border = '0px';
	iframe.style.padding = '0';
	if ( videoParent.hasChildNodes() ) {
		for ( var i = videoParent.childNodes.length; i > 0; i-- ) {
			videoParent.removeChild( videoParent.childNodes[i - 1] );
		}
	}
	videoParent.appendChild( iframe );
	return true;
}

