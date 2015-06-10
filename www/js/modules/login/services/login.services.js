define(function(){
    return [
        'apiService',
        'Storage',
        function (apiService, Storage) {
            return {
                post: function(data){
                    return apiService.call('user/login').save(data).$promise.then(function(data){
                        Storage.logEvent('Login Page', 'Login', 'Success', true);
                        return data;
                    }, function(error){
                        return error;
                    });
                }
            }
        }
    ]
});