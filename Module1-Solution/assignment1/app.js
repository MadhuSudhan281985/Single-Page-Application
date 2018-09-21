(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.menuItems = "";
        
        $scope.lunchItemCount = function () {
            var itemsCount = $scope.menuItems;
            if (itemsCount != "") {
                var items = itemsCount.split(',');
                if (items.length <= 3) {
                    $scope.showmessage = "Enjoy!";
                    $scope.fontColour = "fontColorGreen";
                    $scope.borderColour = "borderColorGreen";
                }
                else if (items.length > 3) {
                    $scope.showmessage = "Too much!";
                    $scope.fontColour = "fontColorGreen";
                    $scope.borderColour = "borderColorGreen";
                }
            }
            else {
                $scope.showmessage = "Please enter data first";
                $scope.fontColour = "fontColorRed";
                $scope.borderColour = "borderColorRed";
            }
        };
    }    
})();


