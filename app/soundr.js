App.soundr = {
	
	tick: function(data){
		for (var i=0; i < data.tracks.length; i++) {
			var style = data.style;
			if(typeof data.style === "undefined"){
				style = 'strings';
			}
			if(typeof App.soundr.play[style][data.tracks[i]] != "undefined"){
				App.soundr.play[style][data.tracks[i]]();
			}
		}
	},
	
	play: {
		strings: [],
		synth: [],
		synth2: [],
		drums: []
	},

	presets: {
		strings: function(){
			
			var a = new Gibberish.PolyKarplusStrong({damping:.8, maxVoices:16, amp:2}).connect();
			
			App.soundr.play.strings[15] = function(){a.note(130.813);};
			App.soundr.play.strings[14] = function(){a.note(146.832);};
			App.soundr.play.strings[13] = function(){a.note(164.814);};
			App.soundr.play.strings[12] = function(){a.note(195.998);};
			App.soundr.play.strings[11] = function(){a.note(220);};
			App.soundr.play.strings[10] = function(){a.note(261.626);};
			App.soundr.play.strings[9] = function(){a.note(293.664);};
			App.soundr.play.strings[8] = function(){a.note(329.628);};
			App.soundr.play.strings[7] = function(){a.note(391.995);};
			App.soundr.play.strings[6] = function(){a.note(440);};
			App.soundr.play.strings[5] = function(){a.note(523.251);};
			App.soundr.play.strings[4] = function(){a.note(587.330);};
			App.soundr.play.strings[3] = function(){a.note(659.255);};
			App.soundr.play.strings[2] = function(){a.note(783.991);};
			App.soundr.play.strings[1] = function(){a.note(880.000);};
			App.soundr.play.strings[0] = function(){a.note(1046.50);};
			
		},
	
		synth: function(){
			var a =	new Gibberish.PolySynth({ amp:.5, attack:44, decay:4410, maxVoices:16}).connect();
			
			App.soundr.play.synth2[15] = function(){a.note(130.813);};
			App.soundr.play.synth2[14] = function(){a.note(146.832);};
			App.soundr.play.synth2[13] = function(){a.note(164.814);};
			App.soundr.play.synth2[12] = function(){a.note(195.998);};
			App.soundr.play.synth2[11] = function(){a.note(220);};
			App.soundr.play.synth2[10] = function(){a.note(261.626);};
			App.soundr.play.synth2[9] = function(){a.note(293.664);};
			App.soundr.play.synth2[8] = function(){a.note(329.628);};
			App.soundr.play.synth2[7] = function(){a.note(391.995);};
			App.soundr.play.synth2[6] = function(){a.note(440);};
			App.soundr.play.synth2[5] = function(){a.note(523.251);};
			App.soundr.play.synth2[4] = function(){a.note(587.330);};
			App.soundr.play.synth2[3] = function(){a.note(659.255);};
			App.soundr.play.synth2[2] = function(){a.note(783.991);};
			App.soundr.play.synth2[1] = function(){a.note(880.000);};
			App.soundr.play.synth2[0] = function(){a.note(1046.50);};

		},
		
		synth2: function(){
			var a = new Gibberish.PolyFM({ amp:.5, cmRatio:10, index:3, attack:8000, decay:5000, maxVoices:16 }).connect(); 
			
			App.soundr.play.synth[15] = function(){a.note(130.813);};
			App.soundr.play.synth[14] = function(){a.note(146.832);};
			App.soundr.play.synth[13] = function(){a.note(164.814);};
			App.soundr.play.synth[12] = function(){a.note(195.998);};
			App.soundr.play.synth[11] = function(){a.note(220);};
			App.soundr.play.synth[10] = function(){a.note(261.626);};
			App.soundr.play.synth[9] = function(){a.note(293.664);};
			App.soundr.play.synth[8] = function(){a.note(329.628);};
			App.soundr.play.synth[7] = function(){a.note(391.995);};
			App.soundr.play.synth[6] = function(){a.note(440);};
			App.soundr.play.synth[5] = function(){a.note(523.251);};
			App.soundr.play.synth[4] = function(){a.note(587.330);};
			App.soundr.play.synth[3] = function(){a.note(659.255);};
			App.soundr.play.synth[2] = function(){a.note(783.991);};
			App.soundr.play.synth[1] = function(){a.note(880.000);};
			App.soundr.play.synth[0] = function(){a.note(1046.50);};

		},

		drums: function(){
			
			var a0 = new Gibberish.Kick({}).connect();
			var a1 = new Gibberish.Snare({}).connect();
			var a2 = new Gibberish.Hat({amp:2}).connect();
			var a3 = new Gibberish.Cowbell({amp:.1}).connect();
			var a4 = new Gibberish.Conga({}).connect();
			var a5 = new Gibberish.Tom({}).connect();
			var a6 = new Gibberish.Clave({}).connect();
			
			App.soundr.play.drums[15] = function(){a0.note();};
			App.soundr.play.drums[14] = function(){a1.note();};
			App.soundr.play.drums[13] = function(){a2.note();};
			App.soundr.play.drums[12] = function(){a3.note();};
			App.soundr.play.drums[11] = function(){a4.note();};
			App.soundr.play.drums[10] = function(){a5.note();};
			App.soundr.play.drums[9] = function(){a6.note();};
		}
	},
	
	init: function() {
		Gibberish.init();
		App.soundr.presets.strings();
		App.soundr.presets.synth();
		App.soundr.presets.synth2();
		App.soundr.presets.drums();
		//Gibberish.Binops.export();
	}
};

