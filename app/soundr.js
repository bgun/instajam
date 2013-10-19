App.soundr = {
	init: function() {
		Gibberish.init();
		Gibberish.Time.export();
		Gibberish.Binops.export();
	},
	
	aString: function() {
		a = new Gibberish.KarplusStrong({ damping:.6 }).connect(); 
		a.note(440);
	}
};
