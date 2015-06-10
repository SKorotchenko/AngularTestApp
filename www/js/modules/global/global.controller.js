define(function(){
    return [
        '$scope',
        //'$resource',
        'Restangular',
        function ($scope, Restangular) {
            /*$scope.getFollowers = function(){
                $resource('https://api.github.com/users', null, {}).get();
            };
            $scope.getFollowers();*/
            Restangular.all('https://api.github.com/users').get().then(function(response) {
                console.log(response);
            });
        }
    ];
});