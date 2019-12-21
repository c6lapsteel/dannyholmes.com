// JavaScript Document - Update el Values
	var elinks = document.getElementsByClassName('e-l');
	var total_elinks = elinks.length;
	for( var i=0; i < total_elinks; i++ ){
		var part1 = elinks[i].getAttribute('data-ep1');
		var part2 = elinks[i].getAttribute('data-ep2');
		var part3 = elinks[i].getAttribute('data-ep3');
		var newAddress = part1+'@'+part2+'.'+part3;
		elinks[i].setAttribute('href','mailto:'+newAddress);
		elinks[i].innerHTML = newAddress;
	}