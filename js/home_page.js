var homeApp = angular.module('homeApp',[]);
homeApp.run(['$rootScope',function($rootScope){
	$rootScope.test = "<a href='#'>run</a>"
}]);

