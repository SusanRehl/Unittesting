(function() {
  'use strict';

  angular.module('meetIrl', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });

  console.log("hello from app.js");
})();
