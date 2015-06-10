requirejs.config({
    paths: {
        angular:          '../lib/angular/angular',
        angularAnimate:   '../lib/angular-animate/angular-animate.min',
        angularSanitize:  '../lib/angular-sanitize/angular-sanitize.min',
        uiRouter:         '../lib/angular-ui-router/release/angular-ui-router.min',
        modules:          './modules',
        validationMatch:     '../lib/angular-validation-match/dist/angular-input-match.min',
        restangular:        '../lib/restangular/dist/restangular.min'
    },
    shim: {
        angular : {exports : 'angular'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        validationMatch: {deps: ['angular']},
        restangular : {deps: ['angular']}
    },
    priority: [
        'angular'
    ],
    deps: [
        'bootstrap'
    ]
});