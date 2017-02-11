NoventEngine.novent().page(0).event(0, function(container, page, resolve) {
    page.scope.thedream = createjs.Sound.play("thedream");
    page.scope.thedream.loop = true;
    page.scope.thedream.volume = 1;

    createjs.Tween.get(page.scope.smoke1, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);

    createjs.Tween.get(page.scope.smoke2).wait(1000).call(function() {
      createjs.Tween.get(page.scope.smoke2, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);
    });

    createjs.Tween.get(page.scope.smoke3).wait(2000).call(function() {
      createjs.Tween.get(page.scope.smoke3, {loop: true}).to({y: -150, alpha: 0.7}, 2000).to({y: -300, alpha: 0}, 2000);
    });

    createjs.Tween.get(page.scope.text).wait(4000).call(function() {
      createjs.Tween.get(page.scope.text).to({alpha: 1}, 2000).call(function() {
        createjs.Tween.get(page.scope.text).wait(2000).call(function() {
            resolve();
        });
      });
    });
});
