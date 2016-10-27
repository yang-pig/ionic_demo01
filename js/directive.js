/**
 * Created by htzhanglong on 2015/8/30.
 */
/**
 * Created by htzhanglong on 2015/8/2.
 */
var directiveMod=angular.module("starter.directive", []);


 directiveMod.directive('hideTabs',function($rootScope){
     return {
         restrict:'AE',
         link:function($scope){
             $rootScope.hideTabs = 'tabs-item-hide';
             $scope.$on('$destroy',function(){
                 $rootScope.hideTabs = '';
             })
         }
   } })

