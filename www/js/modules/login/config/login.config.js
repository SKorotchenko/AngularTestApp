define(function(){
    return [
        '$stateProvider',
        function ($stateProvider) {
            var path = 'js/modules/login/templates/';
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: path + 'login.html',
                    controller: 'loginCtrl'
                });
        }
    ];
});
