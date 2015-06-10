define(function(){
    return [
        '$scope',
        function ($scope) {
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