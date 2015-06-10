define(function(){
    return [
        '$scope',
        'Restangular',
        function ($scope, Restangular) {
            Restangular.allUrl('users','https://api.github.com/users').getList().then(function(response){
                $scope.users = response;
            });
        }
    ];
});