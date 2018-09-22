(function () {
    'use strict';
    angular.module('MenuApp', ['ui.router', 'Data'])
.config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Back to home page if no matches found
        $urlRouterProvider.otherwise('/');        
        $stateProvider
        // Redirects to Home page
    .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
    })

	.state('categoriesState', {
	    url: '/categories',
	    templateUrl: 'src/menuapp/templates/categories.template.html',
	    controller: 'CategoriesController as categoriesCtrl',
	    resolve: {
	        items: ['MenuDataService', function (MenuDataService) {
	            var menuItems = MenuDataService.getAllCategories();
	            return menuItems;

	        } ]
	    }
	})

	.state('itemsState', {
	    url: '/items/{categoryShortName}',
	    templateUrl: 'src/menuapp/templates/items.template.html',
	    controller: 'ItemsController as itemsCtrl',
	    resolve: {
	        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {	            
	            var menuitems = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
	            return menuitems;
	        } ]
	    }
	});
    }

})();
