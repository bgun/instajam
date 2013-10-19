App.firebase = (function(){
	var baseUrl = 'https://mobilejam.firebaseio.com/';
	var init = function() {
		var tracksRef = new Firebase(baseUrl + 'tracks');
		App.tracksRef = tracksRef;
		tracksRef.push().set([{foo: 'wilma', text: 'Hello'}]);
	};
	// var getSnapshot = function(ref, cb) {
	// 	ref.on('child_added', function(snapshot) {
	// 	  console.log(snapshot.val());
	// 	});
	// };
	
	return {
		baseUrl: baseUrl,
		init: init
	};
})();
