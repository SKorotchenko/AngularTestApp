define(function(){
    return [
        '$scope',
        'userLogin',
        'Storage',
        function ($scope, userLogin, Storage) {
            /*$scope.user = {
                email:'',
                password:'',
                repeatPassword:''
            };*/

            $scope.userForm = {
                dataSent:false
            };

            $scope.submitForm = function(isValid){
                if (isValid) {
                    $scope.submitted = true;
                    $scope.userForm.dataSent = true;
                }
            };
        }
    ];
});