NoventEngine.novent().page(1, "page 1", {}, function(container, page) {
  page.scope.text = new createjs.Text("Page 1.", "bold 24px Amita", "#FFFFFF");
	page.scope.text.maxWidth = 1000;
	page.scope.text.textAlign = "center";
	page.scope.text.textBaseline = "middle";
	page.scope.text.x = 960;
	page.scope.text.y = 540;
  page.scope.text.alpha = 0;
	container.addChild(page.scope.text);
});
