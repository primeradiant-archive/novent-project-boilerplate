NoventEngine.novent().page(0, "page 0", {
  smoke: 'images/smoke.png',
  particle: 'images/particle.png',
  eye1: 'images/eye1.png',
  eye2: 'images/eye2.png',
  thedream: 'musics/thedream.wav'
}, function(container, page) {
  page.scope.particleType = true;
  for(var i = 0; i < 100; i++)
    createParticle();

  page.scope.smoke1 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke1.x = - 300;
  page.scope.smoke1.alpha = 0;
  container.addChild(page.scope.smoke1);

  page.scope.smoke2 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke2.x = - 600;
  page.scope.smoke2.alpha = 0;
  container.addChild(page.scope.smoke2);

  page.scope.smoke3 = new createjs.Bitmap(page.lib.smoke);
  page.scope.smoke3.x = - 900;
  page.scope.smoke3.alpha = 0;
  container.addChild(page.scope.smoke3);

  page.scope.text = new createjs.Text("Page 0.", "bold 24px Amita", "#FFFFFF");
	page.scope.text.maxWidth = 1000;
	page.scope.text.textAlign = "center";
	page.scope.text.textBaseline = "middle";
	page.scope.text.x = 960;
	page.scope.text.y = 540;
  page.scope.text.alpha = 0;
	container.addChild(page.scope.text);

  page.scope.eye1 = new createjs.Bitmap(page.lib.eye1);
  page.scope.eye1.x = 0;
  page.scope.eye1.y = 1080;
  page.scope.eye1.alpha = 1;
  container.addChild(page.scope.eye1);

  page.scope.eye2 = new createjs.Bitmap(page.lib.eye2);
  page.scope.eye2.x = 0;
  page.scope.eye2.y = -1080;
  page.scope.eye2.alpha = 1;
  container.addChild(page.scope.eye2);

  function createParticle() {
    var particle;
    if(page.scope.particleType)
      particle = new createjs.Bitmap(page.lib.particle);
    else
      particle = new createjs.Bitmap(page.lib.particle2);
    particle.x = Math.abs(Math.random()*1920);
    particle.y = 1090;
    var test = Math.round(Math.random());
    if(test === 0)
      container.addChildAt(particle, container.getChildIndex(page.scope.portrait));
    else
      container.addChildAt(particle, container.getChildIndex(page.scope.portrait) + 1);
    var scale = Math.abs(Math.random()*0.04) + 0.02;
    particle.scaleX = scale;
    particle.scaleY = scale;
    particle.alpha = Math.abs(Math.random()*0.5) + 0.4;

    var wait = Math.random()*10000;

    createjs.Tween.get(particle).wait(wait).to({y: 0}, 10000, createjs.Ease.quadInOut);
    createjs.Tween.get(particle).wait(wait)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut)
      .to({x: particle.x + Math.abs((Math.random()*2 - 1)*100)}, 2000, createjs.Ease.quadInOut);

    createjs.Tween.get(particle).wait(wait).to({alpha: 0}, Math.random()*5000 + 4000).call(function() {
      particle.visible = false;
      container.removeChild(particle);
      createParticle();
    });
  }
});
