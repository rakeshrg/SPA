'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('root', {
            url: '/root',
            templateUrl: '../templates/root.html',
        })

        .state('root.work', {
            url: '/work',
            templateUrl: '../templates/work.html',
            controller:'workController'
        })

        .state('root.overview', {
            url: '/overview',
            templateUrl: '../templates/overview.html'
        })

        .state('root.contact', {
            url: '/contact',
            templateUrl: '../templates/contact.html'
        })

        .state('root.producer', {
            url: '/producer',
            templateUrl: '../templates/producer.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: '../templates/login.html',
            controller:'login'
        })
});