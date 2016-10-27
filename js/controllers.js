angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.ceshi = function() {
    alert('ceshi');
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$state) {
  $scope.settings = {
    enableFriends: true
  };


  $scope.login = function() {
    alert('ceshi');
  }


})
.controller('RegisterCtrl', function($scope,$state) {

  $scope.register = function() {
    $state.go('tab.register-school');

  }

  $scope.login = function() {
    alert('ceshi');
  }


  $scope.school = [
      '南京信息工程大学',
      '南京大学',
      '南京工业大学',
      '南京理工大学',
      '南京农业大学',
      '南京信息工程大学滨江学院',
      '南京小庄学院',
      '东南大学',
      '北京大学',
      '清华大学',
      '上海大学',
      '复旦大学',
      '同济大学',
      '上海理工大学',
      '上海体育学院',
      '上海财经大学',
      '上海开发大学',
      '上海电力学院',
      ];

  $scope.searchContent = {
    key : '',
  }


  $scope.show = true;
  $scope.ItemArr2 = [];                     //搜索后页面遍历显示的数组
  $scope.search = function(){
    $scope.ItemArr2 = [];                   //每次搜索先清空数组内容
    for(var i=0;i<$scope.school.length;i++){
       if($scope.school[i].indexOf($scope.searchContent.key) >=0) {
         $scope.ItemArr2.push($scope.school[i]);
       }
    }

    if($scope.ItemArr2 == ''){
      $scope.ItemArr2 = ['未找到匹配'];
      $scope.show = false;
    }else {
      $scope.show = false;
      $scope.ItemArr2;

    }
    //console.log($scope.ItemArr2);
  }








});
