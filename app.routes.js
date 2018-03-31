(function () {
  'use strict'

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider']

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/dashboard',
        controller: 'controller',
        templateUrl: '/feature/Home/home.html'
      .state('404', {
        url: '/404',
        templateUrl: '/feature/404/404.html'
      })
    $urlRouterProvider.when('', '/')
    $urlRouterProvider.otherwise('/404')
  }
})()