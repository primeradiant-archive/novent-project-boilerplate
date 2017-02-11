NoventEngine.novent().page(0).event(1, function(container, page, resolve) {
    createjs.Tween.get(page.scope.text).wait(1000).call(function() {
      createjs.Tween.get(page.scope.text).to({alpha: 0}, 2000).call(function() {
        createjs.Tween.get(page.scope.thedream).to({volume: 0}, 2000).call(function() {
            resolve();
        });
      });
    });
});
