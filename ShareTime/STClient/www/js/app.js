// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',"starter.HTTPServices"])

.run(function($ionicPlatform,$rootScope) {
  //是否隐藏分栏
  $rootScope.isHideTabBar = false;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.st', {
    url: '/st',
    views: {
      'tab-st': {
        templateUrl: 'templates/tab-st.html',
        controller: 'STController'
      }
    }
  })
    .state('tab.message', {
      url: '/message/:userID',
      views: {
        'tab-st': {
          templateUrl: 'templates/message.html',
          controller: 'MessageController'
        }
      }
    })
  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsController'
        }
      }
    })
    .state('tab.rank', {
      url: '/rank',
      views: {
        'tab-rank': {
          templateUrl: 'templates/tab-rank.html',
          controller: 'RankController'
        }
      }
    })
  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/tab-user.html',
        controller: 'UserController'
      }
    }
  });
  //switch 中的default
  $urlRouterProvider.otherwise('/tab/st');

});