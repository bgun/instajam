App.firebase = (function(){
	var init = function() {
		var songsRef = new Firebase('https://mobilejam.firebaseio.com/songs');
		window.songsRef = songsRef;
		songsRef.push().set([{foo: 'wilma', text: 'Hello'}]);
	};
	
	return {
		init: init
	};
})();
