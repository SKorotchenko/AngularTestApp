requirejs.config({
    paths: {
        angular:          '../lib/angular/angular.min',
        angularAnimate:   '../lib/angular-animate/angular-animate.min',
        angularSanitize:  '../lib/angular-sanitize/angular-sanitize.min',
        uiRouter:         '../lib/angular-ui-router/release/angular-ui-router.min',
        modules:          './modules',
        LocalStorageModule: '../lib/angular-local-storage/dist/angular-local-storage.min',
        //ngResource:         '../lib/angular-resource/angular-resource.min',
        //restangular:        '../lib/restangular/dist/restangular.min',
        validationMatch:     '../lib/angular-validation-match/dist/angular-input-match.min'
    },
    shim: {
        angular : {exports : 'angular'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        LocalStorageModule: {deps: ['angular']},
        //ngResource: {deps: ['angular']},
        //restangular : {deps: ['angular']},
        validationMatch: {deps: ['angular']}
    },
    priority: [
        'angular'
    ],
    deps: [
        'bootstrap'
    ]
});