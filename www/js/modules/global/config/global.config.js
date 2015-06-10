define(function(){
    return [
        '$stateProvider',
        function ($stateProvider) {
            var path = 'js/modules/global/templates/';
            $stateProvider
                .state('global', {
                    url: '/',
                    controller: 'globalController',
                    templateUrl: path+'main.html'
                });
        }
    ];
});