function createVideoIframe(videoId, videoParent, site, index, skin, disableautoplay, optionsObject) {
	if (!(typeof videoId === 'number' && videoId > 0)) {
		return false;
	}
	if (typeof videoParent === 'string' && videoParent.length > 0) {
		videoParent = document.getElementById(videoParent);
	}
	if (!(typeof videoParent === 'object' && videoParent && videoParent.nodeType === 1)) {
		return false;
	}
	var path = '';
	var scripts = document.getElementsByTagName('script');
	for (var i = 0, s, iMax = scripts.length; i < iMax; i++) {
		s = scripts[i];
		if (s.src.match(/\/api\/js\/videoiframe\.js(\?.*)?$/)) {
			path = s.src.replace(/\/api\/js\/videoiframe\.js(\?.*)?$/, '');
			break;
		} else if (s.src.match(/\/js\/videoiframe\.js(\?.*)?$/)) {
			path = s.src.replace(/\/js\/videoiframe\.js(\?.*)?$/, '');
			break;
		}
	}
	var iframe = document.createElement('iframe');
	var width = videoParent.clientWidth;
	var height = videoParent.clientHeight;
	if (width === 0) {
		width = videoParent.offsetWidth;
	}
	if (height === 0) {
		height = videoParent.offsetHeight;
	}
	iframe.width = width;
	iframe.height = height;
	iframe.setAttribute('frameBorder', '0');
	iframe.setAttribute('scrolling', 'no');
	iframe.src = path + '/#!id=' + videoId;
	if ( typeof site === 'string' && site.length > 0 ) {
		iframe.src += '&site=' + site;
	}
	if ( typeof index === 'number' && index > 0 ) {
		iframe.src += '&index='	+ index;
	}
	if (typeof optionsObject === 'object' && optionsObject) {
		if (typeof optionsObject.na === 'boolean' && optionsObject.na === true) {
			iframe.src += '&na';
		}
	}

	/*
	if ( typeof skin === 'string' && skin.length > 0 && skin.length < 32 ) {
		iframe.src += '&skin=' + skin;
	}
	if ( typeof disableautoplay === 'boolean' && disableautoplay === true ) {
		iframe.src += '&disableautoplay=true';
	}*/
	iframe.style.border = '0px';
	iframe.style.padding = '0';
	if (videoParent.hasChildNodes()) {
		videoParent.innerHTML = '';
	}
	videoParent.appendChild(iframe);
	return true;
}
