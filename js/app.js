// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','mobiscroll-select', 'starter.services','starter.directive'])

.run(function($ionicPlatform) {
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

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {


  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');



  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.nearby', {
    url: '/nearby',
    views: {
      'tab-nearby': {
        templateUrl: 'templates/nearby/nearby.html',
        controller: 'NearbyCtrl'
      }
    }
  })
  .state('tab.nearby-theme', {
    url: '/nearby-theme',
    views: {
      'tab-nearby': {
        templateUrl: 'templates/nearby/nearby-theme.html',
        controller: 'NearbyThemeCtrl'
      }
    }
  })
  .state('tab.find', {
      url: '/find',
      views: {
        'tab-find': {
          templateUrl: 'templates/find/find.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.talk', {
    url: '/talk',
    views: {
      'tab-talk': {
        templateUrl: 'templates/talk/talk.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/user.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.register', {
    url: '/register',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  .state('tab.register-school', {
    url: '/register-school',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/register-school.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  .state('tab.register-major', {
    url: '/register-major',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/register-major.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  .state('tab.register-date', {
    url: '/register-date',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/register-date.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  .state('tab.register-detail', {
    url: '/register-detail',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/register-detail.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  .state('tab.register-phone', {
    url: '/register-phone',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/register-phone.html',
        controller: 'RegisterCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/nearby');

});
