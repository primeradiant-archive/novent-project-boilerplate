NoventEngine.novent("novent").page(0).event(2, function(container, page, resolve) {
  createjs.Tween.get(page.scope.eye2).wait(1500).call(function() {
    createjs.Tween.get(page.scope.eye2).to({y: 0}, 1500);
    createjs.Tween.get(page.scope.eye1).to({y: 0}, 1500).call(function() {
        resolve();
    });
  });
});
