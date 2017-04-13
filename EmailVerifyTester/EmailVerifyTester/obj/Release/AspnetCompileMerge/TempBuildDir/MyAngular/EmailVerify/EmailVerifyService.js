var app = angular.module('MyApp');
app.factory('EmailVerifyService', function ($http, $q) {
    var fac = {};

    fac.VerifyEmail = function (data) {
      
        var defer = $q.defer();
        $http({
            url: '/Home/VerifyEmail',
            method: 'POST',
            data: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        }).success(function (d) {
            // Success callback
            defer.resolve(d);
        }).error(function (e) {
            //Failed Callback
            alert('Error!' + e);
            defer.reject(e);
        });
        return defer.promise;
    }


    return fac;

});