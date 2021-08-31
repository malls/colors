window.onload = function() {

	var rgb,
		hex,
		i = 0;

	const names = {
		'191970': 'midnightblue',
		'696969': 'dimgray',
		'708090': 'slategray',
		'778899': 'lightslategray',
		'808080': 'gray',
		F0F8FF: 'aliceblue',
		FAEBD7: 'antiquewhite',
		'7FFFD4': 'aquamarine',
		F0FFFF: 'azure',
		F5F5DC: 'beige',
		FFE4C4: 'bisque',
		'000000': 'black',
		FFEBCD: 'blanchedalmond',
		'0000FF': 'blue',
		'8A2BE2': 'blueviolet',
		A52A2A: 'brown',
		DEB887: 'burlywood',
		'5F9EA0': 'cadetblue',
		'7FFF00': 'chartreuse',
		D2691E: 'chocolate',
		FF7F50: 'coral',
		'6495ED': 'cornflowerblue',
		FFF8DC: 'cornsilk',
		'00FFFF': 'cyan',
		B8860B: 'darkgoldenrod',
		'006400': 'darkgreen',
		BDB76B: 'darkkhaki',
		'556B2F': 'darkolivegreen',
		FF8C00: 'darkorange',
		'9932CC': 'darkorchid',
		E9967A: 'darksalmon',
		'8FBC8F': 'darkseagreen',
		'483D8B': 'darkslateblue',
		'2F4F4F': 'darkslategray',
		'00CED1': 'darkturquoise',
		'9400D3': 'darkviolet',
		FF1493: 'deeppink',
		'00BFFF': 'deepskyblue',
		'1E90FF': 'dodgerblue',
		B22222: 'firebrick',
		FFFAF0: 'floralwhite',
		'228B22': 'forestgreen',
		DCDCDC: 'gainsboro',
		F8F8FF: 'ghostwhite',
		FFD700: 'gold',
		DAA520: 'goldenrod',
		'008000': 'green',
		ADFF2F: 'greenyellow',
		F0FFF0: 'honeydew',
		FF69B4: 'hotpink',
		CD5C5C: 'indianred',
		FFFFF0: 'ivory',
		F0E68C: 'khaki',
		E6E6FA: 'lavender',
		FFF0F5: 'lavenderblush',
		'7CFC00': 'lawngreen',
		FFFACD: 'lemonchiffon',
		ADD8E6: 'lightblue',
		F08080: 'lightcoral',
		E0FFFF: 'lightcyan',
		EEDD82: 'lightgoldenrod',
		FAFAD2: 'lightgoldenrodyellow',
		D3D3D3: 'lightgray',
		FFB6C1: 'lightpink',
		FFA07A: 'lightsalmon',
		'20B2AA': 'lightseagreen',
		'87CEFA': 'lightskyblue',
		'8470FF': 'lightslate',
		B0C4DE: 'lightsteelblue',
		FFFFE0: 'lightyellow',
		'32CD32': 'limegreen',
		FAF0E6: 'linen',
		FF00FF: 'magenta',
		B03060: 'maroon',
		'66CDAA': 'mediumaquamarine',
		'0000CD': 'mediumblue',
		BA55D3: 'mediumorchid',
		'9370DB': 'mediumpurple',
		'3CB371': 'mediumseagreen',
		'7B68EE': 'mediumslateblue',
		'00FA9A': 'mediumspringgreen',
		'48D1CC': 'mediumturquoise',
		C71585: 'mediumviolet',
		F5FFFA: 'mintcream',
		FFE4E1: 'mistyrose',
		FFE4B5: 'moccasin',
		FFDEAD: 'navajowhite',
		'000080': 'navy',
		FDF5E6: 'oldlace',
		'6B8E23': 'olivedrab',
		FFA500: 'orange',
		FF4500: 'orangered',
		DA70D6: 'orchid',
		EEE8AA: 'palegoldenrod',
		'98FB98': 'palegreen',
		AFEEEE: 'paleturquoise',
		DB7093: 'palevioletred',
		FFEFD5: 'papayawhip',
		FFDAB9: 'peachpuff',
		CD853F: 'peru',
		'FFC0CB': 'pink',
		DDA0DD: 'plum',
		B0E0E6: 'powderblue',
		A020F0: 'purple',
		FF0000: 'red',
		BC8F8F: 'rosybrown',
		'4169E1': 'royalblue',
		'8B4513': 'saddlebrown',
		FA8072: 'salmon',
		F4A460: 'sandybrown',
		'2E8B57': 'seagreen',
		FFF5EE: 'seashell',
		A0522D: 'sienna',
		'87CEEB': 'skyblue',
		'6A5ACD': 'slateblue',
		FFFAFA: 'snow',
		'00FF7F': 'springgreen',
		'4682B4': 'steelblue',
		D2B48C: 'tan',
		D8BFD8: 'thistle',
		FF6347: 'tomato',
		'40E0D0': 'turquoise',
		EE82EE: 'violet',
		D02090: 'violetred',
		F5DEB3: 'wheat',
		FFFFFF: 'white',
		F5F5F5: 'whitesmoke',
		FFFF00: 'yellow',
		'9ACD32': 'yellowgreen',
	};


	function random() {
		return Math.ceil(Math.random() * 257 - 1);
	}

	function randomSet() {
		return [random(), random(), random()];
	}

	function numberToHex(number) {
		var hex = number.toString(16);
		var str = hex + '';
		if (str.length === 1) {
			return '0' + hex;
		}
		return hex;
	}

	function toHex(input) {
		var hex = numberToHex(input[0]) + numberToHex(input[1]) + numberToHex(input[2]);
		return hex;
	}

	function hexToNumber (hex) {
		return parseInt(hex, 16);
	}


	function toRgb (hex) {
		hex = hex.toString();
		return [hexToNumber(hex[0] + hex[1]), hexToNumber(hex[2] + hex[3]), hexToNumber(hex[4] + hex[5])];
	}


	function changer(hex, rgb) {
		document.getElementsByTagName('div')[0].style.backgroundColor = 'rgb(' + rgb + ')';
		document.getElementsByTagName('span')[0].innerText = '#' + hex;
		document.getElementsByTagName('span')[1].innerText = rgb;
		if (names[hex.toUpperCase()]) {
			document.getElementsByTagName('span')[2].innerText = names[hex.toUpperCase()];
		} else {
			document.getElementsByTagName('span')[2].innerText = '';
		}
	}

	function swap() {
		i++;
		if (i % 13 === 0) {
			rgb = randomSet();
			hex = toHex(rgb);
			changer(hex, rgb);
			const state = {
				hex,
				rgb
			};

			history.pushState(state, hex, hex);
		} else {
			console.log('when does this trigger??')
		}
	}

	window.onpopstate = function(e) {
		if (e.state) {
			hex = e.state.hex;
			rgb = e.state.rgb;
		} else if (window.location.pathname.length > 1) {
			hex = window.location.pathname.substr(1);
			rgb = toRgb(hex);
		}

		changer(hex, rgb);
	};


	function changeColors(e) {
		if (e.target.localName !== 'div') return;
		e.preventDefault();
		rgb = randomSet();
		hex = toHex(rgb);
		changer(hex, rgb);
		history.pushState({
			hex: hex,
			rgb: rgb
		}, hex, hex);
	}

	document.onclick = changeColors;

	document.ontouchstart = changeColors;

}