var services = angular.module('starter.services', []),
	controllers = angular.module('starter.controllers', ['starter.services']),
	filters = angular.module('starter.filters', []),
	directives = angular.module('starter.directives', []),
	factories = angular.module('starter.factories', []),
	app = angular.module('starter', [
		'starter.controllers', 'starter.filters', 'starter.services', 'starter.directives', 'starter.factories', 'pascalprecht.translate', 'LanguageConfigModule'
	]);
// app.config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise("app/main");
//   $stateProvider
//     .state('app', {
//       url: "/app",
//       templateUrl: "app/app.html",
//       controller: 'appCtrl'
//     })
//     .state('app.home', {
//       url: "/home",
//       templateUrl: "pages/home/home.html",
//       controller: 'homeCtrl'
//     })
//     .state('app.main', {
//       url: "/main",
//       templateUrl: "pages/main/main.html",
//       controller: 'mainCtrl'
//     })
//     .state('app.goBang', {
//       url: "/goBang",
//       templateUrl: "pages/goBang/goBang.html",
//       controller: 'goBangCtrl'
//     });
// });
