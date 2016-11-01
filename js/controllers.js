angular.module('starter.controllers', [])

.controller('NearbyCtrl', function($scope) {
    $scope.title_change_one = 'nearby-title-change'
    $scope.title_change_two = ''
    $scope.change_one = function() {
        $scope.title_change_one = 'nearby-title-change'
        $scope.title_change_two = ''
    }

    $scope.change_two = function() {
        $scope.title_change_one = ''
        $scope.title_change_two = 'nearby-title-change'
    }

})
.controller('NearbyThemeCtrl', function($scope) {


})
.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function ($rootScope,$scope, $stateParams, Chats) {
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
.controller('RegisterCtrl', function($ionicPopup,$rootScope,$scope,$state) {

    $scope.show = true;
    $scope.login = function() {
        alert('ceshi');
    }

//register-school页开始
    $scope.register = function() {
        $state.go('tab.register-school');

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
      ];

    $scope.searchContent = {
    key : '',
    }



    $scope.ItemArr2 = [];                     //搜索后页面遍历显示的数组
    $scope.search = function(){
        if($scope.searchContent.key == '') {
            $scope.show = true;
            return false;
        }
        $scope.ItemArr2 = [];                   //每次搜索先清空数组内容
        for(var i=0;i<$scope.school.length;i++){
           if($scope.school[i].indexOf($scope.searchContent.key) >=0) {
             $scope.ItemArr2.push($scope.school[i]);
           }
        }

        if($scope.ItemArr2 == ''){
          $scope.ItemArr2 = ['其他学校'];
          $scope.show = false;
        }else {
          $scope.show = false;
          $scope.school;
        }
    }

    $scope.choice_school = function(name) {
        $rootScope.school_name = name;
/*        console.log($rootScope.school_name);*/
        $state.go('tab.register-major');
    }
//register-school页结束

//register-major开始
    $scope.major = [
        '网络工程',
        '计算机科学与技术',
        '财务管理',
        '人力资源',
        '会计',
        '软件工程',
        '物联网',
        '金融',
        '物理',
        '地理信息',
    ];

    $scope.searchMajor = {
        key : '',
    }
    $scope.ItemArr3 = [];                     //搜索后页面遍历显示的数组
    $scope.search_major = function(){
        if($scope.searchMajor.key == '') {
            $scope.show = true;
            return false;
        }
        $scope.ItemArr3 = [];                   //每次搜索先清空数组内容
        for(var i=0;i<$scope.major.length;i++){
            if($scope.major[i].indexOf($scope.searchMajor.key) >=0) {
                $scope.ItemArr3.push($scope.major[i]);
            }
        }

        if($scope.ItemArr3 == ''){
            $scope.ItemArr3 = ['其他专业'];
            $scope.show = false;
            //console.log( $scope.ItemArr3);
        }else {
            $scope.show = false;
            $scope.ItemArr3;
            //console.log( $scope.ItemArr3);

        }
    }


    $scope.choice_major = function(major) {
        $rootScope.major_name = major;
        //console.log($rootScope.major_name);
        $state.go('tab.register-date');
    }

    //$rootScope.hideTabs = '';

//register-major结束
//register-date开始
    $scope.date = [
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
        '2012',
        '2011',
        '2010',
        '2009',
        '2008',
        '2007',
        '2006',
        '2005',
        '2004',
        '2003',
        '2002',
        '2001',
        '2000',
        '1999',
        '1998',
        '1997',
        '1996',
        '1995',
        '1994',
        '1993',
        '1992',
        '1991',
        '1990',
    ];

    $scope.choice_date =  function (date) {
        $rootScope.date_name = date;
        //console.log($rootScope.date_name);
        //console.log($rootScope.major_name);
        //console.log($rootScope.school_name);
        $state.go('tab.register-detail');
    };

    $scope.edu_list = [
        '专科',
        '本科',
        '硕士',
        '博士',
        '其他',
    ];




    $scope.settings = {
        theme: 'ios', // Specify theme like: theme: 'ios' or omit setting to use default
        lang: 'zh', // Specify language like: lang: 'pl' or omit setting to use default
        display: 'bottom', // Specify display mode like: display: 'bottom' or omit setting to use default
        mode: $scope.mode, // More info about mode: https://docs.mobiscroll.com/3-0-0_beta5/angular/select#!opt-mode
        minWidth: 200 // More info about minWidth: https://docs.mobiscroll.com/3-0-0_beta5/angular/select#!opt-minWidth
    };

    $scope.myselect = {
        'name' : '专科',
    }



    $scope.save_detail = function () {
        $rootScope.edu_name = $scope.myselect.name;
        $state.go('tab.register-phone');



    }

    $scope.phone = {
        'name' :'',
        'pwd' : '',
    }
    $scope.send_phone = function () {
        //console.log($scope.phone);
        //console.log($rootScope.major_name);
        //console.log($rootScope.school_name);
        //console.log($rootScope.date_name);
        //console.log($rootScope.edu_name);
    }

});
