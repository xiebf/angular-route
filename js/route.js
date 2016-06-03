var route = angular.module('mainApp',['ui.router']);

route.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/HomePage");  //默认路径 '/page1'

    $stateProvider
        .state("HomePage", {   //对应ui-sref
            url: "/HomePage",  //路径
            templateUrl: "HomePage/homePage.html"   //对应模板
        })
        .state("page1", {
            url: "/page1",
            templateUrl: "ChildPage/page1.html"
        })
        .state("page2", {
            url: "/page2",
            templateUrl: "ChildPage/page2.html"
        });

});



/*初始化全局的数据，只对$rootScope起作用*/
    route.run(['$rootScope','$state',function($rootScope,$state){
    	$rootScope.test = "test";
        $rootScope.url="http://www.baidu.com";    /*可用来定义一些全局的属性和方法，供其他控制器使用*/
       	console.log($rootScope.url);
       	$state.go('/page1');
       	test();
    }]);
    
	var test = function(){
		console.log("state");
	}
