/**
 * Generated by https://github.com/alexander-schranz/sulu-backend-bundle.
 */

require.config({
    paths: {
        l91suluform: '../../l91suluform/js',
        l91suluformcss: '../../l91suluform/css',

        "type/formSelect": '../../l91suluform/js/validation/types/formSelect',
        "type/select-type-custom": '../../l91suluform/js/validation/types/select-type-custom'
    }
});

define(['css!l91suluformcss/main'], function() {
    return {
        name: "L91SuluFormBundle",

        initialize: function(app) {
            'use strict';
            var sandbox = app.sandbox;

            app.components.addSource('l91suluform', '/bundles/l91suluform/js/components');

            function getContentLanguage() {
                // FIXME do not use user locale as default use default language of system instead
                return sandbox.sulu.getUserSetting('contentLanguage') || sandbox.sulu.user.locale;
            }

            // no language redirect: Generated by https://github.com/alexander-schranz/sulu-backend-bundle.
            sandbox.mvc.routes.push({
                route: 'l91/forms',
                callback: function () {
                    var language = getContentLanguage();
                    sandbox.emit('sulu.router.navigate', 'l91/forms/' + language);
                }
            });

            // list all entities: Generated by https://github.com/alexander-schranz/sulu-backend-bundle.
            sandbox.mvc.routes.push({
                route: 'l91/forms/:language',
                callback: function (language) {
                    return '<div data-aura-component="forms@l91suluform" data-aura-language="' + language + '" data-aura-display="list"/>';
                }
            });

            // add entity: Generated by https://github.com/alexander-schranz/sulu-backend-bundle.
            sandbox.mvc.routes.push({
                route: 'l91/forms/:language/add/:content',
                callback: function (language, content) {
                    return '<div data-aura-component="forms/tabs@l91suluform" data-aura-language="' + language + '" data-aura-content="' + content + '"/>';
                }
            });

            // edit entity: Generated by https://github.com/alexander-schranz/sulu-backend-bundle.
            sandbox.mvc.routes.push({
                route: 'l91/forms/:language/edit::id/:content',
                callback: function (language, id, content) {
                    return '<div data-aura-component="forms/tabs@l91suluform" data-aura-language="' + language + '" data-aura-id="' + id + '" data-aura-content="' + content + '"/>';
                }
            });
        }
    }
});
