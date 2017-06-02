import stateConfig from './stateConfig';
import services from './services'; // eslint-disable-line no-unused-vars
import { fbDb, fbAuth, fbAuthProvider } from './firebase.config';

angular.module('app', ['app.services', 'ui.router', 'ui.bootstrap', 'firebase', 'oc.lazyLoad'])
    .value('AppVersion', document.querySelector('base').getAttribute('version'))
    .config(stateConfig)
    .constant('firebaseDb', fbDb)
    .constant('firebaseAuth', fbAuth)
    .constant('firebaseAuthProvider', fbAuthProvider)
    .run(['$rootScope', '$log', ($rootScope) => {
        fbAuth.onAuthStateChanged(() => {
            $rootScope.$digest();
        });
    }])
;
