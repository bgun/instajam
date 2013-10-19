App.firebase = (function(){
	var baseUrl = 'https://mobilejam.firebaseio.com/';
	var init = function() {
		var songsRef = new Firebase(baseUrl + 'songs');
		window.songsRef = songsRef;
		songsRef.push().set([{foo: 'wilma', text: 'Hello'}]);
	};
	
	return {
		baseUrl: baseUrl,
		init: init
	};
})();
