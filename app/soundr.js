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
		long: [],
		drums: []
	},

	presets: {
		strings: function(){
			
			var a = new Gibberish.PolyKarplusStrong({damping:.6, maxVoices:16, amp:2}).connect();
			
			App.soundr.play.strings[15] = function(){a.note(130.813);};
			App.soundr.play.strings[14] = function(){a.note(146.832);};
			App.soundr.play.strings[13] = function(){a.note(174.614);};
			App.soundr.play.strings[12] = function(){a.note(195.998);};
			App.soundr.play.strings[11] = function(){a.note(220);};
			App.soundr.play.strings[10] = function(){a.note(261.626);};
			App.soundr.play.strings[9] = function(){a.note(293.664);};
			App.soundr.play.strings[8] = function(){a.note(349.228);};
			App.soundr.play.strings[7] = function(){a.note(391.995);};
			App.soundr.play.strings[6] = function(){a.note(440);};
			App.soundr.play.strings[5] = function(){a.note(523.251);};
			App.soundr.play.strings[4] = function(){a.note(587.330);};
			App.soundr.play.strings[3] = function(){a.note(659.255);};
			App.soundr.play.strings[2] = function(){a.note(783.991);};
			App.soundr.play.strings[1] = function(){a.note(880.000);};
			App.soundr.play.strings[0] = function(){a.note(1046.50);};
			
		},
	
		synth2: function(){
			var a =	new Gibberish.PolySynth({ amp:.5, attack:44, decay:22050, maxVoices:16}).connect();
			
			App.soundr.play.synth2[15] = function(){a.note(130.813);};
			App.soundr.play.synth2[14] = function(){a.note(146.832);};
			App.soundr.play.synth2[13] = function(){a.note(174.614);};
			App.soundr.play.synth2[12] = function(){a.note(195.998);};
			App.soundr.play.synth2[11] = function(){a.note(220);};
			App.soundr.play.synth2[10] = function(){a.note(261.626);};
			App.soundr.play.synth2[9] = function(){a.note(293.664);};
			App.soundr.play.synth2[8] = function(){a.note(349.228);};
			App.soundr.play.synth2[7] = function(){a.note(391.995);};
			App.soundr.play.synth2[6] = function(){a.note(440);};
			App.soundr.play.synth2[5] = function(){a.note(523.251);};
			App.soundr.play.synth2[4] = function(){a.note(587.330);};
			App.soundr.play.synth2[3] = function(){a.note(659.255);};
			App.soundr.play.synth2[2] = function(){a.note(783.991);};
			App.soundr.play.synth2[1] = function(){a.note(880.000);};
			App.soundr.play.synth2[0] = function(){a.note(1046.50);};

		},
		
		long: function(){
			var a =	new Gibberish.PolySynth({ amp:.5, attack:440, decay:22050, maxVoices:16}).connect();
			var b = new Gibberish.Flanger({input:a, rate:.5, amount:125, feedback:.7}).connect();
			
			App.soundr.play.long[15] = function(){a.note(130.813);};
			App.soundr.play.long[14] = function(){a.note(146.832);};
			App.soundr.play.long[13] = function(){a.note(174.614);};
			App.soundr.play.long[12] = function(){a.note(195.998);};
			App.soundr.play.long[11] = function(){a.note(220);};
			App.soundr.play.long[10] = function(){a.note(261.626);};
			App.soundr.play.long[9] = function(){a.note(293.664);};
			App.soundr.play.long[8] = function(){a.note(349.228);};
			App.soundr.play.long[7] = function(){a.note(391.995);};
			App.soundr.play.long[6] = function(){a.note(440);};
			App.soundr.play.long[5] = function(){a.note(523.251);};
			App.soundr.play.long[4] = function(){a.note(587.330);};
			App.soundr.play.long[3] = function(){a.note(659.255);};
			App.soundr.play.long[2] = function(){a.note(783.991);};
			App.soundr.play.long[1] = function(){a.note(880.000);};
			App.soundr.play.long[0] = function(){a.note(1046.50);};

		},
		
		synth: function(){
			var a = new Gibberish.PolyKarplusStrong({damping:.4, maxVoices:16, amp:2}).connect(); 
			var b = new Gibberish.Reverb({input:a, roomSize:.7, wet:1, dry:.25}).connect();

			App.soundr.play.synth[15] = function(){a.note(130.813);};
			App.soundr.play.synth[14] = function(){a.note(146.832);};
			App.soundr.play.synth[13] = function(){a.note(174.614);};
			App.soundr.play.synth[12] = function(){a.note(195.998);};
			App.soundr.play.synth[11] = function(){a.note(220);};
			App.soundr.play.synth[10] = function(){a.note(261.626);};
			App.soundr.play.synth[9] = function(){a.note(293.664);};
			App.soundr.play.synth[8] = function(){a.note(349.228);};
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
			
			var a0 = new Gibberish.Kick({tone:30}).connect();
			var a1 = new Gibberish.Snare({snappy:.3}).connect();
			var a2 = new Gibberish.Hat({amp:2, pitch:275}).connect();
			var a3 = new Gibberish.Cowbell({amp:.05, pitch:530}).connect();
			var a4 = new Gibberish.Conga({}).connect();
			var a5 = new Gibberish.Tom({}).connect();
			var a6 = new Gibberish.Clave({pitch:2200}).connect();
			
			var a7 = new Gibberish.Kick({tone:80}).connect();
			var a8 = new Gibberish.Snare({snappy:.8}).connect();
			var a9 = new Gibberish.Hat({amp:2, pitch: 375}).connect();
			var a10 = new Gibberish.Cowbell({amp:.05, pitch: 580}).connect();
			var a11 = new Gibberish.Conga({}).connect();
			var a12 = new Gibberish.Tom({}).connect();
			var a13 = new Gibberish.Clave({pitch:2700}).connect();
			
			App.soundr.play.drums[15] = function(){a0.note();};
			App.soundr.play.drums[14] = function(){a1.note();};
			App.soundr.play.drums[13] = function(){a2.note();};
			App.soundr.play.drums[12] = function(){a3.note();};
			App.soundr.play.drums[11] = function(){a4.note();};
			App.soundr.play.drums[10] = function(){a5.note();};
			App.soundr.play.drums[9] = function(){a6.note();};
			App.soundr.play.drums[8] = function(){a7.note();};
			App.soundr.play.drums[7] = function(){a8.note();};
			App.soundr.play.drums[6] = function(){a9.note();};
			App.soundr.play.drums[5] = function(){a10.note();};
			App.soundr.play.drums[4] = function(){a11.note();};
			App.soundr.play.drums[3] = function(){a12.note();};
			App.soundr.play.drums[2] = function(){a13.note();};
		}
	},
	
	init: function() {
		Gibberish.init();
		App.soundr.presets.strings();
		App.soundr.presets.synth();
		//App.soundr.presets.long();
		App.soundr.presets.synth2();
		App.soundr.presets.drums();
		//Gibberish.Binops.export();
	}
};

