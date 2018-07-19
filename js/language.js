'use strict';

angular.module('LanguageConfigModule', ['pascalprecht.translate'])
    .config(['$translateProvider', function($translateProvider) {
        ///english property
        $translateProvider.translations('en', {
            'HEADER': {
                'language': 'LANGUAGE',
            }
        });
        //chinese 
        $translateProvider.translations('cn', {
            'HEADER': {
                'language': '语言'
            }
        });
        var lang = window.localStorage.lang || 'en';
        window.localStorage.lang = lang;
        $translateProvider.preferredLanguage(lang);
        
    }]);