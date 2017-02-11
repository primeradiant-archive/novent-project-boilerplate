NoventEngine.novent().page(1).event(0, function(container, page, resolve) {
    createjs.Tween.get(page.scope.text).wait(2000).call(function() {
      createjs.Tween.get(page.scope.text).to({alpha: 1}, 2000).call(function() {
        createjs.Tween.get(page.scope.text).wait(2000).call(function() {
            resolve();
        });
      });
    });
});
