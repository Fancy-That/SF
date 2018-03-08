app.controller("tController", function($scope, $interval){
	document.title = "Home";
	$scope.tTime = new Date().toLocaleTimeString();
	$interval(function(){
			$scope.tTime = new Date().toLocaleTimeString();
	}, 1000);
});



app.controller("cTheory", function($scope, $sce){
	document.title = "Theory";
	$scope.theoryItems = [];
	
	$http.get("./static/json/theory.json").then(function(res){
		$scope.theoryItems = res.data;
		for (var i = 0; i < $scope.theoryItems.length; i++)
			$scope.theoryItems[i].content = $sce.trustAsHtml($scope.theoryItems[i].content);
	});
});

app.controller("cProjects", function($scope, $sce){
	document.title = "Projects";
	$scope.gitItems = [];
	
	$http.get("./static/json/githubProjects.json").then(function(res){
		$scope.gitItems = res.data;
		for (var i = 0; i < $scope.gitItems.length; i++)
			$scope.gitItems[i].content = $sce.trustAsHtml($scope.gitItems[i].content);
	});

	$scope.otherItems = [];
	
	$http.get("./static/json/otherProjects.json").then(function(res){
		$scope.otherItems = res.data;
		for (var i = 0; i < $scope.otherItems.length; i++)
			$scope.otherItems[i].content = $sce.trustAsHtml($scope.otherItems[i].content);
	});
});

app.controller("cTwisty", function($scope, $sce){
	document.title = "Puzzles";
	$scope.items = [];
	
	$http.get("./static/json/puzzles.json").then(function(res){
		$scope.items = res.data;
		for (var i = 0; i < $scope.items.length; i++)
			$scope.items[i].content = $sce.trustAsHtml($scope.items[i].content);
	});
});