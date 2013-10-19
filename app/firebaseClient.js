App.firebase = (function(){
	var baseUrl = 'https://mobilejam.firebaseio.com/';
	var init = function() {
		var tracksRef = new Firebase(baseUrl + 'tracks');
		App.tracksRef = tracksRef;
		tracksRef.push().set([{foo: 'wilma', text: 'Hello'}]);
	};
	
	return {
		baseUrl: baseUrl,
		init: init
	};
})();
