var app = angular.module('MyApp');
app.controller('EmailVerifyController', function ($scope, EmailVerifyService, $state) {
    $scope.submitText = "Save";
    $scope.submitted = false;
    $scope.message = '';

    $scope.Email = {
        email:''
    }
    $scope.results = {
        valid: '',
        details: '',
        domain:''
    };
    $scope.showResults = false;
    $scope.showCheck = false;
    $scope.showCross = false;
    $scope.showLoading = false;
    $scope.customStyle = {};
    //$scope.showResult = function (data) {
    //   // $scope.result = [];
    //    $scope.result = data;
    //    console.log($scope.result);
    //    $state.go("form.result");
     

    //}
    $scope.hideresults = function()
    {
        $scope.showResults = false;
        $scope.showCheck = false;
        $scope.showCross = false;
        $scope.showLoading = false;
    }

    //validates form on client side
    $scope.$watch('f1.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });

    $scope.VerifyEmail = function (data) {
         
        if ($scope.submitText == 'Save') {
            
            $scope.submitted = true;
            $scope.message = '';
            if ($scope.isFormValid)
            {
            $scope.showLoading = true;
            $scope.submitText = 'Please Wait...';
            $scope.Email = data;

            EmailVerifyService.VerifyEmail($scope.Email).then(function (d) {
                //  alert(d);
                console.log(d);
                $scope.showResults = true;
                $scope.results = d;
                $scope.showLoading = false;
                if ($scope.results.valid == "True")
                {
                    $scope.customStyle.style = { "color": "green" };
                    $scope.results.valid = "Valid"
                    $scope.showCheck = true;
                    $scope.showCross = false;
                }
                else
                {
                    $scope.customStyle.style = { "color": "red" };
                    $scope.results.valid = "InValid"
                    $scope.showCross = true;
                    $scope.showCheck = false;
                }
                console.log($scope.results);
                // $state.go("form.result");
                // $state.go("form.thankyou");
                $scope.submitText = "Save";


            });

        }
        }
    }
})