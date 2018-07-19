angular.module('starter').factory("tran", ['$translate', function($translate) {
    var tran = {
        tran: function(key) {
            if (key) {
                return $translate.instant(key);
            }
            return key;
        }
    }
    return tran;
}]);