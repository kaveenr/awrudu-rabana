$("body").ready(function(){
  var freeverb = new Tone.Freeverb().toMaster();
  var env = new Tone.Envelope({
  	"attack" : 0,
  	"decay" : 0.1,
  	"sustain" : 1,
  	"release" : 0.5,
  });

  var rabana1 = new Tone.Sampler("samples/Rabana_1.wav").connect(freeverb);

  var rabana2 = new Tone.Sampler("samples/Rabana_2.wav").connect(freeverb);

  rabana1.envelope = env;
  rabana2.envelope = env;

  rabana1.volume.value = 3;
  rabana2.volume.value = 3;


  $("body").keydown(function(event) {
    if(event.keyCode == 90){
      anim();
      rabana1.triggerAttack(0, "+0.2", 1);
    }else if(event.keyCode == 191){
      anim();
      rabana2.triggerAttack(0, "+0.2", 1);
    }
  });

  function anim(){
    $(".visual").addClass("visual-boom");
    setTimeout(function(){
      $(".visual").removeClass("visual-boom");
    },100);
  }

})
